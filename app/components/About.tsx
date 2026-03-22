import FadeIn from "@/app/components/FadeIn";
import { WHATSAPP_URL, trustPoints } from "@/app/lib/constants";
export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a1428] border-y border-white/8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-[#2B7BC8]" /><span className="text-[#4A9FE0] text-xs tracking-widest uppercase font-medium">About OCCI</span></div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }} className="text-5xl md:text-6xl text-white mb-6">BUILT ON EXPERTISE</h2>
          <p className="text-white/50 leading-relaxed mb-4">Founded by <span className="text-white/80">Obed Mmopane</span>, a Senior Technician with decades of hands-on experience, OCCI has been delivering professional ICT infrastructure since 2016 across private, SME, enterprise, and government sectors.</p>
          <p className="text-white/50 leading-relaxed mb-4">We believe internet connectivity is a vital business component. That&apos;s why we work with every client to spec and design an installation tailored to their specific requirements.</p>
          <p className="text-white/50 leading-relaxed mb-8">Our vision is to become a <span className="text-[#4A9FE0]">leading cabling brand in South Africa</span> — reputable, reliable, and professional in everything we do.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4A9FE0] hover:text-[#7ab8e8] transition-colors text-sm font-medium">Chat with us on WhatsApp <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 gap-4">
            {trustPoints.map((item, i) => (
              <div key={i} className="border border-white/8 rounded-xl p-6 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#2B7BC8]/10 border border-[#2B7BC8]/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-[#2B7BC8]" /></div>
                <div><div className="text-white font-medium mb-1">{item.title}</div><div className="text-white/40 text-sm leading-relaxed">{item.desc}</div></div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
