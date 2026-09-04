import { company } from "../../config/company";

function toDMS(value: number, positive: string, negative: string) {
  const dir = value >= 0 ? positive : negative;
  const abs = Math.abs(value);
  const deg = Math.floor(abs);
  const minFloat = (abs - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = Math.round((minFloat - min) * 60);
  return `${String(deg).padStart(2, "0")}°${String(min).padStart(2, "0")}'${String(sec).padStart(2, "0")}"${dir}`;
}

interface CoordinatesProps {
  label?: string;
  className?: string;
}

// The site's real coordinates, read the way a drawing stamp or survey peg
// would state them — a small, factual echo of the corner-mark motif.
export function Coordinates({ label, className = "" }: CoordinatesProps) {
  return (
    <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${className}`}>
      {label && <span className="opacity-60">{label} </span>}
      {toDMS(company.map.lat, "N", "S")} &middot; {toDMS(company.map.lng, "E", "W")}
    </span>
  );
}
