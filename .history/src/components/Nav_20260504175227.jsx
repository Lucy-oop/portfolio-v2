import React, { useState, useEffect } from "react";
import { Sun, Moon, Terminal } from "lucide-react";
import "./Nav.css";

export default function Nav() {
  // ... existing state/logic ...

  return (
    <nav className="glass-nav glow-effect">
      {/* 🌟 The Glow Layer */}
      <svg className="glow-container">
        <rect pathLength="100" strokeLinecap="round" className="glow-blur"></rect>
        <rect pathLength="100" strokeLinecap="round" className="glow-line"></rect>
      </svg>

      <a href="#about" className="nav-brand">
        <div className="nav-brand-icon"><Terminal size={18} /></div>
        LUCY.
      </a>

      <div className="nav-links">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <div className="nav-divider"></div>
        <button onClick={toggleTheme} className="theme-toggle">
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}