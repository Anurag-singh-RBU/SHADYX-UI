"use client";

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";

export function LineShadowTextDemo() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <h1 className="text-balance font-semibold leading-none text-4xl">
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Flash
      </LineShadowText>
    </h1>
  );
}
