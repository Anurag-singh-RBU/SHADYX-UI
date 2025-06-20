export default function About() {
  return (
    <div className="flex items-center mt-20 font-GS justify-center text-justify min-h-screen p-6">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-4 font-JB">Introduction</h1>
        <p className="text-gray-700 mb-6">
        <span className="font-JB font-bold text-[rgb(58,153,145)]">Shadyx UI</span> contains components built with Aceternity UI and Shadcn UI that you can copy and paste into your website. Accessible. Customizable. Open Source.
        </p>

        <p className="text-gray-700 mb-6">
          <span className="font-JB font-bold text-[rgb(58,153,145)]">Shadyx UI</span> is a collection of reusable components you can integrate into your web projects.
          It focuses on components and specifically designed to help you build modern landing pages
          and user-facing marketing content.
        </p>

        <hr className="my-8 border-gray-200"/>

        <h2 className="text-2xl font-JB font-bold mb-4">Design Principles</h2>

        <p className="text-gray-700 mb-4">
          <strong className="font-semibold">I believe that thoughtful design adds real value to software. </strong>
          Clear and trustworthy design builds confidence between your product and new users. A polished interface can turn a visitor into a customer.
        </p>

        <p className="text-gray-700 mb-4">
          When someone lands on your site they naturally wonder :
        </p>

        <ul className="list-disc list-inside mono-text text-sm font-bold text-gray-700 mb-6">
          <li>Is this service reliable ?</li>
          <li>Who else is using this ?</li>
          <li>Can I trust this with my data ?</li>
        </ul>

        <p className="text-gray-700 mb-4">
          <strong className="font-semibold">Neglecting design can hurt your brand.</strong> It may appear unprofessional and incomplete — and can lead to lost trust.
        </p>

        <p className="text-gray-700 mb-4">
          <strong className="font-semibold">Great design suggests a strong and capable team behind the product.</strong>
          It leaves a positive impression and encourages users to expect quality experiences.
        </p>

        <p className="text-gray-700 mb-4">
          If a team pays attention to visual details, they likely care about the entire experience — including their customers.
        </p>

        <p className="text-gray-700 mb-4">
          A good example of this approach is the landing page of <a href="https://linear.app" className="text-blue-600 font-bold font-JB text-md hover:text-violet-700">Linear</a> — when I first visited it in 2024 , the quality of design alone convinced me of the product&apos;s potential.
        </p>

        <p className="text-gray-700 font-bold font-JB text-md">
          Inspiration : <a href="https://ui.aceternity.com" className="text-blue-600 font-bold font-JB text-sm hover:text-violet-700">ui.aceternity.com</a>
        </p>
      </div>
    </div>
  );
}
