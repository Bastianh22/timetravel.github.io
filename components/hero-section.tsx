"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="/images/ancient-rome.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-flying-over-clouds-at-sunset-3892/1080p.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/70" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-primary animate-fade-in">
          Transcend the boundaries of time
        </p>
        <h1 className="max-w-4xl font-serif text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          Journey Beyond
          <br />
          <span className="text-primary italic">Time Itself</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Curated luxury expeditions to the most extraordinary moments in
          history. Experience the past and future as no one else can.
        </p>
        <a
          href="#destinations"
          className="mt-12 border border-primary bg-primary px-10 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
        >
          Explore Destinations
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to destinations"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
