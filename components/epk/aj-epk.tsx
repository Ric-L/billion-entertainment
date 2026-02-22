'use client';

import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Music, Facebook, ArrowLeft, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import { useRef, useState } from 'react';
import { Artist } from '@/lib/artist';
export default function AJEpk({ artist }: { artist: Artist }) {
	const [activeTrack, setActiveTrack] = useState(0);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Header with sticky nav */}
			<header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-amber-600/30">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
						<ArrowLeft className="w-5 h-5" />
						<span className="font-medium">All Artists</span>
					</Link>
					<div className="flex gap-6">
						<a href="#bio" className="hover:text-amber-400 transition-colors hidden md:block">
							Bio
						</a>
						<a href="#media" className="hover:text-amber-400 transition-colors hidden md:block">
							Media
						</a>
						<a href="#contact" className="hover:text-amber-400 transition-colors hidden md:block">
							Contact
						</a>
					</div>
				</div>
			</header>

			{/* Split Hero */}
			<section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
				<div className="relative overflow-hidden">
					<img src={artist.image || '/placeholder.svg'} alt={artist.name} className="w-full h-full object-cover" />
					<div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent" />
				</div>
				<div className="flex items-center justify-center p-8 md:p-16 bg-gradient-to-br from-amber-900/20 to-black">
					<div>
						<div className="text-amber-400 text-sm font-bold tracking-widest mb-4">ELECTRONIC PRESS KIT</div>
						<h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">{artist.name}</h1>
						<p className="text-2xl text-amber-200 mb-8">{artist.role}</p>
						<p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">{artist.bio}</p>
						{artist.stats && (
							<div className="flex gap-8 mb-8">
								{artist.stats.map((stat, i) => (
									<div key={i}>
										<div className="text-3xl font-bold text-amber-400">{stat.value}</div>
										<div className="text-sm text-gray-400">{stat.label}</div>
									</div>
								))}
							</div>
						)}
						{/*artist link*/}
						{/* Artist Social Links */}
						<div className="flex flex-wrap items-center gap-4 mt-10">
							{artist.socials.spotify && (
								<a href={artist.socials.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="group relative">
									<div
										className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/90 backdrop-blur 
        flex items-center justify-center border border-amber-300/40
        transition-all duration-300 
        group-hover:bg-amber-400 
        group-hover:scale-110 
        group-hover:shadow-lg group-hover:shadow-amber-500/40"
									>
										<Music className="w-5 h-5 md:w-6 md:h-6 text-black" />
									</div>
									<span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">
										Spotify
									</span>
								</a>
							)}

							{artist.socials.youtube && (
								<a href={artist.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="group relative">
									<div
										className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/90 backdrop-blur 
        flex items-center justify-center border border-amber-300/40
        transition-all duration-300 
        group-hover:bg-amber-400 
        group-hover:scale-110 
        group-hover:shadow-lg group-hover:shadow-amber-500/40"
									>
										<Youtube className="w-5 h-5 md:w-6 md:h-6 text-black" />
									</div>
									<span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">
										YouTube
									</span>
								</a>
							)}

							{artist.socials.instagram && (
								<a href={artist.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group relative">
									<div
										className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/90 backdrop-blur 
        flex items-center justify-center border border-amber-300/40
        transition-all duration-300 
        group-hover:bg-amber-400 
        group-hover:scale-110 
        group-hover:shadow-lg group-hover:shadow-amber-500/40"
									>
										<Instagram className="w-5 h-5 md:w-6 md:h-6 text-black" />
									</div>
									<span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">
										Instagram
									</span>
								</a>
							)}

							{artist.socials.facebook && (
								<a href={artist.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group relative">
									<div
										className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/90 backdrop-blur 
        flex items-center justify-center border border-amber-300/40
        transition-all duration-300 
        group-hover:bg-amber-400 
        group-hover:scale-110 
        group-hover:shadow-lg group-hover:shadow-amber-500/40"
									>
										<Facebook className="w-5 h-5 md:w-6 md:h-6 text-black" />
									</div>
									<span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">
										Facebook
									</span>
								</a>
							)}
						</div>
					</div>
				</div>
			</section>
			{/* Biography */}
			<section id="bio" className="py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center gap-4 mb-12">
							<div className="h-1 w-20 bg-amber-400" />
							<h2 className="text-5xl font-bold">The Story</h2>
						</div>
						<div className="space-y-6 text-lg leading-relaxed text-gray-300">
							{artist.fullBio.split('\n\n').map((para, i) => (
								<p key={i}>{para}</p>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Media Embeds */}
			{artist.embedded && artist.embedded.length > 0 && (
				<section id="media" className="py-20 bg-zinc-950">
					<div className="container mx-auto px-4">
						<h2 className="text-5xl font-bold mb-12 text-center">
							<span className="text-amber-400">Listen</span> & Watch
						</h2>
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

			{/* {artist.unreleased && artist.unreleased.length > 0 && (
				<section id="unreleased" className="py-14">
					<div className="container mx-auto px-4 max-w-4xl">
						<h2 className="text-3xl font-bold mb-6 text-center ">
							<span className="text-amber-500">Unreleased</span> Tracks
						</h2>

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
			)} */}

			{/* Influences & Genres Bento */}
			<section className="py-20 bg-zinc-950">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
						<div className="md:col-span-2 bg-amber-600/10 border border-amber-600/30 rounded-2xl p-8">
							<h3 className="text-3xl font-bold mb-6">Musical Influences</h3>
							<div className="grid grid-cols-2 gap-4">
								{artist.influences?.map((influence) => (
									<div key={influence} className="bg-black/50 px-4 py-3 rounded-lg text-center font-medium border border-amber-600/20">
										{influence}
									</div>
								))}
							</div>
						</div>
						<div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-black">
							<h3 className="text-3xl font-bold mb-6">Genres</h3>
							<div className="space-y-3">
								{artist.genres.map((genre) => (
									<div key={genre} className="bg-black/20 px-4 py-2 rounded-lg font-medium">
										{genre}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Footer */}
			<section id="contact" className="py-20 border-t border-amber-600/30">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-5xl font-bold mb-8">Let's Work Together</h2>
					<p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Available for live performances, studio sessions, and collaborations.</p>

					<Link href="mailto:manager@billionentertainment.co.in">
						<Button size="lg" className="bg-amber-600 hover:bg-amber-500 text-black font-bold text-lg px-8">
							<Mail className="w-5 h-5 mr-2" />
							Get In Touch
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
