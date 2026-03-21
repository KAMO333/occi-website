import FadeIn from "@/app/components/FadeIn";
import { stats } from "@/app/lib/constants";
export default function Stats() {
  return (
    <section className="border-y border-white/8 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} className="text-center">
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52, lineHeight: 1, marginBottom: 6, background: "linear-gradient(135deg,#f97316,#fb923c,#fdba74)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
            <div className="text-white/40 text-sm">{s.label}</div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
