import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  inline?: boolean;
}

/**
 * Standardizes text into high-quality math LaTeX:
 * - Angles: ∠xOy -> \widehat{xOy}, ∠A -> \widehat{A}
 * - Angle equations: ∠xOt + ∠yOt = 180° -> \widehat{xOt} + \widehat{yOt} = 180^0
 * - Degree numbers: 180° -> 180^0
 * - Perpendicular: ⊥ -> \perp
 * - Multiplier: · -> \cdot
 * - Triangle: ΔABC -> \Delta ABC
 */
function preprocessMathText(text: string): string {
  if (!text) return '';
  let s = text.trim();

  // If text already has explicit $ or $$, normalize angles inside
  if (s.includes('$')) {
    // Also convert any ∠ outside or inside $
    s = s.replace(/∠([A-Za-z0-9_]{1,6})/g, '\\widehat{$1}');
    return s;
  }

  const hasVietnameseWords =
    /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(s) ||
    /\b(nếu|thì|biết|trong|đó|số|đo|của|hai|góc|tam|giác|cho|tia|là|và|kề|bù|đáy|đỉnh)\b/i.test(s);

  // If the whole string is an equation/formula without narrative Vietnamese words
  // e.g. "∠xOt + ∠yOt = 180°" or "∠xOt = 2 · ∠xOy" or "∠B = ∠E" or "∠AMB = 90°"
  if (
    !hasVietnameseWords &&
    (s.includes('∠') || s.includes('\\widehat') || s.includes('=')) &&
    (s.includes('=') || s.includes('+') || s.includes('-') || s.includes('·') || s.includes('/'))
  ) {
    const math = s
      .replace(/∠([A-Za-z0-9_]{1,6})/g, '\\widehat{$1}')
      .replace(/(\d+)\s*°/g, '$1^0')
      .replace(/·/g, '\\cdot ')
      .replace(/⊥/g, '\\perp ')
      .replace(/\(([^\)]+)\)\s*\/\s*(\d+)/g, '\\frac{$1}{$2}');
    return `$${math}$`;
  }

  // Pure standalone degree option e.g. "110°" -> "$110^0$"
  if (/^(\d+)\s*°$/.test(s)) {
    return s.replace(/^(\d+)\s*°$/, '$$$1^0$$');
  }

  // Replace square roots: e.g. √81 -> $\sqrt{81}$, √a -> $\sqrt{a}$, -√5 -> $-\sqrt{5}$
  s = s.replace(/([+-]?)\s*√([a-zA-Z0-9]+)/g, (_m, sign, val) => `$${sign}\\sqrt{${val}}$`);

  // Replace angle equations inside narrative text: e.g. ∠xOy = 70° -> $\widehat{xOy} = 70^0$
  s = s.replace(/∠([A-Za-z0-9_]{1,6})\s*=\s*(\d+)\s*°/g, '$\\widehat{$1} = $2^0$');

  // Replace standalone angle expressions: e.g. ∠xOy, ∠A, ∠yOz -> $\widehat{xOy}$, $\widehat{A}$
  s = s.replace(/∠([A-Za-z0-9_]{1,6})/g, '$\\widehat{$1}$');

  // Replace degree values when attached to variables or equations: e.g. = 180° -> = $180^0$
  s = s.replace(/=\s*(\d+)\s*°/g, '= $$$1^0$$');

  // Convert explicit \widehat without $ into $...$
  s = s.replace(/(^|[^\$])(\\widehat\{[A-Za-z0-9_]+\})([^\$]|$)/g, '$1$$$2$$$3');

  return s;
}

/**
 * Parses text containing $...$ or $$...$$ delimiters and renders
 * math formulas using KaTeX, displaying angles with \widehat notation.
 */
export const MathText: React.FC<MathTextProps> = ({ content, className = '', inline = true }) => {
  const renderedElements = useMemo(() => {
    if (!content) return null;

    const processed = preprocessMathText(content);

    // Split by math delimiters: $...$ or $$...$$
    const parts = processed.split(/(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g);

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.startsWith('$$') && part.endsWith('$$')) {
        const math = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, {
            displayMode: true,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="block my-1 text-center font-serif overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      }

      if (part.startsWith('$') && part.endsWith('$')) {
        let math = part.slice(1, -1).trim();
        // Ensure any leftover ∠ inside $ is converted
        math = math.replace(/∠([A-Za-z0-9_]{1,6})/g, '\\widehat{$1}');
        try {
          const html = katex.renderToString(math, {
            displayMode: false,
            throwOnError: false,
          });
          return (
            <span
              key={index}
              className="inline-math-item inline-flex items-center align-baseline font-serif mx-0.5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <span key={index}>{part}</span>;
        }
      }

      // Plain text part
      return <span key={index}>{part}</span>;
    });
  }, [content]);

  if (inline) {
    return <span className={`math-rendered-text ${className}`}>{renderedElements}</span>;
  }

  return <div className={`math-rendered-text ${className}`}>{renderedElements}</div>;
};

export default MathText;
