"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Artist, getAllArtistIds, getAllArtists } from "@/lib/artist-data";

export default function ArtistShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const artists: Artist[] = getAllArtists(); // Fully typed

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSocialClick = (e: React.MouseEvent, url?: string) => {
    e.stopPropagation();
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            OUR ARTISTS
            <span className="block text-gray-400">WE SPONSOR</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Meet the incredible talent we're proud to support on their journey to stardom</p>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {artists.map((artist, index) => (
            <div key={artist.id} className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`} style={{ transitionDelay: `${index * 150}ms` }}>
              <Card
                className="group overflow-hidden border-2 border-gray-800 hover:border-gray-600 transition-all duration-500 bg-gray-900/80 backdrop-blur-md hover:shadow-2xl hover:scale-[1.03] h-full flex flex-col"
                onMouseEnter={() => setHoveredArtist(artist.id)}
                onMouseLeave={() => setHoveredArtist(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-96">
                  <Image
                    src={artist.image || artist.heroImage}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Social Icons on Hover */}
                  <div className={`absolute top-6 right-6 flex flex-col gap-4 transition-all duration-400 ${hoveredArtist === artist.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                    {artist.socials.instagram && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-12 w-12 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 shadow-lg"
                        onClick={(e) => handleSocialClick(e, artist.socials.instagram)}
                      >
                        <Instagram className="h-6 w-6" />
                      </Button>
                    )}
                    {artist.socials.youtube && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-12 w-12 bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/30 shadow-lg"
                        onClick={(e) => handleSocialClick(e, artist.socials.youtube)}
                      >
                        <Youtube className="h-6 w-6" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold mb-3 text-white tracking-wide">{artist.name.toUpperCase()}</h3>

                  <p className="text-gray-300 text-sm mb-2">{artist.role}</p>

                  {/* Bio with See More */}
                  <p className={`text-gray-400 text-base leading-relaxed transition-all duration-300 ${expanded === artist.id ? "line-clamp-none" : "line-clamp-4"}`}>{artist.bio}</p>

                  {artist.bio.length > 200 && (
                    <button onClick={() => setExpanded(expanded === artist.id ? null : artist.id)} className="text-sm text-blue-400 hover:text-blue-300 mt-4 mb-6 self-start transition-colors">
                      {expanded === artist.id ? "See Less" : "See More"}
                    </button>
                  )}

                  {/* View Profile Button */}
                  <div className="mt-auto">
                    <Link href={`/artists/${artist.id}`}>
                      <Button className="w-full bg-white text-black hover:bg-gray-100 font-semibold text-lg py-6">
                        View Profile
                        <ExternalLink className="ml-3 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Instagram, Youtube, ExternalLink } from "lucide-react";
// import Link from "next/link";

// const artists = [
//   {
//     id: 1,
//     name: "VIVEK MORVADIA",
//     image: "/2.png",
//     link: "/vivek-morvadia",
//     bio: "Beyond covers and live performances, Vivek has also ventured into the realm of original music. His portfolio includes two original Gujarati songs, both of which reflect his deep cultural roots, showcasing his commitment to contributing to regional music while pushing artistic boundaries.",
//     social: {
//       instagram: "https://www.instagram.com/vivek_morvadia?igsh=YTRxajIybTBoZWpw",
//       youtube: "https://www.youtube.com/@BillionEntertainment",
//     },
//   },
//   {
//     id: 2,
//     name: "Viss Ningthouja",
//     image: "/vis2.JPG",
//     link: "/viss-ningthouja",
//     bio: `Viss Ningthouja is an electronic and dubstep singer, composer and producer from Imphal, India, whose music fuses deep basslines, intricate rhythms, and ethereal textures with cultural influences from his roots.

//     With a growing catalog, Ningthouja has earned recognition for tracks such as Saayon, Saayon 2.0, Saayon 3.0, Kuru, Sara, Lamlen and also his recent releases including Saayon 4.0, Aura, which showcased his versatility in blending electronic and dubstep with traditional elements. With more than 52.4M views on music platforms, Saayon captures the hearts of millions.
//     Adding to his musical journey, his international collaboration with Anxmus and many more has further enriched Ningthouja’s dynamic sound and expanded his creative horizons.

//     Each release showcases Ningthouja’s talent for crafting bold, genre-defying music that’s both emotionally stirring and sonically innovative, earning over 20M total views.`,
//     social: {
//       instagram: "https://www.instagram.com/viss_ningthouja_/?igsh=c3pia2xlNzB4MWV0#",
//       youtube: "https://www.youtube.com/@vissningthouja",
//     },
//   },
// ];

// export default function ArtistShowcase() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
//   const [expanded, setExpanded] = useState<number | null>(null);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.2 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleSocialClick = (url: string) => {
//     window.open(url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <section ref={sectionRef} className="min-h-screen py-20 px-4 bg-black">
//       <div className="max-w-7xl mx-auto">
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
//           <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
//             OUR ARTISTS
//             <span className="block text-gray-400">WE SPONSOR</span>
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Meet the incredible talent we're proud to support on their journey to stardom</p>
//         </div>

//         <div className="flex justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:max-w-5xl max-w-3xl  mx-auto">
//             {artists.map((artist, index) => (
//               <div
//                 key={artist.id}
//                 className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 <Card
//                   className="group overflow-hidden border-2 border-gray-800 hover:border-gray-600 transition-all duration-300 bg-gray-800 hover:shadow-xl hover:scale-105 h-full flex flex-col"
//                   onMouseEnter={() => setHoveredArtist(artist.id)}
//                   onMouseLeave={() => setHoveredArtist(null)}
//                 >
//                   {/* Image */}
//                   <div className="relative overflow-hidden h-80">
//                     <img src={artist.image} alt={artist.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                     {/* Social */}
//                     <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${hoveredArtist === artist.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
//                       {artist.social.instagram && (
//                         <Button size="icon" variant="secondary" className="h-8 w-8 bg-gray-900 hover:bg-gray-700" onClick={() => handleSocialClick(artist.social.instagram)}>
//                           <Instagram className="h-4 w-4" />
//                         </Button>
//                       )}
//                       {artist.social.youtube && (
//                         <Button size="icon" variant="secondary" className="h-8 w-8 bg-gray-900 hover:bg-gray-700" onClick={() => handleSocialClick(artist.social.youtube)}>
//                           <Youtube className="h-4 w-4" />
//                         </Button>
//                       )}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <CardContent className="p-6 bg-gray-800 flex flex-col flex-grow">
//                     <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">{artist.name}</h3>

//                     {/* Bio with see more */}
//                     <p className={`text-gray-400 mb-4 ${expanded === artist.id ? "" : "line-clamp-3"}`}>{artist.bio}</p>
//                     {artist.bio.length > 120 && (
//                       <button className="text-sm text-blue-400 hover:text-blue-300 mb-4 self-start" onClick={() => setExpanded(expanded === artist.id ? null : artist.id)}>
//                         {expanded === artist.id ? "See Less" : "See More"}
//                       </button>
//                     )}

//                     {/* Push button to bottom */}
//                     <div className="mt-auto">
//                       <Link href={`/artist/${artist.link}`}>
//                         <Button className="w-full bg-gray-900 text-white hover:bg-gray-700">
//                           View Profile
//                           <ExternalLink className="ml-2 h-4 w-4" />
//                         </Button>
//                       </Link>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
