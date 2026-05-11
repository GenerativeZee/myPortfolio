"use client";

import { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="spotlight"
      style={{ left: position.x, top: position.y }}
    />
  );
}
