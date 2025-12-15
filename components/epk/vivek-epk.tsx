'use client';

import type { Artist } from '@/lib/artists';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Instagram, Youtube, Music, ArrowLeft, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function VivekEPK({ artist }: { artist: Artist }) {
	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
			{/* Navigation */}
			<nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-2 text-orange-600 hover:text-orange-700">
						<ArrowLeft className="w-5 h-5" />
						<span className="font-medium">Back to Artists</span>
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative h-[70vh] overflow-hidden">
				<img src={artist.heroImage || '/placeholder.svg'} alt={artist.name} className="w-full h-full object-cover" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
					<div className="container mx-auto">
						<h1 className="text-5xl md:text-7xl font-bold mb-4">{artist.name}</h1>
						<p className="text-2xl md:text-3xl text-orange-200 mb-6">{artist.role}</p>
						<p className="text-lg max-w-3xl text-balance">{artist.bio}</p>
					</div>
					{/* Social links – Hero corner */}
					<div className="absolute top-6 right-6 z-20 flex flex-col gap-4">
						{artist.socials.instagram && (
							<a
								href={artist.socials.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="w-11 h-11 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all"
							>
								<Instagram className="w-5 h-5" />
							</a>
						)}

						{artist.socials.youtube && (
							<a
								href={artist.socials.youtube}
								target="_blank"
								rel="noopener noreferrer"
								className="w-11 h-11 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all"
							>
								<Youtube className="w-5 h-5" />
							</a>
						)}

						{artist.socials.spotify && (
							<a
								href={artist.socials.spotify}
								target="_blank"
								rel="noopener noreferrer"
								className="w-11 h-11 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all"
							>
								<Music className="w-5 h-5" />
							</a>
						)}
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-12 bg-orange-600 text-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
						{artist.stats?.map((stat, i) => (
							<div key={i} className="text-center">
								<div className="text-5xl font-bold mb-2">{stat.value}</div>
								<div className="text-orange-100 text-lg">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Bio Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl font-bold mb-8 text-orange-900">Biography</h2>
						<div className="prose prose-lg max-w-none">
							{artist.fullBio.split('\n\n').map((para, i) => (
								<p key={i} className="mb-6 text-gray-700 leading-relaxed">
									{para}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Genres & Services Grid */}
			<section className="py-16 bg-orange-50">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
						<Card className="p-8 border-2 border-orange-200">
							<h3 className="text-2xl font-bold mb-6 text-orange-900">Genres</h3>
							<div className="flex flex-wrap gap-3">
								{artist.genres.map((genre) => (
									<span key={genre} className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium">
										{genre}
									</span>
								))}
							</div>
						</Card>

						<Card className="p-8 border-2 border-orange-200">
							<h3 className="text-2xl font-bold mb-6 text-orange-900">Services</h3>
							<ul className="space-y-3">
								{artist.services?.map((service) => (
									<li key={service} className="flex items-center gap-3">
										<Music className="w-5 h-5 text-orange-600" />
										<span className="text-gray-700">{service}</span>
									</li>
								))}
							</ul>
						</Card>
					</div>
				</div>
			</section>

			{artist.unreleased && artist.unreleased.length > 0 && (
				<section id="unreleased" className="py-20 bg-transparent">
					<div className="container mx-auto px-4">
						<h2 className="text-5xl font-bold mb-12 text-center text-gray-900">
							<span className="text-amber-500">Unreleased Tracks</span>
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
							{artist.unreleased.map((track, index) => (
								<div
									key={index}
									className="bg-white rounded-3xl border border-amber-200 shadow-xl p-6 flex flex-col items-center gap-4 transition-shadow hover:shadow-2xl"
								>
									<div className="flex items-center gap-2 text-amber-600 font-semibold text-lg">
										<Sparkles className="w-5 h-5" />
										<span>Track {index + 1}</span>
									</div>

									<video
										src={track}
										controls
										controlsList="nodownload noremoteplayback nofullscreen"
										onContextMenu={(e) => e.preventDefault()}
										className="w-full h-48 rounded-2xl border border-amber-200 shadow-inner"
									/>

									<span className="text-sm text-gray-500">Preview only</span>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* Influences */}
			{artist.influences && (
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-4xl font-bold mb-8 text-orange-900">Influences</h2>
							<div className="flex flex-wrap gap-4">
								{artist.influences.map((influence) => (
									<div key={influence} className="px-6 py-3 bg-white border-2 border-orange-300 rounded-lg text-lg font-medium text-gray-800">
										{influence}
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Contact Section */}
			<section className="py-16 bg-orange-600 text-white">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-6">Connect With {artist.name}</h2>

					<Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-orange-50">
						<Mail className="w-5 h-5 mr-2" />
						Booking Inquiries
					</Button>
				</div>
			</section>
		</div>
	);
}
