"use client";

import { useEffect, useRef } from "react";
import SteamNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function GiftCardsPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.type = "application/javascript";
    script.async = true;
    script.id = "SA_8d_wyhKKvoWnCrY6ZAyM1pbVy4GGoH9D";
    script.setAttribute("data-sawyertools", "sawyertools");
    script.src =
      "https://www.hisawyer.com/embed/8d_wyhKKvoWnCrY6ZAyM1pbVy4GGoH9D.js";

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
