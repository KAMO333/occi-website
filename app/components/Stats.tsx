import FadeIn from "@/app/components/FadeIn";
import { stats } from "@/app/lib/constants";
export default function Stats() {
  return (
    <section className="border-y border-white/8 bg-[#0a1428]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} className="text-center">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, lineHeight: 1, marginBottom: 6, color: "#4A9FE0" }}>{s.value}</div>
            <div className="text-white/40 text-sm">{s.label}</div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
