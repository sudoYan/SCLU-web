"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { CAMPAIGNS } from "../lib/content";

export default function Campaigns() {
  return (
    <section className="campaigns" id="campaigns">
      <div className="container">
        <h2>Current Campaigns</h2>
        <div className="campaign-grid">
          {CAMPAIGNS.map((c, i) => (
            <Link key={c.slug} href={`/campaigns/${c.slug}`} className="campaign-card-link" aria-label={`Learn more about ${c.title}`}>
              <motion.article
                className="campaign-card"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10, rotate: i % 2 ? 1.2 : -1.2, scale: 1.02 }}
              >
                <span className="tag" style={{ background: c.accent, color: "#fff" }}>{c.tag}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="card-link">Read more →</span>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}