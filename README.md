# SCLU — Students' Civil Liberties Union

A full-stack website for the **Students' Civil Liberties Union** (San Diego), built with
[Next.js](https://nextjs.org), [Motion (motion.dev)](https://motion.dev) and
[anime.js](https://animejs.com).

The front page breaks the name down letter by letter:
**S** is for Students · **C** is for Civil · **L** is for Liberties · **U** is for Union —
each with why-it-matters copy and pictures, followed by current campaigns and a join form.

## Stack

- **Frontend:** Next.js App Router (server components + SSR)
- **Animation:** `motion` (scroll progress, parallax, in-view reveals) + `animejs` v4 (elastic hero letters, scramble-decode tagline)
- **Content:** Static site data imported from `lib/content` with no API dependency for page content

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000