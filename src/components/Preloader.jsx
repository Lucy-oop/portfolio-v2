import React from "react";
import "./Preloader.css";

export default function Preloader({ show }) {
  if (!show) return null;
  return <div id="preloader" />;
}
