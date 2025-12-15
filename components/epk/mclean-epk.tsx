"use client"

import type { Artist } from "@/lib/artists"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Music, ArrowLeft, Mail, Zap } from "lucide-react"
import Link from "next/link"

export default function McLeanEPK({ artist }: { artist: Artist }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950 to-gray-900 text-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">BACK</span>
          </Link>
          <div className="text-cyan-400 text-xs font-mono tracking-wider">EPK / {artist.id.toUpperCase()}</div>
        </div>
      </header>

      {/* Full Screen Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 opacity-30">
          <img src={artist.heroImage || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/50 to-gray-900" />

        <div className="relative z-10 text-center px-4">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-mono">NEW SCHOOL HIP HOP</span>
            </div>
          </div>
          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {artist.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-cyan-200 mb-4 font-light">{artist.role}</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">{artist.bio}</p>

          <div className="flex justify-center gap-4 flex-wrap">
            {artist.genres.map((genre) => (
              <span
                key={genre}
                className="px-5 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 font-mono text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
            <div className="w-1.5 h-3 bg-cyan-500 rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* Video Grid */}
      {artist.embedded && artist.embedded.length > 0 && (
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black mb-4">
                <span className="text-cyan-400">WATCH</span> THE WAVE
              </h2>
              <div className="h-1 w-24 bg-cyan-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {artist.embedded.map((embed, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/10 hover:border-cyan-500 transition-colors"
                >
                  <iframe
                    src={embed}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bio Section - Minimal */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-cyan-400 text-sm font-mono mb-4 tracking-widest">/// BIOGRAPHY</div>
              <h2 className="text-5xl font-black">THE STORY</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              {artist.fullBio.split("\n\n").map((para, i) => (
                <p key={i} className="pl-6 border-l-2 border-cyan-500/30">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influences - Tech Style */}
      <section className="py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-black mb-12 text-center">
              <span className="text-cyan-400">INFLUENCED BY</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {artist.influences?.map((influence, i) => (
                <div
                  key={influence}
                  className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-colors text-center"
                >
                  <div className="text-sm font-mono text-cyan-500 mb-2">0{i + 1}</div>
                  <div className="font-bold">{influence}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Bold CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-7xl md:text-8xl font-black mb-8">
            LET'S <span className="text-cyan-400">WORK</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Available for features, live shows, studio sessions, and collaborations
          </p>
          <div className="flex justify-center gap-6 mb-12">
            {artist.socials.spotify && (
              <a
                href={artist.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <Music className="w-7 h-7 text-gray-900" />
              </a>
            )}
            {artist.socials.youtube && (
              <a
                href={artist.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <Youtube className="w-7 h-7 text-gray-900" />
              </a>
            )}
            {artist.socials.instagram && (
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <Instagram className="w-7 h-7 text-gray-900" />
              </a>
            )}
          </div>
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-black text-lg px-12 py-6 rounded-full"
          >
            <Mail className="w-5 h-5 mr-2" />
            BOOK NOW
          </Button>
        </div>
      </section>
    </div>
  )
}
