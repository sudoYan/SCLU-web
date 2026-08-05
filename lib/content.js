export const SITE = {
  name: "Students' Civil Liberties Union",
  short: "SCLU",
  tagline: "Championing civil liberties & amplifying the concerns of students.",
  founded: "May 6, 2024",
  base: "UC San Diego · San Diego, CA",
};

export const MARQUEE = [
  "Students", "Civil", "Liberties", "Union",
  "Sanctuary Campus", "Disability Justice", "Free Speech",
  "Due Process", "Youth Power", "Detention Free San Diego",
];

export const PILLARS = [
  {
    id: "students",
    letter: "S",
    word: "Students",
    accent: "#e14429",
    tagline: "Because the people closest to the problem are closest to the solution.",
    body: [
      "The Students' Civil Liberties Union was founded May 6, 2024, when four UC San Diego students decided youth voices shouldn't wait for permission. Student-led from day one, SCLU organizes the people who live these issues daily — in classrooms, lecture halls, dorms and dining commons.",
      "When international students had their F-1 visas suddenly revoked in spring 2025, it was students who rallied at Geisel Library within days. Students aren't “the leaders of tomorrow” — they are the organizers, advocates and experts of today.",
    ],
    facts: [
      "Founded May 6, 2024 by four students at UC San Diego",
      "Student-led nonprofit — youth organizers set the agenda",
      "Summer Organizing Institute trains the next wave of advocates",
    ],
    image:
      "https://image.qwenlm.ai/public_source/fbad86eb-fd7a-4dba-8333-7c4e3dae4dec/1ae0fdbb8-4c70-47f7-94a0-87fbb46c5e971692.png",
    alt: "A student raising her hand in a packed university lecture hall",
    caption: "Every movement starts with a raised hand.",
  },
  {
    id: "civil",
    letter: "C",
    word: "Civil",
    accent: "#2450e0",
    tagline: "Because change wins when it is carried by the people — peacefully, persistently.",
    body: [
      "Civil as in civic life — and civil as in civil disobedience. SCLU's advocacy is community-oriented grassroots organizing: educational workshops, mass demonstrations, court-watching and policy lobbying, always showing up and always showing out.",
      "Patient, civil pressure works. SCLU's organizing helped push the Civil Liberties Enforcement and Accountability Rules Ordinance over the line, in effect across San Diego County on February 27, 2026.",
    ],
    facts: [
      "Workshops, rallies, court-watching & policy lobbying",
      "Detention Free San Diego launched October 2025",
      "CLEAR Ordinance in effect February 27, 2026",
    ],
    image:
      "https://image.qwenlm.ai/public_source/fbad86eb-fd7a-4dba-8333-7c4e3dae4dec/7ae0fdbb8-4c70-47f7-94a0-87fbb46c5e978047.png",
    alt: "A peaceful crowd holding handmade protest signs and flags",
    caption: "Peaceful, persistent, present.",
  },
  {
    id: "liberties",
    letter: "L",
    word: "Liberties",
    accent: "#d99a00",
    tagline: "Because rights on paper are only as real as the people who defend them.",
    body: [
      "Liberties are the payload: speech, press, assembly, due process — and the right to an education that respects who you are. SCLU defends international and undocumented students and pushes disability justice from a “medical model” to a “social model” that recognizes disability as a cultural identity.",
      "Results, not just rhetoric: a sanctuary-campus movement, and a Disability Resource Hub in Pepper Canyon Hall set to open Fall 2026 — part of a campaign that helped secure $17.5 million for disability justice.",
    ],
    facts: [
      "Sanctuary campus & sanctuary spaces across San Diego",
      "Disability Resource Hub opens Fall 2026",
      "$17.5M secured for disability justice",
    ],
    image:
      "https://image.qwenlm.ai/public_source/fbad86eb-fd7a-4dba-8333-7c4e3dae4dec/3ae0fdbb8-4c70-47f7-94a0-87fbb46c5e979041.png",
    alt: "A handmade sign reading Free Speech, Free Press",
    caption: "Free speech, free press, free people.",
  },
  {
    id: "union",
    letter: "U",
    word: "Union",
    accent: "#178a4c",
    tagline: "Because nobody wins alone.",
    body: [
      "SCLU builds multigenerational coalitions for democratic renewal — with groups like the Blind Snakes Co-operative, nonprofits and educational institutions — because a union of skills is a union of power.",
      "Data scientists in the research wing, economists in policy, artists in community, organizers in outreach: every passionate individual can be a strong advocate when pushed in the right direction. That is the union.",
    ],
    facts: [
      "Coalition with Blind Snakes Co-op won the Disability Resource Hub",
      "Four wings: Research · Policy · Community · Outreach",
      "Multigenerational coalitions across San Diego",
    ],
    image:
      "https://image.qwenlm.ai/public_source/fbad86eb-fd7a-4dba-8333-7c4e3dae4dec/4ae0fdbb8-4c70-47f7-94a0-87fbb46c5e971962.png",
    alt: "Students standing in a circle joining their hands together, seen from below",
    caption: "Hands in. Power up.",
  },
];

