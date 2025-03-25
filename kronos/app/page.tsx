"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  ChevronRight,
  Clock,
  Users,
  Zap,
  Cpu,
  Globe,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";

// Predefined values for floating particles
const particleData = [
  {
    top: "4%",
    left: "55%",
    animation: "float-particle 10s linear infinite",
    animationDelay: "0.3s",
  },
  {
    top: "23%",
    left: "81%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "4.2s",
  },
  {
    top: "69%",
    left: "65%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "3.4s",
  },
  {
    top: "38%",
    left: "9%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "0.6s",
  },
  {
    top: "44%",
    left: "49%",
    animation: "float-particle 11s linear infinite",
    animationDelay: "2.5s",
  },
  {
    top: "7%",
    left: "57%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "3.6s",
  },
  {
    top: "14%",
    left: "98%",
    animation: "float-particle 13s linear infinite",
    animationDelay: "2.5s",
  },
  {
    top: "5%",
    left: "50%",
    animation: "float-particle 11s linear infinite",
    animationDelay: "1.4s",
  },
  {
    top: "41%",
    left: "31%",
    animation: "float-particle 12s linear infinite",
    animationDelay: "1.3s",
  },
  {
    top: "18%",
    left: "3%",
    animation: "float-particle 6s linear infinite",
    animationDelay: "3.3s",
  },
  {
    top: "48%",
    left: "98%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "2.6s",
  },
  {
    top: "71%",
    left: "14%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "4.1s",
  },
  {
    top: "49%",
    left: "34%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "4.6s",
  },
  {
    top: "0%",
    left: "37%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "0.3s",
  },
  {
    top: "46%",
    left: "27%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "3.7s",
  },
  {
    top: "11%",
    left: "82%",
    animation: "float-particle 9s linear infinite",
    animationDelay: "0.2s",
  },
  {
    top: "4%",
    left: "68%",
    animation: "float-particle 9s linear infinite",
    animationDelay: "1.3s",
  },
  {
    top: "6%",
    left: "58%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "0.6s",
  },
  {
    top: "47%",
    left: "40%",
    animation: "float-particle 8s linear infinite",
    animationDelay: "3.2s",
  },
  {
    top: "7%",
    left: "95%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "3.9s",
  },
  {
    top: "34%",
    left: "67%",
    animation: "float-particle 20s linear infinite",
    animationDelay: "3.9s",
  },
];

