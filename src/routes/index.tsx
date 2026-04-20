import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Leaf, Drumstick } from "lucide-react";
import { categories, type DietType, type MenuItem } from "@/data/menu";
import { Hero } from "@/components/menu/Hero";
import { StoryStrip } from "@/components/menu/StoryStrip";
import { QuickSwitchNav } from "@/components/menu/QuickSwitchNav";
import { ItemCard } from "@/components/menu/ItemCard";
import { ItemModal } from "@/components/menu/ItemModal";
import { Footer } from "@/components/menu/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iheart Café · Best Coffee in Haldwani & Nainital" },
      {
        name: "description",
        content:
          "iheart Café — the best coffee in Haldwani and Nainital. Specialty espresso, wood-fired pizzas, crispy snacks and freshly baked treats in a cosy industrial space with free Wi-Fi.",
      },
      { property: "og:title", content: "iheart Café · Best Coffee in Haldwani & Nainital" },
      {
        property: "og:description",
        content:
          "Specialty espresso, wood-fired pizzas and fresh bakery in a copper-pipe Edison-glow café. Perfect for brunch, work or catch-ups.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [dietFilter, setDietFilter] = useState<DietType | "all">("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isUserScrollingProgrammatically = useRef(false);

  // Scroll to category when clicked in nav
  const handleSelectCat = (id: string) => {
    setActiveCat(id);
    const el = sectionRefs.current[id];
    if (el) {
      isUserScrollingProgrammatically.current = true;
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      window.setTimeout(() => {
        isUserScrollingProgrammatically.current = false;
      }, 800);
    }
  };

  // Observe sections for active state on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isUserScrollingProgrammatically.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveCat(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto w-full max-w-2xl px-4 pb-8">
      <Hero />

      <StoryStrip />

      <QuickSwitchNav active={activeCat} onSelect={handleSelectCat} />

      {/* Diet filter chips */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <FilterChip
          active={dietFilter === "all"}
          onClick={() => setDietFilter("all")}
          label="All"
        />
        <FilterChip
          active={dietFilter === "veg"}
          onClick={() => setDietFilter("veg")}
          label="Veg"
          icon={<Leaf size={13} />}
          tone="veg"
        />
        <FilterChip
          active={dietFilter === "non-veg"}
          onClick={() => setDietFilter("non-veg")}
          label="Non-Veg"
          icon={<Drumstick size={13} />}
          tone="non-veg"
        />
      </div>

      {/* Menu sections */}
      <div className="mt-8 space-y-14">
        {categories.map((cat) => {
          const filteredGroups = cat.groups
            .map((g) => ({
              ...g,
              items:
                dietFilter === "all" ? g.items : g.items.filter((i) => i.diet === dietFilter),
            }))
            .filter((g) => g.items.length > 0);

          if (filteredGroups.length === 0) return null;

          return (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="scroll-mt-28"
            >
              <div className="mb-6 text-center">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.4em]"
                  style={{ color: "var(--color-primary)" }}
                >
                  Menu
                </p>
                <h2 className="mt-1 font-display text-3xl font-bold text-foreground">
                  {cat.name}
                </h2>
                <p className="mt-1 text-sm italic text-muted-foreground">{cat.tagline}</p>
                <div
                  className="mx-auto mt-3 h-px w-16"
                  style={{ background: "var(--gradient-glow)" }}
                />
              </div>

              {filteredGroups.map((group, gi) => (
                <div key={gi} className={gi > 0 ? "mt-8" : ""}>
                  {group.title && (
                    <h3 className="mb-3 px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      ── {group.title} ──
                    </h3>
                  )}
                  <div className="grid grid-cols-1 gap-3">
                    {group.items.map((item) => (
                      <ItemCard
                        key={item.id}
                        item={item}
                        onClick={() => setSelectedItem(item)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </div>

      <Footer />

      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  icon,
  tone,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  tone?: "veg" | "non-veg";
}) {
  const toneColor =
    tone === "veg" ? "var(--color-veg)" : tone === "non-veg" ? "var(--color-non-veg)" : "var(--color-primary)";
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all"
      style={{
        background: active ? toneColor : "oklch(0.24 0.018 45 / 0.6)",
        color: active ? "var(--color-primary-foreground)" : "var(--color-foreground)",
        border: `1px solid ${active ? "transparent" : "var(--color-border)"}`,
        boxShadow: active ? `0 0 18px ${toneColor}` : "none",
      }}
    >
      {icon}
      {label}
    </button>
  );
}
