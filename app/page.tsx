import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import UpcomingClasses from "./components/UpcomingClasses";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <UpcomingClasses />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
