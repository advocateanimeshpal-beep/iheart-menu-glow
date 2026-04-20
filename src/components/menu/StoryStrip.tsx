import bulbsImg from "@/assets/cafe-bulbs.jpg";
import brickImg from "@/assets/cafe-brick-heart.jpg";
import ovenImg from "@/assets/cafe-pizza-oven.jpg";
import espressoImg from "@/assets/cafe-espresso.jpg";
import { Wifi, Coffee, Pizza, Cake } from "lucide-react";

export function StoryStrip() {
  return (
    <section className="mt-6">
      {/* Intro card */}
      <div className="glass-card rounded-2xl p-5 text-center">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.4em]"
          style={{ color: "var(--color-primary)" }}
        >
          Our Story
        </p>
        <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
          Brewed with heart, since day one
        </h2>
        <div
          className="mx-auto my-3 h-px w-16"
          style={{ background: "var(--gradient-glow)" }}
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          iheart café serves the finest espresso-based blends and freshly brewed
          beans, paired with wood-fired pizzas, crispy snacks and bakery
          favourites. Whether you&apos;re after a cosy spot to work, brunch with
          friends, or just the best cup nearby — we&apos;ve got you covered.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            { icon: <Wifi size={12} />, label: "Free Wi-Fi" },
            { icon: <Coffee size={12} />, label: "Specialty Coffee" },
            { icon: <Pizza size={12} />, label: "Wood-Fired Pizza" },
            { icon: <Cake size={12} />, label: "Fresh Bakery" },
          ].map((p) => (
            <span
              key={p.label}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/85"
              style={{
                background: "oklch(0.24 0.018 45 / 0.7)",
                border: "1px solid var(--color-border)",
              }}
            >
              {p.icon}
              {p.label}
            </span>
          ))}
        </div>
      </div>

      {/* Photo mosaic — real café shots */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <PhotoTile src={ovenImg} alt="Wood-fired pizza oven at iheart café" caption="Wood-fired" tall />
        <div className="grid grid-rows-2 gap-3">
          <PhotoTile src={espressoImg} alt="Barista pulling espresso on a Rancilio machine" caption="Espresso" />
          <PhotoTile src={brickImg} alt="Exposed brick wall with iheart heart logo" caption="Heart wall" />
        </div>
        <PhotoTile
          src={bulbsImg}
          alt="Copper piping with hanging Edison bulbs above the iheart merch wall"
          caption="Edison glow"
          wide
        />
      </div>
    </section>
  );
}

function PhotoTile({
  src,
  alt,
  caption,
  tall,
  wide,
}: {
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${
        tall ? "row-span-1 h-full min-h-[260px]" : wide ? "col-span-2 h-44" : "h-[124px]"
      }`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, oklch(0.14 0.012 45 / 0.85) 0%, transparent 55%)",
        }}
      />
      <span
        className="absolute bottom-2 left-3 text-[10px] font-semibold uppercase tracking-[0.3em]"
        style={{ color: "var(--color-primary)" }}
      >
        {caption}
      </span>
    </div>
  );
}
