'use client';

import Markdown from 'react-markdown';

type ChatResponseViewProps = Readonly<{
  generatedContent: string;
}>;

export default function ChatResponseView({ generatedContent }: ChatResponseViewProps) {
  return (
    <div className="rounded-md bg-zinc-200 p-2">
      <Markdown
        components={{
          h1: ({ children }) => <h1 className="text-xl font-bold">{children}</h1>,

          h2: ({ children }) => <h2 className="text-lg font-bold">{children}</h2>,
        }}
        skipHtml={false}
      >
        {generatedContent}
      </Markdown>
    </div>
  );
}
