import FadeIn from "@/app/components/FadeIn";
import { WHATSAPP_URL, trustPoints } from "@/app/lib/constants";
export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d0d0d] border-y border-white/8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="mb-4 flex items-center gap-3"><div className="h-px w-8 bg-orange-500" /><span className="text-orange-400 text-xs tracking-widest uppercase font-medium">About OCCI</span></div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }} className="text-5xl md:text-6xl text-white mb-6">BUILT ON EXPERTISE</h2>
          <p className="text-white/50 leading-relaxed mb-4">Obed Computer Cabling Installations has been delivering professional ICT infrastructure since 2016, backed by years of prior experience across private, SME, enterprise, and ISP environments.</p>
          <p className="text-white/50 leading-relaxed mb-8">We believe internet connectivity is a vital business component. That&apos;s why we work with every client to spec and design an installation tailored to their specific requirements.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium">Chat with us on WhatsApp <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></a>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 gap-4">
            {trustPoints.map((item, i) => (
              <div key={i} className="border border-white/8 rounded-xl p-6 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-orange-500" /></div>
                <div><div className="text-white font-medium mb-1">{item.title}</div><div className="text-white/40 text-sm leading-relaxed">{item.desc}</div></div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
