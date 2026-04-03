export const WHATSAPP_NUMBER = "27794913879";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi OCCI, I'd like to get a quote for your cabling services.",
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const sectors = ["Private", "SME", "Enterprise", "Government & Schools"];

export const stats = [
  { value: "9+", label: "Years in Operation" },
  { value: "500+", label: "Installations Completed" },
  { value: "4", label: "Sectors Served" },
  { value: "100%", label: "Professional Installs" },
];

export const services = [
  {
    title: "Data & LAN Cabling",
    desc: "Structured cabling for offices, connecting users, phones, switches and WAN with clean, standards-compliant runs.",
  },
  {
    title: "Optic Fibre",
    desc: "High-speed fibre optic installation for enterprise-grade connectivity across campuses and multi-floor buildings.",
  },
  {
    title: "Wi-Fi Installation",
    desc: "Access point placement, configuration, and cabling for seamless wireless coverage in any size space.",
  },
  {
    title: "CCTV Cabling",
    desc: "Professional camera cabling routed back to a central monitoring point. Neat, concealed, and built to last.",
  },
  {
    title: "Computer Room Cleanup",
    desc: "Tame cable chaos in server rooms and comms rooms. Reduce downtime, fire hazards, and admin headaches.",
  },
  {
    title: "Infrastructure Design",
    desc: "End-to-end ICT infrastructure planning for new builds and renovations. Spec, design, and installation under one roof.",
  },
  // {
  //   title: "Alarm Systems",
  //   desc: "Professional installation and maintenance of alarm systems for households and commercial buildings.",
  // },
  // {
  //   title: "Panic Button",
  //   desc: "Panic button installation for households and businesses for rapid emergency response.",
  // },
  // {
  //   title: "Computer Repairs",
  //   desc: "Full computer services and system support including software and hardware diagnostics, repairs, and optimisation.",
  // },
];

export const trustPoints = [
  {
    title: "Professional & Ethical",
    desc: "Every job is done to standard, documented, and guaranteed.",
  },
  {
    title: "Tailored to Your Needs",
    desc: "We spec installations around your space, budget, and growth plans.",
  },
  {
    title: "One Point of Contact",
    desc: "From site visit to final sign-off, you deal with the same team.",
  },
];
