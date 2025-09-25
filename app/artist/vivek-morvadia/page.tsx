import { ChevronDown, ChevronUp, Instagram, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function VivekMorvadiaEPK() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image src="/1.png" alt="Vivek Morvadia" fill priority className=" object-contain  ml-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Decorative Elements */}
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

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          {/* <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border-4 border-white/20 relative">
            <Image src="/hero.jpeg" alt="Vivek Morvadia" fill className="object-cover" />
          </div> */}
          {/* <div className="text-center">
            <h1 className="text-6xl font-bold tracking-wider mb-4">VIVEK MORVADIA</h1>
            <div className="flex items-center justify-center space-x-8 text-sm tracking-wider">
              <span className="text-white/60">ARTIST</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Biography Section */}
      {/* <section className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 p-8"> */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 from-0% via-slate-700 via-50% p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-wider">VIVEK MORVADIA</h2>
            <p className="text-sm leading-relaxed text-white/80 max-w-md">
              Born in the culturally vibrant village of Bodaka in Junagadh, Gujarat, Vivek Morvadia has come a long way from his humble beginnings to become a dynamic and soulful artist, whose voice
              now echoes across stages, celebrations, and digital platforms. At just 30 years old, Vivek has already crafted a musical legacy with more than 1,000 shows under his belt.
            </p>
            <p className="text-sm leading-relaxed text-white/80 max-w-md">
              Beyond covers and live performances, Vivek has also ventured into the realm of original music. His portfolio includes two original Gujarati songs, both of which reflect his deep cultural
              roots, showcasing his commitment to contributing to regional music while pushing artistic boundaries.
            </p>
            <p className="text-sm leading-relaxed text-white/80 max-w-md">
              Vivek's vocal style is deeply influenced by legends like KK, Arijit Singh, A.R. Rahman, Pritam, and Mithoon. He has collaborated with notable artists such as Kushal Chokshi, bringing
              diverse flavors to his performances and recordings.
            </p>

            {/* Artist Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold tracking-wider">ARTIST</h3>
              <div className="text-xs space-y-1 text-white/60">
                <p>BODAKA / GUJARAT / INDIA</p>
                <p>PLAYBACK / LIVE CONCERTS / WEDDINGS</p>
                <p>GUJARATI / BOLLYWOOD / FOLK</p>
                <p>ORIGINAL MUSIC / COLLABORATIONS</p>
                <p>1000+ SHOWS / KUSHAL CHOKSHI</p>
                <p>CLASSICAL / POP / EXPERIMENTAL</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="w-80 h-96 rounded-lg overflow-hidden relative">
              <Image src="/1.png" alt="Vivek Morvadia Portrait" fill className="object-cover" />
            </div>

            {/* Labels and Social */}
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">VM</span>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">MUSIC</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <Instagram className="w-6 h-6" />
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs">SC</span>
                </div>
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs">YT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40">VIVEK MORVADIA</div>
      </section>

      {/* Media Section */}
      <section className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#0f172a]  to-[#334155] p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="w-80 h-96 rounded-lg overflow-hidden relative">
              <Image src="/12.png" alt="Vivek Morvadia Studio" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-wider">VIVEK MORVADIA</h3>
              <p className="text-sm text-white/80">PRODUCER // ARTIST</p>
            </div>
          </div>

          {/* Right Content - Media Grid */}
          <div className="space-y-8">
            {/* Spotify */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">♪</span>
              </div>
              <span className="text-2xl font-bold">Spotify</span>
            </div>

            {/* Video Grid */}
            {/* <iframe
              data-testid="embed-iframe"
              className="border-[12px]"
              src="https://open.spotify.com/embed/track/68nhuep4SL6oopPcOkXcQS?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe> */}
            <div className="">
              <iframe
                data-testid="embed-iframe"
                className="border-radius:12px"
                // src="https://open.spotify.com/embed/track/68nhuep4SL6oopPcOkXcQS?utm_source=generator"
                src="https://open.spotify.com/embed/track/68nhuep4SL6oopPcOkXcQS?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/* YouTube */}
            <div className="flex items-center justify-between">
              <iframe
                width="100%"
                height="352"
                src="https://www.youtube.com/embed/SY5ceTJPrn4?si=pOFPPrSjjnujMiFf"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs tracking-widest text-white/40">MUSIC</div>
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 text-xs tracking-widest text-white/40">VIDEO</div>
      </section>
    </div>
  );
}
