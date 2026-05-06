import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
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
      <Sidebar />

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
}

export default App;
