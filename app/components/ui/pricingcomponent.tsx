
'use client';
import React, { useState } from 'react';
import { Monitor, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';
// import { Copy, Check } from 'lucide-react';
import { ScriptCopyBtn } from './ScriptCopyBtn';
import { Pricing } from './pricing';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar"

const Spotlight: React.FC = () => {

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  accent: string;
  rotation?: number;
}

const DEMO_PLANS: PricingPlan[] = [
    {
        name: "Starter",
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"],
        isPopular: false,

        accent: "bg-rose-500",
        rotation: -2
    },
    {
        name: "Pro",
        monthlyPrice: 99,
        yearlyPrice: 990,
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"],
        isPopular: true,

        accent: "bg-blue-500",
        rotation: 1
    },
    {
        name: "Enterprise",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        features: ["Unlimited", "Contact Us", "1TB Storage", "24/7 Support"],
        isPopular: false,

        accent: "bg-purple-500",
        rotation: 2
    }
];
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  const usage = `interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
  accent: string;
  rotation?: number;
}

const DEMO_PLANS: PricingPlan[] = [
    {
        name: "Starter",
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: ["1 User", "10 Projects", "5GB Storage", "Basic Support"],
        isPopular: false,

        accent: "bg-rose-500",
        rotation: -2
    },
    {
        name: "Pro",
        monthlyPrice: 99,
        yearlyPrice: 990,
        features: ["5 Users", "50 Projects", "100GB Storage", "Priority Support"],
        isPopular: true,

        accent: "bg-blue-500",
        rotation: 1
    },
    {
        name: "Enterprise",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        features: ["Unlimited", "Contact Us", "1TB Storage", "24/7 Support"],
        isPopular: false,

        accent: "bg-purple-500",
        rotation: 2
    }
];

export default function App = () =>{
    return (
      <Pricing title = "Choose Your Perfect Plan" plans = {DEMO_PLANS}/>
    );
};`

const codeString = `import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  accent: string;
  isPopular?: boolean;
}

interface PricingProps {
  title?: string;
  plans: PricingPlan[];
  className?: string;
}

const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [from, to]);
  return <span ref={nodeRef}/>;
};

const PricingHeader = ({ title }: { title: string }) => (
  <div className="text-center mb-8 sm:mb-12 relative z-10">
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} 
    className="inline-block">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 
      bg-gradient-to-r from-white to-gray-100 px-8 py-4 rounded-xl border-4 
      border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9),_15px_15px_15px_-3px_rgba(0,0,0,0.1)] 
      transform transition-transform hover:translate-x-1 hover:translate-y-1 mb-3 
      relative before:absolute before:inset-0 before:bg-white/50 before:rounded-xl before:blur-sm before:-z-10">
        {title}
      </h1>
    </motion.div>
  </div>
);

const PricingToggle = ({ isYearly, onToggle }: { isYearly: boolean; onToggle: () => void }) => (
  <div className="flex justify-center items-center gap-4 mb-8 relative z-10">
    <span className={\`text-gray-600 font-medium text-sm sm:text-md \${!isYearly ? 
    "text-black" : ""}\`}>Monthly</span>
    <motion.button className="w-16 h-8 flex items-center bg-gray-200 rounded-full 
    p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]" onClick={onToggle}>
      <motion.div className="w-6 h-6 bg-white rounded-full border-2 
      border-black" animate={{ x: isYearly ? 32 : 0 }}/>
    </motion.button>
    <span className={\`text-gray-600 font-medium \${isYearly ? 
    "text-black" : ""}\`}>Yearly</span>
    {isYearly && (
      <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} 
      className="text-green-500 font-medium text-sm">
        Save 20%
      </motion.span>
    )}
  </div>
);

const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-black/5 rounded-full"
          style={{
            left: \`\${Math.random() * 100}%\`,
            top: \`\${Math.random() * 100}%\`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), 
        linear-gradient(90deg, #00000008 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    />
  </>
);

const PricingCard = ({ plan, isYearly, index }: 
{ plan: PricingPlan; isYearly: boolean; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const currentPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const previousPrice = !isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      ref={cardRef}
      key={plan.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={(e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;
        mouseX.set((e.clientX - centerX) / rect.width);
        mouseY.set((e.clientY - centerY) / rect.height);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative w-full bg-white rounded-xl p-6 border-3 border-black 
      shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] 
      transition-all duration-200">
      <motion.div
        className={cn(\`absolute -top-4 -right-4 w-16 h-16 rounded-full flex 
        items-center justify-center border-2 border-black 
        shadow-[3px_3px_0px_0px_rgba(0,0,0,0.9)]\`, plan.accent)}
        animate={{
          rotate: [0, 10, 0, -10, 0],
          scale: [1, 1.1, 0.9, 1.1, 1],
          y: [0, -5, 5, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: [0.76, 0, 0.24, 1],
        }}>
        <div className="text-center text-white">
          <div className="text-lg font-black">$<Counter from={previousPrice} to={currentPrice}/></div>
          <div className="text-[10px] font-bold">/{isYearly ? "yr" : "mo"}</div>
        </div>
      </motion.div>
      <div className="mb-4">
        <h3 className="text-xl font-black text-black mb-2">{plan.name}</h3>
        {plan.isPopular && (
          <motion.span
            className={cn(\`inline-block px-3 py-1 text-white font-bold rounded-md text-xs 
            border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]\`, plan.accent)}
            animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}>
            POPULAR
          </motion.span>
        )}
      </div>
      <div className="space-y-2 mb-4">
        {plan.features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 5, scale: 1.02, transition: { type: "spring", stiffness: 400 }}}
            className="flex items-center gap-2 p-2 bg-gray-50 rounded-md border-2
            border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
            <motion.span
              whileHover={{ scale: 1.2, rotate: 360 }}
              className={cn(\`w-5 h-5 rounded-md flex items-center justify-center text-white 
              font-bold text-xs border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,0.9)]\`, plan.accent)}>
              ✓
            </motion.span>
            <span className="text-black font-bold text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
      <motion.button
        className={cn(\`w-full py-2 rounded-lg text-white font-black text-sm border-2 
        border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] 
        active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] transition-all duration-200\`, plan.accent)}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95, rotate: [-1, 1, 0]}}>
        GET STARTED
      </motion.button>
    </motion.div>
  );
};

export const Pricing = ({ title = "Pricing Plans", plans, className = "" }: PricingProps) => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className={\`min-h-screen bg-[#f0f0f0] p-4 sm:p-6 lg:p-8 relative 
    overflow-hidden rounded-[12px] \${className}\`}>
      <PricingHeader title={title} />
      <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)}/>
      <BackgroundEffects />
      <div className="sm:w-[100%] w-[90%] max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 gap-10 sm:gap-6 relative z-10">
        {plans.map((plan, index) => (
          <PricingCard key={plan.name} plan={plan} isYearly={isYearly} index={index}/>
        ))}
      </div>
    </div>
  );
};`;

  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 font-JB">Pricing Cards</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        How long will you keep using the same boring and generic pricing section ? Try this instead.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
      {['Pricing', 'Section', 'Retro'].map((tag, index) => (
    <div key={tag} className={`relative rounded-full sm:ml-0 ml-1 p-[2px] tag-wrapper tag-${index}`}>
      <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-2 py-1 rounded-full font-medium">
        {tag}
      </div>
    </div>
    ))}
    </div>


      {/* Toggle Buttons */}
      <div className="flex gap-4 sm:mt-20 mt-15">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md shadow-sm ${
            activeTab === 'preview'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="font-medium">Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md ${
            activeTab === 'code'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span className="font-medium">Code</span>
        </button>
      </div>

      {/* Content Switcher */}
      <div className="sm:mt-10 mt-5 min-h-[400px] relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md md:h-auto sm:h-[800px] h-auto w-full">
            <Pricing title="Choose Your Perfect Plan" plans={DEMO_PLANS}></Pricing>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[500px] overflow-y-auto font-JB rounded-xl border border-gray-200">
            <CodeBlock
              language="typescript"
              fileName="Pricing.tsx"
              code={codeString}
            />
          </div>
        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 mt-20 sm:mt-10">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <div className="mb-10 relative">
        <ScriptCopyBtn
          commandMap={{
            npm: "npm install framer-motion",
            yarn: "yarn add framer-motion",
            pnpm: "pnpm add framer-motion",
            bun: "bun add framer-motion",
          }}/>
      </div>

      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Usage</h3>
          <div className="sm:h-[500px] h-[300px] mb-10 overflow-y-auto font-JB rounded-xl border border-gray-200 hide-scrollbar-mobile">
            <CodeBlock
              language="typescript"
              fileName="App.tsx"
              code={usage}/>
          </div>
      </div>

      <p className='sm:ml-1 mt-30 text-md font-bold flex'>Credits : 
      <Avatar>
      <AvatarImage src="./am.avif" alt="@shadcn"/>
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className='ml-2 mt-0.3 text-blue-600'>Anurag Mishra</span>
      </p>

    </div>
    </div>
  );
};

export default Spotlight;
