"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const footerRef = useRef<HTMLElement>(null);

  const phoneNumber = "+918794516245";
  const emailAddress = "manager@billionentertainment.co.in";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer ref={footerRef} className=" border-t border-slate-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
            <h3 className="text-3xl font-bold mb-6">
              <span className="text-slate-200">BILLION</span>
              <br />
              <span className="text-white">ENTERTAINMENT</span>
            </h3>
            <p className="text-slate-300 mb-6 text-pretty leading-relaxed">Empowering artists and creating unforgettable musical experiences for audiences worldwide.</p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="hover:bg-slate-600 hover:text-white transition-colors border-slate-500 bg-transparent text-slate-300">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-slate-600 hover:text-white transition-colors border-slate-500 bg-transparent text-slate-300">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-slate-600 hover:text-white transition-colors border-slate-500 bg-transparent text-slate-300">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Our Artists", "About Us", "Services", "News", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-300 hover:text-slate-100 transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {["Artist Management", "Music Production", "Event Planning", "Digital Marketing", "Brand Partnerships", "Tour Management"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-slate-300 hover:text-slate-100 transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}>
            <h4 className="text-xl font-bold mb-6 text-white">Stay Connected</h4>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                  required
                />
                <Button type="submit" className="bg-slate-700 hover:bg-slate-600 text-white border border-slate-600">
                  Subscribe
                </Button>
              </div>
            </form>

            <div className="space-y-3">
              <Link href={`mailto:${emailAddress}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-sm">manager@billionentertainment.co.in</span>
              </Link>
              <Link href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-sm">+91-8794516245</span>
              </Link>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-sm">Imphal, Manipur, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-500 ${
              isVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-slate-400 text-sm">© 2025 Billion Entertainment. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-slate-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-200 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-slate-200 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
