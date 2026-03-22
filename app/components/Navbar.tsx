"use client";
import { useState, useEffect } from "react";
import { WHATSAPP_URL } from "@/app/lib/constants";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(13,27,62,0.97)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#2B7BC8] flex items-center justify-center">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 13 }}>OC</span>
          </div>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: "0.1em" }}>OCCI</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-sm text-white/70 hover:text-white transition-colors">{item}</a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-[#2B7BC8] hover:bg-[#4A9FE0] text-white text-sm font-medium px-5 py-2.5 rounded transition-colors">Get a Quote</a>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#091020] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {["Services", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 text-sm" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-[#2B7BC8] text-white text-sm text-center font-medium px-5 py-2.5 rounded">Get a Quote</a>
        </div>
      )}
    </nav>
  );
}
