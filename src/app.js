import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import htm from "htm";

import { contentPt } from "./data/content.pt.js?v=12";
import { contentEn } from "./data/content.en.js?v=12";

import { Header } from "./components/Header.js?v=12";
import { Hero } from "./components/Hero.js?v=12";
import { Metrics } from "./components/Metrics.js?v=12";
import { Spotlight } from "./components/Spotlight.js?v=12";
import { Highlights } from "./components/Highlights.js?v=12";
import { Experience } from "./components/Experience.js?v=12";
import { Stack } from "./components/Stack.js?v=12";
import { Education } from "./components/Education.js?v=12";
import { Contact } from "./components/Contact.js?v=12";

const html = htm.bind(React.createElement);

const contentMap = {
  pt: contentPt,
  en: contentEn
};

function getAutoTheme() {
  const hour = new Date().getHours();
  return hour >= 18 || hour < 6 ? "dark" : "light";
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio-lang") || "pt");
  const [themePreference, setThemePreference] = useState(() => localStorage.getItem("portfolio-theme") || "auto");
  const [activeSection, setActiveSection] = useState("hero");

  const locale = useMemo(() => contentMap[lang] || contentPt, [lang]);
  const theme = themePreference === "auto" ? getAutoTheme() : themePreference;

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = locale.brand + " | Software Engineer";
  }, [lang, locale.brand]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", themePreference);
  }, [themePreference]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");

    const syncTheme = () => {
      if (themePreference === "auto") {
        const nextTheme = getAutoTheme();
        document.body.dataset.theme = nextTheme;
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
      }
    };

    document.addEventListener("visibilitychange", syncTheme);
    window.addEventListener("focus", syncTheme);

    return () => {
      document.removeEventListener("visibilitychange", syncTheme);
      window.removeEventListener("focus", syncTheme);
    };
  }, [theme, themePreference]);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const vh = window.innerHeight;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.getAttribute("data-reveal-delay") || "0", 10);
            setTimeout(() => entry.target.classList.add("is-revealed"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -28px 0px" }
    );

    elements.forEach((el) => {
      const { top } = el.getBoundingClientRect();
      if (top > vh * 0.92) {
        el.classList.add("reveal-pending");
      } else {
        el.classList.add("is-revealed");
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return html`
    <div
      className=${`min-h-screen ${
        theme === "dark" ? "bg-hero-dark text-slate-100" : "bg-hero-light text-slate-900"
      }`}
    >
      <div className="mx-auto w-[min(1200px,calc(100%-32px))] py-6 pb-18 max-sm:w-[min(100%-20px,1200px)] max-sm:pt-4">
        <${Header}
          locale=${locale}
          lang=${lang}
          setLang=${setLang}
          themePreference=${themePreference}
          setThemePreference=${setThemePreference}
          activeSection=${activeSection}
        />

        <main>
          <${Hero} locale=${locale} />
          <${Metrics} metrics=${locale.metrics} />
          <${Spotlight} overview=${locale.spotlight.overview} />
          <${Highlights} highlights=${locale.highlights} />
          <${Experience} locale=${locale} />
          <${Stack} locale=${locale} />
          <${Education} locale=${locale} />
          <${Contact} contacts=${locale.spotlight.contacts} />
        </main>
      </div>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
