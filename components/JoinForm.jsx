"use client";
import { useEffect, useState } from "react";
import { WINGS } from "../lib/content";
import Magnetic from "./Magnetic";

export default function JoinForm() {
  const [count, setCount] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    fetch("/api/join").then((r) => r.json()).then((d) => setCount(d.count)).catch(() => {});
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      const d = await res.json();
      setCount(d.count);
      setStatus("done");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="join-form" onSubmit={onSubmit}>
      <label>Name<input name="name" required placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" required placeholder="you@school.edu" /></label>
      <label>Pick your wing
        <select name="wing" defaultValue="Outreach">
          {WINGS.map((w) => (
            <option key={w.name} value={w.name}>{w.name} ({w.skill})</option>
          ))}
        </select>
      </label>
      <label>Why do you want to organize? (optional)
        <textarea name="message" rows={3} placeholder="Because…" />
      </label>
      <Magnetic strength={0.25}>
        <button disabled={status === "sending"}>
          {status === "sending" ? "Signing up…" : "Join the Union ✊"}
        </button>
      </Magnetic>
      {status === "done" && (
        <p className="join-success" role="status">
          Welcome to the union!{count != null ? ` You're member #${count}.` : ""}
        </p>
      )}
      {status === "error" && <p role="alert">Something went wrong — try again.</p>}
    </form>
  );
}