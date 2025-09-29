import { ChevronDown, ChevronUp, Instagram, Play, Mail, Phone, MapPin, Youtube, InstagramIcon, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VivekMorvadiaEPK() {
  // Social URLs
  const instagramUrl = "https://www.instagram.com/vivek_morvadia";
  const youtubeUrl = "https://www.youtube.com/@BillionEntertainment";

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute top-6 left-6 z-50">
        <Link href="/" className="ml-14 flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image src="/still2.png" alt="Vivek Morvadia" fill priority className=" scale-95 object-cover lg:scale-100 md:object-cover object-center md:object-left md:ml-[100px]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Corner Arrows */}
        <div className="absolute top-8 left-8 z-10">
          <ChevronDown className="w-6 h-6 text-white/60" />
          <div className="w-px h-24 bg-white/20 mx-auto mt-2"></div>
        </div>
        <div className="absolute top-8 right-8 z-10">
          <ChevronDown className="w-6 h-6 text-white/60" />
          <div className="w-px h-24 bg-white/20 mx-auto mt-2"></div>
        </div>
        <div className="absolute bottom-8 left-8 z-10">
          <div className="w-px h-24 bg-white/20 mx-auto mb-2"></div>
          <ChevronUp className="w-6 h-6 text-white/60" />
        </div>
        <div className="absolute bottom-8 right-8 z-10">
          <div className="w-px h-24 bg-white/20 mx-auto mb-2"></div>
          <ChevronUp className="w-6 h-6 text-white/60" />
        </div>

        {/* Main Hero Content */}
        <div className="relative mr-10 z-10 h-full flex flex-col justify-center items-center text-center">
          <div className="absolute top-8 right-8 flex items-center space-x-4">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer ">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer ">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-4 text-white drop-shadow-2xl">VIVEK MORVADIA</h1>
          <div className="flex items-center justify-center space-x-8 text-base sm:text-lg tracking-wider">
            <span className="text-white/80 font-medium">ARTIST • PERFORMER • VOCALIST</span>
          </div>
          <div className="mt-8 text-white/60 text-xs sm:text-sm tracking-widest">2000+ SHOWS • ORIGINAL MUSIC • COLLABORATIONS</div>
        </div>
      </section>

      {/* Biography Section */}
      <section className=" bg-gray-800 relative min-h-screen lg:bg-black p-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image src="/u12.png" alt="Vivek Morvadia Portrait" fill priority className="hidden lg:block object-cover object-center md:object-left md:scale-90 md:-ml-[120px]" sizes="100vw" />
            <div className="absolute inset-0 "></div>
            <div className="absolute inset-0 "></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex justify-center md:justify-end">
          <div className="w-full lg:w-auto lg:max-w-2xl space-y-8 md:space-y-14 mt-16 p-4 rounded bg-gray-800 mx-auto md:ml-auto md:mr-[50px]">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-white">BIOGRAPHY</h2>
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Born in the culturally vibrant village of Bodaka in Junagadh, Gujarat, Vivek Morvadia has come a long way from his humble beginnings to become a dynamic and soulful artist, whose voice
                now echoes across stages, celebrations, and digital platforms. At just 30 years old, Vivek has already crafted a musical legacy with more than 1,000 shows under his belt.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Beyond covers and live performances, Vivek has also ventured into the realm of original music. His portfolio includes two original Gujarati songs, both of which reflect his deep
                cultural roots, showcasing his commitment to contributing to regional music while pushing artistic boundaries.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-white/90 max-w-lg backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                Vivek's vocal style is deeply influenced by legends like KK, Arijit Singh, A.R. Rahman, Pritam, and Mithoon. He has collaborated with notable artists such as Kushal Chokshi, bringing
                diverse flavors to his performances and recordings.
              </p>
            </div>

            <div className="space-y-6 hidden lg:block pt-8 border-t border-white/20">
              <h3 className="text-xl font-semibold tracking-wider text-white/90">ARTIST DETAILS</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
                <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                  <p className="font-medium text-white/90">LOCATION</p>
                  <p>Bodaka, Gujarat, India</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                  <p className="font-medium text-white/90">GENRES</p>
                  <p>Gujarati, Bollywood, Folk</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                  <p className="font-medium text-white/90">SERVICES</p>
                  <p>Playback, Live Concerts, Weddings</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
                  <p className="font-medium text-white/90">EXPERIENCE</p>
                  <p>2000+ Shows</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}

            {/* Optional: Small profile image for mobile or as accent */}
          </div>
        </div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40 z-10 hidden lg:block">VIVEK MORVADIA</div>
      </section>
      <div className="space-y-6 pt-8  mt-16 p-8 rounded lg:hidden block">
        <h3 className="text-xl font-semibold tracking-wider text-white/90">ARTIST DETAILS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
            <p className="font-medium text-white/90">LOCATION</p>
            <p>Bodaka, Gujarat, India</p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
            <p className="font-medium text-white/90">GENRES</p>
            <p>Gujarati, Bollywood, Folk</p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
            <p className="font-medium text-white/90">SERVICES</p>
            <p>Playback, Live Concerts, Weddings</p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 p-3 rounded-lg">
            <p className="font-medium text-white/90">EXPERIENCE</p>
            <p>2000+ Shows</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs mx-auto h-[500px] rounded-lg overflow-hidden relative shadow-2xl lg:hidden">
        <Image src="/1.png" alt="Vivek Morvadia Portrait" fill className="object-cover object-left md:scale-90 " sizes="(max-width: 640px) 100vw, 20rem" />
      </div>

      {/* Media Section */}
      <section className="min-h-screen bg-gradient-to-t from-black via-slate-900 to-slate-800 p-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-12 items-start">
          {/* Showreel */}
          <div className="w-full md:w-[48%] space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">Showreel</span>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-video">
                <video className="absolute inset-0 w-full h-full object-cover" src="/vivekreel.mp4" controls playsInline muted autoPlay loop aria-label="Vivek Morvadia video reel" />
              </div>
            </div>
          </div>

          {/* Spotify */}
          <div className="w-full md:w-[48%] space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">♪</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">Spotify</span>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://open.spotify.com/embed/track/68nhuep4SL6oopPcOkXcQS?utm_source=generator&theme=0"
                className="w-full h-[220px] sm:h-[280px] md:h-[352px]"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
              ></iframe>
            </div>
          </div>

          {/* YouTube */}
          <div className="w-full md:w-[48%] space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">YouTube</span>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/SY5ceTJPrn4?si=pOFPPrSjjnujMiFf&rel=0&modestbranding=1&playsinline=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative labels */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs tracking-widest text-white/40 hidden md:block">MUSIC</div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40 hidden md:block">VIDEO</div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-slate-900 to-slate-800 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">VM</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wider">VIVEK MORVADIA</h3>
                  <p className="text-white/60">Artist • Vocalist • Performer</p>
                </div>
              </div>
              <p className="text-white/80 max-w-md leading-relaxed">
                From the cultural heart of Gujarat to stages across India, bringing soulful music and unforgettable performances to every audience.
              </p>
              <div className="flex space-x-4">
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                  <Youtube className="w-5 h-5" />
                </a>
                {/* Add more if you have other socials */}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider">SERVICES</h4>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-white transition-colors cursor-pointer">Live Concerts</li>
                <li className="hover:text-white transition-colors cursor-pointer">Wedding Performances</li>
                <li className="hover:text-white transition-colors cursor-pointer">Corporate Events</li>
                <li className="hover:text-white transition-colors cursor-pointer">Playback Singing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Studio Recording</li>
                <li className="hover:text-white transition-colors cursor-pointer">Music Collaborations</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider">CONTACT</h4>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-white/50" />
                  <span className="text-sm">Bodaka, Junagadh, Gujarat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  <span className="text-sm">manager@billionentertainment.co.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/50" />
                  <span className="text-sm">+91 8794516245</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">© 2024 Vivek Morvadia. All rights reserved.</div>
            <div className="flex space-x-6 text-white/60 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/press-kit" className="hover:text-white transition-colors">
                Press Kit
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
