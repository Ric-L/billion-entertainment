// import type { Metadata } from "next";
// import { cn } from "@/lib/utils";
// import LaserBackground from "@/components/laser-background";
// import Hero from "@/components/viss-hero";
// import MediaEmbed from "@/components/media-embed";
// import SocialLinks from "@/components/socials";

// export const metadata: Metadata = {
//   title: "EPK — Viss Ningthouja",
//   description: "Electronic/Dubstep DJ & Producer EPK",
// };

// const artist = {
//   id: 2,
//   name: "Viss Ningthouja",
//   image: "/vis2.JPG",
//   bio: `Viss Ningthouja is an electronic and dubstep singer, composer and producer from Imphal, India, whose music fuses deep basslines, intricate rhythms, and ethereal textures with cultural influences from his roots. ... With a growing catalog, Ningthouja has earned recognition for tracks such as Saayon, Saayon 2.0, Saayon 3.0, Kuru, Sara, Lamlen and also his recent releases including Saayon 4.0, Aura, which showcased his versatility in blending electronic and dubstep with traditional elements. With more than 52.4M views on music platforms, Saayon captures the hearts of millions. Adding to his musical journey, his international collaboration with Anxmus and many more has further enriched Ningthouja’s dynamic sound and expanded his creative horizons. ... Each release showcases Ningthouja’s talent for crafting bold, genre-defying music that’s both emotionally stirring and sonically innovative, earning over 20M total views.`,
//   social: {
//     instagram: "https://www.instagram.com/viss_ningthouja_?igsh=MW41bm42MGRmcnJlNw==",
//     youtube: "https://www.youtube.com/@vissningthouja",
//   },
// };

// // NOTE: Replace these embed URLs with the correct IDs when available.
// const EPK_MEDIA = {
//   youtubeEmbedUrl: "https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0",
//   // Example: "https://open.spotify.com/embed/track/TRACK_ID" or "https://open.spotify.com/embed/artist/ARTIST_ID"
//   spotifyEmbedUrl: "https://open.spotify.com/embed/track/TRACK_OR_ARTIST_ID",
//   mp4Url: "/vissreel.mp4",
// };

// export default function Page() {
//   return (
//     <main className="relative min-h-dvh overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">{/* <LaserBackground /> */}</div>

//       {/* Overlay to improve contrast on top of lasers */}
//       <div
//         className="absolute inset-0 -z-10"
//         aria-hidden="true"
//         style={{
//           background:
//             "radial-gradient(1200px 600px at 50% -10%, color-mix(in oklch, var(--color-chart-2) 10%, transparent), transparent), radial-gradient(800px 400px at 10% 10%, color-mix(in oklch, var(--color-chart-3) 10%, transparent), transparent), linear-gradient(to bottom, color-mix(in oklch, var(--color-background) 86%, transparent), transparent 20%, color-mix(in oklch, var(--color-background) 86%, transparent) 80%)",
//         }}
//       />

//       <section className={cn("mx-auto w-full max-w-7xl px-4 py-8 md:py-12")}>
//         <Hero name={artist.name} image={artist.image} bio={artist.bio} social={artist.social} />

//         {/* Media grid with glass spacing */}
//         <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
//           {/* Feature YouTube wider on desktop */}
//           <div className="lg:col-span-2">
//             <MediaEmbed title="YouTube Showcase" type="youtube" src={EPK_MEDIA.youtubeEmbedUrl} fallbackHref={artist.social.youtube} />
//           </div>

//           <MediaEmbed title="Spotify Feature" type="spotify" src={EPK_MEDIA.spotifyEmbedUrl} fallbackHref="https://open.spotify.com/" />

//           <MediaEmbed title="Showreel (MP4)" type="mp4" src={EPK_MEDIA.mp4Url} />

//           <div
//             className="rounded-xl border border-border/60 bg-card/10 p-4 backdrop-blur-xl"
//             style={{
//               boxShadow: "0 0 0 1px color-mix(in oklch, var(--color-chart-3) 12%, transparent), 0 10px 40px color-mix(in oklch, var(--color-chart-2) 8%, transparent)",
//             }}
//           >
//             <div className="mb-3 h-1 w-14 rounded-full" style={{ background: "color-mix(in oklch, var(--color-chart-2) 60%, transparent)" }} aria-hidden="true" />
//             <h3 className="text-pretty text-lg font-semibold text-foreground">Connect</h3>
//             <p className="mt-1 text-sm text-muted-foreground">Bookings, press, and collaborations.</p>
//             <div className="mt-4">
//               <SocialLinks instagram={artist.social.instagram} youtube={artist.social.youtube} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
