import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface MarkdownPagesProps {
  content: string;
}

export function MarkdownPages({ content }: MarkdownPagesProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-10 text-xl font-medium tracking-tight text-ink md:text-2xl">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 text-lg font-medium text-ink">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="mt-6 text-base font-medium text-ink">{children}</h4>
        ),
        p: ({ children }) => (
          <p className="text-base leading-relaxed text-muted">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc space-y-2 pl-6 text-muted marker:text-accent">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal space-y-2 pl-6 text-muted marker:text-accent">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-base leading-relaxed text-muted">{children}</li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-4 border-l-2 border-accent pl-4 italic text-muted">
            {children}
          </blockquote>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-accent underline hover:text-ink">
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-ink">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-ink">
            {children}
          </code>
        ),
        pre: ({ children }) => {
          const handleCopy = () => {
            let codeContent = "";

            React.Children.forEach(children, (child) => {
              if (typeof child === "string") {
                codeContent += child;
              } else if (
                React.isValidElement<{ children?: React.ReactNode }>(child) &&
                typeof child.props.children === "string"
              ) {
                codeContent += child.props.children;
              }
            });

            navigator.clipboard
              .writeText(codeContent)
              .then(() => setIsCopied(true));
          };

          return (
            <div className="group relative">
              <pre className="mb-6 overflow-x-auto rounded-lg border border-line bg-surface p-4 text-ink">
                {children}
              </pre>
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2 top-2 rounded bg-canvas px-2 py-1 font-mono text-xs text-ink opacity-0 transition-opacity group-hover:opacity-100"
              >
                {isCopied ? "Copied" : "Copy"}
              </button>
            </div>
          );
        },
        hr: () => <hr className="my-8 border-line" />,
        img: ({ src, alt }) => (
          <Image
            src={src || ""}
            alt={alt || ""}
            width={1200}
            height={720}
            className="my-6 h-auto max-w-full rounded-lg border border-line"
          />
        ),
        table: ({ children }) => (
          <div className="mb-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-line">{children}</table>
          </div>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-sm text-muted">{children}</td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
