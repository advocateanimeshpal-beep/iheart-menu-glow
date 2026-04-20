import type { DietType } from "@/data/menu";

export function DietDot({ diet, size = 14 }: { diet: DietType; size?: number }) {
  const isVeg = diet === "veg";
  return (
    <span
      aria-label={isVeg ? "Vegetarian" : "Non-vegetarian"}
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        border: `1.5px solid ${isVeg ? "var(--color-veg)" : "var(--color-non-veg)"}`,
        borderRadius: 3,
      }}
    >
      <span
        style={{
          width: size * 0.5,
          height: size * 0.5,
          borderRadius: "50%",
          backgroundColor: isVeg ? "var(--color-veg)" : "var(--color-non-veg)",
        }}
      />
    </span>
  );
}
