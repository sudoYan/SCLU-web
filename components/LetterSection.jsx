"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

export default function LetterSection({ pillar, flip }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const ghostY = useTransform(scrollYProgress, [0, 1], ["14%", "-16%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const tiltScroll = useTransform(scrollYProgress, [0, 1], flip ? [2.5, -1] : [-2.5, 1]);

  // mouse tilt on the photo frame
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 160, damping: 18 });

  return (
    <section id={pillar.id} ref={ref} className={`letter ${flip ? "letter--flip" : ""}`}>
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
          <h2>
            <motion.span
              className="hl"
              initial={{ backgroundSize: "0% 92%" }}
              whileInView={{ backgroundSize: "100% 92%" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {pillar.word}
            </motion.span>
          </h2>
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
                whileHover={{ scale: 1.03, rotate: 0, y: -4 }}
              >
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.figure
          className="letter-media"
          style={{ rotate: tiltScroll, rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            px.set((e.clientX - r.left) / r.width - 0.5);
            py.set((e.clientY - r.top) / r.height - 0.5);
          }}
          onMouseLeave={() => { px.set(0); py.set(0); }}
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