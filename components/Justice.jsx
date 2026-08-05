"use client";
import { motion, useScroll, useTransform } from "motion/react";

export default function Justice() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  return (
    <motion.div className="justice-float" style={{ rotate }} aria-hidden="true">
      <img src="/justice.png" alt="" />
    </motion.div>
  );
}