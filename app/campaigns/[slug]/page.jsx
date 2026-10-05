import Link from "next/link";
import { notFound } from "next/navigation";
import { CAMPAIGNS } from "../../../lib/content";

export function generateStaticParams() {
  return CAMPAIGNS.map((campaign) => ({ slug: campaign.slug }));
}

export default async function CampaignPage({ params }) {
  const { slug } = await params;
  const campaign = CAMPAIGNS.find((item) => item.slug === slug);

  if (!campaign) {
    notFound();
  }

  return (
    <main className="campaign-page">
      <div className="container">
        <header className="campaign-hero">
          <div className="campaign-hero-header">
            <span className="campaign-kicker">{campaign.tag}</span>
            <Link href="/" className="primary-link">Back home</Link>
          </div>
          <h1>{campaign.title}</h1>
          <p className="campaign-summary">{campaign.summary}</p>
        </header>

        <div className="campaign-layout">
          <article className="info-card">
            <h3>What is this campaign about?</h3>
            <p>{campaign.overview}</p>
          </article>

          <aside className="info-card">
            <h3>Contact</h3>
            <ul className="resource-list">
              <li>
                <strong>{campaign.contact.focus}</strong>
                <a href={`mailto:${campaign.contact.email}`}>{campaign.contact.email}</a>
              </li>
            </ul>
          </aside>
        </div>

        <div className="campaign-layout">
          <section className="info-card">
            <h3>Timeline</h3>
            <ul className="timeline-list">
              {campaign.timeline.map((point) => (
                <li key={`${campaign.slug}-${point.label}`}>
                  <strong>{point.label}</strong>
                  {point.detail}
                </li>
              ))}
            </ul>
          </section>

          <section className="info-card">
            <h3>How to get involved</h3>
            <ul className="help-list">
              {campaign.howToHelp.map((step) => (
                <li key={`${campaign.slug}-${step}`}>{step}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="campaign-hero" style={{ marginTop: "2rem" }}>
          <div className="campaign-hero-header">
            <h2 style={{ margin: 0, fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}>Ready to jump in?</h2>
            <Link href="/schedule" className="primary-link">Schedule a meeting</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
