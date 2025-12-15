import { getArtistById } from "@/lib/artist-data";
import { ChevronDown, ChevronUp, Instagram, Play, Mail, Phone, MapPin, Youtube, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default function ArtistEPK({ params }: PageProps) {
  const artist = getArtistById(params.id);

  if (!artist) {
    notFound();
  }

  const {
    name,
    role,
    location,
    genres,
    bio,
    fullBio,
    image,
    heroImage,
    stats = [],
    socials,
    services = [],
    accentColor,
    embedded = [], // ← New: array of embed URLs
  } = artist;

  const heroImg = heroImage || image;
  const portraitImg = image;

  // Auto-detect embed type for better labeling
  const getEmbedLabel = (url: string) => {
    if (url.includes("spotify.com")) return "Spotify";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "YouTube";
    return "Media";
  };

  const getEmbedIcon = (url: string) => {
    if (url.includes("spotify.com")) return <span className="text-white font-bold text-lg">♪</span>;
    if (url.includes("youtube.com") || url.includes("youtu.be")) return <Play className="w-6 h-6 text-white" />;
    return <Play className="w-6 h-6 text-white" />;
  };

  const getEmbedBgColor = (url: string) => {
    if (url.includes("spotify.com")) return "bg-green-600";
    if (url.includes("youtube.com") || url.includes("youtu.be")) return "bg-red-600";
    return "bg-gray-600";
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="ml-4 flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image src={heroImg} alt={name} fill priority className="object-cover object-center scale-95 md:scale-100" />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        <div className="absolute bottom-8 left-8 z-10">
          <div className="w-px h-24 bg-white/20 mx-auto mb-2"></div>
          <ChevronUp className="w-6 h-6 text-white/60" />
        </div>
        <div className="absolute bottom-8 right-8 z-10">
          <div className="w-px h-24 bg-white/20 mx-auto mb-2"></div>
          <ChevronUp className="w-6 h-6 text-white/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
          <div className="absolute top-8 right-8 flex items-center space-x-4">
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition">
                <Instagram className="w-4 h-4" />
              </a>
            )}
            {socials.youtube && (
              <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition">
                <Youtube className="w-4 h-4" />
              </a>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-4 drop-shadow-2xl">{name.toUpperCase()}</h1>
          <p className="text-white/80 font-medium uppercase">{role}</p>
          <p className="mt-4 text-white/60 text-xs sm:text-sm tracking-widest">{stats.map((s) => `${s.value} ${s.label}`).join(" • ")}</p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="relative min-h-screen bg-gray-800 lg:bg-black p-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={portraitImg} alt={name} fill className="hidden lg:block object-cover object-center" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-center lg:justify-end">
          <div className="w-full lg:max-w-2xl space-y-8 md:space-y-14 mt-16 p-6 rounded bg-transparent backdrop-blur-3xl flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-white/60">BIOGRAPHY</h2>
            <div className="space-y-6 text-white/80 max-w-2xl">
              {fullBio.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-6 hidden lg:block pt-8 border-t border-white/20 w-full">
              <h3 className="text-xl font-semibold tracking-wider text-white/50">ARTIST DETAILS</h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                  <p className="font-medium text-white/50">LOCATION</p>
                  <p>{location}</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                  <p className="font-medium text-white/50">GENRES</p>
                  <p>{genres.join(", ")}</p>
                </div>
                {services.length > 0 && (
                  <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                    <p className="font-medium text-white/50">SERVICES</p>
                    <p>{services.join(", ")}</p>
                  </div>
                )}
                {stats.length > 0 && (
                  <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                    <p className="font-medium text-white/50">STATS</p>
                    <p>{stats.map((s) => `${s.label}: ${s.value}`).join(" • ")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40 hidden lg:block">{name.toUpperCase()}</div>
      </section>

      {/* Mobile Artist Details */}
      <div className="p-8 lg:hidden">
        <h3 className="text-xl font-semibold tracking-wider text-white/90 mb-6">ARTIST DETAILS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
          <div className="bg-white/5 p-3 rounded-lg">
            <p className="font-medium text-white/90">LOCATION</p>
            <p>{location}</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <p className="font-medium text-white/90">GENRES</p>
            <p>{genres.join(", ")}</p>
          </div>
          {services.length > 0 && (
            <div className="bg-white/5 p-3 rounded-lg">
              <p className="font-medium text-white/90">SERVICES</p>
              <p>{services.join(", ")}</p>
            </div>
          )}
        </div>
      </div>

      {/* Media / Embedded Section */}
      {embedded.length > 0 && (
        // <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 p-8">
        <section className="min-h-screen bg-gradient-to-t from-slate-800 via-slate-900 to-slate-800 p-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white/90">MEDIA</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {embedded.map((embedUrl, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 ${getEmbedBgColor(embedUrl)} rounded-full flex items-center justify-center shadow-lg`}>{getEmbedIcon(embedUrl)}</div>
                    <span className="text-2xl md:text-3xl font-bold">{getEmbedLabel(embedUrl)}</span>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <iframe
                      src={embedUrl}
                      // className="w-full aspect-video lg:aspect-square xl:h-[500px]"
                      className="w-full h-[220px] sm:h-[280px] md:h-[352px]"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      title={`${name} - ${getEmbedLabel(embedUrl)} Embed ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative side labels */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs tracking-widest text-white/30 hidden xl:block">MUSIC & VIDEO</div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/30 hidden xl:block">{name.toUpperCase()}</div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-800 via-slate-900 ">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r from-${accentColor}-400 to-${accentColor}-600 rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-lg">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wider">{name}</h3>
                  <p className="text-white/60">{genres.join(" • ")}</p>
                </div>
              </div>
              <p className="text-white/80 max-w-md leading-relaxed">{bio}</p>
              <div className="flex space-x-4">
                {socials.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {socials.youtube && (
                  <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition">
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div> */}

            <div className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider">SERVICES</h4>
              <ul className="space-y-3 text-white/70">
                {services.length > 0 ? (
                  services.map((service) => (
                    <li key={service} className="hover:text-white transition">
                      {service}
                    </li>
                  ))
                ) : (
                  <li className="text-white/50">Contact for bookings</li>
                )}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider">CONTACT</h4>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-white/50" />
                  <span className="text-sm">{location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  <span className="text-sm">manager@billionentertainment.co.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">© 2025 {name}. All rights reserved.</div>
            <div className="flex space-x-6 text-white/60 text-sm">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
