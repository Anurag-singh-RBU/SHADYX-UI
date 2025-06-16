"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScriptCopyBtnProps {
  showMultiplePackageOptions?: boolean;
  commandMap: Record<string, string>;
  className?: string;
}

export function ScriptCopyBtn({
  showMultiplePackageOptions = true,
  commandMap,
  className,
}: ScriptCopyBtnProps) {
  const packageManagers = Object.keys(commandMap);
  const [packageManager, setPackageManager] = useState(packageManagers[0]);
  const [copied, setCopied] = useState(false);
  const command = commandMap[packageManager];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderColoredCommand = (cmd: string) => {
    const parts = cmd.split(" ");
    return parts.map((word, i) => {
      const isPkgManager = ["npm", "yarn", "pnpm", "bun"].includes(word);
      const color = isPkgManager ? "text-[#FFFFFF]" : "text-[#05DF69]";
      return (
        <span key={i} className={cn(color, "mr-2")}>
          {word}
        </span>
      );
    });
  };

  return (
    <div className={cn("flex mx-0 sm:mx-1 mb-10 w-full flex-col", className)}>
      {showMultiplePackageOptions && (
        <div className="mb-2 flex items-center justify-between">
          <div className="relative">
            <div className="inline-flex overflow-hidden rounded-md border border-gray-300 text-xs bg-white">
              {packageManagers.map((pm, index) => (
                <div key={pm} className="flex items-center">
                  {index > 0 && (
                    <div className="h-4 w-px bg-gray-300" aria-hidden="true" />
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "relative rounded-none bg-white px-2 py-1 text-black hover:bg-white hover:text-black"
                    )}
                    onClick={() => setPackageManager(pm)}
                  >
                    {pm}
                    {packageManager === pm && (
                      <motion.div
                        className="absolute inset-x-0 bottom-[1px] mx-auto h-[2px] w-[90%] bg-black"
                        layoutId="activeTab"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Command box + copy button */}
      <div className="flex items-center w-full gap-2">
        {/* Scrollable command area */}
        <div className="flex-1 h-10 rounded-lg bg-[#1E1E2F] px-4 font-mono text-sm flex items-center overflow-x-auto whitespace-nowrap">
          {renderColoredCommand(command)}
        </div>

        {/* Copy button outside */}
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-md relative overflow-hidden flex-shrink-0"
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
    </div>
  );
}
