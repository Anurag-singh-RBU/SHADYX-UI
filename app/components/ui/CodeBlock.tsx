import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy, Check } from 'lucide-react';
import SyntaxHighlighter from './SyntaxHighlighter';

interface CodeBlockProps {
  code: string;
  fileName: string;
  language?: string;
  className?: string;
}

const CodeBlock = ({ code, fileName, language = 'javascript', className = '' }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success('Code copied to clipboard !');
      setTimeout(() => setCopied(false), 2000);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-gray-700 text-sm font-medium">{fileName}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Code Content - Scrollable */}
        <div className="p-4 overflow-auto sm:max-h-112">
          <pre className="text-sm overflow-x-auto">
            <SyntaxHighlighter code={code} language={language} />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
