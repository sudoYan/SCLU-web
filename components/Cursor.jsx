"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 350, damping: 28 });
  const ry = useSpring(my, { stiffness: 350, damping: 28 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const over = (e) => setHovering(!!e.target.closest("a, button, input, select, textarea, [data-hover]"));
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <motion.div className="cursor-dot" style={{ x: mx, y: my }} />
      <motion.div className={`cursor-ring ${hovering ? "cursor-ring--on" : ""}`} style={{ x: rx, y: ry }} />
    </>
  );
}