"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Nav, NavLink } from "@/components/nav";

export function SiteHeader() {
  const pathname = usePathname();
  // The page the menu was opened on; navigating anywhere else closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg tracking-tight text-ink">
          <span className="font-light">{site.name.slice(0, 4)}</span>
          <span className="font-semibold">{site.name.slice(4)}</span>
        </Link>

        <Nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </Nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <Nav className="flex flex-col gap-4 border-t border-line px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} className="py-1 text-base">
              {link.label}
            </NavLink>
          ))}
        </Nav>
      )}
    </header>
  );
}
