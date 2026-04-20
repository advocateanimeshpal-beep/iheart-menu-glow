import { useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import { DietDot } from "./DietDot";

export function ItemModal({ item, onClose }: { item: MenuItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      style={{ background: "oklch(0 0 0 / 0.7)", backdropFilter: "blur(6px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card relative w-full max-w-lg overflow-hidden rounded-t-3xl sm:rounded-3xl animate-fade-up"
        style={{ maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-colors hover:bg-primary/20"
          style={{ background: "oklch(0.18 0.012 50 / 0.7)", color: "var(--color-foreground)" }}
        >
          <X size={18} />
        </button>

        {item.image ? (
          <div className="relative h-64 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-fade-bottom)" }}
            />
          </div>
        ) : (
          <div
            className="h-32 w-full"
            style={{ background: "var(--gradient-edison)" }}
          />
        )}

        <div className="px-6 pb-7 pt-4">
          {item.featured && (
            <div
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{
                background: "var(--gradient-glow)",
                color: "var(--color-primary-foreground)",
              }}
            >
              <Sparkles size={12} strokeWidth={2.5} />
              Chef's Choice
            </div>
          )}

          <div className="flex items-start gap-3">
            <div className="mt-2">
              <DietDot diet={item.diet} size={16} />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground">
                {item.name}
              </h2>
              <p className="text-edison mt-1 font-display text-2xl font-bold">₹{item.price}</p>
            </div>
          </div>

          <div className="divider-edison my-5" />

          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
