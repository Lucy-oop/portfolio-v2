import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";

import lublogcy from "./mini/lublogcy.png";
import lucyAI from "./mini/lucyAi.png";
import nexusImg from "./mini/nexus.png";
import momKitchen from "./mini/momkitchen.png";
import kfcImg from "./mini/kfc.png";
import ecommerceImg from "./mini/ecommerce.png";
import myFlixImg from "./mini/myflix.png";
import trinkoraImg from "./mini/trinkora.png";
import jobTracker from "./mini/jobtracker.png"

const projects = [
  {
    title: "LuBlogcy",
    href: "https://lucy-oop.github.io/Lublogcy/",
    info: "React, Tailwind CSS,TypeScript,Firebase",
    responsive: true,
    img: lublogcy,
  },
  {
    title: "Portfolio AI Assistant",
    href: "https://ai-portfolio-chatbot-cyan.vercel.app",
    info: "React, Tailwind CSS,Gemini API,TypeScript",
    responsive: true,
    img: lucyAI,
  },
  {
    title: "Nexus SaaS",
    href: "https://lucy-oop.github.io/nexus-saas/",
    info: "React, Tailwind CSS, Framer Motion, Recharts, Vite",
    responsive: true,
    img: nexusImg,
  },
  {
    title: "Job Tracker Dashboard",
    href: "https://lucy-oop.github.io/job-tracker-dashboard/",
    info: "React,Tailwind CSS, Node.js ,Lucide Icons ,Express,data Base",
    responsive: true,
    img: jobTracker,
  },
  {
    title: "TrinKora Clothing",
    href: "https://lucy-oop.github.io/TRINKORAClothing/",
    info: "React, JavaScript, Cart",
    responsive: true,
    img: trinkoraImg,
  },
  {
    title: "Mom’s Kitchen",
    href: "https://lucy-oop.github.io/mom-skitchen/",
    info: "React, JavaScript, Ordering UI",
    responsive: true,
    img: momKitchen,
  },
  {
    title: "KFC Website",
    href: "https://lucy-oop.github.io/KFC-L/",
    info: "HTML, Tailwind CSS, JavaScript",
    responsive: true,
    img: kfcImg,
  },
  {
    title: "Ecommerce Project (TS)",
    href: "https://lucy-oop.github.io/Ecommerce-project-ts/",
    info: "React, TypeScript, Cart",
    responsive: true,
    img: ecommerceImg,
  },
  {
    title: "MyFlix",
    href: "https://lucy-oop.github.io/myFlix-L/",
    info: "React, API, Firebase, Login, Player",
    responsive: true,
    img: myFlixImg,
  }
];

export default function Projects() {
  const [preview, setPreview] = useState(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when the user scrolls to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false); 
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
   <div className="project-container">

      {/* THE UPDATED CORNER PREVIEW (Hides on mobile in CSS) */}
      <div className={`cornerPreview ${preview ? "show" : ""}`}>
        {preview && <img src={preview} alt="Project preview" />}
      </div>

      {/* NEW: THE MASSIVE LIQUID PREVIEW HINT */}
      <div className={`liquid-hint ${preview ? "hide" : "show"}`}>
        {/* These abstract shapes create the modern 'blob' animation */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        
        {/* The big, modern instruction typography */}
        <div className="hint-content">
          <h1>EXPLORE<br/>PREVIEWS</h1>
          <p>✦ Hover a link to see the preview</p>
        </div>
      </div>

      <div className="allproject">
        {projects.map((p) => (
          <div className="project" key={p.title}>
            <a
              href={p.href}
              className="pname"
              data-text={p.title}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setPreview(p.img)}
              onMouseLeave={() => setPreview(null)}
              onFocus={() => setPreview(p.img)}
              onBlur={() => setPreview(null)}
            >
              {p.title}
            </a>

            <p className="p-info">
              {p.info}
              {p.responsive && <span>[Responsive]</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );