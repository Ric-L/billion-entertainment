"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-black  px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all animate-pulse-glow duration-1000 delay-300 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-7xl md:text-9xl font-bold mb-8 text-balance">
            <span className="text-foreground">BILLION</span>
            <br />
            <span className="text-primary ">ENTERTAINMENT</span>
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-10"}`}>
          <p className="text-2xl  md:text-3xl text-white mb-12 text-pretty leading-relaxed max-w-4xl mx-auto">
            Empowering artists to reach new heights.
            <span className="text-secondary font-semibold"> Innovating entertainment</span> for the digital age.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
          <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-primary mb-4">DISCOVER</h3>
            <p className="text-card-foreground text-pretty">Uncover the next generation of musical talent</p>
          </div>

          <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-secondary mb-4">ELEVATE</h3>
            <p className="text-card-foreground text-pretty">Transform artists into global sensations</p>
          </div>

          <div className="p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-accent mb-4">INSPIRE</h3>
            <p className="text-card-foreground text-pretty">Create music that moves hearts and minds</p>
          </div>
        </div>
      </div>
    </section>
  );
}
