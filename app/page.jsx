import { PILLARS } from "../lib/content";
import ScrollProgress from "../components/ScrollProgress";
import Cursor from "../components/Cursor";
import Justice from "../components/Justice";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import LetterSection from "../components/LetterSection";
import Campaigns from "../components/Campaigns";
import Footer from "../components/Footer";
import Press from "../components/Press";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Justice />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        {PILLARS.map((pillar, i) => (
          <LetterSection key={pillar.letter} pillar={pillar} flip={i % 2 === 1} />
        ))}
        <Campaigns />
        <Press />
        <Team />
        <section className="join" id="join">
          <div className="container join-grid">
            <div>
              <p className="section-kicker">Join the movement</p>
              <h2>Bring your skills, your voice, and your people.</h2>
              <p>
                SCLU is building a stronger, more democratic San Diego. Whether you’re organizing,
                writing, designing, researching, or showing up in the street, there is a lane for you.
              </p>
              <div className="wings">
                <span>Research · data science</span>
                <span>Policy · economics</span>
                <span>Community · visual arts</span>
                <span>Outreach · political science</span>
              </div>
              <p className="join-link-row">
                <a href="/schedule" className="primary-link">Schedule a meeting</a>
              </p>
            </div>
            <div className="join-embed-shell">
              <iframe
                src="https://tally.so/embed/obq8GP?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="Join SCLU"
                loading="lazy"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}