"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#lab", label: "Lab" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#" className="font-semibold tracking-[0.4em] text-xs uppercase">
          SMOY
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-200 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((state) => !state)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div
        className={clsx(
          "border-t border-white/5 bg-background/90 px-4 py-4 sm:px-6 lg:px-8 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-4 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-200">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
