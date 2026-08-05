"use client";
import { motion } from "motion/react";
import { PRESS } from "../lib/content";

const TILTS = [-3, 2, -2, 3, -1.5];

export default function Press() {
  return (
    <section className="press" id="press">
      <div className="container">
        <p className="section-kicker">News coverage</p>
        <h2 className="section-title">The Receipts</h2>
        <p className="section-sub">
          When youth organize, the press pays attention. Go on — drag the clippings around.
        </p>
        <div className="press-board">
          {PRESS.map((item, i) => (
            <motion.article
              key={item.outlet + item.date}
              className="clipping"
              style={{ rotate: TILTS[i % TILTS.length] }}
              drag
              dragConstraints={{ left: -140, right: 140, top: -90, bottom: 90 }}
              dragElastic={0.2}
              dragMomentum={false}
              whileDrag={{ scale: 1.06, rotate: 0, zIndex: 10, boxShadow: "14px 14px 0 var(--blue)" }}
              whileHover={{ scale: 1.04, rotate: 0 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: i * 0.08 }}
            >
              <span className="clipping-tape" aria-hidden="true" />
              <div className="clipping-head">
                <span className="clipping-outlet">{item.outlet}</span>
                <span className="clipping-date">{item.date}</span>
              </div>
              <h3>{item.headline}</h3>
              <p>{item.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}