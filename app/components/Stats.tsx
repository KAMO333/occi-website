import FadeIn from "@/app/components/FadeIn";
import { stats } from "@/app/lib/constants";

export default function Stats() {
  return (
    // Reverting to the darker background you liked
    <section className="border-y border-white/[0.05] bg-[#0a1428]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <FadeIn
              key={s.label}
              delay={i * 0.1}
              className="flex flex-col items-center text-center"
            >
              <div
                className="font-sans font-bold tracking-tighter text-[#4A9FE0]"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div className="text-white/40 text-[11px] uppercase tracking-[0.2em] font-semibold leading-tight">
                {s.label}
              </div>
              {/* Keeping the subtle accent line from the card design */}
              <div className="w-6 h-[2px] bg-[#2B7BC8]/30 mt-4 rounded-full" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
