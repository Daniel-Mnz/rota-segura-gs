import { useState } from "react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "O problema", href: "#problema" },
  { label: "A solução", href: "#solucao" },
  { label: "Protótipo", href: "#prototipo" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-xl font-bold tracking-tight">
          Rota <span className="text-primary">Segura</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary-text transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="rounded-lg border border-white/10 px-3 py-2 text-sm text-foreground md:hidden"
          aria-expanded={menuAberto}
          aria-label="Alternar menu"
        >
          {menuAberto ? "Fechar" : "Menu"}
        </button>
      </nav>

      {menuAberto && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="text-sm text-secondary-text hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}