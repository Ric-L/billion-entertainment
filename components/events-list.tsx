'use client';

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const events = [
	{
		id: 1,
		title: 'AARADHYA THE DIVINE CIRCLE',
		date: 'December 22, 2025',
		time: 'Evening',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 2,
		title: 'GUJARAT NATIONAL LAW UNIVERSITY',
		date: 'December 23, 2025',
		time: 'Evening',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 3,
		title: 'HERITAGE',
		date: 'December 25, 2025',
		time: 'Evening',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 4,
		title: 'NAGRI NA NORTA',
		date: 'December 26, 2025',
		time: 'Evening',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 5,
		title: 'PRIVATE GARBA',
		date: 'September 27, 2025',
		time: 'Evening',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 6,
		title: 'AARADHYA THE DIVINE CIRCLE',
		date: 'December 29, 2025',
		time: 'Evening',
		venue: 'Gujarat, India',
		artist: 'VIVEK MORVADIA',
		status: 'upcoming',
	},
	{
		id: 7,
		title: 'XL Cafe',
		date: 'December 22, 2025',
		time: 'Evening',
		venue: 'Manipur, India',
		artist: 'AJ MAISNAM',
		status: 'upcoming',
	},
	{
		id: 8,
		title: 'High End',
		date: 'December 23, 2025',
		time: 'Evening',
		venue: 'Manipur, India',
		artist: 'YARSHIN CHANU',
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
		<section ref={sectionRef} className="py-16 px-6 md:py-24">
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Events</h2>
					<p className="text-lg text-slate-300">Performances by our Artists</p>
				</div>

				{/* Simple List */}
				<ul className="space-y-8">
					{events.map((event, index) => (
						<li
							key={event.id}
							className={`
                border-b border-slate-700 pb-8 last:border-0
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
							style={{ transitionDelay: `${index * 100}ms` }}
						>
							<h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">{event.title}</h3>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300">
								<div className="flex items-center gap-3">
									<Calendar className="w-5 h-5 text-slate-500" />
									<span>{event.date}</span>
								</div>

								<div className="flex items-center gap-3">
									<Clock className="w-5 h-5 text-slate-500" />
									<span>{event.time}</span>
								</div>

								<div className="flex items-center gap-3">
									<MapPin className="w-5 h-5 text-slate-500" />
									<span>{event.venue}</span>
								</div>

								<div className="flex items-center gap-3">
									<Ticket className="w-5 h-5 text-slate-500" />
									<span>{event.artist}</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
