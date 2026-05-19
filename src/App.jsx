import { ThemeProvider } from "./context/ThemeContext";
import MyNavbar from "./components/MyNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import ResumeDownload from "./components/ResumeDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <MyNavbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <ResumeDownload />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
