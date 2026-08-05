"use client";
import { motion } from "motion/react";
import { TEAM } from "../lib/content";

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <p className="section-kicker">Who runs it</p>
        <h2 className="section-title">The Organizers</h2>
        <p className="section-sub">Flip the cards. Every one of them chose to do something.</p>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              className="flip"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" }}
            >
              <motion.div
                className="flip-inner"
                whileHover={{ rotateY: 180 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
              >
                <div className="flip-face flip-front">
                  <span className="flip-mono">{m.mono}</span>
                  <h3>{m.name}</h3>
                  <span className="flip-role">{m.role}</span>
                  <span className="flip-hint">hover to flip ⚖</span>
                </div>
                <div className="flip-face flip-back">
                  <p>{m.bio}</p>
                  <div className="flip-stats">
                    {m.stats.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}