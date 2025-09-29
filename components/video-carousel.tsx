"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
    id: "SY5ceTJPrn4",
    title: "Featured Artist Performance",
    artist: "Vivek Morvadia",
    description: "Experience the energy of live performance",
  },
  // {
  //   id: "kJQP7kiw5Fk", // Luis Fonsi - Despacito (example)
  //   title: "Chart-Topping Hit",
  //   artist: "Global Sensation",
  //   description: "Music that moves the world",
  // },
  // {
  //   id: "fJ9rUzIMcZQ", // Queen - Bohemian Rhapsody (example)
  //   title: "Timeless Classic",
  //   artist: "Legendary Act",
  //   description: "Redefining musical boundaries",
  // },
];

export default function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <div key={video.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentVideo ? "opacity-100" : "opacity-0"}`}>
            <div className="video-bg">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
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
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
              BILLION
              <span className="block text-balance ">ENTERTAINMENT</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">{videos[currentVideo].description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-lg font-medium">
                Featuring: <span className="text-primary">{videos[currentVideo].artist}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={prevVideo} className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentVideo ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"}`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={nextVideo} className="bg-white/20 border-white/30 text-white hover:bg-white/30">
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
          /* Default to 16:9 fit by width; overridden by aspect-ratio queries below */
          width: 100vw;
          height: 56.25vw; /* 9/16 of width */
        }
        /* Portrait or narrow screens: expand by height so video covers fully */
        @media (max-aspect-ratio: 16/9) {
          .video-bg-iframe {
            width: 177.78vh; /* 16/9 * 100vh */
            height: 100vh;
          }
        }
        /* Landscape or wide screens: expand by width so video covers fully */
        @media (min-aspect-ratio: 16/9) {
          .video-bg-iframe {
            width: 100vw;
            height: 56.25vw; /* 9/16 of width */
          }
        }
      `}</style>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const videos = [
//   {
//     // id: "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up (example)
//     id: "SY5ceTJPrn4",
//     title: "Featured Artist Performance",
//     artist: "Vivek Morvadia",
//     description: "Experience the energy of live performance",
//   },
//   // {
//   //   id: "kJQP7kiw5Fk", // Luis Fonsi - Despacito (example)
//   //   title: "Chart-Topping Hit",
//   //   artist: "Global Sensation",
//   //   description: "Music that moves the world",
//   // },
//   // {
//   //   id: "fJ9rUzIMcZQ", // Queen - Bohemian Rhapsody (example)
//   //   title: "Timeless Classic",
//   //   artist: "Legendary Act",
//   //   description: "Redefining musical boundaries",
//   // },
// ];

// export default function VideoCarousel() {
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length);
//     }, 8000); // Change video every 8 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const nextVideo = () => {
//     setCurrentVideo((prev) => (prev + 1) % videos.length);
//   };

//   const prevVideo = () => {
//     setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0">
//         {videos.map((video, index) => (
//           <div key={video.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentVideo ? "opacity-100" : "opacity-0"}`}>
//             <iframe
//               src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
//               className="w-full h-full object-cover scale-125"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//               style={{
//                 pointerEvents: "none",
//                 border: "none",
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content Overlay */}
//       <div className="relative z-10 flex items-center justify-center h-full px-4">
//         <div className="text-center text-white max-w-4xl">
//           <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
//             <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
//               BILLION
//               <span className="block text-balance ">ENTERTAINMENT</span>
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">{videos[currentVideo].description}</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <p className="text-lg font-medium">
//                 Featuring: <span className="text-primary">{videos[currentVideo].artist}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Controls */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="icon" onClick={prevVideo} className="bg-white/20 border-white/30 text-white hover:bg-white/30">
//             <ChevronLeft className="h-4 w-4" />
//           </Button>

//           <div className="flex gap-2">
//             {videos.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentVideo(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentVideo ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"}`}
//               />
//             ))}
//           </div>

//           <Button variant="outline" size="icon" onClick={nextVideo} className="bg-white/20 border-white/30 text-white hover:bg-white/30">
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }
