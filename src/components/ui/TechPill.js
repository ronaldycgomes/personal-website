import React from "react";
import htm from "htm";
import { techIconMap } from "../../config/logos.js?v=20";

const html = htm.bind(React.createElement);

export function TechPill({ name }) {
  const icon = techIconMap[name];
  // Icons from Simple Icons are black SVGs — invert them to white in dark mode.
  const darkInvertSet = new Set([
    "GitHub", "EC2", "S3", "Lambda", "CloudWatch", "DynamoDB", "API Gateway", "SQS"
  ]);
  const needsInvert = darkInvertSet.has(name);

  return html`
    <li className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
      ${icon ? html`<img src=${icon} alt=${name} className=${`h-4 w-4 shrink-0 object-contain${needsInvert ? " dark:invert" : ""}`} />` : null}
      ${name}
    </li>
  `;
}
