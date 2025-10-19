import { motion, PanInfo, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Swipe() {

  const [cards, setCards] = useState([

    {

      title : "Asthetic",
      img : "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      className : "absolute rounded-sm bg-white h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mt-8 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"

    },

    {

      title : "Awesome",
      img : "https://images.unsplash.com/photo-1760533120264-0b82c7f169ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      className : "absolute rounded-sm bg-white border-t border-r border-l border-gray-200 h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mt-10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"

    },

    {

      title : "Heaven",
      img : "https://images.unsplash.com/photo-1760301269447-fbc82b5a8d14?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2050",
      className : "absolute rounded-sm bg-white border-t border-r border-l border-gray-100 h-auto pt-6 pb-4 px-6 flex flex-col gap-5 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"

    }

  ])

  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden sm:whitespace-none whitespace-nowrap">

      <div className="relative flex items-center justify-center sm:my-80 my-60">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={card.className}
              drag="x"
              dragElastic={0.5}
              initial={{ rotate: index === 0 ? 0 : index === 1 ? -10 : 20, x: 0, zIndex: cards.length - index }}
              animate={{
                x: 0,
                zIndex: cards.length - index,
                rotate: index === 0 ? 0 : index === 1 ? -10 : 20,
                scale: index === 0 ? 1 : index === 1 ? 0.95 : 0.9,
                y: index * 20
              }}
              exit={{ x: 300, opacity: 0, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, ease: "easeOut", duration: 0.5 }}
              whileTap={{ scale: 0.97, zIndex: 50 }}
              onDragEnd={(event, info: PanInfo) => {
                const offset = info.offset.x;
                const velocity = info.velocity.x;
                if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
                  setCards((prevCards) => {
                    const newCards = [...prevCards];
                    const [removed] = newCards.splice(index, 1);
                    newCards.push(removed);
                    return newCards;
                  });
                }
              }}
            >
              <div className="h-[300px] w-[250px] bg-green-200">

              <img src={card.img} alt={card.title} className="h-full w-full object-cover pointer-events-none relative z-10"/>

            </div>

            <span className="mx-auto font-mono text-2xl font-bold text-neutral-700">

              {card.title}

            </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
        <p className="text-gray-500 font-medium sm:text-sm text-xs text-center sm:mb-25 sm:mt-0 mt-15 mb-10 px-4">
           Swipe the top card left or right.
           <br></br>
           Swiped cards move to the back of the stack.
        </p>
    </div>
  );
}