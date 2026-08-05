import { MARQUEE } from "../lib/content";

export default function Marquee() {
  const row = (hidden) => (
    <div aria-hidden={hidden} style={{ display: "flex", gap: "2.75rem", paddingRight: "2.75rem" }}>
      {MARQUEE.map((m) => (
        <span key={m}>{m} <em>✊</em></span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}