"use client";

import { WHATSAPP_URL } from "@/app/lib/constants";
import { useContactForm } from "@/app/hooks/useContactForm";
import ServiceDropdown from "@/app/components/ServiceDropdown";

export default function ContactForm() {
  const { form, status, handleChange, handleServiceToggle, handleSubmit } = useContactForm();

  return (
    <section id="contact-form" className="py-28 bg-[#0a1428] border-y border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-[#2B7BC8]" />
              <span className="text-[#4A9FE0] text-xs tracking-widest uppercase font-medium">Get In Touch</span>
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }} className="text-5xl md:text-6xl text-white mb-6">
              REQUEST A QUOTE
            </h2>
            <p className="text-white/40 leading-relaxed mb-8">
              Fill in the form and we will get back to you within 24 hours. Prefer WhatsApp? Tap the button below.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#2B7BC8] hover:bg-[#4A9FE0] text-white font-medium px-6 py-3 rounded transition-colors text-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp Instead
            </a>
          </div>

          <div>
            {status === "success" ? (
              <div className="border border-[#2B7BC8]/30 rounded-xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#2B7BC8]/10 border border-[#2B7BC8]/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#2B7BC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                <p className="text-white/40 text-sm">We have received your request and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Dlamini"
                    className="w-full bg-[#0d1b3e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#2B7BC8]/50 transition-colors" />
                </div>

                <div>
                  <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+27 81 234 5678"
                    className="w-full bg-[#0d1b3e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#2B7BC8]/50 transition-colors" />
                </div>

                <ServiceDropdown selected={form.services} onToggle={handleServiceToggle} />

                <div>
                  <label className="text-white/40 text-xs tracking-widest uppercase block mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your project or space..."
                    className="w-full bg-[#0d1b3e] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#2B7BC8]/50 transition-colors resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    {form.services.length === 0 ? "Please select at least one service." : "Something went wrong. Please try WhatsApp instead."}
                  </p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full bg-[#2B7BC8] hover:bg-[#4A9FE0] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-4 rounded-lg transition-colors text-sm">
                  {status === "loading" ? "Sending..." : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
