import React, { useState } from "react";
import "./Projects.css";
import Name from "./Name";

// ✅ images (reuse safely)
import lucyAI from "./mini/lucyAi.png"
import nexusImg from "./mini/nexus.png";
import roastImg from "./mini/roast.png";
import momKitchen from "./mini/momkitchen.png";
import kfcImg from "./mini/kfc.png";
import ecommerceImg from "./mini/ecommerce.png";
import myFlixImg from "./mini/myflix.png";
import trinkoraImg from "./mini/trinkora.png";
import chatBotImg from "./mini/chatbot.png";
import jobTracker from "./mini/jobtracker.png"



const projects = [
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
     title: "RoastMyLanding",
    href: "https://roast-my-landing-xi.vercel.app/",
    info: "Next.js 16, TypeScript, Tailwind, Cheerio, API Routes",
    responsive: true,
    img: roastImg,
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
  },
  {
    title: "Chatbot Project",
    href: "https://lucy-oop.github.io/Chatbot-project/",
    info: "React, Vite, JavaScript, API",
    responsive: true,
    img: chatBotImg,
  },
];

export default function Projects() {
  const [preview, setPreview] = useState(null);

  return (
    <div className="project-container">
      <Name />

      <div className={`cornerPreview ${preview ? "show" : ""}`}>
        {preview && <img src={preview} alt="Project preview" />}
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
}
