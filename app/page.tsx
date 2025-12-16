import VideoCarousel from '@/components/video-carousel';
import AnimatedText from '@/components/animated-text';
import ArtistShowcase from '@/components/artist-showcase';
import BookingSection from '@/components/booking-section';
import EventsList from '@/components/events-list';
import Footer from '@/components/footer';

export default function HomePage() {
	return (
		<main className="min-h-screen overflow-x-hidden">
			{/* Full-screen video carousel */}
			<VideoCarousel />

			{/* Animated text section */}
			{/* <AnimatedText /> */}

			{/* Artist showcase */}
			<ArtistShowcase />
			<div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
				<EventsList />
				<BookingSection />
				{/* Animated footer */}
				<Footer />
			</div>
		</main>
	);
}
