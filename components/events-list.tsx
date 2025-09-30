"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            events.forEach((_, index) => {
              setTimeout(() => {
                setVisibleEvents((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`min-h-screen  px-4 py-20 transition-all duration-1000 ease-out relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
      <div className="absolute inset-0 blur-md"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            Upcoming Events
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
            Don't miss out on these incredible performances by Vivek Morvadia
          </p>
        </div>

        <div className="grid gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`
                bg-slate-800/70 backdrop-blur-sm 
                border border-slate-500/30 rounded-2xl p-6 md:p-8
                hover:border-slate-400/60 hover:scale-[1.02] 
                transition-all duration-500 ease-out
                ${visibleEvents.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                      {event.title}
                    </h3>
                    {event.status === "sold-out" && <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">SOLD OUT</span>}
                    {event.status === "upcoming" && <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">UPCOMING</span>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-slate-200">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-slate-400" />
                      <span className="text-lg text-white">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-slate-400" />
                      <span className="text-lg text-white">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-slate-400" />
                      <span className="text-lg text-white">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ticket className="w-5 h-5 text-slate-400" />
                      <span className="text-lg font-semibold text-slate-200">{event.artist}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {event.status === "upcoming" ? (
                    <>
                      <button className="border border-slate-400 text-slate-300 hover:bg-slate-600 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300">More Info</button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
