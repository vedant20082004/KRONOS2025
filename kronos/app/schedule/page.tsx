"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

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
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("pre")
  const [isChangingCategory, setIsChangingCategory] = useState(false)
  const [animatedEvents, setAnimatedEvents] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return

    setIsChangingCategory(true)
    setTimeout(() => {
      setActiveCategory(category)
      setAnimatedEvents([])
      setTimeout(() => {
        setIsChangingCategory(false)
      }, 100)
    }, 500)
  }

  // Add intersection observer for timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline-appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineElements = document.querySelectorAll(".timeline-item")
    timelineElements.forEach((el) => observer.observe(el))

    return () => {
      timelineElements.forEach((el) => observer.unobserve(el))
    }
  }, [activeCategory, isChangingCategory])

  // Add event to animated list when it appears
  const handleEventAppear = (id: number) => {
    if (!animatedEvents.includes(id)) {
      setAnimatedEvents((prev) => [...prev, id])
    }
  }

  // Add particle background effect
  useEffect(() => {
    const canvas = document.getElementById("particles-canvas") as HTMLCanvasElement
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: any[] = []
    const particleCount = 100
    const maxDistance = 150

    // Create particles with more properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        baseColor: Math.random() > 0.5 ? "#9c6bdf" : "#ec4899", // Purple or pink
        alpha: Math.random() * 0.5 + 0.1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseDirection: 1,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() * 0.2 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
        orbitRadius: Math.random() * 3 + 1,
        baseX: 0,
        baseY: 0,
      })
    }

    // Add mouse interaction
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 150
    let mouseActive = false

    canvas.addEventListener("mousemove", (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseActive = true

      // Create ripple effect on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          radius: Math.random() * 2 + 2,
          baseColor: Math.random() > 0.5 ? "#9c6bdf" : "#ec4899",
          alpha: 0.8,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          pulseSpeed: 0.05,
          pulseDirection: -1, // Always fade out
          orbitAngle: 0,
          orbitSpeed: 0,
          orbitRadius: 0,
          baseX: mouseX,
          baseY: mouseY,
          isRipple: true,
        })
      }
    })

    canvas.addEventListener("mouseleave", () => {
      mouseActive = false
    })

    // Store base positions
    for (let i = 0; i < particleCount; i++) {
      particles[i].baseX = particles[i].x
      particles[i].baseY = particles[i].y
    }

    // Create wave effect
    let waveAngle = 0

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update wave angle
      waveAngle += 0.01

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Handle ripple particles differently
        if (p.isRipple) {
          p.alpha += p.pulseSpeed * p.pulseDirection
          p.radius += 0.5

          if (p.alpha <= 0) {
            particles.splice(i, 1)
            i--
            continue
          }

          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.strokeStyle = p.baseColor.replace(")", `, ${p.alpha})`).replace("rgb", "rgba")
          ctx.stroke()

          p.x += p.speedX
          p.y += p.speedY

          continue
        }

        // Regular particles
        // Pulse alpha
        p.alpha += p.pulseSpeed * p.pulseDirection
        if (p.alpha > 0.7 || p.alpha < 0.1) {
          p.pulseDirection *= -1
        }

        // Orbit around base position
        p.orbitAngle += p.orbitSpeed
        p.x = p.baseX + Math.cos(p.orbitAngle) * p.orbitRadius
        p.y = p.baseY + Math.sin(p.orbitAngle) * p.orbitRadius

        // Add wave effect
        p.y += Math.sin(waveAngle + p.baseX * 0.01) * 2

        // Mouse interaction
        if (mouseActive) {
          const dx = mouseX - p.x
          const dy = mouseY - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouseRadius) {
            const force = (mouseRadius - distance) / mouseRadius
            const angle = Math.atan2(dy, dx)
            p.x -= Math.cos(angle) * force * 2
            p.y -= Math.sin(angle) * force * 2
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.baseColor.replace(")", `, ${p.alpha})`).replace("rgb", "rgba")
        ctx.fill()

        // Keep particles within canvas
        if (p.x < 0 || p.x > canvas.width) {
          p.baseX = Math.random() * canvas.width
          p.x = p.baseX
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.baseY = Math.random() * canvas.height
          p.y = p.baseY
        }
      }

      // Connect particles with lines
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          if (particles[a].isRipple || particles[b].isRipple) continue

          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3
            const gradient = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y)

            gradient.addColorStop(0, particles[a].baseColor.replace(")", `, ${opacity})`).replace("rgb", "rgba"))
            gradient.addColorStop(1, particles[b].baseColor.replace(")", `, ${opacity})`).replace("rgb", "rgba"))

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reset base positions on resize
      for (let i = 0; i < particles.length; i++) {
        if (!particles[i].isRipple) {
          particles[i].baseX = Math.random() * canvas.width
          particles[i].baseY = Math.random() * canvas.height
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f1117] text-white p-5 relative overflow-hidden">
        {/* Dynamic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1117] via-[#1a1332] to-[#0f1117] opacity-80 gradient-shift z-0"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(156,107,223,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(156,107,223,0.05)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

        <canvas id="particles-canvas" className="absolute inset-0 z-0 opacity-70"></canvas>

        <style jsx global>{`
          @keyframes movedown {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes moveup {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes moveleft {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }

          @keyframes moveright {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 25px rgba(156, 107, 223, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(156, 107, 223, 0.6);
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.95);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
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
          
          .animate-timeline-appear {
            animation: fadeIn 0.8s forwards;
          }
          
          .category-fade-out {
            animation: fadeOut 0.5s forwards;
          }
          
          .category-fade-in {
            animation: fadeIn 0.5s forwards;
          }
          
          .shimmer-effect {
            background: linear-gradient(
              90deg,
              rgba(156, 107, 223, 0.1) 0%,
              rgba(156, 107, 223, 0.3) 50%,
              rgba(156, 107, 223, 0.1) 100%
            );
            background-size: 200% 100%;
            animation: shimmer 3s infinite;
          }
          
          .floating-animation {
            animation: float 6s ease-in-out infinite;
          }
          
          .rotate-animation {
            animation: rotate 20s linear infinite;
          }

          @keyframes text-glow {
            0%, 100% {
              text-shadow: 0 0 8px rgba(156, 107, 223, 0.5);
            }
            50% {
              text-shadow: 0 0 15px rgba(156, 107, 223, 0.8), 0 0 30px rgba(156, 107, 223, 0.4);
            }
          }

          @keyframes border-pulse {
            0%, 100% {
              border-color: rgba(156, 107, 223, 0.7);
            }
            50% {
              border-color: rgba(236, 72, 153, 0.7);
            }
          }

          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .text-glow-purple {
            animation: text-glow 2s infinite;
          }

          .border-pulse {
            animation: border-pulse 4s infinite;
          }

          .gradient-shift {
            background-size: 200% 200%;
            animation: gradient-shift 5s ease infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto py-12 relative z-10">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl rotate-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl rotate-animation"
            style={{ animationDirection: "reverse" }}
          ></div>

          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] mb-8 sm:mb-10 md:mb-12 text-[#9c6bdf] shimmer-effect p-4 floating-animation">
            SCHEDULE
          </h1>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 sm:mb-16">
            <button
              className={cn(
                "relative group px-8 py-4 overflow-hidden rounded-lg transition-all duration-500",
                activeCategory === "pre" ? "text-white" : "text-white/70 hover:text-white",
              )}
              onClick={() => handleCategoryChange("pre")}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/30 transition-all duration-500 group-hover:border-purple-500/70"></div>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeCategory === "pre" ? "opacity-100" : "group-hover:opacity-40",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,107,223,0.3),transparent_70%)]"></div>
              </div>

              {/* Animated corners */}
              <span
                className={cn(
                  "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>

              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-full" : "group-hover:w-3/4",
                )}
              ></span>

              {/* Text with glow effect */}
              <span
                className={cn(
                  "relative z-10 font-bold tracking-widest text-lg transition-all duration-500",
                  activeCategory === "pre" ? "text-glow-purple" : "",
                )}
              >
                PRE EVENT
                {activeCategory === "pre" && (
                  <span className="absolute inset-0 flex items-center justify-center blur-sm text-purple-400 animate-pulse">
                    PRE EVENT
                  </span>
                )}
              </span>
            </button>

            <button
              className={cn(
                "relative group px-8 py-4 overflow-hidden rounded-lg transition-all duration-500",
                activeCategory === "main" ? "text-white" : "text-white/70 hover:text-white",
              )}
              onClick={() => handleCategoryChange("main")}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/30 transition-all duration-500 group-hover:border-purple-500/70"></div>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeCategory === "main" ? "opacity-100" : "group-hover:opacity-40",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,107,223,0.3),transparent_70%)]"></div>
              </div>

              {/* Animated corners */}
              <span
                className={cn(
                  "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>

              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
                  activeCategory === "main" ? "w-full" : "group-hover:w-3/4",
                )}
              ></span>

              {/* Text with glow effect */}
              <span
                className={cn(
                  "relative z-10 font-bold tracking-widest text-lg transition-all duration-500",
                  activeCategory === "main" ? "text-glow-purple" : "",
                )}
              >
                MAIN EVENT
                {activeCategory === "main" && (
                  <span className="absolute inset-0 flex items-center justify-center blur-sm text-purple-400 animate-pulse">
                    MAIN EVENT
                  </span>
                )}
              </span>
            </button>
          </div>

          <div
            ref={timelineRef}
            className={cn(
              "relative max-w-full sm:max-w-4xl mx-auto min-h-[300px] sm:min-h-[400px]",
              isChangingCategory ? "category-fade-out" : "category-fade-in",
            )}
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] sm:w-[2px] bg-gradient-to-b from-[#9c6bdf] via-[#6b7adf] to-[#9c6bdf]">
              <div className="absolute inset-0 opacity-50 blur-[1px] sm:blur-[2px]" />
            </div>

            <div className="space-y-8 sm:space-y-12">
              {events
                .filter((event) => event.category === activeCategory)
                .map((event, index) => {
                  const isEven = index % 2 === 0
                  const animationClass = isEven
                    ? isEven
                      ? "animate-[moveright_0.8s_ease-out_forwards]"
                      : "animate-[moveleft_0.8s_ease-out_forwards]"
                    : isEven
                      ? "animate-[movedown_0.8s_ease-out_forwards]"
                      : "animate-[moveup_0.8s_ease-out_forwards]"

                  return (
                    <div
                      key={event.id}
                      className={cn(
                        "flex flex-col sm:flex-row items-start timeline-item opacity-0",
                        isEven ? "sm:justify-start" : "sm:justify-end",
                      )}
                      style={{ animationDelay: `${index * 0.15}s` }}
                      onAnimationEnd={() => handleEventAppear(event.id)}
                    >
                      {/* Timeline bullet */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#9c6bdf] timeline-bullet z-10"></div>

                      <Card
                        className={cn(
                          "w-full sm:w-[calc(50%-1.5rem)] p-6 sm:p-8 relative card-hover group",
                          "bg-gradient-to-br from-[rgba(0,0,0,0.8)] to-transparent",
                          "border border-white/10 backdrop-blur-xl",
                          "rounded-xl overflow-hidden",
                          animationClass,
                        )}
                      >
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-700",
                            event.gradient,
                          )}
                        />
                        <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r", event.gradient)} />

                        {/* Animated corner accent */}
                        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                          <div
                            className={cn(
                              "absolute top-0 right-0 w-16 h-16 rotate-45 translate-x-8 -translate-y-8 bg-gradient-to-r",
                              event.gradient,
                              "opacity-70 group-hover:opacity-100 transition-opacity duration-500",
                            )}
                          ></div>
                        </div>

                        <div className="relative z-10">
                          <h2
                            className={cn(
                              "text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-wide sm:tracking-wider bg-gradient-to-r bg-clip-text text-transparent transform transition-transform duration-500 group-hover:scale-105 origin-left",
                              event.gradient,
                            )}
                          >
                            {event.title}
                          </h2>
                          <small className="text-xs sm:text-sm font-medium text-white/60 block mb-2 sm:mb-4 tracking-wide sm:tracking-wider transform transition-all duration-500 group-hover:text-white/90">
                            {event.date}
                          </small>
                          <p className="text-white/90 text-sm sm:text-base leading-relaxed transform transition-all duration-500 group-hover:translate-x-1">
                            {event.description}
                          </p>

                          {/* Animated reveal line */}
                          <div className="w-0 h-[1px] bg-gradient-to-r from-white/0 via-white/50 to-white/0 mt-4 group-hover:w-full transition-all duration-700"></div>
                        </div>
                      </Card>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

