import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; Its Anurag Here - ShadYx UI</TypingAnimation>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ SEO Optimized</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Verifying framework. Found Next.js.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Validating Tailwind CSS.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Smooth and Stunning.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Responsive and Compatible.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Component Library.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span className="text-sm sm:text-md">✔ From Copy To Vibe</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-green-500">
        <span className="text-sm sm:text-md">✔ Enjoy the Vibe</span>
      </AnimatedSpan>

      <TypingAnimation delay={6000} className="text-muted-foreground">
        Made by developer - for developers
      </TypingAnimation>

      <TypingAnimation delay={8000} className="text-muted-foreground">
        ShadYx UI - From Copy to Vibe
      </TypingAnimation>
    </Terminal>
  );
}