export default function KronosTechFest() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 42,
    hours: 18,
    minutes: 24,
    seconds: 56,
  });
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    events: useRef(null),
    speakers: useRef(null),
    schedule: useRef(null),
    sponsors: useRef(null),
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const scrollPosition = window.scrollY + 100;

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer

  function AutomaticImageSlider() {
    const images = [
      "/slider-6.jpg",
      "/slider-1.jpg",
      "/slider-2.jpg",
      "/slider-3.jpg",
      // Add more image paths as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slider image ${index + 1}`}
              width={1920}
              height={1080}
              className="absolute w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Manual Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
        >
          &#8250;
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        {/* Arc reactor glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(138,43,226,0.15)_0%,transparent_70%)] animate-pulse-slow"></div>

        {/* Updated colors for purple/pink theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(186,85,211,0.1),transparent_70%)] animate-move-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,112,219,0.1),transparent_70%)] animate-move-slow-reverse"></div>

        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[url('/slider-1.jpg')] bg-cover opacity-10"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particleData.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-500 opacity-70"
              style={{
                top: particle.top,
                left: particle.left,
                animation: particle.animation,
                animationDelay: particle.animationDelay,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 animate-fade-in-up">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium backdrop-blur-sm">
                TECH FEST 2025
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">KRONOS</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-text-shimmer">
                  TECH REVOLUTION
                </span>
              </h1>
              <p className="text-gray-400 max-w-md">
                Experience the future of technology at the most anticipated tech
                festival of the year. Powered by innovation, driven by
                brilliance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span>April 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span>Tech City Arena</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                  Register Now
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500/50 text-white hover:bg-purple-950/30 transition-all duration-300 hover:border-purple-500 group"
                >
                  Explore Events
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 relative animate-fade-in-up animation-delay-300">
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Arc reactor inspired design with updated colors */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-4 border-purple-500/20 animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-pink-500/20 animate-spin-slow-reverse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-purple-500/10 animate-spin-slow"></div>

                {/* Glowing effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg blur-xl animate-pulse-slow"></div>

                <div className="relative z-10 w-full h-full rounded-lg border border-purple-500/30 overflow-hidden group transition-all duration-500 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Replace with this automatic slider implementation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                  {/* Automatic Image Slider */}
                  <AutomaticImageSlider />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse-slow animation-delay-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <div className="text-xs text-gray-400 mb-2">Scroll Down</div>
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <Countdown />

      {/* About Section */}
      <section
        id="about"
        ref={sectionRefs.about}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-fade-in-left">
              <div className="relative">
                {/* Arc reactor inspired design */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border-2 border-purple-500/20 animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-pink-500/20 animate-spin-slow-reverse"></div>

                {/* Glowing effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg blur-xl animate-pulse-slow"></div>

                <div className="relative z-10 rounded-lg border border-purple-500/30 overflow-hidden group transition-all duration-500 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                  <Image
                    src="/brand_logo_w.png"
                    alt="About Kronos"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow"></div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 animate-fade-in-right">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium backdrop-blur-sm">
                ABOUT KRONOS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                The Ultimate Tech Experience
              </h2>
              <p className="text-gray-400">
                Kronos Tech Fest is where innovation meets inspiration. Join us
                for three days of cutting-edge technology, groundbreaking
                workshops, and networking with the brightest minds in the
                industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  {
                    icon: <Zap className="w-5 h-5 text-pink-500" />,
                    title: "50+ Workshops",
                    desc: "Hands-on learning experiences",
                  },
                  {
                    icon: <Users className="w-5 h-5 text-pink-500" />,
                    title: "100+ Speakers",
                    desc: "Industry leaders and innovators",
                  },
                  {
                    icon: <Globe className="w-5 h-5 text-pink-500" />,
                    title: "Global Community",
                    desc: "Attendees from 50+ countries",
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-pink-500" />,
                    title: "72 Hours",
                    desc: "Of non-stop tech innovation",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-md group-hover:shadow-purple-500/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-purple-500 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section
        id="events"
        ref={sectionRefs.events}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              FEATURED EVENTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tech-title bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-text-shimmer">
              EVENTS
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Dive into a world of innovation with our carefully curated events
              designed to inspire, educate, and transform.
            </p>
          </div>
          // Update the event tabs to match the screenshot
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant="outline"
              className="bg-transparent border border-purple-500/50 text-white hover:bg-purple-950/30 transition-all duration-300 hover:border-purple-500 font-orbitron tracking-wider"
            >
              PRE EVENT
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 font-orbitron tracking-wider">
              MAIN EVENT
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HOLI PARTY",
                desc: "Engage in thought-provoking discussions on the ethical implications of advanced AI systems.",
                badge: "PRE EVENT",
                badgeColor: "bg-purple-600/90",
                day: "Day 1",
                time: "MARCH 09, 2025",
              },
              {
                title: "BEYOND THE LENS",
                desc: "Explore how nature's designs can inspire technological innovation. This interdisciplinary forum brings together experts.",
                badge: "MAIN EVENT",
                badgeColor: "bg-pink-600/90",
                day: "Day 2",
                time: "APRIL 01, 2025",
              },
              {
                title: "AD-MAD",
                desc: "Envision the societal implications of emerging technologies in this forward-thinking symposium.",
                badge: "MAIN EVENT",
                badgeColor: "bg-purple-600/90",
                day: "Day 3",
                time: "APRIL 07, 2025",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={event.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                  {/* HUD elements */}
                  <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg"></div>
                  </div>

                  <div
                    className={`absolute bottom-4 left-4 ${event.badgeColor} text-white text-xs font-medium px-2 py-1 rounded event-badge`}
                  >
                    {event.badge}
                  </div>
                </div>
                <div className="p-6 relative">
                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors duration-300 event-title">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{event.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="event-date">{event.time}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/30 text-white hover:bg-purple-950/30 group-hover:border-purple-500/70 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group">
              View All Events
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section
        id="speakers"
        ref={sectionRefs.speakers}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              TECH VISIONARIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our Speakers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Learn from the brightest minds and industry leaders who are
              shaping the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "AI Research Director, TechCorp",
                bio: "Leading expert in machine learning and neural networks with over 15 years of experience.",
              },
              {
                name: "Mark Johnson",
                role: "CTO, Future Systems",
                bio: "Visionary tech leader pioneering advancements in quantum computing and blockchain.",
              },
              {
                name: "Elena Rodriguez",
                role: "Founder, NextGen VR",
                bio: "Revolutionary in virtual reality technology with multiple patents in immersive experiences.",
              },
              {
                name: "James Wilson",
                role: "Security Expert, CyberShield",
                bio: "Renowned cybersecurity specialist protecting Fortune 500 companies from emerging threats.",
              },
            ].map((speaker, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* HUD elements */}
                  <div className="absolute inset-0 z-20 border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 z-20 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg"></div>
                  </div>

                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                  <Image
                    src="/brand_logo_w.png"
                    alt={speaker.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                  <h3 className="text-xl font-bold group-hover:text-purple-500 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-purple-500 text-sm mb-2">{speaker.role}</p>
                  <p className="text-gray-400 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group">
              View All Speakers
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section
        id="schedule"
        ref={sectionRefs.schedule}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              EVENT TIMELINE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Event Schedule</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Plan your Kronos experience with our comprehensive event schedule.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3 animate-fade-in-left">
              <div className="sticky top-20">
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl overflow-hidden p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
                  <h3 className="text-xl font-bold mb-4">Event Days</h3>
                  <div className="space-y-2">
                    <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-md shadow-purple-500/10">
                      Day 1: April 15
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-950/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      Day 2: April 16
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-950/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      Day 3: April 17
                    </Button>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4">Venues</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-950/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      Main Stage
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-950/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      Workshop Hall
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-950/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      Innovation Lab
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-purple-500/30 text-white hover:bg-purple-950/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      Networking Lounge
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 animate-fade-in-right">
              <div className="space-y-6">
                {[
                  {
                    time: "9:00 AM",
                    duration: "60 min",
                    venue: "MAIN STAGE",
                    venueColor: "bg-purple-600/90",
                    day: "Day 1",
                    title: "Opening Ceremony: The Future of Tech",
                    desc: "Join us for the grand opening of Kronos Tech Fest with keynote speeches from industry leaders.",
                    speaker: "Dr. Sarah Chen",
                  },
                  {
                    time: "10:30 AM",
                    duration: "90 min",
                    venue: "WORKSHOP HALL",
                    venueColor: "bg-pink-600/90",
                    day: "Day 1",
                    title: "AI in Practice: Building Intelligent Systems",
                    desc: "A hands-on workshop exploring practical applications of artificial intelligence in today's technology landscape.",
                    speaker: "Mark Johnson",
                  },
                  {
                    time: "1:00 PM",
                    duration: "60 min",
                    venue: "MAIN STAGE",
                    venueColor: "bg-purple-600/90",
                    day: "Day 1",
                    title: "The Next Frontier: Quantum Computing",
                    desc: "Explore the revolutionary potential of quantum computing and its implications for the future of technology.",
                    speaker: "Elena Rodriguez",
                  },
                  {
                    time: "3:30 PM",
                    duration: "120 min",
                    venue: "INNOVATION LAB",
                    venueColor: "bg-pink-600/90",
                    day: "Day 1",
                    title: "Hackathon Kickoff: Building the Future",
                    desc: "The official start of our 48-hour hackathon. Form teams, get briefed on challenges, and start coding!",
                    speaker: "James Wilson",
                  },
                ].map((slot, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl overflow-hidden p-6 transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 group animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="md:w-1/4">
                        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-3 text-center group-hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-md group-hover:shadow-purple-500/10">
                          <div className="text-purple-500 font-bold">
                            {slot.time}
                          </div>
                          <div className="text-xs text-gray-400">
                            {slot.duration}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-2 py-0.5 ${slot.venueColor} text-white text-xs rounded`}
                          >
                            {slot.venue}
                          </span>
                          <span className="text-pink-500 text-sm">
                            {slot.day}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold group-hover:text-purple-500 transition-colors duration-300">
                          {slot.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-2">
                          {slot.desc}
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300">
                            <Image
                              src="/brand_logo_w.png"
                              alt="Speaker"
                              width={30}
                              height={30}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm">{slot.speaker}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section
        id="sponsors"
        ref={sectionRefs.sponsors}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              OUR PARTNERS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Sponsors & Partners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Kronos Tech Fest is made possible by these innovative companies
              shaping the future of technology.
            </p>
          </div>

          <div className="space-y-12">
            {/* Platinum Sponsors */}
            <div className="animate-fade-in-up">
              <h3 className="text-xl font-bold mb-6 text-center">
                Platinum Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-8 flex items-center justify-center transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 group"
                  >
                    <div className="relative">
                      {/* Tech scan lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <Image
                        src="/brand_logo_w.png"
                        alt={`Sponsor ${i}`}
                        width={200}
                        height={80}
                        className="max-h-16 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="animate-fade-in-up animation-delay-300">
              <h3 className="text-xl font-bold mb-6 text-center">
                Gold Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 group"
                  >
                    <div className="relative">
                      {/* Tech scan lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <Image
                        src="/brand_logo_w.png"
                        alt={`Sponsor ${i + 3}`}
                        width={150}
                        height={60}
                        className="max-h-12 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="animate-fade-in-up animation-delay-500">
              <h3 className="text-xl font-bold mb-6 text-center">
                Silver Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 group"
                  >
                    <div className="relative">
                      {/* Tech scan lines */}
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <Image
                        src="/brand_logo_w.png"
                        alt={`Sponsor ${i + 7}`}
                        width={120}
                        height={50}
                        className="max-h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in animation-delay-700">
            <h3 className="text-xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Join these innovative companies in supporting the future of
              technology at Kronos Tech Fest.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              Download Sponsor Deck
            </Button>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 md:p-12 transition-all duration-500 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience the Future?
                </h2>
                <p className="text-gray-300 mb-6">
                  Secure your spot at the most anticipated tech event of the
                  year. Early bird tickets available now!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                    Register Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/50 text-white hover:bg-white/10 transition-all duration-300 hover:border-white"
                  >
                    Group Tickets
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in-right">
                {/* Arc reactor inspired design */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border-2 border-purple-500/20 animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-pink-500/20 animate-spin-slow-reverse"></div>

                {/* Glowing effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg blur-xl animate-pulse-slow"></div>

                <div className="relative z-10 rounded-lg border border-purple-500/30 overflow-hidden group transition-all duration-500 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                  <Image
                    src="/brand_logo_w.png"
                    alt="Tech Fest Crowd"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-900/30 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  {/* Arc reactor logo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 animate-pulse-slow"></div>
                  <div className="absolute inset-1 rounded-full bg-gray-900"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-purple-500/50"></div>
                  <div className="absolute inset-3 rounded-full bg-purple-500/20 animate-pulse"></div>
                  <Cpu className="relative z-10 w-4 h-4 text-white" />
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-text-shimmer">
                  KRONOS
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                The ultimate tech experience bringing together innovators,
                creators, and visionaries.
              </p>
              <div className="flex gap-4">
                {["facebook", "twitter", "instagram", "github"].map(
                  (social, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-900/50 transition-colors duration-300 group"
                    >
                      <div className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300">
                        {social === "facebook" && (
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {social === "twitter" && (
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        )}
                        {social === "instagram" && (
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.04 2.525c.636-.247 1.363-.416 2.427-.465C8.492 2.013 8.852 2 11.315 2h.08zm0 1.8h-.08c-2.4 0-2.687.011-3.637.058-.89.041-1.37.2-1.692.334a3.102 3.102 0 00-1.14.74 3.102 3.102 0 00-.74 1.14c-.134.322-.293.802-.334 1.692-.047.95-.058 1.237-.058 3.637v.08c0 2.4.011 2.687.058 3.637.041.89.2 1.37.334 1.692.165.396.404.76.74 1.14.38.336.744.575 1.14.74.322.134.802.293 1.692.334.95.047 1.237.058 3.637.058h.08c2.4 0 2.687-.011 3.637-.058.89-.041 1.37-.2 1.692-.334a3.102 3.102 0 001.14-.74 3.102 3.102 0 00.74-1.14c.134-.322.293-.802.334-1.692.047-.95.058-1.237.058-3.637v-.08c0-2.4-.011-2.687-.058-3.637-.041-.89-.2-1.37-.334-1.692a3.102 3.102 0 00-.74-1.14 3.102 3.102 0 00-1.14-.74c-.322-.134-.802-.293-1.692-.334-.95-.047-1.237-.058-3.637-.058zm0 4.3a5.315 5.315 0 100 10.63 5.315 5.315 0 000-10.63zm0 1.8a3.515 3.515 0 110 7.03 3.515 3.515 0 010-7.03zm5.315-.8a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {social === "github" && (
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.8c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.375.202 2.392.1 2.645.64.7 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.565 4.935.36.31.678.92.678 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
