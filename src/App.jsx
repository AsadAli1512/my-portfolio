import { ThemeProvider } from "./context/ThemeContext";
import MyNavbar from "./components/MyNavbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudy from "./components/CaseStudy";
import Projects from "./components/Projects";
import Process from "./components/Process";
import About from "./components/About";
import Skills from "./components/Skills";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <MyNavbar />
      <main>
        <Hero />
        <Services />
        <CaseStudy />
        <Projects />
        <Process />
        <About />
        <Skills />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
