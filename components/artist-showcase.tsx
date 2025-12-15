"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Artist, getAllArtists } from "@/lib/artist-data";

export default function ArtistShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const artists: Artist[] = getAllArtists();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSocialClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % artists.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const getCardPosition = (index: number) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);

    // Horizontal spacing between cards
    const horizontalSpacing = 420;
    const translateX = offset * horizontalSpacing;

    // For concave, change the sign: const translateZ = Math.pow(absOffset, 1.8) * 200;
    const translateZ = -Math.pow(absOffset, 1.8) * 200;

    // Rotate cards to face center
    const rotateY = offset * 15;

    // Fade out distant cards
    const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.2;

    return { translateX, translateZ, rotateY, opacity };
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-black pb-24 md:pb-32 overflow-hidden">
      <div className="w-full mx-auto" style={{ maxWidth: "100vw" }}>
        <div className={`text-center pb-24 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">OUR ARTISTS</h2>
        </div>

        <div className="hidden md:block relative w-full mb-12" style={{ height: "600px" }}>
          <div className="absolute inset-0 flex items-center justify-center overflow-visible" style={{ perspective: "1500px" }}>
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {artists.map((artist, index) => {
                const { translateX, translateZ, rotateY, opacity } = getCardPosition(index);

                return (
                  <div
                    key={artist.id}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                      transformStyle: "preserve-3d",
                      opacity,
                      pointerEvents: Math.abs(index - currentIndex) > 2 ? "none" : "auto",
                    }}
                  >
                    <ArtistCard
                      artist={artist}
                      hoveredArtist={hoveredArtist}
                      setHoveredArtist={setHoveredArtist}
                      expanded={expanded}
                      setExpanded={setExpanded}
                      handleSocialClick={handleSocialClick}
                      isDesktop
                      isCenterCard={index === currentIndex}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            size="icon"
            variant="secondary"
            className="absolute left-8 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/90 hover:bg-white text-black backdrop-blur-md shadow-xl border-2 border-gray-200"
            style={{ zIndex: 50 }}
            onClick={prev}
          >
            <ChevronLeft className="h-7 w-7" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="absolute right-8 top-1/2 -translate-y-1/2 h-14 w-14 rounded-full bg-white/90 hover:bg-white text-black backdrop-blur-md shadow-xl border-2 border-gray-200"
            style={{ zIndex: 50 }}
            onClick={next}
          >
            <ChevronRight className="h-7 w-7" />
          </Button>
        </div>

        <div className="md:hidden relative mb-12">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {artists.map((artist) => (
              <div key={artist.id} className="flex-none w-80 snap-center first:pl-4 last:pr-4">
                <ArtistCard
                  artist={artist}
                  hoveredArtist={hoveredArtist}
                  setHoveredArtist={setHoveredArtist}
                  expanded={expanded}
                  setExpanded={setExpanded}
                  handleSocialClick={handleSocialClick}
                  isMobile
                />
              </div>
            ))}
          </div>

          <Button size="icon" variant="secondary" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/60 backdrop-blur-md" onClick={scrollLeft}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="secondary" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/60 backdrop-blur-md" onClick={scrollRight}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArtistCard({
  artist,
  hoveredArtist,
  setHoveredArtist,
  expanded,
  setExpanded,
  handleSocialClick,
  isMobile = false,
  isDesktop = false,
  isCenterCard = false,
}: {
  artist: Artist;
  hoveredArtist: string | null;
  setHoveredArtist: (id: string | null) => void;
  expanded: string | null;
  setExpanded: (id: string | null) => void;
  handleSocialClick: (e: React.MouseEvent, url?: string) => void;
  isMobile?: boolean;
  isDesktop?: boolean;
  isCenterCard?: boolean;
}) {
  const isHovered = hoveredArtist === artist.id || isMobile;

  const cardClasses = `
    group overflow-hidden border-2 border-gray-800 hover:border-gray-600 
    transition-all duration-500 bg-gray-900/80 backdrop-blur-md hover:shadow-2xl 
    w-80 flex flex-col
    ${isCenterCard && isDesktop ? "scale-110 border-white/30 shadow-2xl" : ""}
  `;

  return (
    <Card className={cardClasses} style={{ height: "560px" }} onMouseEnter={() => !isMobile && setHoveredArtist(artist.id)} onMouseLeave={() => !isMobile && setHoveredArtist(null)}>
      <div className="relative overflow-hidden h-72">
        <Image src={artist.image || artist.heroImage} alt={artist.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 80vw, 320px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className={`absolute top-4 right-4 flex flex-col gap-3 transition-all ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ transitionDuration: "400ms" }}>
          {artist.socials.instagram && (
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 shadow-lg"
              onClick={(e) => handleSocialClick(e, artist.socials.instagram)}
            >
              <Instagram className="h-5 w-5" />
            </Button>
          )}
          {artist.socials.youtube && (
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 shadow-lg"
              onClick={(e) => handleSocialClick(e, artist.socials.youtube)}
            >
              <Youtube className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-white tracking-wide">{artist.name.toUpperCase()}</h3>
        <p className="text-gray-300 text-sm mb-3">{artist.role}</p>

        <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-300 ${expanded === artist.id ? "line-clamp-none" : "line-clamp-3"}`}>{artist.bio}</p>

        {artist.bio.length > 150 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(expanded === artist.id ? null : artist.id);
            }}
            className="text-sm text-blue-400 hover:text-blue-300 mt-3 mb-4 self-start transition-colors"
          >
            {expanded === artist.id ? "See Less" : "See More"}
          </button>
        )}

        <div className="mt-auto">
          <Link href={`/artists/${artist.id}`} onClick={(e) => e.stopPropagation()}>
            <Button className="w-full bg-white text-black hover:bg-gray-100 font-semibold text-base py-5">
              View Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Instagram, Youtube, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { Artist, getAllArtists } from "@/lib/artist-data";

// export default function ArtistShowcase() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
//   const [expanded, setExpanded] = useState<string | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sectionRef = useRef<HTMLElement>(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const artists: Artist[] = getAllArtists();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleSocialClick = (e: React.MouseEvent, url?: string) => {
//     e.stopPropagation();
//     if (url) window.open(url, "_blank", "noopener,noreferrer");
//   };

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % artists.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);
//   };

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-black pb-24 md:pb-32">
//       <div className="max-w-7xl mx-auto">
//         {/* Header - with increased bottom margin */}
//         <div className={`text-center pb-24 md:mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
//           <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">OUR ARTISTS</h2>
//         </div>

//         {/* Desktop/Tablet: Compact 3D Carousel */}
//         <div className="hidden md:block relative h-[500px] flex items-center justify-center mb-12">
//           <div className="absolute inset-0 flex items-center justify-center perspective-[1200px]">
//             <div
//               className="relative w-full h-full preserve-3d transition-all duration-700 ease-in-out"
//               style={{
//                 transform: `rotateY(${-currentIndex * (360 / artists.length)}deg)`,
//               }}
//             >
//               {artists.map((artist, index) => {
//                 const angle = (index * 360) / artists.length;
//                 const radius = artists.length <= 5 ? 380 : artists.length <= 8 ? 420 : 460;
//                 return (
//                   <div
//                     key={artist.id}
//                     className="absolute inset-0 flex items-center justify-center preserve-3d"
//                     style={{
//                       transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
//                     }}
//                   >
//                     <ArtistCard
//                       artist={artist}
//                       hoveredArtist={hoveredArtist}
//                       setHoveredArtist={setHoveredArtist}
//                       expanded={expanded}
//                       setExpanded={setExpanded}
//                       handleSocialClick={handleSocialClick}
//                       isDesktop
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <Button size="icon" variant="secondary" className="absolute left-4 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md" onClick={prev}>
//             <ChevronLeft className="h-6 w-6" />
//           </Button>
//           <Button size="icon" variant="secondary" className="absolute right-4 z-10 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md" onClick={next}>
//             <ChevronRight className="h-6 w-6" />
//           </Button>
//         </div>

//         {/* Mobile: Horizontal Scroll */}
//         <div className="md:hidden relative mb-12">
//           <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-8 -mx-4 px-4">
//             {artists.map((artist) => (
//               <div key={artist.id} className="flex-none w-80 snap-center first:pl-4 last:pr-4">
//                 <ArtistCard
//                   artist={artist}
//                   hoveredArtist={hoveredArtist}
//                   setHoveredArtist={setHoveredArtist}
//                   expanded={expanded}
//                   setExpanded={setExpanded}
//                   handleSocialClick={handleSocialClick}
//                   isMobile
//                 />
//               </div>
//             ))}
//           </div>

//           <Button size="icon" variant="secondary" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/60 backdrop-blur-md" onClick={scrollLeft}>
//             <ChevronLeft className="h-6 w-6" />
//           </Button>
//           <Button size="icon" variant="secondary" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/60 backdrop-blur-md" onClick={scrollRight}>
//             <ChevronRight className="h-6 w-6" />
//           </Button>
//         </div>
//       </div>

//       <style jsx global>{`
//         .perspective-[1200px] {
//           perspective: 1200px;
//         }
//         .preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// }

// // Compact Artist Card (unchanged from previous version)
// function ArtistCard({
//   artist,
//   hoveredArtist,
//   setHoveredArtist,
//   expanded,
//   setExpanded,
//   handleSocialClick,
//   isMobile = false,
//   isDesktop = false,
// }: {
//   artist: Artist;
//   hoveredArtist: string | null;
//   setHoveredArtist: (id: string | null) => void;
//   expanded: string | null;
//   setExpanded: (id: string | null) => void;
//   handleSocialClick: (e: React.MouseEvent, url?: string) => void;
//   isMobile?: boolean;
//   isDesktop?: boolean;
// }) {
//   const isHovered = hoveredArtist === artist.id || isMobile;

//   const cardClasses = `
//     group overflow-hidden border-2 border-gray-800 hover:border-gray-600
//     transition-all duration-500 bg-gray-900/80 backdrop-blur-md hover:shadow-2xl
//     w-80 h-[560px] flex flex-col
//   `;

//   return (
//     <Card className={cardClasses} onMouseEnter={() => !isMobile && setHoveredArtist(artist.id)} onMouseLeave={() => !isMobile && setHoveredArtist(null)}>
//       <div className="relative overflow-hidden h-72">
//         <Image src={artist.image || artist.heroImage} alt={artist.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 80vw, 320px" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

//         <div className={`absolute top-4 right-4 flex flex-col gap-3 transition-all duration-400 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
//           {artist.socials.instagram && (
//             <Button
//               size="icon"
//               variant="secondary"
//               className="h-10 w-10 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 shadow-lg"
//               onClick={(e) => handleSocialClick(e, artist.socials.instagram)}
//             >
//               <Instagram className="h-5 w-5" />
//             </Button>
//           )}
//           {artist.socials.youtube && (
//             <Button
//               size="icon"
//               variant="secondary"
//               className="h-10 w-10 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 shadow-lg"
//               onClick={(e) => handleSocialClick(e, artist.socials.youtube)}
//             >
//               <Youtube className="h-5 w-5" />
//             </Button>
//           )}
//         </div>
//       </div>

//       <CardContent className="p-6 flex flex-col flex-grow">
//         <h3 className="text-2xl font-bold mb-2 text-white tracking-wide">{artist.name.toUpperCase()}</h3>
//         <p className="text-gray-300 text-sm mb-3">{artist.role}</p>

//         <p className={`text-gray-400 text-sm leading-relaxed transition-all duration-300 ${expanded === artist.id ? "line-clamp-none" : "line-clamp-3"}`}>{artist.bio}</p>

//         {artist.bio.length > 150 && (
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setExpanded(expanded === artist.id ? null : artist.id);
//             }}
//             className="text-sm text-blue-400 hover:text-blue-300 mt-3 mb-4 self-start transition-colors"
//           >
//             {expanded === artist.id ? "See Less" : "See More"}
//           </button>
//         )}

//         <div className="mt-auto">
//           <Link href={`/artists/${artist.id}`} onClick={(e) => e.stopPropagation()}>
//             <Button className="w-full bg-white text-black hover:bg-gray-100 font-semibold text-base py-5">
//               View Profile
//               <ExternalLink className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
