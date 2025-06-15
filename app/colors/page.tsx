"use client";
import { ColorGroup } from "../components/ui/ColorGroup"
import { getColors } from "@/app/lib/colors"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function ColorPage() {
  const router = useRouter()
  const colorSectionRef = useRef<HTMLDivElement>(null)

  const scrollToColors = () => {
    colorSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const colorGroups = getColors()

  return (
    <div className="grid gap-8 p-6">
      <h1 className="text-3xl sm:text-4xl sm:mt-30 mt-25 font-JB font-bold sm:mx-23 mx-1 tracking-tight lg:text-5xl">
        Tailwind Colors
      </h1>
      <p className="sm:mx-25 -mt-5 -mb-2 mono-text sm:text-lg text-md mx-2 text-muted-foreground">
        Tailwind CSS colors in HSL format.
      </p>

      <div className="mx-2 sm:mx-24 flex flex-col sm:flex-row gap-4 mb-15 font-JB">
        <button
          onClick={scrollToColors}
          className="inline-flex font-bold items-center justify-center gap-2 whitespace-nowrap text-sm sm:font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
        >
          Browse Colors
        </button>
        <button
          onClick={() => router.push("/component")}
          className="border-1 mono-text border-gray-800 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:font-medium font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
        >
          Components
        </button>
      </div>

      <div ref={colorSectionRef} className="space-y-10">
        {colorGroups.map((group) => (
          <ColorGroup key={group.name} name={group.name} colors={group.colors} />
        ))}
      </div>

    </div>
  )
}
