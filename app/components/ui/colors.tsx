/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Check, Clipboard } from "lucide-react"
import { toast } from "sonner"

import { type Color } from "@/app/lib/colors"
import { trackEvent } from "@/app/lib/events"
import { useColors } from "@/hooks/use-colors"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { copyToClipboardWithMeta } from "@/app/components/ui/copy-button"

export function Color({ color }: { color: Color }) {
  const { format } = useColors()
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  return (
    <button
      key={color.hex}
      className="group relative flex aspect-[3/1] w-full flex-1 flex-col gap-2 text-[--text] sm:aspect-[2/3] sm:h-auto sm:w-auto [&>svg]:absolute [&>svg]:right-4 [&>svg]:top-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
      style={
        {
          color: color.foreground, // text color
        } as React.CSSProperties
      }
      onClick={() => {
        copyToClipboard(color[format])
        trackEvent({
          name: "copy_color",
          properties: {
            color: color.id,
            value: color[format],
            format,
          },
        })
        toast.success(`Copied ${color[format]} to clipboard.`)
      }}
    >
      {isCopied ? (
        <Check className="group-hover:opacity-100" />
      ) : (
        <Clipboard className="group-hover:opacity-100" />
      )}

      {/* ✅ Background color directly set via inline style */}
      <div
        className="w-full flex-1 rounded-md md:rounded-lg"
        style={{ backgroundColor: `hsl(${color.hsl})` }}
      />

      {/* Text values below */}
      <div className="flex w-full flex-col items-center justify-center gap-1">
        <span className="hidden font-mono text-xs tabular-nums text-muted-foreground transition-colors group-hover:text-foreground lg:flex">
          {color.className}
        </span>
        <span className="font-mono text-xs tabular-nums text-muted-foreground transition-colors group-hover:text-foreground lg:hidden">
          {color.scale}
        </span>
      </div>
    </button>
  )
}
