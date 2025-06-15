import { Color as ColorType } from "@/app/lib/colors"
import { Color } from "@/app/components/ui/colors"

export function ColorGroup({
  name,
  colors,
}: {
  name: string
  colors: ColorType[]
}) {
  return (

    <div className="rounded-lg border p-4 sm:mx-23 mono-text font-bold">
      <div className="mb-4 flex items-center sm:justify-between justify-around">
        <h2 className="text-sm font-bold sm:ml-2">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        {/*
          Removed the "Format: hsl" part as it was not explicitly requested in this latest prompt,
          but if you need it, you can add it back here:
          <div className="flex items-center text-sm text-gray-500">
            Format: hsl
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        */}
      </div>

      {/* Grid for the color items with responsive columns */}
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(72px,1fr))]">
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
    
  )
}