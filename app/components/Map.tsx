export default function Map() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#2B7BC8]" />
          <span className="text-[#4A9FE0] text-xs tracking-widest uppercase font-medium">Find Us</span>
        </div>
        <h2
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.04em" }}
          className="text-5xl md:text-6xl text-white mb-4"
        >
          OUR LOCATION
        </h2>
        <p className="text-white/40 max-w-lg">
          Based in Protea Glen, Soweto. Serving Johannesburg and surrounding areas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 rounded-xl overflow-hidden border border-white/8" style={{ height: 420 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4293683619094!2d27.7956640716804!3d-26.280177316283513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a445b7e99cf9%3A0x50f2154e676f6496!2s12%20Moon%20Flower%20St%2C%20Protea%20Glen%2C%20Soweto%2C%201819!5e0!3m2!1sen!2sza!4v1774172997877!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-white/8 rounded-xl p-6 bg-[#0a1428]">
            <div className="text-[#2B7BC8] mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="text-white/20 text-xs tracking-widest uppercase mb-2">Address</div>
            <p className="text-white/70 text-sm leading-relaxed">
              12 Moon Flower Street<br />
              Protea Glen, Soweto<br />
              1819
            </p>
          </div>

          <div className="border border-white/8 rounded-xl p-6 bg-[#0a1428]">
            <div className="text-[#2B7BC8] mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="text-white/20 text-xs tracking-widest uppercase mb-2">Phone</div>
            <a href="tel:+27794913879" className="text-white/70 text-sm hover:text-[#4A9FE0] transition-colors">
              +27 79 491 3879
            </a>
          </div>

          <div className="border border-white/8 rounded-xl p-6 bg-[#0a1428]">
            <div className="text-[#2B7BC8] mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="text-white/20 text-xs tracking-widest uppercase mb-2">Email</div>
            <a href="mailto:info@occi.co.za" className="text-white/70 text-sm hover:text-[#4A9FE0] transition-colors block">
              info@occi.co.za
            </a>
            <a href="mailto:sales@occi.co.za" className="text-white/70 text-sm hover:text-[#4A9FE0] transition-colors block mt-1">
              sales@occi.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
