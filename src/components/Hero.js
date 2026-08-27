import React from "react";
import htm from "htm";

const html = htm.bind(React.createElement);
const profilePhoto = "./assets/profile.webp";

export function Hero({ locale }) {
  return html`
    <section className="grid gap-6 py-7 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]" id="hero">
      <article data-reveal="" className="order-1 relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7 lg:order-1">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-orange-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
        <p className="mb-3 text-[0.78rem] uppercase tracking-[0.18em] text-orange-500">${locale.hero.eyebrow}</p>
        <h1 className="max-w-[9ch] font-serif text-[clamp(3rem,9vw,5.8rem)] leading-[0.94]">${locale.hero.title}</h1>
        <p className="mt-4 text-[clamp(1.15rem,2.6vw,1.55rem)] text-cyan-900 dark:text-[#98dade]">${locale.hero.subtitle}</p>
        <p className="mt-5 max-w-3xl text-[0.98rem] leading-8 text-slate-600 dark:text-slate-300 sm:text-base">${locale.hero.summary}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-cyan-900 px-5 text-center font-bold text-white no-underline sm:w-auto"
            href="mailto:gomesronaldy@hotmail.com"
          >
            ${locale.hero.primaryCta}
          </a>
          <a
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-slate-200/90 bg-white px-5 text-center font-bold no-underline shadow-sm transition hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:w-auto"
            href="https://www.linkedin.com/in/ronaldy-gomes"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${locale.hero.secondaryCta}
          </a>
          <a
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white px-5 text-center font-bold no-underline shadow-sm transition hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 sm:w-auto"
            href="./assets/cv-ronaldy-gomes.pdf"
            download="Ronaldy_Gomes_CV.pdf"
            title="Download Curriculum Vitae (PDF)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            ${locale.hero.cvCta || "Baixar CV"}
          </a>
        </div>
      </article>

      <aside data-reveal="" data-reveal-delay="120" className="order-2 relative grid gap-4 overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-deep sm:rounded-[32px] sm:p-7 lg:order-2">
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-sky-200/60 blur-2xl dark:bg-[#ff9464]/10"></div>
        <div className="relative min-h-[320px] rounded-[24px] border border-slate-200/80 bg-slate-50/60 p-2.5 dark:border-white/10 sm:min-h-[460px] sm:rounded-[28px] sm:p-3">
          <img
            className="min-h-[300px] w-full rounded-[20px] object-cover [object-position:center_top] sm:min-h-[432px] sm:rounded-[22px]"
            src=${profilePhoto}
            alt=${locale.hero.photoAlt}
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute bottom-3 right-3 max-w-[170px] rounded-[18px] bg-slate-900/80 px-3 py-2.5 text-slate-50 shadow-2xl sm:bottom-5 sm:right-5 sm:max-w-[220px] sm:rounded-[20px] sm:px-4 sm:py-3">
            <strong>${locale.hero.badgeTitle}</strong>
            <span className="mt-1 block text-sm text-slate-200">${locale.hero.badgeBody}</span>
          </div>
        </div>
      </aside>
    </section>
  `;
}
