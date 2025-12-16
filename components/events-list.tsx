'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, User } from 'lucide-react';

const events = [
	{
		id: 1,
		title: 'AARADHYA THE DIVINE CIRCLE',
		date: 'December 22, 2025',
		time: 'Evening (7:00 PM)',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 2,
		title: 'GUJARAT NATIONAL LAW UNIVERSITY',
		date: 'December 23, 2025',
		time: 'Evening (7:30 PM)',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 3,
		title: 'HERITAGE',
		date: 'December 25, 2025',
		time: 'Evening (8:00 PM)',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 4,
		title: 'NAGRI NA NORTA',
		date: 'December 26, 2025',
		time: 'Evening (7:30 PM)',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 5,
		title: 'PRIVATE GARBA',
		date: 'December 27, 2025',
		time: 'Evening (7:00 PM)',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 6,
		title: 'AARADHYA THE DIVINE CIRCLE',
		date: 'December 29, 2025',
		time: 'Evening (8:00 PM)',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 7,
		title: 'XL Cafe',
		date: 'December 22, 2025',
		time: 'Evening (7:00 PM)',
		venue: 'Manipur, India',
		artist: 'AJ MAISNAM',
		status: 'upcoming',
	},
	{
		id: 8,
		title: 'High End',
		date: 'December 23, 2025',
		time: 'Evening (7:30 PM)',
		venue: 'Manipur, India',
		artist: 'YARSIN CHANU',
		status: 'upcoming',
	},
];

export default function EventsList() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<section ref={sectionRef} className="relative py-16 px-4 md:py-24 overflow-hidden">
			{/* Background Image with Gradient Overlay */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: "url('/12232.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
				}}
			/>
			<div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/90 via-slate-900/85 to-black/95" />

			{/* Subtle Particle Effect (Optional) */}
			<div className="absolute inset-0 z-0 opacity-10">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
			</div>

			<div className="relative z-10 max-w-3xl mx-auto">
				{/* Enhanced Header */}
				<div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
					<div className="inline-flex items-center justify-center gap-3 mb-6">
						<div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
						<span className="text-purple-400 font-semibold tracking-wider">SHOWS & EVENTS</span>
						<div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
					</div>
					<h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
						Upcoming Events
					</h2>
					<p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">Experience mesmerizing performances by our talented artists</p>
				</div>

				{/* Centered Events Grid */}
				<div className="relative">
					{/* Decorative line through center */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-purple-900/50 to-transparent hidden md:block"></div>

					<div className="space-y-8">
						{events.map((event, index) => (
							<div
								key={event.id}
								className={`
                  relative flex flex-col md:flex-row items-center
                  transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  group hover:transform hover:scale-[1.02]
                `}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								{/* Event Card with Background Texture */}
								<div className="w-full bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300 relative overflow-hidden group">
									{/* Card Background Texture */}

									<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 z-0"></div>

									<div className="relative z-10">
										{/* Status Badge */}
										<div className="inline-flex items-center gap-2 mb-6">
											<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
											<span className="text-green-400 font-semibold text-sm tracking-wider uppercase">{event.status}</span>
										</div>

										{/* Event Title */}
										<h3
											className="text-2xl font-bold text-white mb-6 text-center
  group-hover:text-purple-200 transition-colors duration-300"
										>
											{event.title}
										</h3>

										{/* Event Details Grid */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
											<div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
												<div className="p-2 bg-purple-900/30 rounded-lg">
													<Calendar className="w-5 h-5 text-purple-400" />
												</div>
												<div>
													<div className="text-sm text-slate-400">Date</div>
													<div className="text-white font-medium">{event.date}</div>
												</div>
											</div>

											<div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
												<div className="p-2 bg-blue-900/30 rounded-lg">
													<Clock className="w-5 h-5 text-blue-400" />
												</div>
												<div>
													<div className="text-sm text-slate-400">Time</div>
													<div className="text-white font-medium">{event.time}</div>
												</div>
											</div>

											<div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
												<div className="p-2 bg-red-900/30 rounded-lg">
													<MapPin className="w-5 h-5 text-red-400" />
												</div>
												<div>
													<div className="text-sm text-slate-400">Venue</div>
													<div className="text-white font-medium">{event.venue}</div>
												</div>
											</div>

											<div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
												<div className="p-2 bg-emerald-900/30 rounded-lg">
													<User className="w-5 h-5 text-emerald-400" />
												</div>
												<div>
													<div className="text-sm text-slate-400">Performing Artist</div>
													<div className="text-white font-medium">{event.artist}</div>
												</div>
											</div>
										</div>

										{/* Action Button */}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* View All Button */}
				<div
					className={`text-center mt-16 transition-all duration-1000 delay-700 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}
				></div>
			</div>
		</section>
	);
}
