"use client"

import { useEffect, useState } from "react"
import { Color as ColorType } from "@/app/lib/colors"
import { Color } from "@/app/components/ui/colors"

export function ColorGroup({
  name,
  colors,
}: {
  name: string
  colors: ColorType[]
}) {
  const [isSurfacePro, setIsSurfacePro] = useState(false)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width >= 912 && width <= 1280) {
        setIsSurfacePro(true)
      } else {
        setIsSurfacePro(false)
      }
    }

    // Initial check
    handleResize()

    // Listen for resize
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className="rounded-lg border p-4 sm:mx-23 mono-text font-bold"
      style={{
        width: isSurfacePro ? "820px" : "auto",
        marginLeft: isSurfacePro ? "auto" : undefined,
        marginRight: isSurfacePro ? "auto" : undefined,
        maxWidth: isSurfacePro ? "960px" : undefined,
      }}
    >
      <div className="mb-4 flex items-center sm:justify-between justify-around">
        <h2 className="text-sm font-bold sm:ml-2">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
      </div>

      <div
        className="grid gap-3 grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(72px,1fr))] overflow-x-hidden w-full"
        style={{
          gridTemplateColumns: isSurfacePro
            ? "repeat(12, minmax(60px, 1fr))"
            : undefined,
        }}
      >
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
  )
}
