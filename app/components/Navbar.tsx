"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "./ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Classes", link: "/classes" },
  { name: "Gift Cards", link: "/gift-cards" },
  { name: "Contact", link: "#contact" },
];

function SteamLogo() {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center px-2 py-1"
    >
      <img
        src="/logo.png"
        alt="STEM & Petals"
        className="h-14 sm:h-16 md:h-20 w-auto"
      />
    </a>
  );
}

export default function SteamNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar className="top-0">
      {/* Desktop */}
      <NavBody className="bg-sage-500/95">
        <SteamLogo />
        <NavItems
          items={navItems}
          className="text-sage-700 hover:text-sage-900"
        />
        <NavbarButton
          href="#contact"
          variant="primary"
          className="bg-oak-400 text-sage-900 hover:bg-oak-300 border-0 rounded-full shadow-[0_2px_8px_rgba(250,181,16,0.4)]"
        >
          Get in Touch
        </NavbarButton>
      </NavBody>

      {/* Mobile */}
      <MobileNav className="bg-sage-500/95">
        <MobileNavHeader>
          <SteamLogo />
          <MobileNavToggle
            isOpen={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          className="bg-sage-500"
        >
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => setMobileOpen(false)}
              className="block w-full px-4 py-2 text-white/90 font-medium hover:text-white hover:bg-sage-600 rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}
          <NavbarButton
            href="#contact"
            variant="primary"
            className="w-full bg-oak-400 text-sage-900 hover:bg-oak-300 border-0 rounded-full shadow-[0_2px_8px_rgba(250,181,16,0.4)]"
          >
            Get in Touch
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
