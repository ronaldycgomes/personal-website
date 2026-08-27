import React, { useEffect, useState } from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function BackToTop({ lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe quando passar de 350px de rolagem
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const label = lang === "pt" ? "Voltar ao topo" : "Back to top";

  return html`
    <button
      type="button"
      onClick=${scrollToTop}
      aria-label=${label}
      title=${label}
      className=${`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-soft backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-orange-500 hover:text-orange-500 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-deep dark:hover:border-orange-400 dark:hover:text-orange-400 ${
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-4"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  `;
}
