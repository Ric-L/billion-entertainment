'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Artist, getAllArtists } from '@/lib/artist';
import { useRouter } from 'next/navigation';

export default function ArtistShowcase() {
	const router = useRouter();
	const sectionRef = useRef<HTMLElement>(null);

	const [isVisible, setIsVisible] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Swipe refs
	const startX = useRef(0);
	const isDragging = useRef(false);

	const artists: Artist[] = getAllArtists();

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsVisible(true), { threshold: 0.1 });
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const next = () => setCurrentIndex((prev) => (prev + 1) % artists.length);
	const prev = () => setCurrentIndex((prev) => (prev - 1 + artists.length) % artists.length);

	/* ===============================
	   SOCIAL CLICK HANDLER
	   =============================== */
	const handleSocialClick = (e: React.MouseEvent, url?: string) => {
		e.stopPropagation();
		if (url) window.open(url, '_blank', 'noopener,noreferrer');
	};

	/* ===============================
	   SWIPE HANDLERS
	   =============================== */
	const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
		isDragging.current = true;
		startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
	};

	const onTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
		if (!isDragging.current) return;
		isDragging.current = false;

		const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
		const delta = endX - startX.current;

		if (Math.abs(delta) > 50) {
			delta > 0 ? prev() : next();
		}
	};

	/* ===============================
	   CIRCULAR POSITION LOGIC
	   =============================== */
	const getCardPosition = (index: number, isMobile = false) => {
		const total = artists.length;
		let offset = index - currentIndex;

		if (offset > total / 2) offset -= total;
		if (offset < -total / 2) offset += total;

		const absOffset = Math.abs(offset);
		const spacing = isMobile ? 280 : 420;

		return {
			offset,
			translateX: offset * spacing,
			translateZ: isMobile ? -Math.pow(absOffset, 1.4) * 120 : -Math.pow(absOffset, 1.8) * 200,
			rotateY: isMobile ? offset * 8 : offset * 15,
			opacity: absOffset > (isMobile ? 2 : 3) ? 0 : 1 - absOffset * 0.25,
		};
	};

	return (
		<section
			ref={sectionRef}
			className="py-16 md:py-24 px-4 bg-black overflow-hidden select-none"
			onMouseDown={onTouchStart}
			onMouseUp={onTouchEnd}
			onMouseLeave={onTouchEnd}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
		>
			<div className="text-center mb-20">
				<h2
					className={`text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					OUR ARTISTS
				</h2>
			</div>

			{/* DESKTOP */}
			<div className="hidden md:block relative w-full h-[600px]">
				<Carousel artists={artists} getCardPosition={getCardPosition} onSocialClick={handleSocialClick} />
				<Controls onPrev={prev} onNext={next} />
			</div>

			{/* MOBILE */}
			<div className="md:hidden relative w-full h-[520px]">
				<Carousel artists={artists} getCardPosition={(i) => getCardPosition(i, true)} onSocialClick={handleSocialClick} />
				<Controls onPrev={prev} onNext={next} />
			</div>
		</section>
	);
}

/* ===============================
   CAROUSEL
   =============================== */
function Carousel({
	artists,
	getCardPosition,
	onSocialClick,
}: {
	artists: Artist[];
	getCardPosition: (index: number) => any;
	onSocialClick: (e: React.MouseEvent, url?: string) => void;
}) {
	const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);

	return (
		<div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1400px' }}>
			<div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
				{artists.map((artist, index) => {
					const { translateX, translateZ, rotateY, opacity, offset } = getCardPosition(index);

					return (
						<div
							key={artist.id}
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
							style={{
								transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
								opacity,
								pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto',
							}}
						>
							<ArtistCard
								artist={artist}
								isCenter={offset === 0}
								hoveredArtist={hoveredArtist}
								setHoveredArtist={setHoveredArtist}
								onSocialClick={onSocialClick}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

/* ===============================
   CARD
   =============================== */
function ArtistCard({
	artist,
	isCenter,
	hoveredArtist,
	setHoveredArtist,
	onSocialClick,
}: {
	artist: Artist;
	isCenter: boolean;
	hoveredArtist: string | null;
	setHoveredArtist: (id: string | null) => void;
	onSocialClick: (e: React.MouseEvent, url?: string) => void;
}) {
	const router = useRouter();

	return (
		<Card
			onClick={() => router.push(`/artists/${artist.id}`)}
			onMouseEnter={() => setHoveredArtist(artist.id)}
			onMouseLeave={() => setHoveredArtist(null)}
			className={`group relative w-80 h-[450px] bg-black border-2 border-gray-800 transition-all ${
				isCenter ? 'scale-110 border-white/30 shadow-2xl' : ''
			}`}
		>
			<Image
				src={artist.image || artist.heroImage}
				alt={artist.name}
				fill
				className="object-cover group-hover:scale-110 transition-transform duration-700"
			/>

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent" />

			<h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-2xl font-semibold backdrop-blur-sm px-4 py-1 rounded-lg">
				{artist.name.toUpperCase()}
			</h3>

			<div className="absolute top-4 right-4 flex flex-col gap-3">
				{artist.socials.instagram && (
					<Button size="icon" className="bg-black/70 hover:bg-black" onClick={(e) => onSocialClick(e, artist.socials.instagram)}>
						<Instagram />
					</Button>
				)}

				{artist.socials.youtube && (
					<Button size="icon" className="bg-black/70 hover:bg-black" onClick={(e) => onSocialClick(e, artist.socials.youtube)}>
						<Youtube />
					</Button>
				)}
			</div>
		</Card>
	);
}

/* ===============================
   CONTROLS
   =============================== */
function Controls({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
	return (
		<>
			<Button size="icon" onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70">
				<ChevronLeft />
			</Button>
			<Button size="icon" onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70">
				<ChevronRight />
			</Button>
		</>
	);
}
