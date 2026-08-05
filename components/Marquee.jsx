import { MARQUEE } from "../lib/content";

function Row({ hidden }) {
  return (
    <div aria-hidden={hidden || undefined} style={{ display: "flex" }}>
      {MARQUEE.map((m) => (
        <span key={m}>{m} <em>⚖</em></span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div>
      <div className="marquee marquee--blue">
        <div className="marquee-track"><Row /><Row hidden /></div>
      </div>
      <div className="marquee marquee--pale marquee--rev">
        <div className="marquee-track"><Row /><Row hidden /></div>
      </div>
    </div>
  );
}