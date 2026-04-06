"use client";

import { useEffect, useRef } from "react";
import SteamNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function ClassesPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    // Sawyer injects content adjacent to its own script tag,
    // so we must place the script directly inside the container.
    const script = document.createElement("script");
    script.type = "application/javascript";
    script.async = true;
    script.id = "SA_exli2nF3Vpf8s0xPgKNRbBkP9b9Ei698";
    script.setAttribute("data-sawyertools", "sawyertools");
    script.src =
      "https://www.hisawyer.com/embed/exli2nF3Vpf8s0xPgKNRbBkP9b9Ei698.js";

    widgetRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <SteamNavbar />
      <main className="flex-1 bg-white pt-20">
        <div ref={widgetRef} className="min-h-screen" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
