"use client";

import { useRef, useEffect, useState } from "react";
import { services } from "@/app/hooks/useContactForm";

interface Props {
  selected: string[];
  onToggle: (service: string) => void;
}

export default function ServiceDropdown({ selected, onToggle }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center justify-between mb-2">
        <label className="text-white/40 text-xs tracking-widest uppercase">Services Needed *</label>
        <span className="text-orange-400/60 text-xs">You can select more than one</span>
      </div>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-left flex items-center justify-between focus:outline-none focus:border-orange-500/50 transition-colors hover:border-white/20"
      >
        <span className={selected.length === 0 ? "text-white/20" : "text-white"}>
          {selected.length === 0
            ? "Select all that apply..."
            : selected.length === 1
            ? selected[0]
            : `${selected[0]} +${selected.length - 1} more`}
        </span>
        <svg className={`w-4 h-4 text-white/40 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {selected.map((s) => (
            <span key={s} className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs px-2 py-1 rounded-full">
              {s}
              <button type="button" onClick={() => onToggle(s)} className="hover:text-white transition-colors">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}

      {open && (
        <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-[#111] border border-white/10 rounded-lg overflow-hidden shadow-xl">
          <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
            <p className="text-white/30 text-xs">Tick all services you need</p>
            {selected.length > 0 && <p className="text-orange-400 text-xs">{selected.length} selected</p>}
          </div>
          {services.map((s) => {
            const checked = selected.includes(s);
            return (
              <button key={s} type="button" onClick={() => onToggle(s)}
                className="w-full text-left px-4 py-3 text-sm flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                <span className={checked ? "text-orange-400" : "text-white/60"}>{s}</span>
                {checked && (
                  <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
