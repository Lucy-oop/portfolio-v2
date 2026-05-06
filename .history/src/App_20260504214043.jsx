import { useEffect, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Preloader from "./components/Preloader";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hide = () => setLoading(false);

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  return (
    <>
      <Preloader show={loading} />
      <Nav />
      
      {/* Background Lines */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className="scroller">
        
        <section id="about" className="snap-section section-bg-1">
          <About />
        </section>

        <section id="skills" className="snap-section section-bg-2">
          <Skills />
        </section>

         <section id="about" className="snap-section section-bg-3">
          <Projects />
        </section>

        <section id="about" className="snap-section section-bg-4">
          <Contact />
        </section>

      </div>
    </>
  );
}

export default App;
