"use client"

import type { Artist } from "@/lib/artists"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Music, ArrowLeft, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export default function YarsinEPK({ artist }: { artist: Artist }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-rose-500 text-white py-2 text-center text-sm font-medium">
        ✨ Available for bookings & collaborations ✨
      </div>

      {/* Nav */}
      <nav className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-rose-600 hover:text-rose-700">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex gap-8">
            {artist.socials.instagram && (
              <a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-600 hover:text-rose-600" />
              </a>
            )}
            {artist.socials.youtube && (
              <a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-gray-600 hover:text-rose-600" />
              </a>
            )}
            {artist.socials.spotify && (
              <a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer">
                <Music className="w-5 h-5 text-gray-600 hover:text-rose-600" />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero - Magazine Style */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-2">
            <div className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-bold mb-6">
              PRESS KIT
            </div>
            <h1 className="text-7xl md:text-8xl font-bold mb-6 text-gray-900 leading-none">{artist.name}</h1>
            <p className="text-2xl text-rose-600 mb-6 font-medium">{artist.role}</p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{artist.bio}</p>
            <Button className="bg-rose-600 hover:bg-rose-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Contact for Bookings
            </Button>
          </div>
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={artist.image || "/placeholder.svg"} alt={artist.name} className="w-full h-auto" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="text-2xl font-bold text-rose-600">{artist.stats?.[0]?.value || "15+"}</div>
                <div className="text-xs text-gray-600 font-medium">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      {artist.embedded && artist.embedded.length > 0 && (
        <section className="py-20 bg-rose-50">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold mb-4 text-center text-gray-900">Featured Performances</h2>
            <p className="text-center text-gray-600 mb-12">Watch Yarsin in action</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {artist.embedded.map((embed, i) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-white">
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

      {/* Biography */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-gray-900">About Yarsin</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              {artist.fullBio.split("\n\n").map((para, i) => (
                <p key={i} className="border-l-4 border-rose-400 pl-6">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Influences - Card Layout */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Musical Influences</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {artist.influences?.map((influence) => (
              <div
                key={influence}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow text-center border-2 border-rose-200"
              >
                <Sparkles className="w-8 h-8 text-rose-500 mx-auto mb-3" />
                <div className="font-bold text-gray-900">{influence}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {artist.services && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Services Offered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {artist.services.map((service) => (
                  <div key={service} className="bg-rose-100 text-rose-900 py-4 px-6 rounded-full font-medium text-lg">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-rose-100">
            Book Yarsin for your next event or recording session
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50 font-bold">
            <Mail className="w-5 h-5 mr-2" />
            Send Inquiry
          </Button>
        </div>
      </section>
    </div>
  )
}
