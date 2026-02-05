import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Hero />
      <About />
      <Project />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
