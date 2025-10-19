"use client"

import { motion } from "framer-motion";

export default function Cards() {
  const items = [
    {
      title: "Asthetic",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      className:
        "absolute rounded-sm bg-white h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mb-5 z-10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
    {
      title: "Awesome",
      img: "https://images.unsplash.com/photo-1760533120264-0b82c7f169ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      className:
        "absolute rounded-sm bg-gray-50/2 border-t border-r border-l border-gray-200 h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mt-10 z-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
    {
      title: "Heaven",
      img: "https://images.unsplash.com/photo-1760301269447-fbc82b5a8d14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2050",
      className:
        "absolute rounded-sm bg-gray-50/3 border-t border-r border-l border-gray-100 h-auto pt-6 pb-4 px-6 flex flex-col mt-8 gap-5 z-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center sm:overflow-none overflow-hidden sm:whitespace-none whitespace-nowrap">
      <div className="relative flex items-center justify-center sm:my-80 my-80">
        {items.map((item, index) => (
          <motion.div
            key={index}
            drag
            initial={{ rotate: 0, scale: 1, zIndex: items.length - index }}
            animate={{
              rotate: index === 0 ? 5 : index === 1 ? -10 : -15,
              x: index === 0 ? 0 : index === 1 ? 200 : -250,
            }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              ease: "anticipate",
              duration: 0.5,
            }}
            whileTap={{ cursor: "grabbing" }}
            style={{ position: "absolute" }}
          >
            <div className={item.className.replace("absolute ", "")}>
            <div className="h-[300px] w-[250px] bg-green-200">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover pointer-events-none relative z-10"
              />
            </div>
            <span className="mx-auto font-mono text-2xl font-bold text-neutral-700">
              {item.title}
            </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
