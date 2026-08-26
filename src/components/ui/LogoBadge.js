import React, { useState } from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function LogoBadge({ logo, logoBg, fallback, alt }) {
  const [failed, setFailed] = useState(false);

  if (logo && !failed) {
    const bgStyle = logoBg ? { backgroundColor: logoBg } : {};
    const containerCls = logoBg
      ? "h-14 w-14 shrink-0 overflow-hidden rounded-2xl p-2"
      : "h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/95 p-2 dark:border-white/10 dark:bg-white/5";
    return html`
      <div className=${containerCls} style=${bgStyle}>
        <img className="h-full w-full object-contain" src=${logo} alt=${alt} onError=${() => setFailed(true)} />
      </div>
    `;
  }

  return html`
    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-slate-200/90 bg-white text-sm font-extrabold text-cyan-900 dark:border-white/10 dark:bg-white/5 dark:text-[#98dade]">
      <span>${fallback}</span>
    </div>
  `;
}
