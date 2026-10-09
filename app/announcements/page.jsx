import Link from "next/link";

export default function AnnouncementsPage() {
  return (
    <main className="campaign-page">
      <div className="container">
        <header className="campaign-hero">
          <div className="campaign-hero-header">
            <span className="campaign-kicker">Announcements</span>
            <Link href="/" className="primary-link">Back home</Link>
          </div>
          <h1>Updates, statements, and organizing notes.</h1>
          <p className="campaign-summary">
            Follow our Substack for the latest statements, strategic updates, and public-facing writing from the SCLU team.
          </p>
        </header>

        <div className="campaign-layout">
          <section className="info-card">
            <h3>Latest from SCLU</h3>
            <p>
              We share campaign updates, organizing context, public statements, and community resources on our Substack.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <a
                href="https://sclu.substack.com/"
                target="_blank"
                rel="noreferrer"
                className="primary-link"
              >
                Open Substack
              </a>
            </div>
          </section>

          <aside className="info-card">
            <h3>What to expect</h3>
            <ul className="resource-list">
              <li>Campaign updates and organizer notes</li>
              <li>Public statements and rapid-response commentary</li>
              <li>Calls to action and community resources</li>
            </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}
