import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { ADDRESS, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export const NAV = [
  { href: "/#inicio", label: "Início" },
  { href: "/#sobre", label: "Sobre nós" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#equipe", label: "Nossa equipe" },
  { href: "/#estrutura", label: "Nossa estrutura" },
  { href: "/#contato", label: "Contato" },
];

export function WhatsButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-navy shadow-soft",
    outline: "border border-primary/30 text-primary hover:bg-secondary",
    light: "bg-background text-primary hover:bg-secondary shadow-soft",
  }[variant];
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </a>
  );
}

export function Logo({ className = "h-12" }: { className?: string }) {
  return <img src={logo.url} alt="duo life Studio" className={`${className} w-auto`} />;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5 py-2">
        <a href="/#inicio" aria-label="duo life Studio — início">
          <Logo className="h-12" />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WhatsButton className="hidden sm:inline-flex">Fale conosco</WhatsButton>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden" aria-label="Menu móvel">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3.5 text-base font-medium">
              {n.label}
            </a>
          ))}
          <WhatsButton className="mt-5 w-full">Fale conosco</WhatsButton>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo className="h-16" />
          <p className="mt-4 text-sm text-muted-foreground">Movimento com propósito.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Áreas de atuação</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Fisioterapia</li><li>Pilates</li><li>Saúde</li><li>Performance</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contato</h3>
          <p className="mt-4 flex gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{ADDRESS}</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-3 flex gap-2 text-sm text-muted-foreground hover:text-primary">
            <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} duo life Studio · Caeté/MG</p>
          <Link to="/privacidade" className="hover:text-primary">Política de privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
