'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import { ChevronDown } from 'lucide-react';

interface TimezoneComboboxProps {
  /** Current IANA timezone (may not be in `timezones`, e.g. an exotic detected zone). */
  value: string;
  onChange: (tz: string) => void;
  timezones: string[];
}

function zoneOffset(zone: string): string {
  const dt = DateTime.now().setZone(zone);
  return dt.isValid ? `UTC${dt.toFormat('ZZ')}` : '';
}

export default function TimezoneCombobox({ value, onChange, timezones }: TimezoneComboboxProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();
  const optionId = (i: number) => `${listboxId}-option-${i}`;

  const offsets = useMemo(() => {
    return new Map(timezones.map((z) => [z, zoneOffset(z)]));
  }, [timezones]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/\s+/g, ' ');
    return q
      ? timezones.filter((z) => z.toLowerCase().replace(/_/g, ' ').includes(q))
      : timezones;
  }, [timezones, query]);

  // Close when clicking anywhere outside the combobox.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector(`[id="${optionId(highlightedIndex)}"]`)
      ?.scrollIntoView({ block: 'nearest' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, highlightedIndex]);

  const select = (zone: string) => {
    onChange(zone);
    setOpen(false);
    setQuery('');
  };

  const selectedLabel = `${value.replace(/_/g, ' ')} (${offsets.get(value) ?? zoneOffset(value)})`;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      const delta = e.key === 'ArrowDown' ? 1 : -1;
      setHighlightedIndex((i) => Math.min(Math.max(i + delta, 0), filtered.length - 1));
    } else if (e.key === 'Enter') {
      if (open) {
        e.preventDefault();
        const zone = filtered[highlightedIndex];
        if (zone) select(zone);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setQuery('');
    } else if (e.key === 'Tab') {
      setOpen(false);
      setQuery('');
    }
  };

  return (
    <div ref={containerRef} className="relative w-full sm:max-w-xs">
      <input
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={open && filtered[highlightedIndex] ? optionId(highlightedIndex) : undefined}
        aria-label="Your timezone"
        autoComplete="off"
        spellCheck={false}
        placeholder="Search timezone…"
        value={open ? query : selectedLabel}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => {
          setQuery('');
          setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2.5 pr-9 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary-purple text-sm bg-white"
      />
      <ChevronDown
        size={16}
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform ${open ? 'rotate-180' : ''}`}
      />

      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label="Timezones"
          className="absolute z-20 mt-2 w-full max-h-64 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg py-1"
        >
          {filtered.length === 0 && (
            <li className="px-4 py-2.5 text-sm text-gray-500">No matching timezones</li>
          )}
          {filtered.map((z, i) => (
            <li
              key={z}
              id={optionId(i)}
              role="option"
              aria-selected={z === value}
              onMouseDown={(e) => {
                e.preventDefault();
                select(z);
              }}
              onMouseEnter={() => setHighlightedIndex(i)}
              className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between gap-2 ${
                i === highlightedIndex ? 'bg-[#c02b7d] text-white' : 'text-gray-800'
              }`}
            >
              <span className="truncate">{z.replace(/_/g, ' ')}</span>
              <span
                className={`text-xs flex-shrink-0 ${
                  i === highlightedIndex ? 'text-white/70' : 'text-gray-400'
                }`}
              >
                {offsets.get(z)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
