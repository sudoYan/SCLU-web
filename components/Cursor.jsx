"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // halo: stiff spring = crisp, not floaty
  const hx = useSpring(x, { stiffness: 900, damping: 55, mass: 0.15 });
  const hy = useSpring(y, { stiffness: 900, damping: 55, mass: 0.15 });
  const s = useMotionValue(1);
  const hs = useSpring(s, { stiffness: 700, damping: 28 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("has-cursor");
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e) => {
      const t = e.target instanceof Element
        ? e.target.closest("a, button, input, select, textarea, [data-hover]")
        : null;
      s.set(t ? 1.9 : 1); // snappy pop over interactives
    };
    const leave = () => { x.set(-100); y.set(-100); };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y, s]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div className="cursor-ring" style={{ x: hx, y: hy, scale: hs }} />
    </>
  );
}