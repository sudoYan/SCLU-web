"use client";
import { motion } from "motion/react";
import { CAMPAIGNS } from "../lib/content";

export default function Campaigns() {
  return (
    <section className="campaigns" id="campaigns">
      <div className="container">
        <h2>Current Campaigns</h2>
        <div className="campaign-grid">
          {CAMPAIGNS.map((c, i) => (
            <motion.article
              className="campaign-card"
              key={c.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, rotate: i % 2 ? 1.2 : -1.2, scale: 1.02 }}
            >
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}