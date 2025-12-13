"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Clock, Ticket, ChevronRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "AARADHYA THE DIVINE CIRCLE",
    date: "September 22, 2024",
    time: "Evening",
    venue: "Gujarat, India",
    artist: "VIVEK MORVADIA",
    status: "upcoming",
  },
  {
    id: 2,
    title: "GUJARAT NATIONAL LAW UNIVERSITY",
    date: "September 23, 2024",
    time: "Evening",
    venue: "Gujarat, India",
    artist: "VIVEK MORVADIA",
    status: "upcoming",
  },
  {
    id: 3,
    title: "HERITAGE",
    date: "September 25, 2024",
    time: "Evening",
    venue: "Gujarat, India",
    artist: "VIVEK MORVADIA",
    status: "upcoming",
  },
  {
    id: 4,
    title: "NAGRI NA NORTA",
    date: "September 26, 2024",
    time: "Evening",
    venue: "Gujarat, India",
    artist: "VIVEK MORVADIA",
    status: "upcoming",
  },
  {
    id: 5,
    title: "PRIVATE GARBA",
    date: "September 27, 2024",
    time: "Evening",
    venue: "Gujarat, India",
    artist: "VIVEK MORVADIA",
    status: "upcoming",
  },
  {
    id: 6,
    title: "AARADHYA THE DIVINE CIRCLE",
    date: "September 29, 2024",
    time: "Evening",
    venue: "Gujarat, India",
    artist: "VIVEK MORVADIA",
    status: "upcoming",
  },
];

export default function EventsList() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          events.forEach((_, index) => {
            setTimeout(() => {
              setVisibleEvents((prev) => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#0f172a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6">
            UPCOMING
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">EVENTS</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">Experience the magic of live Garba with Vivek Morvadia</p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`
                relative group
                bg-gradient-to-r from-slate-900/80 via-slate-800/90 to-slate-900/80
                backdrop-blur-xl
                rounded-3xl overflow-hidden
                border border-slate-700/50
                shadow-2xl
                transition-all duration-700 ease-out
                hover:border-amber-500/40 hover:shadow-amber-500/20 hover:-translate-y-2
                ${visibleEvents.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative p-8 md:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">{event.title}</h3>
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">UPCOMING</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-amber-500/20">
                          <Calendar className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider">Date</p>
                          <p className="text-xl font-semibold text-white">{event.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-amber-500/20">
                          <Clock className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider">Time</p>
                          <p className="text-xl font-semibold text-white">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-amber-500/20">
                          <MapPin className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider">Venue</p>
                          <p className="text-xl font-semibold text-white">{event.venue}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-amber-500/20">
                          <Ticket className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 uppercase tracking-wider">Artist</p>
                          <p className="text-xl font-semibold text-amber-400">{event.artist}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="lg:self-start">
                    <button className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                      More Info
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

// const events = [
//   {
//     id: 1,
//     title: "AARADHYA THE DIVINE CIRCLE",
//     date: "September 22, 2024",
//     time: "Evening",
//     venue: "Gujarat, India",
//     artist: "VIVEK MORVADIA",
//     status: "upcoming",
//   },
//   {
//     id: 2,
//     title: "GUJARAT NATIONAL LAW UNIVERSITY",
//     date: "September 23, 2024",
//     time: "Evening",
//     venue: "Gujarat, India",
//     artist: "VIVEK MORVADIA",
//     status: "upcoming",
//   },
//   {
//     id: 3,
//     title: "HERITAGE",
//     date: "September 25, 2024",
//     time: "Evening",
//     venue: "Gujarat, India",
//     artist: "VIVEK MORVADIA",
//     status: "upcoming",
//   },
//   {
//     id: 4,
//     title: "NAGRI NA NORTA",
//     date: "September 26, 2024",
//     time: "Evening",
//     venue: "Gujarat, India",
//     artist: "VIVEK MORVADIA",
//     status: "upcoming",
//   },
//   {
//     id: 5,
//     title: "PRIVATE GARBA",
//     date: "September 27, 2024",
//     time: "Evening",
//     venue: "Gujarat, India",
//     artist: "VIVEK MORVADIA",
//     status: "upcoming",
//   },
//   {
//     id: 6,
//     title: "AARADHYA THE DIVINE CIRCLE",
//     date: "September 29, 2024",
//     time: "Evening",
//     venue: "Gujarat, India",
//     artist: "VIVEK MORVADIA",
//     status: "upcoming",
//   },
// ];

// export default function EventsList() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [visibleEvents, setVisibleEvents] = useState<number[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             events.forEach((_, index) => {
//               setTimeout(() => {
//                 setVisibleEvents((prev) => [...prev, index]);
//               }, index * 200);
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className={`min-h-screen  px-4 py-20 transition-all duration-1000 ease-out relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
//       <div className="absolute inset-0 blur-md"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
//             Upcoming Events
//           </h2>
//           <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
//             Don't miss out on these incredible performances by Vivek Morvadia
//           </p>
//         </div>

//         <div className="grid gap-6">
//           {events.map((event, index) => (
//             <div
//               key={event.id}
//               className={`
//                 bg-slate-800/70 backdrop-blur-sm
//                 border border-slate-500/30 rounded-2xl p-6 md:p-8
//                 hover:border-slate-400/60 hover:scale-[1.02]
//                 transition-all duration-500 ease-out
//                 ${visibleEvents.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
//               `}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-4 mb-4">
//                     <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
//                       {event.title}
//                     </h3>
//                     {event.status === "sold-out" && <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">SOLD OUT</span>}
//                     {event.status === "upcoming" && <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">UPCOMING</span>}
//                   </div>

//                   <div className="grid md:grid-cols-2 gap-4 text-slate-200">
//                     <div className="flex items-center gap-3">
//                       <Calendar className="w-5 h-5 text-slate-400" />
//                       <span className="text-lg text-white">{event.date}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Clock className="w-5 h-5 text-slate-400" />
//                       <span className="text-lg text-white">{event.time}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <MapPin className="w-5 h-5 text-slate-400" />
//                       <span className="text-lg text-white">{event.venue}</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Ticket className="w-5 h-5 text-slate-400" />
//                       <span className="text-lg font-semibold text-slate-200">{event.artist}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   {event.status === "upcoming" ? (
//                     <>
//                       <button className="border border-slate-400 text-slate-300 hover:bg-slate-600 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300">More Info</button>
//                     </>
//                   ) : null}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
