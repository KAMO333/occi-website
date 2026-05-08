import FadeIn from "@/app/components/FadeIn";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    alt: "Server room rack infrastructure",
    label: "Server Room",
  },
  {
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    alt: "Data centre cable management",
    label: "Cable Management",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1661301024950-ed61c7fc3973?w=800&auto=format&fit=crop&q=80",
    alt: "Fibre optic cables",
    label: "Fibre Optic",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1748972945105-ff2645d98f69?w=800&auto=format&fit=crop&q=80",
    alt: "CCTV security camera",
    label: "CCTV Installation",
  },
  {
    url: "https://phoenixstoragelive.blob.core.windows.net/venueimages/2d9e1ed8-e701-5c43-83a8-f937c1518673",
    alt: "Office network infrastructure",
    label: "Infrastructure Design",
  },
  {
    url: "https://www.romanelectric.com/wp-content/uploads/2025/10/structured-cabling-systems-Roman-Electric-Co-1536x864.webp",
    alt: "Patch panel structured cabling",
    label: "Structured Cabling",
  },
];

export default function Gallery() {
  return (
    <section className="py-28 max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-[#2B7BC8]" />
          <span className="text-[#4A9FE0] text-xs tracking-widest uppercase font-medium">
            Our Work
          </span>
        </div>
        <h2
          style={{
            fontFamily: "\'Bebas Neue\', sans-serif",
            letterSpacing: "0.04em",
          }}
          className="text-5xl md:text-6xl text-white mb-4"
        >
          PREVIOUS INSTALLATIONS
        </h2>
        <p className="text-white/40 max-w-lg mb-16">
          A look at the standard of work we deliver across every project.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <FadeIn key={photo.label} delay={i * 0.08}>
            <div className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-[#0a1428]">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white/80 text-sm font-medium">
                  {photo.label}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p className="text-white/20 text-xs text-center mt-8">
          * Placeholder images shown. Real project photos coming soon.
        </p>
      </FadeIn>
    </section>
  );
}
