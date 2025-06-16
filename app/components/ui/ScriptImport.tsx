"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScriptCopyBtnProps {
  command: string; // pure string like "<IlluminationComp />"
  className?: string;
}

export function ScriptImport({
  command,
  className,
}: ScriptCopyBtnProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderColoredCommand = (cmd: string) => {
    return cmd.split(" ").map((word, i) => {
      let color = "text-[#05DF69]";
      if (["npm", "yarn", "pnpm", "bun"].includes(word)) color = "text-[#05DF69]";
      if (word.startsWith("<") && word.endsWith("/>")) color = "text-[#05DF69]";
      if (word.startsWith("<") || word.endsWith(">")) color = "text-[#05DF69]";
      return (
        <span key={i} className={cn(color, "mr-2")}>
          {word}
        </span>
      );
    });
  };

  return (
  <div className={cn("flex mx-0 sm:mx-1 mb-10 w-full items-center justify-start gap-2", className)}>
    {/* Command Box with scrollable text */}
    <div className="flex-1 rounded-lg bg-[#1E1E2F] px-4 h-10 flex items-center overflow-x-auto whitespace-nowrap font-mono text-sm">
      {renderColoredCommand(command)}
    </div>

    {/* Copy Button on the right, outside the box */}
    <Button
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-md relative overflow-hidden"
      onClick={copyToClipboard}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
      <Copy
        className={cn(
          "h-4 w-4 absolute transition-all duration-200",
          copied ? "opacity-0 scale-90" : "opacity-100 scale-100"
        )}
      />
      <Check
        className={cn(
          "h-4 w-4 absolute transition-all duration-200",
          copied ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      />
    </Button>
  </div>
);

}
