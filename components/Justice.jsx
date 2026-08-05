"use client";
import { motion, useScroll, useVelocity, useSpring, useTransform } from "motion/react";

export default function Justice() {
  const { scrollY, scrollYProgress } = useScroll();
  const vel = useVelocity(scrollY);
  const velSpring = useSpring(vel, { stiffness: 100, damping: 20 });
  const tip = useTransform(velSpring, [-2600, 2600], [-22, 22], { clamp: true });
  const lean = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <motion.div className="justice-float" style={{ rotate: tip }} aria-hidden="true">
      <motion.img src="/justice.png" alt="" style={{ rotate: lean }} />
    </motion.div>
  );
}