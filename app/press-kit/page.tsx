import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, Music } from "lucide-react";

export default function PressKit() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-fade-in">Press Kit</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-600 rounded-full animate-slide-right"></div>
        </section>

        {/* Artist Bio */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Biography
          </h2>
          <p className="text-white/70 leading-relaxed text-lg transition-all duration-300 hover:text-white/90">
            Vivek Morvadia is a dynamic artist, vocalist, and performer from Gujarat, India. With over 2000 shows, original music releases, and collaborations, he brings soulful energy to every stage.
          </p>
        </section>

        {/* Media Photos */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Media Assets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image src="/1.png" alt="Vivek Morvadia Promo" width={500} height={600} className="rounded-2xl transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image src="/12.png" alt="Vivek Morvadia Live" width={500} height={600} className="rounded-2xl transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </section>

        {/* Music Links */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Music & Media
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="https://open.spotify.com/artist/6s3Rdf9GgWkDMjIpWhRkgZ?si=yqgSgmqRSF2V6N9Yg7icBQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-white hover:scale-105 hover:shadow-2xl"
            >
              <Music className="w-6 h-6 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium transition-all duration-300 group-hover:text-white">Spotify</span>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UCG1BX23mRmCjW-7dutZRD1g"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-red-500 hover:scale-105 hover:shadow-2xl"
            >
              <Youtube className="w-6 h-6 text-red-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium transition-all duration-300 group-hover:text-white">YouTube</span>
            </Link>

            <Link
              href="https://www.instagram.com/vivek_morvadia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-pink-500 hover:scale-105 hover:shadow-2xl"
            >
              <Instagram className="w-6 h-6 text-pink-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium transition-all duration-300 group-hover:text-white">Instagram</span>
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Contact
          </h2>
          <div className="space-y-4">
            <Link
              href="mailto:manager@billionentertainment.co.in"
              className="group flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-white hover:scale-105 max-w-md"
            >
              <div className="p-2 bg-blue-500 rounded-lg transition-transform duration-300 group-hover:scale-110">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-white/80 transition-all duration-300 group-hover:text-white">manager@billionentertainment.co.in</span>
            </Link>

            <Link
              href="tel:+918794516245"
              className="group flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-green-500 hover:scale-105 max-w-md"
            >
              <div className="p-2 bg-green-500 rounded-lg transition-transform duration-300 group-hover:scale-110">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-white/80 transition-all duration-300 group-hover:text-white">+91 8794516245</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
