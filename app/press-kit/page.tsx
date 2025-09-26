import Image from "next/image";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function PressKit() {
  return (
    <div className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-5xl font-bold">Press Kit</h1>

        {/* Artist Bio */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Biography</h2>
          <p className="text-white/70 leading-relaxed">
            Vivek Morvadia is a dynamic artist, vocalist, and performer from Gujarat, India. With over 2000 shows, original music releases, and collaborations, he brings soulful energy to every stage.
          </p>
        </section>

        {/* Media Photos */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Media Assets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Image src="/1.png" alt="Vivek Morvadia Promo" width={500} height={600} className="rounded-lg shadow-lg" />
            <Image src="/12.png" alt="Vivek Morvadia Live" width={500} height={600} className="rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Music Links */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Music & Media</h2>
          <ul className="space-y-4 text-white/80">
            <li>
              <a href="https://open.spotify.com/artist/your-spotify-id" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                Spotify Profile
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCG1BX23mRmCjW-7dutZRD1g" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                YouTube Channel
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vivek_morvadia" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                Instagram Profile
              </a>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="space-y-3 text-white/80">
            <p className="flex items-center gap-2">
              <Mail size={18} /> manager@billionentertainment.co.in
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> +91 8794516245
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
