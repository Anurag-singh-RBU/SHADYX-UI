import { useState } from "react";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "What is Shadyx UI ?",
      answer: "Shadyx UI is a reuseable components library for web devs based on Next Js and Tailwind CSS to create clean and stunning interfaces."
    },
    {
      question: "Is it compatible with React 19 ?",
      answer: "Yes. Shadyx UI works smoothly with Next.js 15 and React 19. Refer to the updated guide for more."
    },
    {
      question: "Do I need to install Shadcn UI ?",
      answer: "No. this setup works even without Shadcn and will be mentioned wherever required."
    },
    {
      question: "Can I customize the theme ?",
      answer: "Absolutely ! You can modify Tailwind config or add your own components to match your design system."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const DownArrow = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  const UpArrow = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );

  return (
    <div className="mt-22 space-y-4">
      <h2 className="sm:text-4xl text-3xl font-bold mb-8 ml-1 font-JB">Some Questions</h2>
      {questions.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <span className="font-medium text-[15px] sm:text-[15px]">{item.question}</span>
            <span className="ml-2">{openIndex === index ? UpArrow : DownArrow}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-[12px] sm:text-[14px] text-gray-600 font-JB sm:font-semibold font-bold text-justify">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;