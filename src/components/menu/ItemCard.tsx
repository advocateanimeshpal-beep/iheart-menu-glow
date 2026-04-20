import { Sparkles } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { DietDot } from "./DietDot";

export function ItemCard({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="glass-card glass-card-hover relative w-full overflow-hidden rounded-2xl p-4 text-left animate-fade-up"
    >
      {item.featured && (
        <div
          className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
          style={{
            background: "var(--gradient-glow)",
            color: "var(--color-primary-foreground)",
            boxShadow: "var(--shadow-glow)",
          }}
        >
          <Sparkles size={11} strokeWidth={2.5} />
          Chef's Choice
        </div>
      )}

      <div className="flex gap-4">
        {item.image && (
          <div
            className="h-24 w-24 shrink-0 overflow-hidden rounded-xl"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              width={192}
              height={192}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col">
          <div className="flex items-start gap-2">
            <DietDot diet={item.diet} />
            <h3 className="flex-1 font-display text-lg font-semibold leading-tight text-foreground">
              {item.name}
            </h3>
          </div>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <div className="mt-auto pt-2">
            <span className="text-edison font-display text-xl font-bold">₹{item.price}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
