# OCCI Website

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=mail&logoColor=white)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)

Production website for **Obed Computer Cabling Installations (OCCI)** — a Johannesburg-based ICT infrastructure company offering data cabling, fibre, Wi-Fi, CCTV, alarm systems, and computer repairs. Built as the first case study for a township digital agency.

Live: [occi-website.vercel.app](https://occi-website.vercel.app)

---

## Features

- Fully responsive landing page with navy/blue brand identity
- Hero section with animated grid background and WhatsApp CTA
- 9-service grid with hover animations
- Gallery section with placeholder images (real photos coming)
- Google Maps embed pinned to exact business address
- Lead capture form with multi-select services dropdown
- Dual notification system — email via Resend + WhatsApp via Twilio
- About section with founder info and company vision
- Google Business Profile set up and pending verification
- `/review` redirect page → straight to Google review form
- `/review/qr` branded QR code page for post-job client handoff

---

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Resend](https://resend.com) — email notifications
- [Twilio](https://twilio.com) — WhatsApp notifications
- [Vercel](https://vercel.com) — deployment

---

## Project Structure
```
app/
├── api/
│   └── contact/        # Lead capture API route (Resend + Twilio)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx
│   ├── About.tsx
│   ├── Map.tsx
│   ├── CTA.tsx
│   ├── ContactForm.tsx
│   ├── ServiceDropdown.tsx
│   └── Footer.tsx
├── hooks/
│   └── useContactForm.ts   # Form state and submission logic
├── lib/
│   └── constants.ts        # Services, stats, WhatsApp URL, trust points
├── review/
│   ├── page.tsx            # Redirects to Google review link
│   └── qr/page.tsx         # Branded QR code page for client handoff
├── page.tsx                # Entry point
├── layout.tsx              # Root layout and metadata
└── globals.css             # Global styles and animations
```

---

## Environment Variables

Create a `.env.local` file in the root:
```env
RESEND_API_KEY=your_resend_api_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
NOTIFY_WHATSAPP_TO=whatsapp:+27xxxxxxxxx
NOTIFY_EMAIL=your@email.com
```

---

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/KAMO333/occi-website.git
cd occi-website
```

2. Install dependencies
```bash
npm install
```

3. Add environment variables (see above)

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `main` triggers an automatic deployment. Environment variables must be added in the Vercel dashboard under Project Settings → Environment Variables.

---

---

Built by [Kamogelo Mmopane](https://github.com/KAMO333)
