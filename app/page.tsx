import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import UpcomingClasses from "./components/UpcomingClasses";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-sage-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <UpcomingClasses />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
