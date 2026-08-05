"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function LetterSection({ pillar, flip }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-linked parallax for the ghost letter and the photo
  const ghostY = useTransform(scrollYProgress, [0, 1], ["14%", "-16%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const tilt = useTransform(scrollYProgress, [0, 1], flip ? [2.5, -1] : [-2.5, 1]);

  return (
    <section
      id={pillar.id}
      ref={ref}
      className={`letter ${flip ? "letter--flip" : ""}`}
      style={{ "--accent": pillar.accent }}
    >
      <motion.span className="letter-ghost" style={{ y: ghostY }} aria-hidden="true">
        {pillar.letter}
      </motion.span>

      <div className="container letter-grid">
        <motion.div
          className="letter-copy"
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="letter-kicker">&ldquo;{pillar.letter}&rdquo; is for</p>
          <h2>{pillar.word}</h2>
          <p className="letter-tag">{pillar.tagline}</p>
          {pillar.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="letter-facts">
            {pillar.facts.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          className="letter-media"
          style={{ rotate: tilt }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="letter-frame">
            <div className="letter-imgwrap">
              <motion.div className="letter-parallax" style={{ y: imgY }}>
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 900px) 92vw, 44vw"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            </div>
          </div>
          <figcaption>{pillar.caption}</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}