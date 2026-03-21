import FadeIn from "@/app/components/FadeIn";
export default function Footer() {
  return (
    <section id="contact" className="border-t border-white/8 bg-[#0d0d0d] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center"><span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13 }}>OC</span></div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: "0.1em" }}>OCCI</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed">Obed Computer Cabling Installations.<br />Professional ICT infrastructure for Johannesburg businesses.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="text-white/20 text-xs tracking-widest uppercase mb-4">Contact</div>
            <div className="space-y-2 text-sm">
              <a href="tel:+27794913879" className="flex items-center gap-2 text-white/50 hover:text-orange-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>+27 79 491 3879</a>
              <a href="mailto:sales@occi.co.za" className="flex items-center gap-2 text-white/50 hover:text-orange-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>sales@occi.co.za</a>
              <a href="mailto:info@occi.co.za" className="flex items-center gap-2 text-white/50 hover:text-orange-400 transition-colors"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>info@occi.co.za</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-white/20 text-xs tracking-widest uppercase mb-4">Quick Links</div>
            <div className="space-y-2 text-sm">
              {["Services", "About", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-white/50 hover:text-orange-400 transition-colors">{link}</a>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-xs">© {new Date().getFullYear()} Obed Computer Cabling Installations. All rights reserved.</span>
          <span className="text-white/20 text-xs">occi.co.za</span>
        </div>
      </div>
    </section>
  );
}
