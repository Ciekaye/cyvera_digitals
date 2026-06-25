'use client';

import { useEffect, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { Calendar, Clock, Globe, Check, Loader2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { bookingConfig } from '@/lib/booking/config';

interface BookingPickerProps {
  /** Studio timezone, forwarded from the server. Used to build the working-day grid. */
  ownerTimezone: string;
}

type Status = 'idle' | 'submitting' | 'confirmed';

// Sunday-first weekday headers.
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm';
const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

export default function BookingPicker({ ownerTimezone }: BookingPickerProps) {
  // All IANA zones for the dropdown; falls back gracefully if unsupported.
  const allTimezones = useMemo(() => {
    try {
      return Intl.supportedValuesOf('timeZone');
    } catch {
      return [ownerTimezone, 'UTC'];
    }
  }, [ownerTimezone]);

  const [tz, setTz] = useState<string>(ownerTimezone);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [website, setWebsite] = useState(''); // honeypot

  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{ startUtc: string; meetLink: string | null } | null>(null);

  // Detect the visitor's timezone once on mount.
  useEffect(() => {
    try {
      const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (detected) setTz(detected);
    } catch {
      /* keep ownerTimezone fallback */
    }
  }, []);

  // Booking window, all anchored to the owner timezone.
  const today = useMemo(
    () => DateTime.now().setZone(ownerTimezone).startOf('day'),
    [ownerTimezone],
  );
  const maxDate = useMemo(() => today.plus({ days: bookingConfig.maxDaysAhead }), [today]);

  // Which month the calendar grid is currently showing.
  const [viewMonth, setViewMonth] = useState<DateTime>(() => today.startOf('month'));

  // Build a stable 6-row (42-cell) month grid, Monday-first, for the view month.
  const weeks = useMemo<DateTime[][]>(() => {
    const monthStart = viewMonth.startOf('month');
    // Back up to the Sunday on/before the 1st. Luxon weekday: 1=Mon…7=Sun,
    // so `weekday % 7` gives days since Sunday (Sun=0, Mon=1, … Sat=6).
    const gridStart = monthStart.minus({ days: monthStart.weekday % 7 });
    const rows: DateTime[][] = [];
    for (let r = 0; r < 6; r++) {
      const row: DateTime[] = [];
      for (let c = 0; c < 7; c++) row.push(gridStart.plus({ days: r * 7 + c }));
      rows.push(row);
    }
    return rows;
  }, [viewMonth]);

  const canGoPrev = viewMonth.startOf('month') > today.startOf('month');
  const canGoNext = viewMonth.startOf('month') < maxDate.startOf('month');

  // Fetch availability whenever the selected date changes.
  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    setSlotsLoading(true);
    setSlotsError(null);
    setSlots([]);
    setSelectedSlot(null);

    fetch(`/api/availability?date=${encodeURIComponent(selectedDate)}&tz=${encodeURIComponent(tz)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Could not load availability.');
        return data.slots as string[];
      })
      .then((s) => {
        if (!cancelled) setSlots(s);
      })
      .catch((err) => {
        if (!cancelled) setSlotsError(err.message || 'Could not load availability. Please try again.');
      })
      .finally(() => {
        if (!cancelled) setSlotsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedDate, tz]);

  const formatSlot = (utc: string) =>
    DateTime.fromISO(utc, { zone: 'utc' }).setZone(tz).toFormat('h:mm a');

  const formatConfirmation = (utc: string) =>
    DateTime.fromISO(utc, { zone: 'utc' }).setZone(tz).toFormat("cccc, LLL d 'at' h:mm a (ZZZZ)");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot) return;
    setStatus('submitting');
    setFormError(null);

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startUtc: selectedSlot,
          name,
          email,
          company,
          notes,
          tz,
          website, // honeypot
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        // 409 = slot taken; refresh the day's availability so the user can repick.
        if (res.status === 409 && selectedDate) {
          setSelectedSlot(null);
          refreshSlots();
        }
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setConfirmation({ startUtc: data.startUtc ?? selectedSlot, meetLink: data.meetLink ?? null });
      setStatus('confirmed');
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  }

  function refreshSlots() {
    if (!selectedDate) return;
    setSlotsLoading(true);
    fetch(`/api/availability?date=${encodeURIComponent(selectedDate)}&tz=${encodeURIComponent(tz)}`)
      .then((res) => res.json())
      .then((data) => setSlots((data.slots as string[]) ?? []))
      .catch(() => setSlots([]))
      .finally(() => setSlotsLoading(false));
  }

  // ---- Confirmation state ------------------------------------------------
  if (status === 'confirmed' && confirmation) {
    return (
      <div className="card-liquid-glass rounded-3xl p-8 md:p-10 w-full">
        <div className="w-14 h-14 rounded-full bg-[#c02b7d] flex items-center justify-center mb-6">
          <Check className="text-white" size={28} />
        </div>
        <h2 className="text-heading text-gray-900 mb-3">You&apos;re booked!</h2>
        <p className="text-gray-700 mb-2">
          Your discovery call is set for{' '}
          <span className="font-semibold text-gray-900">{formatConfirmation(confirmation.startUtc)}</span>.
        </p>
        <p className="text-gray-600 mb-6">
          Check your email for the Google Calendar invite and Meet link.
        </p>
        {confirmation.meetLink && (
          <a
            href={confirmation.meetLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c02b7d] hover:bg-[#a8246c] text-white px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 text-sm font-semibold no-underline transition-colors"
          >
            Join Google Meet
          </a>
        )}
      </div>
    );
  }

  // ---- Picker + form -----------------------------------------------------
  return (
    <div className="card-liquid-glass rounded-3xl p-6 md:p-8 w-full">
      {/* Timezone */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
          <Globe size={18} className="text-secondary-purple" />
          Times shown in your timezone
        </span>
        <select
          value={tz}
          onChange={(e) => setTz(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm bg-white sm:max-w-xs"
          aria-label="Your timezone"
        >
          {!allTimezones.includes(tz) && <option value={tz}>{tz}</option>}
          {allTimezones.map((z) => (
            <option key={z} value={z}>
              {z.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      {!selectedSlot && (
        <>
          {/* Date selector — month calendar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <Calendar size={16} className="text-secondary-purple" /> Choose a date
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => canGoPrev && setViewMonth((m) => m.minus({ months: 1 }))}
                  disabled={!canGoPrev}
                  aria-label="Previous month"
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center text-gray-600 hover:border-secondary-purple hover:text-secondary-purple disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-sm font-semibold text-gray-900 min-w-[130px] text-center">
                  {viewMonth.toFormat('LLLL yyyy')}
                </span>
                <button
                  type="button"
                  onClick={() => canGoNext && setViewMonth((m) => m.plus({ months: 1 }))}
                  disabled={!canGoNext}
                  aria-label="Next month"
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white/80 flex items-center justify-center text-gray-600 hover:border-secondary-purple hover:text-secondary-purple disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/70 p-3 sm:p-4">
              {/* Weekday headers */}
              <div className="grid grid-cols-7">
                {WEEKDAYS.map((w) => (
                  <div
                    key={w}
                    className="text-center text-[11px] font-semibold uppercase tracking-wide text-gray-400 py-2"
                  >
                    {w}
                  </div>
                ))}
              </div>

              {/* Day cells */}
              <div className="grid grid-cols-7 gap-1">
                {weeks.flat().map((d) => {
                  const iso = d.toISODate()!;
                  const inMonth = d.month === viewMonth.month && d.year === viewMonth.year;
                  const isWorking = bookingConfig.workingDays.includes(d.weekday);
                  const isPast = d < today;
                  const beyond = d > maxDate;
                  const selectable = inMonth && isWorking && !isPast && !beyond;
                  const isSelected = selectedDate === iso;
                  const isToday = d.hasSame(today, 'day');

                  return (
                    <button
                      key={iso}
                      type="button"
                      disabled={!selectable}
                      onClick={() => selectable && setSelectedDate(iso)}
                      className={[
                        'aspect-square w-full rounded-xl text-sm font-semibold flex items-center justify-center transition-all',
                        isSelected
                          ? 'bg-[#c02b7d] text-white shadow-lg'
                          : selectable
                            ? 'text-gray-800 hover:bg-purple-50 hover:text-secondary-purple hover:-translate-y-0.5'
                            : inMonth
                              ? 'text-gray-300 cursor-not-allowed'
                              : 'text-gray-200 cursor-default',
                        !isSelected && isToday && selectable ? 'ring-1 ring-secondary-purple/50' : '',
                      ].join(' ')}
                    >
                      {d.day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Slots */}
          {selectedDate && (
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                <Clock size={16} className="text-secondary-purple" /> Choose a time
              </h3>

              {slotsLoading && (
                <div className="flex items-center gap-2 text-gray-500 text-sm py-6">
                  <Loader2 size={18} className="animate-spin" /> Loading available times…
                </div>
              )}

              {!slotsLoading && slotsError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {slotsError}
                </div>
              )}

              {!slotsLoading && !slotsError && slots.length === 0 && (
                <div className="p-4 bg-purple-50/60 border border-purple-100 rounded-xl text-gray-600 text-sm">
                  No open times on this day. Please try another date.
                </div>
              )}

              {!slotsLoading && !slotsError && slots.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => {
                        setSelectedSlot(slot);
                        setFormError(null);
                      }}
                      className="py-3 px-2 rounded-xl border-2 border-gray-200 bg-white/80 text-sm font-semibold text-gray-800 hover:border-secondary-purple hover:text-secondary-purple hover:-translate-y-0.5 transition-all"
                    >
                      {formatSlot(slot)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {!selectedDate && (
            <p className="text-gray-500 text-sm">Select a date to see available times.</p>
          )}
        </>
      )}

      {/* Details form */}
      {selectedSlot && (
        <form onSubmit={handleSubmit} className="space-y-5">
          <button
            type="button"
            onClick={() => setSelectedSlot(null)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-secondary-purple transition-colors"
          >
            <ArrowLeft size={16} /> Change time
          </button>

          <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{formatConfirmation(selectedSlot)}</span>
            <span className="block text-xs text-gray-500 mt-0.5">30-minute discovery call · Google Meet</span>
          </div>

          {formError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">{formError}</div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass} htmlFor="bk-name">Full Name</label>
              <input
                id="bk-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="Alex Rivera"
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="bk-email">Email</label>
              <input
                id="bk-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className={labelClass} htmlFor="bk-company">Company / Brand <span className="text-gray-400 font-normal">(optional)</span></label>
            <input
              id="bk-company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={inputClass}
              placeholder="CYVERA Digitals"
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="bk-notes">Anything we should know? <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea
              id="bk-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={`${inputClass} min-h-[110px]`}
              placeholder="A sentence or two about your goals helps us prepare."
            />
          </div>

          {/* Honeypot — hidden from real users; bots tend to fill it. */}
          <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
            <label htmlFor="bk-website">Website</label>
            <input
              id="bk-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-[#c02b7d] hover:bg-[#a8246c] text-white text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Booking…
              </>
            ) : (
              'Confirm booking'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
