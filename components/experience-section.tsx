import { Shield, Clock, Gem, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Temporal Safety",
    description:
      "Our proprietary temporal shielding technology ensures your journey through the timestream is completely protected.",
  },
  {
    icon: Clock,
    title: "Precise Calibration",
    description:
      "Arrive at the exact moment in history you desire, down to the second. No approximations, no uncertainties.",
  },
  {
    icon: Gem,
    title: "Bespoke Luxury",
    description:
      "Every element of your voyage is tailored to your preferences, from period-accurate wardrobes to private accommodations.",
  },
  {
    icon: Users,
    title: "Expert Historians",
    description:
      "Each expedition is guided by world-renowned historians and temporal navigators with decades of experience.",
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative border-t border-border bg-card px-6 py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
            Why Chronos
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            The Finest in Temporal Travel
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-primary/40" />
        </div>

        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center p-10 text-center transition-colors duration-300 hover:bg-secondary/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-primary/30 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-lg text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
