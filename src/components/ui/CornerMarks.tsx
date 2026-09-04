interface CornerMarksProps {
  className?: string;
  corners?: "all" | "top";
  /** Distance in px from the top edge — raise this to clear an opaque navbar sitting over the container. */
  topOffset?: number;
  /** Distance in px from the left/right/bottom edges. */
  edgeOffset?: number;
}

// Registration-mark motif borrowed from construction drawings, where corner
// ticks and coordinate stamps anchor a sheet to a site. Used sparingly as
// the site's one signature device. mix-blend-difference lets the same mark
// sit on any photo or dark panel and still read — it inverts against
// whatever's underneath rather than relying on a fixed opacity.
export function CornerMarks({
  className = "",
  corners = "all",
  topOffset = 24,
  edgeOffset = 24,
}: CornerMarksProps) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 mix-blend-difference ${className}`}>
      <span
        className="absolute h-4 w-4 border-l border-t border-white/90"
        style={{ top: topOffset, left: edgeOffset }}
      />
      <span
        className="absolute h-4 w-4 border-r border-t border-white/90"
        style={{ top: topOffset, right: edgeOffset }}
      />
      {corners === "all" && (
        <>
          <span
            className="absolute h-4 w-4 border-b border-l border-white/90"
            style={{ bottom: edgeOffset, left: edgeOffset }}
          />
          <span
            className="absolute h-4 w-4 border-b border-r border-white/90"
            style={{ bottom: edgeOffset, right: edgeOffset }}
          />
        </>
      )}
    </div>
  );
}
