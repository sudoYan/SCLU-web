"use client";
import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="nav-logo" href="/" aria-label="SCLU home">
        <span className="nav-brand">SCLU</span>
      </a>
      <div className="nav-links">
        <a href="/#campaigns">Campaigns</a>
        <a href="/announcements">Announcements</a>
        <a href="/#press">Press</a>
        <a href="/#team">Team</a>
        <a href="/schedule">Schedule</a>
        <a href="https://www.zeffy.com/en-US/donation-form/donate-to-empower-youth-organizing-in-san-diego-2" target="_blank" rel="noreferrer">Donate</a>
        <Magnetic strength={0.3}>
          <a className="nav-cta" href="/#join">Join ✊</a>
        </Magnetic>
      </div>
    </nav>
  );
}