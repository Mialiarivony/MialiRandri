const KEYWORDS = [
  "🎬 COORDINATION",
  "🎙 AUDIOVISUEL",
  "✍️ STORYTELLING",
  "🌐 WEB",
  "🎚 PRODUCTION SONORE",
  "📋 GESTION DE PROJET",
  "🎥 DOCUMENTAIRE",
  "📱 CONTENU DIGITAL",
];

function Perforations() {
  return (
    <div className="flex h-6 items-center gap-2 bg-ink px-2">
      {Array.from({ length: 48 }).map((_, i) => (
        <span
          key={i}
          className="h-3 w-5 shrink-0 rounded-[2px] bg-cream/90"
        />
      ))}
    </div>
  );
}

export function FilmStrip() {
  // duplicate the list so the marquee loops seamlessly
  const items = [...KEYWORDS, ...KEYWORDS];
  return (
    <div className="relative w-full overflow-hidden bg-ink text-cream">
      <Perforations />
      <div className="overflow-hidden">
        <div className="filmstrip-track flex w-max items-center gap-12 whitespace-nowrap py-6">
          {items.map((word, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-wide md:text-3xl"
            >
              {word}
              <span className="mx-8 text-gold">·</span>
            </span>
          ))}
        </div>
      </div>
      <Perforations />
    </div>
  );
}
