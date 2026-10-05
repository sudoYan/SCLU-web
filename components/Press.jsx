"use client";
import { motion } from "motion/react";
import { PRESS } from "../lib/content";

export default function Press() {
  return (
    <section className="press" id="press">
      <div className="container">
        <p className="section-kicker">In the media</p>
        <h2 className="section-title">The Receipts</h2>
        <p className="section-sub">
          A manual list of recent coverage and community moments we want to keep visible and easy to update.
        </p>
        <div className="press-board press-list">
          {PRESS.map((item, i) => (
            <motion.article
              key={item.outlet + item.date + item.headline}
              className="clipping"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
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