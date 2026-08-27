import React, { useEffect, useState } from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return html`
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] w-full overflow-hidden bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-orange-500 via-[#ff9464] to-cyan-500 transition-[width] duration-150 ease-out"
        style=${{ width: `${progress}%` }}
      />
    </div>
  `;
}
