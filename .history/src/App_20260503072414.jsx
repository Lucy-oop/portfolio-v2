import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom"; // You can remove this if you aren't using separate pages anymore

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Preloader from "./components/Preloader";
import Contact from "./components/Contact";

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
      
      {/* Background Lines */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* --- THE SCROLLER WRAPPER --- */}
      <div className="scroller">
        
        <section className="snap-section section-bg-1">
          <About />
        </section>

        <section className="snap-section section-bg-2">
          <Projects />
        </section>

        <section className="snap-section section-bg-3">
          <Skills />
        </section>

        <section className="snap-section section-bg-4">
          <Contact />
        </section>

      </div>
    </>
  );
}

export default App;