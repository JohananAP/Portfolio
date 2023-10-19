import { useTheme } from "@material-tailwind/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experince from "./components/Experience";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import ScrollPrompt from "./components/ScrollPrompt";

export default function App() {
  const theme = useTheme();
  return (
    <section theme={theme} className="flex flex-col justify-center bg-blue-50">
      <NavBar />
      <Welcome />
      <ScrollPrompt />
      <About />
      <Experince />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
