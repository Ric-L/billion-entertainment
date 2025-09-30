"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Calendar } from "lucide-react";
import Link from "next/link";

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+918794516245";
  const emailAddress = "manager@billionentertainment.co.in";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse drop-shadow-2xl" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            Book Your Event
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
            Ready to bring world-class entertainment to your venue? Contact us to book our incredible artists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Phone Contact */}
          <Link
            href={`tel:${phoneNumber}`}
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-8 hover:border-slate-400/60 transition-all duration-300 hover:scale-105 cursor-pointer block"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-slate-600 p-4 rounded-full animate-bounce">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
            <p className="text-slate-300 mb-4">Speak directly with our booking team</p>
            <div className="text-3xl font-bold text-slate-200 hover:text-white transition-colors duration-300">+91 8794516245</div>
          </Link>

          {/* Email Contact */}
          <Link
            href={`mailto:${emailAddress}`}
            className="bg-slate-800/60 backdrop-blur-sm border border-slate-500/30 rounded-2xl p-8 hover:border-slate-400/60 transition-all duration-300 hover:scale-105 cursor-pointer block"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-slate-600 p-4 rounded-full animate-pulse">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
            <p className="text-slate-300 mb-4">Get detailed information and quotes</p>
            <div className="text-xl font-bold text-slate-200 hover:text-white transition-colors duration-300 break-all">manager@billionentertainment.co.in</div>
          </Link>
        </div>

        <div className="bg-gradient-to-r from-slate-700/30 to-slate-600/30 backdrop-blur-sm border border-slate-400/30 rounded-2xl p-8 bg-slate-800/40">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-slate-300 mr-3" />
            <h3 className="text-2xl font-bold text-white">Available 24/7</h3>
          </div>
          <p className="text-lg text-slate-300">Our booking team is ready to help you create an unforgettable experience. Contact us anytime for immediate assistance with your event planning.</p>
        </div>
      </div>
    </section>
  );
}
