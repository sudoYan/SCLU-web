import { SITE } from "../lib/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="big">SCLU</div>
          <p>{SITE.name}</p>
        </div>
        <div>
          <h3>Find us</h3>
          <p><a href="https://sclusd.org" target="_blank" rel="noreferrer">sclusd.org</a></p>
          <p><a href="https://www.instagram.com/sclu.sd/" target="_blank" rel="noreferrer">@sclu.sd</a></p>
          <p><a href="https://en.wikipedia.org/wiki/Students%27_Civil_Liberties_Union" target="_blank" rel="noreferrer">Wikipedia</a></p>
        </div>
        <div>
          <h3>On this page</h3>
          <p><a href="#students">S — Students</a></p>
          <p><a href="#civil">C — Civil</a></p>
          <p><a href="#liberties">L — Liberties</a></p>
          <p><a href="#union">U — Union</a></p>
        </div>
      </div>
      <div className="container">
        <small>
          Content adapted from sclusd.org and the Wikipedia article on the Students&rsquo; Civil
          Liberties Union. Photography via Unsplash/Pexels contributors. Built with Next.js,
          motion.dev and anime.js.
        </small>
      </div>
    </footer>
  );
}