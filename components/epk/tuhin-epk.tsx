'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Instagram, Youtube, Music, Facebook, ArrowLeft, Mail, Guitar, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Footer from '../footer';
import { Artist } from '@/lib/artist';
import { useRef, useState } from 'react';

export default function TuhinEPK({ artist }: { artist: Artist }) {
	const [activeTrack, setActiveTrack] = useState(0);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50">
			{/* Artistic Header */}
			<header className="bg-white/90 backdrop-blur-sm border-b border-emerald-200 sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-800">
							<ArrowLeft className="w-5 h-5" />
							<span className="font-medium">Artists</span>
						</Link>
						<div className="flex items-center gap-6">
							{artist.socials.facebook && (
								<a href={artist.socials.facebook} target="_blank" rel="noopener noreferrer">
									<Facebook className="w-5 h-5 text-gray-600 hover:text-emerald-600" />
								</a>
							)}
							{artist.socials.instagram && (
								<a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer">
									<Instagram className="w-5 h-5 text-gray-600 hover:text-emerald-600" />
								</a>
							)}
							{artist.socials.youtube && (
								<a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer">
									<Youtube className="w-5 h-5 text-gray-600 hover:text-emerald-600" />
								</a>
							)}
						</div>
					</div>
				</div>
			</header>

			{/* Hero with Pattern */}
			<section className="relative py-20 overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)',
							color: 'rgb(16 185 129)',
						}}
					/>
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<div>
							<div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
								<Guitar className="w-4 h-4" />
								<span className="text-sm font-semibold">Singer • Songwriter • Guitarist</span>
							</div>
							<h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">{artist.name}</h1>
							<p className="text-xl text-emerald-700 mb-6 font-medium">{artist.role}</p>
							<p className="text-lg text-gray-700 leading-relaxed mb-8">{artist.bio}</p>
							<div className="flex gap-4">
								<Link href="mailto:manager@billionentertainment.co.in">
									<Button size="lg" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 bg-transparent">
										<Mail className="w-5 h-5 mr-2" />
										Get In Touch
									</Button>
								</Link>
								{artist.socials.spotify && (
									<Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-900 " asChild>
										<a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer">
											<Music className="w-4 h-4 mr-2" />
											Listen Now
										</a>
									</Button>
								)}
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
								<img src={artist.image || '/placeholder.svg'} alt={artist.name} className="w-full h-full object-cover" />
							</div>
							<div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
								<div className="text-sm font-medium mb-1">Languages</div>
								<div className="text-3xl font-bold">Multi</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Biography */}
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center gap-6 mb-12">
							<div className="h-2 w-16 bg-emerald-500 rounded-full" />
							<h2 className="text-5xl font-bold text-gray-900">The Journey</h2>
						</div>
						<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-emerald-100">
							<div className="space-y-6 text-lg text-gray-700 leading-relaxed">
								{artist.fullBio.split('\n\n').map((para, i) => (
									<p key={i}>{para}</p>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Media Showcase */}
			{artist.embedded && artist.embedded.length > 0 && (
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-5xl font-bold mb-4 text-gray-900">Featured Tracks</h2>
							<p className="text-gray-700 text-lg">Experience the music</p>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
							{artist.embedded.map((embed, i) => {
								const isSpotify = embed.includes('spotify.com');

								return (
									<div
										key={i}
										className={`rounded-xl overflow-hidden border-2 border-amber-600/30 ${
											isSpotify ? 'h-[480px] lg:col-span-2' : 'aspect-video'
										}`}
									>
										<iframe
											src={embed}
											className="w-full h-full"
											allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
											allowFullScreen={!isSpotify}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			)}

			{artist.unreleased && artist.unreleased.length > 0 && (
				<section id="unreleased" className="py-14">
					<div className="container mx-auto px-4 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
							<span className="text-emerald-500">Unreleased</span> Tracks
						</h2>

						{/* MINI PLAYER */}
						<div className="bg-white border border-amber-200 rounded-xl px-3 py-2 mb-4 shadow-sm">
							<video
								ref={videoRef}
								src={artist.unreleased[activeTrack]}
								controls
								controlsList="nodownload noremoteplayback nofullscreen"
								onContextMenu={(e) => e.preventDefault()}
								className="w-full h-9 rounded"
							/>
						</div>

						{/* TRACK LIST */}
						<div className="bg-white border border-amber-200 rounded-xl divide-y overflow-hidden shadow-sm">
							{artist.unreleased.map((_, index) => {
								const isActive = index === activeTrack;

								return (
									<button
										key={index}
										onClick={() => {
											setActiveTrack(index);
											setTimeout(() => videoRef.current?.play(), 0);
										}}
										className={`w-full flex items-center justify-between px-4 py-3 text-left transition
								${isActive ? 'bg-amber-50' : 'hover:bg-orange-50'}`}
									>
										<div className="flex items-center gap-3">
											<div
												className={`w-8 h-8 flex items-center justify-center rounded-full text-sm
									${isActive ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'}`}
											>
												{isActive ? '❚❚' : '▶'}
											</div>

											<div>
												<p className={`text-sm font-medium ${isActive ? 'text-amber-600' : 'text-gray-800'}`}>Track {index + 1}</p>
												<p className="text-[11px] text-gray-500">Preview only</p>
											</div>
										</div>

										<Sparkles className={`w-4 h-4 ${isActive ? 'text-amber-500' : 'text-gray-300'}`} />
									</button>
								);
							})}
						</div>
					</div>
				</section>
			)}

			{/* Influences & Genres */}
			<section className="py-20 bg-gradient-to-b from-emerald-600 to-teal-700 text-white">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							<div>
								<h3 className="text-4xl font-bold mb-8">Musical DNA</h3>
								<div className="space-y-3">
									{artist.influences?.map((influence) => (
										<div key={influence} className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl font-medium text-lg">
											{influence}
										</div>
									))}
								</div>
							</div>
							<div>
								<h3 className="text-4xl font-bold mb-8">Genres</h3>
								<div className="space-y-3">
									{artist.genres.map((genre) => (
										<div
											key={genre}
											className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl font-medium text-lg border-2 border-white/30"
										>
											{genre}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services */}
			{artist.services && (
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h2 className="text-5xl font-bold mb-12 text-gray-900">What I Offer</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{artist.services.map((service) => (
									<Card key={service} className="p-6 border-2 border-emerald-200 hover:border-emerald-400 transition-colors">
										<div className="flex items-center gap-4">
											<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
												<Music className="w-6 h-6 text-emerald-600" />
											</div>
											<div className="text-lg font-semibold text-gray-900 text-left">{service}</div>
										</div>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Footer CTA */}
			{/* <Footer /> */}
		</div>
	);
}
