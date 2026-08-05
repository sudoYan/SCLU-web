import { CAMPAIGNS } from "../lib/content";

export default function Campaigns() {
  return (
    <section className="campaigns" id="campaigns">
      <div className="container">
        <h2>Current Campaigns</h2>
        <div className="campaign-grid">
          {CAMPAIGNS.map((c) => (
            <article className="campaign-card" key={c.title} style={{ "--accent": c.accent }}>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}