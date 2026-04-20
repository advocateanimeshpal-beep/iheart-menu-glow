import heroImg from "@/assets/cafe-hero.jpg";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <header className="relative -mx-4 mb-2 h-[78vh] min-h-[520px] overflow-hidden">
      <img
        src={heroImg}
        alt="iheart Café Varanasi interior with Edison bulbs and exposed brick walls"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "blur(2px) brightness(0.55)" }}
      />
      {/* Edison glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.78 0.165 65 / 0.35) 0%, transparent 55%), linear-gradient(to bottom, oklch(0.18 0.012 50 / 0.4) 0%, oklch(0.18 0.012 50 / 0.7) 60%, var(--color-background) 100%)",
        }}
      />

      {/* Decorative Edison filaments */}
      <div className="absolute inset-x-0 top-8 flex justify-around opacity-90 sm:top-12">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="filament-pulse flex flex-col items-center"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <div className="h-12 w-px bg-foreground/20 sm:h-20" />
            <div
              className="h-3 w-3 rounded-full sm:h-4 sm:w-4"
              style={{
                background: "var(--gradient-glow)",
                boxShadow: "0 0 24px oklch(0.86 0.18 75 / 0.9), 0 0 48px oklch(0.78 0.165 65 / 0.7)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-12 text-center">
        <p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--color-primary)" }}
        >
          Est. Varanasi
        </p>
        <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl">
          iheart
        </h1>
        <p
          className="mt-1 font-display text-xl italic text-foreground/90 sm:text-2xl"
          style={{ textShadow: "0 2px 12px oklch(0 0 0 / 0.6)" }}
        >
          café
        </p>

        <div
          className="my-5 h-px w-24"
          style={{ background: "var(--gradient-glow)" }}
        />

        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Where Edison glow meets exposed brick — a slow corner of the holy city.
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-foreground/70">
          <MapPin size={13} style={{ color: "var(--color-primary)" }} />
          Saket Nagar Colony, Naria
        </div>
      </div>
    </header>
  );
}
