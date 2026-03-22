import { WHATSAPP_URL, sectors } from "@/app/lib/constants";
const WA = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(43,123,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,123,200,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute bottom-0 left-0 right-0 h-64" style={{ background: "linear-gradient(to top, #0d1b3e, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(43,123,200,0.08) 0%, transparent 70%)" }} />
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="inline-flex items-center gap-2 border border-[#2B7BC8]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2B7BC8] inline-block" />
          <span className="text-[#4A9FE0] text-xs font-medium tracking-wider uppercase">Serving Johannesburg since 2016</span>
        </div>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(4rem,12vw,9rem)", lineHeight: 0.95, marginBottom: 24, letterSpacing: "0.03em" }}>
          <span className="block text-white">CONNECT</span>
          <span className="block" style={{ color: "#4A9FE0" }}>YOUR BUSINESS</span>
          <span className="block text-white/20">TO THE FUTURE</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mb-10 font-light leading-relaxed">Professional network cabling, fibre, Wi-Fi and CCTV installations across Johannesburg. Built right. Built to last.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#2B7BC8] hover:bg-[#4A9FE0] text-white font-medium px-8 py-4 rounded transition-colors text-base"><WA /> Get a Quote on WhatsApp</a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-medium px-8 py-4 rounded transition-colors text-base">View Our Services <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></a>
        </div>
        <div className="flex flex-wrap gap-3">{sectors.map((s) => <span key={s} className="text-xs text-white/30 border border-white/10 rounded-full px-3 py-1">{s}</span>)}</div>
      </div>
    </section>
  );
}
