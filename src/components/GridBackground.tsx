/**
 * Decorative grid background used in page hero sections.
 * Parent must be `position: relative` (and usually `overflow-hidden`).
 */
export default function GridBackground({
  height = '60%',
}: {
  height?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
      style={{
        height,
        backgroundImage: `
          linear-gradient(to right, #d1d5db 1px, transparent 1px),
          linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        opacity: 0.08,
      }}
    />
  );
}
