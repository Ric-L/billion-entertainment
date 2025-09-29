import Image from "next/image";
import SocialLinks from "./socials";

type Props = {
  name: string;
  image: string;
  bio: string;
  social: {
    instagram?: string;
    youtube?: string;
  };
};

export default function Hero({ name, image, bio, social }: Props) {
  return (
    <header className="relative z-10">
      <div
        className="rounded-2xl border border-border/60 bg-card/10 p-5 md:p-6 backdrop-blur-xl"
        style={{
          boxShadow: "0 0 0 1px color-mix(in oklch, var(--color-chart-3) 10%, transparent), 0 12px 50px color-mix(in oklch, var(--color-chart-2) 10%, transparent)",
        }}
      >
        <div className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-6">
          <div
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl ring-1 ring-border md:h-36 md:w-36"
            style={{
              boxShadow: "0 0 0 2px color-mix(in oklch, var(--color-chart-3) 20%, transparent), 0 0 30px color-mix(in oklch, var(--color-chart-2) 18%, transparent)",
            }}
          >
            <Image src={image || "/placeholder.svg?height=144&width=144&query=artist+portrait"} alt={`${name} portrait`} fill sizes="144px" className="object-cover" priority />
          </div>
          <div className="max-w-prose text-center md:text-left">
            <div className="inline-flex items-center gap-2">
              <span
                className="inline-block rounded-full px-2.5 py-1 text-xs font-medium"
                style={{
                  background: "color-mix(in oklch, var(--color-chart-2) 14%, transparent)",
                  boxShadow: "0 0 20px color-mix(in oklch, var(--color-chart-2) 16%, transparent)",
                }}
              >
                Electronic
              </span>
              <span
                className="inline-block rounded-full px-2.5 py-1 text-xs font-medium"
                style={{
                  background: "color-mix(in oklch, var(--color-chart-3) 14%, transparent)",
                  boxShadow: "0 0 20px color-mix(in oklch, var(--color-chart-3) 16%, transparent)",
                }}
              >
                Dubstep
              </span>
            </div>
            <h1 className="mt-2 text-pretty text-3xl font-semibold tracking-tight md:text-4xl">{name}</h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{bio}</p>
            <div className="mt-4">
              <SocialLinks instagram={social.instagram} youtube={social.youtube} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
