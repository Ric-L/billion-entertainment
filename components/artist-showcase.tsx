"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";

const artists = [
  {
    id: 1,
    name: "VIVEK MORVADIA",
    image: "/2.png",
    bio: "Beyond covers and live performances, Vivek has also ventured into the realm of original music. His portfolio includes two original Gujarati songs, both of which reflect his deep cultural roots, showcasing his commitment to contributing to regional music while pushing artistic boundaries.",
    social: {
      instagram: "https://www.instagram.com/vivek_morvadia?igsh=YTRxajIybTBoZWpw",
      youtube: "https://youtube.com/@billionentertainment?si=9QslQtbcKV-hM7vk",
    },
  },
];

export default function ArtistShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to handle social link redirection
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-white">
            OUR ARTISTS
            <span className="block text-gray-400">WE SPONSOR</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto text-pretty">Meet the incredible talent we're proud to support on their journey to stardom</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div key={artist.id} className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`} style={{ animationDelay: `${index * 150}ms` }}>
              <Card
                className="group overflow-hidden border-2 border-gray-800 hover:border-gray-600 transition-all duration-300 bg-gray-800 hover:shadow-xl hover:scale-105"
                onMouseEnter={() => setHoveredArtist(artist.id)}
                onMouseLeave={() => setHoveredArtist(null)}
              >
                <div className="relative overflow-hidden h-80">
                  <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links Overlay */}
                  <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${hoveredArtist === artist.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>
                    {artist.social.instagram && (
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-gray-900 hover:bg-gray-700" onClick={() => handleSocialClick(artist.social.instagram)}>
                        <Instagram className="h-4 w-4" />
                      </Button>
                    )}

                    {artist.social.youtube && (
                      <Button size="icon" variant="secondary" className="h-8 w-8 bg-gray-900 hover:bg-gray-700" onClick={() => handleSocialClick(artist.social.youtube)}>
                        <Youtube className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <CardContent className="p-6 bg-gray-800">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">{artist.name}</h3>

                  <p className="text-gray-400 mb-4 text-pretty">{artist.bio}</p>

                  <Link href={`/artist/${artist.name}`}>
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-700 transition-colors">
                      View Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
