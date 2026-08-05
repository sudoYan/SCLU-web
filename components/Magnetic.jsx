"use client";
import { useRef } from "react";
import { motion, useSpring } from "motion/react";

export default function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}