export const CAMPAIGNS = [
  {
    tag: "Immigrant Rights",
    title: "Sanctuary Campus",
    accent: "#e14429",
    text: "Rallies at Geisel Library and county-wide actions urging UC San Diego to protect undocumented students and divest from immigration-enforcement corporations.",
  },
  {
    tag: "Immigrant Rights",
    title: "Detention Free San Diego",
    accent: "#2450e0",
    text: "Launched Oct 2025 — organizing businesses and schools to designate private sanctuaries; pressure that helped pass the CLEAR Ordinance.",
  },
  {
    tag: "Disability Justice",
    title: "Disability Resource Hub",
    accent: "#d99a00",
    text: "With the Blind Snakes Co-operative: $17.5M secured and a permanent hub in Pepper Canyon Hall, opening Fall 2026.",
  },
  {
    tag: "Youth Power",
    title: "Summer Organizing Institute",
    accent: "#178a4c",
    text: "A week-long institute on grassroots organizing, legal advocacy and community impact — building the next generation of youth organizers.",
  },
];

export const WINGS = [
  { name: "Research", skill: "data science" },
  { name: "Policy", skill: "economics" },
  { name: "Community", skill: "visual arts" },
  { name: "Outreach", skill: "political science" },
];

export const PRESS = [
  { outlet: "KPBS", date: "Feb 2025", headline: "Students rally at Geisel Library, demand a sanctuary campus", note: "TV coverage of SCLU's call for UC San Diego to support undocumented students and divest from immigration enforcement." },
  { outlet: "UCSD Guardian", date: "Apr 2025", headline: "Visa terminations spark campus-wide action", note: "Reporting on the wave of F-1 visa revocations — and the rally SCLU helped organize within days." },
  { outlet: "UCSD Guardian", date: "2025", headline: "Blind Snakes × SCLU push for a Disability Resource Hub", note: "Coverage of the campaign moving UCSD from a “medical model” to a “social model” of disability." },
  { outlet: "Press Conference", date: "Jan 13, 2026", headline: "SCLU addresses the CLEAR Ordinance", note: "SCLU holds a press conference ahead of the Civil Liberties Enforcement & Accountability Rules Ordinance taking effect Feb 27, 2026." },
  { outlet: "SDEA", date: "Jul 2025", headline: "Summer Organizing Institute trains youth leaders", note: "The San Diego Education Association spotlights SCLU's week-long institute on grassroots organizing and legal advocacy." },
];

export const TEAM = [
  {
    mono: "AD", name: "Aryan Dixit", role: "Board President · Co-founder",
    bio: "Co-founded SCLU and led the successful campaign to build a center and community for disabled students at UC San Diego. Published non-fiction author. Organizing since childhood — from free speech to menstrual equity with RutuChakra.",
    stats: ["Published author", "Won a center, not a promise", "UC San Diego"],
  },
  {
    mono: "DS", name: "Daniel Alejandro Soria", role: "Executive Director · Co-founder",
    bio: "Co-founder, Co-President '24–25. Led the UCSD Disabled Students Commission and spearheaded the campaign that secured $17.5M for disability justice. Legal & policy roles with the U.S. Senate Judiciary Committee and the D.C. U.S. Attorney's Office.",
    stats: ["$17.5M secured", "Senate Judiciary alum", "UCSD grad"],
  },
  {
    mono: "JL", name: "Jasmine Lee", role: "Co-founder",
    bio: "One of the four who started it all on May 6, 2024. There at the first meeting, still in the fight — building the union from day one.",
    stats: ["Founding four", "Est. 2024"],
  },
  {
    mono: "DZ", name: "Dannie Zhu", role: "Co-founder",
    bio: "One of the four who started it all on May 6, 2024. Signed the founding papers, then got to work organizing San Diego's students.",
    stats: ["Founding four", "Est. 2024"],
  },
];