"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const events = [
  {
    id: 1,
    title: "HOLI PARTY",
    date: "09-MAR-25",
    description: "Celebrate the festival of colors with music and joy",
    category: "pre",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 2,
    title: "BEYOND THE LENS (INTIMATION)",
    date: "01-APR-25",
    description: "Photography event intimation and briefing session",
    category: "pre",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    id: 6,
    title: "SPORTS EVENT",
    date: "27-MAR-25 to 10-APR-25",
    description: "Various sports competitions and tournaments",
    category: "pre",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 3,
    title: "AD-MAD",
    date: "07-APR-25",
    description: "Creative advertising competition",
    category: "pre",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 4,
    title: "BEYOND THE LENS (SCREENING)",
    date: "09-APR-25",
    description: "Photography competition screening round",
    category: "pre",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 5,
    title: "E-SPORTS DAY 1 & DAY 2",
    date: "18-APR-25 to 20-APR-25",
    description: "Gaming tournaments and competitions",
    category: "pre",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 7,
    title: "ITM GOT TALENT",
    date: "21-04-25 to 22-04-25",
    description: "Talent showcase competition",
    category: "pre",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 8,
    title: "SPORTS - FINAL",
    date: "23-APR-25",
    description: "Final rounds of sports competitions",
    category: "pre",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    id: 9,
    title: "WORKSHOPS",
    date: "7-APR-25 to 20-APR-24",
    description: "Various skill development workshops",
    category: "pre",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 10,
    title: "ROADIES",
    date: "25-APR-25",
    description: "Adventure and challenge based competition",
    category: "main",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 11,
    title: "ESCAPE ROOM",
    date: "25-APR-25",
    description: "Interactive puzzle solving challenge",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 12,
    title: "CARNIVAL DAY 1",
    date: "25-APR-25",
    description: "First day of carnival festivities",
    category: "main",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 13,
    title: "FIESTA",
    date: "25-APR-25",
    description: "Cultural celebration and performances",
    category: "main",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 14,
    title: "COSPLAY",
    date: "25-APR-25",
    description: "Costume play and character portrayal competition",
    category: "main",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    id: 15,
    title: "BAND DAY 1",
    date: "25-APR-25",
    description: "First day of band performances",
    category: "main",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 16,
    title: "CARNIVAL DAY 2",
    date: "26-APR-25",
    description: "Second day of carnival festivities",
    category: "main",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 17,
    title: "FASHION SHOW",
    date: "26-APR-25",
    description: "Style and fashion showcase",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 18,
    title: "CHROMAVERSE",
    date: "26-APR-25",
    description: "Creative arts and design exhibition",
    category: "main",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 19,
    title: "BAND DAY 2",
    date: "26-APR-25",
    description: "Second day of band performances",
    category: "main",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 20,
    title: "TREASURE HUNT",
    date: "26-APR-25",
    description: "Adventure quest with clues and prizes",
    category: "main",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    id: 21,
    title: "AI-DEBATE ZONE",
    date: "26-APR-25",
    description: "Discussions and debates on artificial intelligence",
    category: "main",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 22,
    title: "HACKATHON",
    date: "26-APR-25 to 27-APR-25",
    description: "24-hour coding competition",
    category: "main",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 23,
    title: "INTERSTELLAR TALK/TECH TALK",
    date: "27-APR-25",
    description: "Technology and innovation discussions",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 24,
    title: "STARTUP SHOWCASE",
    date: "27-APR-25",
    description: "Presentation of innovative business ideas",
    category: "main",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 25,
    title: "DJ NIGHT",
    date: "27-APR-25",
    description: "Music and dance celebration",
    category: "main",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("pre");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f1117] text-white p-5">
        <style jsx global>{`
          @keyframes movedown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
          }

          @keyframes glow {
            0%,
            100% {
              box-shadow: 0 0 25px rgba(156, 107, 223, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(156, 107, 223, 0.6);
            }
          }

          .timeline-bullet {
            animation: pulse 2s infinite, glow 3s infinite;
          }

          .card-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .card-hover:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(156, 107, 223, 0.2),
              0 0 20px rgba(156, 107, 223, 0.1);
          }
        `}</style>

        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-center text-7xl font-bold tracking-[0.5em] mb-12 text-[#9c6bdf]">
            SCHEDULE
          </h1>

          <div className="flex justify-center gap-6 mb-16">
            <Button
              variant="ghost"
              className={cn(
                "text-white relative px-8 transition-all duration-300 overflow-hidden hover:bg-[rgba(156,107,223,0.2)]",
                activeCategory === "pre" && "bg-[rgba(156,107,223,0.1)]"
              )}
              onClick={() => setActiveCategory("pre")}
            >
              <span className="relative z-10">PRE EVENT</span>
              {activeCategory === "pre" && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#9c6bdf]/20 to-[#6b7adf]/20" />
              )}
            </Button>
            <Button
              variant="ghost"
              className={cn(
                "text-white relative px-8 transition-all duration-300 overflow-hidden hover:bg-[rgba(156,107,223,0.2)]",
                activeCategory === "main" && "bg-[rgba(156,107,223,0.1)]"
              )}
              onClick={() => setActiveCategory("main")}
            >
              <span className="relative z-10">MAIN EVENT</span>
              {activeCategory === "main" && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#9c6bdf]/20 to-[#6b7adf]/20" />
              )}
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto min-h-[400px]">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#9c6bdf] via-[#6b7adf] to-[#9c6bdf]">
              <div className="absolute inset-0 opacity-50 blur-[2px]" />
            </div>

            <div className="space-y-16">
              {events
                .filter((event) => event.category === activeCategory)
                .map((event, index) => (
                  <div
                    key={event.id}
                    className={cn(
                      "flex items-start",
                      index % 2 === 0 ? "justify-start" : "justify-end",
                      "opacity-0 animate-[movedown_1s_linear_forwards]"
                    )}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2"
                      style={{ top: "28px" }}
                    >
                      <div className="relative timeline-bullet">
                        <div
                          className={cn(
                            "absolute -inset-2 rounded-full",
                            "bg-gradient-to-r",
                            event.gradient,
                            "opacity-20 blur-[2px]"
                          )}
                        />
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full",
                            "bg-gradient-to-r",
                            event.gradient,
                            "relative z-10",
                            "border-2 border-white/20",
                            "shadow-lg shadow-[#9c6bdf]/20",
                            "transition-transform duration-300 hover:scale-125"
                          )}
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>

                    <Card
                      className={cn(
                        "w-[calc(50%-3rem)] p-8 relative card-hover group",
                        "bg-gradient-to-br from-[rgba(0,0,0,0.8)] to-transparent",
                        "border border-white/10 backdrop-blur-xl",
                        "rounded-xl overflow-hidden"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity",
                          event.gradient
                        )}
                      />
                      <div
                        className={cn(
                          "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                          event.gradient
                        )}
                      />

                      <div className="relative z-10">
                        <h2
                          className={cn(
                            "text-2xl font-bold mb-3 tracking-wider bg-gradient-to-r bg-clip-text text-transparent",
                            event.gradient
                          )}
                        >
                          {event.title}
                        </h2>
                        <small className="text-sm font-medium text-white/60 block mb-4 tracking-wider">
                          {event.date}
                        </small>
                        <p className="text-white/90 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div
                        className={cn(
                          "absolute top-8 w-0 h-0 z-20",
                          index % 2 === 0
                            ? "right-[-20px] border-l-[20px] border-l-black/80 border-y-[20px] border-y-transparent"
                            : "left-[-20px] border-r-[20px] border-r-black/80 border-y-[20px] border-y-transparent"
                        )}
                      />
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
