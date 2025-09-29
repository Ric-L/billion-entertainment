import { Instagram, Youtube } from "lucide-react";

type Props = {
  instagram?: string;
  youtube?: string;
};

export default function SocialLinks({ instagram, youtube }: Props) {
  return (
    <nav aria-label="Social links">
      <ul className="flex items-center justify-center gap-3 md:justify-start">
        {instagram && (
          <li>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm backdrop-blur-xl transition"
              style={{
                background: "color-mix(in oklch, var(--color-chart-2) 10%, transparent)",
                boxShadow: "0 0 0 1px color-mix(in oklch, var(--color-chart-2) 16%, transparent), 0 6px 24px color-mix(in oklch, var(--color-chart-2) 10%, transparent)",
              }}
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
              <span aria-hidden="true">Instagram</span>
            </a>
          </li>
        )}
        {youtube && (
          <li>
            <a
              href={youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border/60 px-3 py-2 text-sm backdrop-blur-xl transition"
              style={{
                background: "color-mix(in oklch, var(--color-chart-3) 10%, transparent)",
                boxShadow: "0 0 0 1px color-mix(in oklch, var(--color-chart-3) 16%, transparent), 0 6px 24px color-mix(in oklch, var(--color-chart-3) 10%, transparent)",
              }}
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">YouTube</span>
              <span aria-hidden="true">YouTube</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
