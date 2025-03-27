"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Navbar from "@/components/Navbar";

const animations = `
@keyframes slideDown { from {opacity: 0; transform: translateY(-50px);} to {opacity: 1; transform: translateY(0);} }
@keyframes slideIn { from {opacity: 0; transform: translateX(-50px);} to {opacity: 1; transform: translateX(0);} }
@keyframes scaleIn { from {transform: scaleX(0);} to {transform: scaleX(1);} }
@keyframes fadeScale { from {opacity: 0; transform: scale(0.9);} to {opacity: 1; transform: scale(1);} }
@keyframes slideInLeft { from {opacity: 0; transform: translateX(-100px);} to {opacity: 1; transform: translateX(0);} }
@keyframes slideInRight { from {opacity: 0; transform: translateX(100px);} to {opacity: 1; transform: translateX(0);} }
@keyframes pulseGlow { 0% {text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);} 50% {text-shadow: 0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4);} 100% {text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);} }
.animate-slideDown { animation: slideDown 1s ease-out forwards; }
.animate-slideIn { animation: slideIn 1s ease-out forwards; }
.animate-scaleIn { animation: scaleIn 0.8s ease-out forwards; }
.animate-fadeScale { animation: fadeScale 1s ease-out forwards; }
.animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
.animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
.animate-pulseGlow { animation: pulseGlow 2s infinite; }
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "10vh",
          background: "linear-gradient(to bottom, #0a0b14, #141625, #0a0b14)",
          color: "white",
        }}
      ></div>
      <style>{animations}</style>
      <div className="min-h-screen bg-gradient-to-b from-[#0a0b14] via-[#141625] to-[#0a0b14] text-white">
        <section className="relative h-[400px] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat bg-fixed">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0b14]" />
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron animate-slideDown">
              About Us
            </h1>
            <div
              className="w-24 h-1 bg-purple-500 mx-auto animate-scaleIn"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#0c0d16] via-[#141625] to-[#0c0d16]">
          <div className="max-w-7xl mx-auto">
            <div className="text-gray-200 space-y-8 max-w-4xl mx-auto text-justify">
              <p
                className="text-xl leading-relaxed animate-slideIn opacity-0"
                style={{ animationDelay: "0.4s" }}
              >
                Welcome to Kronos, Central India&apos;s largest youth festival!
                Since its inception in 2010, Kronos has evolved into an
                unparalleled celebration of technology, culture, and youth. Our
                annual techno-cultural festival, hosted by Institute of
                Technology and Management Gwalior, brings together over 18,000+
                students from across the country for a 3-day celebration, the
                main motive of KRONOS is to bring out the competitive domain of
                students from within themselves and participate among different
                technical and cultural events.
              </p>
              <p
                className="text-xl leading-relaxed animate-slideIn opacity-0"
                style={{ animationDelay: "0.6s" }}
              >
                At Kronos, we&apos;re passionate about providing a platform for
                students to unleash their competitive spirit, showcase their
                talents, and learn from industry experts. Our festival features
                a diverse range of technical and cultural events, including
                Escape Room, GDG Hackathon, ITM Got Talent, AD-Mad, DJ-Nights,
                and more. Our festival offers a unique blend of learning and
                entertainment. The event culminates in a spectacular night show,
                featuring a concert by a famous singer or music band.
              </p>
              <p
                className="text-xl leading-relaxed animate-slideIn opacity-0"
                style={{ animationDelay: "0.8s" }}
              >
                The aura and glory of KRONOS reaches to a new height every year
                embarking upon the minds of people, tale of a successful
                endeavor. Join us at ITM Gwalior for an unforgettable experience
                that will leave you inspired, motivated, and eagerly
                anticipating next year&apos;s Kronos event!
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0c0d16] to-[#141625]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-[#1a1c2e]/50 p-10 rounded-lg text-center backdrop-blur-sm animate-fadeScale opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-6xl font-bold text-purple-400 mb-4">
                18,000+
              </div>
              <div className="text-xl text-gray-300">Annual Attendees</div>
            </div>
            <div
              className="bg-[#1a1c2e]/50 p-10 rounded-lg text-center backdrop-blur-sm animate-fadeScale opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-6xl font-bold text-purple-400 mb-4">6th</div>
              <div className="text-xl text-gray-300">Edition</div>
            </div>
            <div
              className="bg-[#1a1c2e]/50 p-10 rounded-lg text-center backdrop-blur-sm animate-fadeScale opacity-0"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-6xl font-bold text-purple-400 mb-4">3</div>
              <div className="text-xl text-gray-300">Days of Events</div>
            </div>
          </div>
        </section>

        {/* Hero Section with Images */}
        <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div className="w-full h-[400px] rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 animate-slideInLeft opacity-0">
              <img
                src="/ITMGOILogo.png"
                alt="ITM GOI"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-[400px] rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 animate-slideInRight opacity-0">
              <img
                src="/itm_logo.png"
                alt="Kronos ITM"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#141625] to-[#0a0b14]">
          <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 font-orbitron animate-pulseGlow">
            KRONOS awaits!
          </h1>
          <h2
            className="text-4xl font-semibold mb-6 animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            Join the movement
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            Witness the grandeur of Central India&apos;s largest youth festival
            and be a part of the unforgettable experience!
          </p>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0b14] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="mb-6">
                  <img
                    src="/brand_logo_w.png"
                    alt="KRONOS'25"
                    className="h-8"
                  />
                </div>
                <p className="text-gray-300 mb-6">
                  KRONOS is the annual techno-cultural festival of ITM
                  University, the biggest youth festival of central India.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors p-2 bg-[#1a1c2e] rounded-full hover:scale-110 transform duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors p-2 bg-[#1a1c2e] rounded-full hover:scale-110 transform duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/thekronosclub"
                    className="text-gray-400 hover:text-purple-400 transition-colors p-2 bg-[#1a1c2e] rounded-full hover:scale-110 transform duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-purple-400 transition-colors p-2 bg-[#1a1c2e] rounded-full hover:scale-110 transform duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sponsors"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Sponsors
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Events</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Technical Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Cultural Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Workshops
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Pro Nights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Schedule
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <p className="text-gray-300">
                    GDSC Office, Nuemman block, 2nd Gwalior, Madhya Pradesh,
                    India
                  </p>
                  <p className="text-gray-300">+91 1234567890</p>
                  <p className="text-gray-300">info@kronos.itm.edu</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 KRONOS - ITM Universe. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
