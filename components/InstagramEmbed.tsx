"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

type InstagramEmbedProps = {
  url: string;
  caption: string;
  label: string;
};

/**
 * Official Instagram blockquote embed with a custom elegant frame.
 * Loads embed.js once and reprocesses on mount so reels/posts render inline.
 */
export default function InstagramEmbed({ url, caption, label }: InstagramEmbedProps) {
  useEffect(() => {
    const SRC = "https://www.instagram.com/embed.js";
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SRC}"]`
    );

    if (existing) {
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    script.onload = () => window.instgrm?.Embeds.process();
    document.body.appendChild(script);
  }, [url]);

  return (
    <figure className="reveal flex h-full flex-col overflow-hidden rounded-2xl border border-softgray bg-clinical shadow-card">
      <div className="flex items-center gap-2 border-b border-softgray/80 px-5 py-4">
        <span className="h-2 w-2 rounded-full bg-cyan" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-nutrigen">
          {label}
        </span>
      </div>

      <div className="ig-frame flex-1 px-2 pt-2">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            margin: 0,
            padding: 0,
            width: "100%",
          }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver publicação no Instagram
          </a>
        </blockquote>
      </div>

      <figcaption className="border-t border-softgray/80 px-5 py-4 text-sm leading-relaxed text-dna/80">
        {caption}
      </figcaption>
    </figure>
  );
}
