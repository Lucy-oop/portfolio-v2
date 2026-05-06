import React, { useState, useEffect } from "react";
import { Sun, Moon, Terminal } from "lucide-react";
import "./Nav.css";

export default function Nav() {
  const [isLight, setIsLight] = useState(() => localStorage.getItem("theme") === "light");

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLight);
  }, [isLight]);

  const toggleTheme = () => {
    const newMode = !isLight;
    setIsLight(newMode);
    document.body.classList.toggle("light-mode", newMode);
    localStorage.setItem("theme", newMode ? "light" : "dark");
  };

  return (
    <nav className="glass-nav glow">
      {/* THE MAGIC SVG GLOW OVERLAY */}
      <svg className="glow-container">
        <rect className="glow-blur" pathLength="100" />
        <rect className="glow-line" pathLength="100" />
      </svg>

      <a href="#about" className="nav-brand" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="nav-brand-icon">
          <Terminal size={18} strokeWidth={2.5} />
        </div>
        LUCY.
      </a>

      <div className="nav-links">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="nav-divider"></div>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}