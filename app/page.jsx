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
      </main>
      <Footer />
    </>
  );
}