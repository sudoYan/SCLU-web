import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const FILE = path.join(process.cwd(), "data", "members.json");

async function readMembers() {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}

export async function GET() {
  const members = await readMembers();
  return NextResponse.json({ count: members.length });
}

export async function POST(req) {
  const body = await req.json().catch(() => null);
  if (!body || !body.name?.trim() || !body.email?.trim()) {
    return NextResponse.json({ error: "name and email are required" }, { status: 400 });
  }
  const members = await readMembers();
  members.push({
    name: String(body.name).slice(0, 200),
    email: String(body.email).slice(0, 200),
    wing: String(body.wing || "Outreach").slice(0, 60),
    message: String(body.message || "").slice(0, 1000),
    joinedAt: new Date().toISOString(),
  });
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(members, null, 2));
  return NextResponse.json({ ok: true, count: members.length }, { status: 201 });
}