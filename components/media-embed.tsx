type Props = {
  title: string;
  type: "youtube" | "spotify" | "mp4";
  src: string;
  fallbackHref?: string;
};

export default function MediaEmbed({ title, type, src, fallbackHref }: Props) {
  return (
    <article
      className="rounded-xl border border-border/60 bg-card/10 p-3 md:p-4 backdrop-blur-xl"
      style={{
        boxShadow: "0 0 0 1px color-mix(in oklch, var(--color-chart-3) 10%, transparent), 0 10px 40px color-mix(in oklch, var(--color-chart-2) 8%, transparent)",
      }}
    >
      <div className="mb-3 h-1 w-12 rounded-full" style={{ background: "color-mix(in oklch, var(--color-chart-2) 60%, transparent)" }} aria-hidden="true" />
      <h3 className="text-pretty text-base font-semibold text-foreground md:text-lg">{title}</h3>
      <div className="mt-3">
        {type === "youtube" && (
          <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-black/30" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="YouTube video player"
              src={src}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}

        {type === "spotify" && (
          <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-black/20" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              title="Spotify embed"
              src={src}
              className="absolute inset-0 h-full w-full"
              style={{ border: "none" }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        )}

        {type === "mp4" && (
          <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-black/30" style={{ aspectRatio: "16 / 9" }}>
            <video className="absolute inset-0 h-full w-full" src={src} controls playsInline preload="metadata" poster="/dj-showreel-poster.jpg" />
          </div>
        )}
      </div>

      {/* Fallback link if the embed needs updating */}
      {fallbackHref && type !== "mp4" && (
        <p className="mt-3 text-xs text-muted-foreground">
          If the embed doesn&apos;t load,{" "}
          <a href={fallbackHref} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4" style={{ color: "var(--color-chart-2)" }}>
            open in {type === "youtube" ? "YouTube" : "Spotify"}
          </a>
          .
        </p>
      )}

      {/* Helpful note on placeholders */}
      {(["youtube", "spotify"].includes(type) && src.includes("VIDEO_ID")) || src.includes("TRACK_OR_ARTIST_ID") ? (
        <p className="mt-2 text-xs text-destructive-foreground/80">Replace the placeholder ID in the embed URL to show the correct media.</p>
      ) : null}
    </article>
  );
}
