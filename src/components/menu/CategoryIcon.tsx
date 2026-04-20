import { Coffee, GlassWater, Egg, Beef, Sparkles, UtensilsCrossed, Flame, Cake } from "lucide-react";
import type { MenuCategory } from "@/data/menu";

const map: Record<MenuCategory["icon"], React.ComponentType<{ className?: string; size?: number }>> = {
  coffee: Coffee,
  iced: GlassWater,
  breakfast: Egg,
  burger: Beef,
  specialty: Sparkles,
  pasta: UtensilsCrossed,
  indian: Flame,
  dessert: Cake,
};

export function CategoryIcon({
  type,
  className,
  size = 22,
}: {
  type: MenuCategory["icon"];
  className?: string;
  size?: number;
}) {
  const Icon = map[type];
  return <Icon className={className} size={size} />;
}
