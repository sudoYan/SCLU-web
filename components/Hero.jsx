"use client";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { SITE } from "../lib/content";

const LETTERS = [
  { ch: "S", href: "#students", cls: "tile--s", tilt: "-6deg" },
  { ch: "C", href: "#civil", cls: "tile--c", tilt: "4deg" },
  { ch: "L", href: "#liberties", cls: "tile--l", tilt: "-3deg" },
  { ch: "U", href: "#union", cls: "tile--u", tilt: "5deg" },
];
const GLYPHS = "✊⚖#§*+?!SCLU";

export default function Hero() {
  const ref = useRef(null);
  const tagRef = useRef(null);

  // mouse-tilt (3D)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 16 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 120, damping: 16 });

  // scroll choreography: letters scatter -> real wordmark wipes in
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lettersOpacity = useTransform(scrollYProgress, [0.18, 0.42], [1, 0]);
  const lettersScale = useTransform(scrollYProgress, [0.18, 0.42], [1, 0.72]);
  const sy = [
    useTransform(scrollYProgress, [0.1, 0.45], [0, -340]),
    useTransform(scrollYProgress, [0.1, 0.45], [0, -170]),
    useTransform(scrollYProgress, [0.1, 0.45], [0, 240]),
    useTransform(scrollYProgress, [0.1, 0.45], [0, 390]),
  ];
  const sr = [
    useTransform(scrollYProgress, [0.1, 0.45], [0, -26]),
    useTransform(scrollYProgress, [0.1, 0.45], [0, 14]),
    useTransform(scrollYProgress, [0.1, 0.45], [0, 22]),
    useTransform(scrollYProgress, [0.1, 0.45], [0, -16]),
  ];
  const wmOpacity = useTransform(scrollYProgress, [0.45, 0.68], [0, 1]);
  const wmScale = useTransform(scrollYProgress, [0.45, 0.72], [0.82, 1]);
  const wmClip = useTransform(scrollYProgress, [0.45, 0.78], ["inset(0% 50% 0% 50%)", "inset(0% -2% 0% -2%)"]);
  const wmY = useTransform(scrollYProgress, [0.72, 1], [0, -90]);
  const fadeEarly = useTransform(scrollYProgress, [0.08, 0.26], [1, 0]);
  const justiceY = useTransform(scrollYProgress, [0, 1], [30, -70]);

  useEffect(() => {
    animate(".hero-letter-in", {
      opacity: [0, 1],
      translateY: [110, 0],
      scale: [0.7, 1],
      rotate: [10, 0],
      delay: stagger(130),
      duration: 1200,
      ease: "outElastic(1, .6)",
    });

    const el = tagRef.current;
    const final = SITE.tagline;
    const state = { t: 0 };
    animate(state, {
      t: 1, duration: 1800, delay: 800, ease: "linear",
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

  function pop(e, href) {
    animate(e.currentTarget.querySelector(".hero-letter-in"), {
      translateY: [0, -26, 0],
      scale: [1, 1.18, 1],
      duration: 700,
      ease: "outElastic(1, .5)",
    });
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 220);
  }

  return (
    <section
      className="hero"
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <div className="hero-sticky">
        <div className="hero-dots" aria-hidden="true" />
        <motion.img src="/justice.png" alt="" className="hero-justice" style={{ y: justiceY }} />

        <motion.div className="hero-letters" style={{ rotateX, rotateY, scale: lettersScale, opacity: lettersOpacity }}>
          {LETTERS.map((l, i) => (
            <motion.button
              key={l.ch}
              type="button"
              className="hero-letter"
              style={{ y: sy[i], rotate: sr[i] }}
              onClick={(e) => pop(e, l.href)}
              aria-label={`${l.ch} — jump to the breakdown`}
            >
              <span className={`hero-letter-in ${l.cls}`}>
                <span className="hero-letter-hv" style={{ "--tilt": l.tilt }}>{l.ch}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.img
          src="/logo-white.png"
          alt="SCLU — the official hand-lettered wordmark"
          className="hero-wordmark"
          style={{ opacity: wmOpacity, scale: wmScale, clipPath: wmClip, y: wmY }}
        />

        <motion.div className="hero-meta" style={{ opacity: fadeEarly }}>
          <h1>Students&rsquo; Civil Liberties Union</h1>
          <p className="hero-tag" ref={tagRef}>{SITE.tagline}</p>
          <div className="hero-badges">
            <span>Est. {SITE.founded}</span>
            <span>{SITE.base}</span>
            <span>Student-led nonprofit</span>
          </div>
        </motion.div>

        <motion.div className="hero-cue" style={{ opacity: fadeEarly }} aria-hidden="true">
          scroll ⚖ the scales
        </motion.div>
      </div>
    </section>
  );
}