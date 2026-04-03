import Image from "next/image";
import FadeIn from "@/app/components/FadeIn";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/[0.05] bg-[#0a1428] py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="OCCI Logo"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
              />
              <span className="text-white font-bold text-xl tracking-[0.12em] font-sans">
                OCCI
              </span>
            </div>
            {/* Increased text size to text-sm for better readability */}
            <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">
              Obed Computer Cabling Installations.
              <br />
              Professional ICT infrastructure for Johannesburg businesses and
              township economies.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="text-[#4A9FE0] text-[11px] tracking-[0.2em] uppercase font-bold mb-5">
              Contact Details
            </div>
            <div className="space-y-4 text-sm">
              {" "}
              {/* Increased vertical spacing between items */}
              <a
                href="tel:+27794913879"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-white/5 group-hover:bg-[#2B7BC8]/10 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#2B7BC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <span>+27 79 491 3879</span>
              </a>
              <a
                href="mailto:sales@occi.co.za"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-white/5 group-hover:bg-[#2B7BC8]/10 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#2B7BC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span>sales@occi.co.za</span>
              </a>
              <a
                href="mailto:info@occi.co.za"
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="p-2 rounded bg-white/5 group-hover:bg-[#2B7BC8]/10 transition-colors">
                  <svg
                    className="w-4 h-4 text-[#2B7BC8]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span>info@occi.co.za</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-[#4A9FE0] text-[11px] tracking-[0.2em] uppercase font-bold mb-5">
              Quick Links
            </div>
            <div className="space-y-3 text-sm">
              {["Services", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/50 hover:text-[#4A9FE0] transition-colors font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar: Increased opacity to make text "pop" as requested */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/30 text-[11px] font-medium uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Obed Computer Cabling Installations.
            All rights reserved.
          </span>
          <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em] hover:text-[#4A9FE0] transition-colors">
            occi.co.za
          </span>
        </div>
      </div>
    </footer>
  );
}
