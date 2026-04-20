import heroImg from "@/assets/cafe-hero.jpg";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <header className="relative -mx-4 mb-2 h-[82vh] min-h-[560px] overflow-hidden">
      <img
        src={heroImg}
        alt="iheart Café interior with copper Edison-bulb piping, exposed red brick wall and wooden tables"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "brightness(0.62) saturate(1.05)" }}
      />
      {/* Warm Edison glow overlay — copper/amber from above, deep brick fade to bg below */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 18%, oklch(0.82 0.17 70 / 0.45) 0%, transparent 55%), linear-gradient(to bottom, oklch(0.18 0.012 50 / 0.25) 0%, oklch(0.18 0.012 50 / 0.55) 55%, var(--color-background) 100%)",
        }}
      />

      {/* Subtle bulb sparkle row to echo the ceiling pipework */}
      <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-around opacity-90 sm:top-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="filament-pulse"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            <div
              className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
              style={{
                background: "oklch(0.92 0.16 80)",
                boxShadow:
                  "0 0 22px oklch(0.86 0.18 75 / 0.95), 0 0 44px oklch(0.78 0.165 65 / 0.7)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-14 text-center">
        <p
          className="mb-3 text-[11px] font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--color-primary)" }}
        >
          Haldwani · Nainital
        </p>
        <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl">
          iheart
        </h1>
        <p
          className="mt-1 font-display text-xl italic text-foreground/95 sm:text-2xl"
          style={{ textShadow: "0 2px 14px oklch(0 0 0 / 0.7)" }}
        >
          café
        </p>

        <div
          className="my-5 h-px w-24"
          style={{ background: "var(--gradient-glow)" }}
        />

        <p className="max-w-sm text-sm leading-relaxed text-foreground/85">
          The best coffee in Haldwani &amp; Nainital — espresso-forward,
          wood-fired pizzas and freshly baked treats under the copper-pipe glow.
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-xs text-foreground/75">
          <MapPin size={13} style={{ color: "var(--color-primary)" }} />
          Haldwani · Nainital, Uttarakhand
        </div>
      </div>
    </header>
  );
}
