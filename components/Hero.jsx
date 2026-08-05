"use client";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { SITE } from "../lib/content";

const GLYPHS = "✊★#§ABCLSU*+?!";

export default function Hero() {
  const tagRef = useRef(null);

  useEffect(() => {
    // 1) Letter tiles drop in with an elastic stagger
    animate(".hero-tile", {
      opacity: [0, 1],
      translateY: [90, 0],
      scale: [0.85, 1],
      delay: stagger(120),
      duration: 1100,
      ease: "outElastic(1, .65)",
    });

    animate(".hero-badges span", {
      opacity: [0, 1],
      translateY: [18, 0],
      delay: stagger(90, { start: 900 }),
      duration: 600,
      ease: "outExpo",
    });

    // 2) Scramble-decode the tagline
    const el = tagRef.current;
    const final = SITE.tagline;
    const state = { t: 0 };
    animate(state, {
      t: 1,
      duration: 1800,
      delay: 700,
      ease: "linear",
      onUpdate: () => {
        const reveal = Math.floor(state.t * final.length);
        const tail = final
          .slice(reveal)
          .split("")
          .map((c) => (c === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
          .join("");
        el.textContent = final.slice(0, reveal) + tail;
      },
    });
  }, []);

  return (
    <header className="hero" id="top">
      <div>
        <ul className="hero-tiles" aria-label="SCLU">
          <li className="hero-slot" style={{ "--tilt": "-4deg" }}><div className="hero-tile tile-s">S</div></li>
          <li className="hero-slot" style={{ "--tilt": "3deg" }}><div className="hero-tile tile-c">C</div></li>
          <li className="hero-slot" style={{ "--tilt": "-2deg" }}><div className="hero-tile tile-l">L</div></li>
          <li className="hero-slot" style={{ "--tilt": "4deg" }}><div className="hero-tile tile-u">U</div></li>
        </ul>

        <h1>Students&rsquo; Civil Liberties Union</h1>
        <p className="hero-tag" ref={tagRef} aria-label={SITE.tagline}>{SITE.tagline}</p>

        <div className="hero-badges">
          <span>Est. {SITE.founded}</span>
          <span>{SITE.base}</span>
          <span>Student-led nonprofit</span>
        </div>

        <div className="hero-cue" aria-hidden="true">↓</div>
      </div>
    </header>
  );
}