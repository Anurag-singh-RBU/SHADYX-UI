/* eslint-disable @typescript-eslint/no-unused-vars */

interface Token {
  type: string;
  content: string;
}

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
}

const SyntaxHighlighter = ({ code, language = 'javascript' }: SyntaxHighlighterProps) => {
  const tokenize = (code: string): Token[] => {
    const tokens: Token[] = [];
    const patterns = [
      { type: 'string', regex: /"[^"]*"|'[^']*'|`[^`]*`/ },
      { type: 'comment', regex: /\/\/.*|\/\*[\s\S]*?\*\// },
      { type: 'keyword', regex: /\b(import|export|from|const|let|var|function|return|if|else|for|while|do|break|continue|switch|case|default|try|catch|finally|throw|new|class|extends|interface|type|enum|namespace|public|private|protected|static|readonly|async|await|yield|delete|typeof|instanceof|in|of|void|null|undefined|true|false|use client)\b/ },
      { type: 'type', regex: /\b(string|number|boolean|object|array|Date|Promise|React|Component|useState|useEffect|useCallback|useMemo|useRef|useContext|AnimatePresence|motion|Button|Image)\b/ },
      { type: 'property', regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*:)/ },
      { type: 'function', regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/ },
      { type: 'number', regex: /\b\d+\.?\d*\b/ },
      { type: 'operator', regex: /[+\-*/%=<>!&|^~?:;]|&&|\|\||==|!=|<=|>=|===|!==|\+\+|--|\+=|-=|\*=|\/=|%=/ },
      { type: 'punctuation', regex: /[{}[\](),.;]/ },
      { type: 'identifier', regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*\b/ }
    ];

    let remaining = code;
    let position = 0;

    while (remaining.length > 0) {
      let matched = false;

      // Check for whitespace first
      const whitespaceMatch = remaining.match(/^\s+/);
      if (whitespaceMatch) {
        tokens.push({ type: 'whitespace', content: whitespaceMatch[0] });
        remaining = remaining.slice(whitespaceMatch[0].length);
        position += whitespaceMatch[0].length;
        matched = true;
        continue;
      }

      for (const pattern of patterns) {
        const match = remaining.match(pattern.regex);
        if (match && match.index === 0) {
          tokens.push({ type: pattern.type, content: match[0] });
          remaining = remaining.slice(match[0].length);
          position += match[0].length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        tokens.push({ type: 'text', content: remaining[0] });
        remaining = remaining.slice(1);
        position += 1;
      }
    }

    return tokens;
  };

  const getTokenColor = (type: string): string => {
    const colorMap: Record<string, string> = {
      string: 'text-green-600',
      comment: 'text-gray-500',
      keyword: 'text-purple-600',
      type: 'text-blue-600',
      property: 'text-orange-600',
      function: 'text-blue-500',
      number: 'text-red-500',
      operator: 'text-gray-700',
      punctuation: 'text-gray-700',
      identifier: 'text-gray-800',
      whitespace: 'text-gray-800',
      text: 'text-gray-800'
    };
    return colorMap[type] || 'text-gray-800';
  };

  const tokens = tokenize(code);

  return (
    <code className="text-sm font-mono leading-relaxed">
      {tokens.map((token, index) => (
        <span key={index} className={getTokenColor(token.type)}>
          {token.content}
        </span>
      ))}
    </code>
  );
};

export default SyntaxHighlighter;