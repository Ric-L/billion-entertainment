"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, InstagramIcon, LucideFacebook, LucideTwitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
    id: "SY5ceTJPrn4",
    title: "Featured Artist Performance",
    artist: "Vivek Morvadia",
    description: "Experience the energy of live performance",
  },
  {
    // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
    id: "gdsRyn22CAE",
    title: "Featured Artist Performance",
    artist: "AJ Maisnam",
    // description: "Experience the energy of live performance",
  },
  {
    // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
    id: "gNwuTOjrD0o",
    title: "Featured Artist Performance",
    artist: "MC LEAN",
    // description: "Experience the energy of live performance",
  },
  {
    // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
    id: "4RuGYsxsKTI",
    title: "Featured Artist Performance",
    artist: "Yarsin",
    // description: "Experience the energy of live performance",
  },
  {
    // "https://www.youtube.com/embed/B2Hn-xkaRVY?si=RYSofPsG_rNz08yy"
    // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
    id: "B2Hn-xkaRVY",
    title: "Featured Artist Performance",
    artist: "Tuhin Handique",
    // description: "Experience the energy of live performance",
  },
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const changeIndex = (newIndex: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    setTimeout(() => setPrevIndex(null), 1000);
  };

  const nextVideo = () => {
    changeIndex((currentIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    changeIndex((currentIndex - 1 + videos.length) % videos.length);
  };

  const instagramUrl = "https://www.instagram.com/vivek_morvadia";
  const youtubeUrl = "https://www.youtube.com/@BillionEntertainment";
  const twitterURl = "https://x.com/billionent1";
  const fbURl = "https://www.facebook.com/share/17SYDwkzQE/";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Current video */}
        <div key={videos[currentIndex].id} className="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <div className="video-bg">
            <iframe
              src={`https://www.youtube.com/embed/${videos[currentIndex].id}?autoplay=1&mute=1&loop=1&playlist=${videos[currentIndex].id}&controls=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0`}
              className="video-bg-iframe"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                pointerEvents: "none",
                border: "none",
              }}
            />
          </div>
        </div>

        {/* Previous video during transition */}
        {prevIndex !== null && (
          <div key={videos[prevIndex].id} className="absolute inset-0 transition-opacity duration-1000 opacity-0">
            <div className="video-bg">
              <iframe
                src={`https://www.youtube.com/embed/${videos[prevIndex].id}?autoplay=1&mute=1&loop=1&playlist=${videos[prevIndex].id}&controls=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0`}
                className="video-bg-iframe"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  pointerEvents: "none",
                  border: "none",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Social icons - adjusted padding and size for mobile */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-30 flex items-center space-x-2 sm:space-x-4">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>
        <a href={twitterURl} target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <LucideTwitter className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>
        <a href={fbURl} target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 rounded-full hover:bg-white/20 transition-colors cursor-pointer">
          <LucideFacebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
        <div className="text-center text-white max-w-3xl sm:max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-balance">
              BILLION
              <span className="block text-balance">ENTERTAINMENT</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-pretty leading-relaxed">{videos[currentIndex].description}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <p className="text-base sm:text-lg font-medium">
                Featuring: <span className="text-primary">{videos[currentIndex].artist}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - larger touch targets on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 sm:gap-4">
          <Button variant="outline" size="icon" onClick={prevVideo} className="h-8 w-8 sm:h-9 sm:w-9 bg-white/20 border-white/30 text-white hover:bg-white/30">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-1.5 sm:gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => changeIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"}`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={nextVideo} className="h-8 w-8 sm:h-9 sm:w-9 bg-white/20 border-white/30 text-white hover:bg-white/30">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Global CSS for YouTube iframe */}
      <style jsx global>{`
        .video-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: black;
        }
        .video-bg-iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 56.25vw;
        }
        @media (max-aspect-ratio: 16/9) {
          .video-bg-iframe {
            width: 177.78vh;
            height: 100vh;
          }
        }
        @media (min-aspect-ratio: 16/9) {
          .video-bg-iframe {
            width: 100vw;
            height: 56.25vw;
          }
        }
      `}</style>
    </section>
  );
}
