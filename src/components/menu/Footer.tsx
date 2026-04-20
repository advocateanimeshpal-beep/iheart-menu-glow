import { Instagram, Facebook, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="-mx-4 mt-16 px-6 pb-10 pt-12 text-center" style={{
      background: "linear-gradient(to bottom, transparent 0%, oklch(0.14 0.01 45) 30%)",
    }}>
      <div className="mx-auto max-w-md">
        <h3 className="font-display text-3xl font-bold text-foreground">iheart</h3>
        <p className="font-display text-base italic" style={{ color: "var(--color-primary)" }}>
          café · varanasi
        </p>

        <div className="divider-edison my-6 mx-auto w-32" />

        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start justify-center gap-2">
            <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-primary)" }} />
            <span>Saket Nagar Colony, Naria, Varanasi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock size={15} style={{ color: "var(--color-primary)" }} />
            <span>Open daily · 8:00 AM – 11:00 PM</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              background: "var(--gradient-glow)",
              color: "var(--color-primary-foreground)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="glass-card flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110"
            style={{ color: "var(--color-primary)" }}
          >
            <Facebook size={18} />
          </a>
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70">
          © {new Date().getFullYear()} iheart café
        </p>
      </div>
    </footer>
  );
}
