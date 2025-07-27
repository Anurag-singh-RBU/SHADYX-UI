import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type CliTool = 'pnpm' | 'npm' | 'yarn' | 'bun';

type CliOutputProps = {
  commands: Partial<Record<CliTool, string>>;
};

const CliOutput: React.FC<CliOutputProps> = ({ commands }) => {

    const highlightCliWords = (text: string) => {
    // Words to highlight purple
    const keywords = ['npx', 'yarn', 'pnpm', 'bunx'];

    // Split by spaces and special chars but keep them
    const parts = text.split(/(\s+|\b)/g);

    return parts.map((part, index) => {
        if (keywords.includes(part.toLowerCase())) {
        return (
            <span key={index} className="text-blue-500 font-semibold">
            {part}
            </span>
        );
        }
        return <span key={index} className="text-[rgb(102,137,71)] font-semibold">
            {part}
        </span>;
    });
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {

        if(commands[selected]){

            navigator.clipboard.writeText(commands[selected]!);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            
        }
    };

    const availableTabs = (['pnpm', 'npm', 'yarn', 'bun'] as CliTool[]).filter(

        (tab) => commands[tab]

    );

    const [selected, setSelected] = useState<CliTool>(availableTabs[0]);

    return (
    <div className="border-1 border-gray-200">
      {/* Tabs */}
      <div className="flex items-center border-b bg-gray-50 text-sm font-medium text-gray-500">
        {availableTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelected(tab)}
            className={`px-4 py-3 ${
              selected === tab ? 'bg-white text-black border-b-2 border-white' : ''
            }`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-start justify-between px-4 py-8 bg-white text-sm font-JB text-gray-800 overflow-x-auto hide-scrollbar-mobile">
        <code className="whitespace-pre-wrap">
            {highlightCliWords(commands[selected] || '')}
        </code>
        <button
            onClick={handleCopy}
            className="ml-4 text-gray-400 hover:text-gray-600 transition cursor-pointer">
            {copied ? (
            <Check className="w-5 h-5 text-green-500" />
            ) : (
            <Copy className="w-5 h-5" />
            )}
        </button>
        </div>

    </div>
  );
};

export default CliOutput;
