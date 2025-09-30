import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Mail, Phone, Music } from "lucide-react";

export default function VissPressKit() {
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
          <div className="space-y-4 text-white/70 leading-relaxed text-lg">
            <p className="transition-all duration-300 hover:text-white/90">
              Viss Ningthouja is an electronic and dubstep singer, composer and producer from Imphal, India, whose music fuses deep basslines, intricate rhythms, and ethereal textures with cultural
              influences from his roots.
            </p>
            <p className="transition-all duration-300 hover:text-white/90">
              With a growing catalog, Ningthouja has earned recognition for tracks such as <strong>Saayon, Saayon 2.0, Saayon 3.0, Kuru, Sara, Lamlen</strong> and also his recent releases including{" "}
              <strong>Saayon 4.0, Aura</strong>, which showcased his versatility in blending electronic and dubstep with traditional elements. With more than <strong>52.4M views</strong> on music
              platforms, Saayon captures the hearts of millions.
            </p>
            <p className="transition-all duration-300 hover:text-white/90">
              Adding to his musical journey, his international collaboration with <strong>Anxmus</strong> and many more has further enriched Ningthouja's dynamic sound and expanded his creative
              horizons.
            </p>
            <p className="transition-all duration-300 hover:text-white/90">
              Each release showcases Ningthouja's talent for crafting bold, genre-defying music that's both emotionally stirring and sonically innovative, earning over <strong>20M total views</strong>
              .
            </p>
          </div>
        </section>

        {/* Media Photos */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Media Assets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image src="/vis2.JPG" alt="Viss Ningthouja Promo" width={500} height={600} className="rounded-2xl transition-transform duration-500 group-hover:scale-110 w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <Image
                src="/viss2.JPG"
                alt="Viss Ningthouja Profile"
                width={500}
                height={600}
                className="rounded-2xl transition-transform duration-500 group-hover:scale-110 w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </section>

        {/* Notable Achievements */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Viral Success</h3>
              <p className="text-white/80">
                Saayon series garnered over <strong>52.4M views</strong> across music platforms
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:border-blue-500">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Total Reach</h3>
              <p className="text-white/80">
                Over <strong>20M total views</strong> across all releases
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-3">International Collaboration</h3>
              <p className="text-white/80">
                Worked with international artists including <strong>Anxmus</strong>
              </p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 transition-all duration-300 hover:border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Signature Sound</h3>
              <p className="text-white/80">Pioneering fusion of electronic/dubstep with traditional Manipuri elements</p>
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
              href="https://www.youtube.com/@vissningthouja"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-red-500 hover:scale-105 hover:shadow-2xl"
            >
              <Youtube className="w-6 h-6 text-red-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium transition-all duration-300 group-hover:text-white">YouTube</span>
            </Link>

            <Link
              href="https://www.instagram.com/viss_ningthouja_/?igsh=c3pia2xlNzB4MWV0#"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-pink-500 hover:scale-105 hover:shadow-2xl"
            >
              <Instagram className="w-6 h-6 text-pink-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium transition-all duration-300 group-hover:text-white">Instagram</span>
            </Link>

            <div className="group flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 hover:bg-gray-800 hover:border-green-500 hover:scale-105 hover:shadow-2xl opacity-80 cursor-not-allowed">
              <Music className="w-6 h-6 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium transition-all duration-300">Spotify</span>
            </div>
          </div>
        </section>

        {/* Discography Highlights */}
        <section className="space-y-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <div className="w-2 h-6 bg-white rounded-full"></div>
            Notable Releases
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["Saayon", "Saayon 2.0", "Saayon 3.0", "Saayon 4.0", "Kuru", "Sara", "Lamlen", "Aura"].map((track) => (
              <div key={track} className="bg-gray-900/30 rounded-xl p-4 text-center border border-gray-800 transition-all duration-300 hover:border-purple-400 hover:bg-gray-800/50">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Music className="w-4 h-4" />
                </div>
                <span className="text-white/90 font-medium">{track}</span>
              </div>
            ))}
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
