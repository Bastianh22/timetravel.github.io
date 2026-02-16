"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    title: "Ancient Rome",
    era: "27 BC",
    image: "/images/ancient-rome.jpg",
    description:
      "Walk the marble halls of the Senate, witness gladiatorial combat at the Colosseum, and dine with emperors in the eternal city at the height of its glory.",
    duration: "7 Days",
    price: "From $248,000",
  },
  {
    title: "The Roaring Twenties",
    era: "1924 AD",
    image: "/images/roaring-twenties.jpg",
    description:
      "Step into the jazz age of New York City. Dance at the Cotton Club, attend Gatsby-esque soirees, and experience the intoxicating energy of prohibition-era Manhattan.",
    duration: "5 Days",
    price: "From $185,000",
  },
  {
    title: "Neo Tokyo",
    era: "2150 AD",
    image: "/images/neo-tokyo.jpg",
    description:
      "Voyage to the shimmering megacity of the future. Soar through holographic skylines, savor molecular gastronomy, and witness humanity at the peak of innovation.",
    duration: "4 Days",
    price: "From $320,000",
  },
]

export function DestinationsSection() {
  return (
    <section id="destinations" className="relative px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
            Select Your Era
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Extraordinary Destinations
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/40" />
        </div>

        {/* Destination Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {destinations.map((dest) => (
            <DestinationCard key={dest.title} {...dest} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationCard({
  title,
  era,
  image,
  description,
  duration,
  price,
}: {
  title: string
  era: string
  image: string
  description: string
  duration: string
  price: string
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${title} - ${era}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-background/30 transition-opacity duration-500 group-hover:opacity-0" />
        {/* Era badge */}
        <div className="absolute left-4 top-4 border border-primary/60 bg-background/80 px-3 py-1 backdrop-blur-sm">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
            {era}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Meta */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Duration
            </p>
            <p className="mt-1 text-sm text-foreground">{duration}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Starting
            </p>
            <p className="mt-1 text-sm text-primary">{price}</p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 border border-border bg-transparent py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-primary hover:text-primary">
          View Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}
