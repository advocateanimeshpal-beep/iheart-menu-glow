import { useEffect, useRef } from "react";
import { categories } from "@/data/menu";
import { CategoryIcon } from "./CategoryIcon";

export function QuickSwitchNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current?.querySelector<HTMLButtonElement>(
      `[data-cat="${active}"]`,
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  return (
    <div
      className="sticky top-0 z-30 -mx-4 px-4 py-3 backdrop-blur-xl"
      style={{
        background: "linear-gradient(to bottom, oklch(0.18 0.012 50 / 0.92), oklch(0.18 0.012 50 / 0.75))",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide"
      >
        {categories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              data-cat={cat.id}
              onClick={() => onSelect(cat.id)}
              className="group flex shrink-0 flex-col items-center gap-1.5 rounded-xl px-4 py-2.5 transition-all"
              style={{
                background: isActive
                  ? "var(--gradient-glow)"
                  : "oklch(0.24 0.018 45 / 0.6)",
                border: `1px solid ${isActive ? "transparent" : "var(--color-border)"}`,
                boxShadow: isActive ? "var(--shadow-glow)" : "none",
                color: isActive ? "var(--color-primary-foreground)" : "var(--color-foreground)",
                minWidth: 78,
              }}
            >
              <CategoryIcon type={cat.icon} size={20} />
              <span className="text-[11px] font-medium uppercase tracking-wider whitespace-nowrap">
                {cat.name.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
