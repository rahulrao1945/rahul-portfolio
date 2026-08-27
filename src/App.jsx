import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Profiles from "./sections/Profiles";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-body overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
