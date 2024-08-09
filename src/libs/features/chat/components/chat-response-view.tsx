'use client';

import Markdown from 'react-markdown';
import { useChatContext } from '../context/chatContext';
import ChatResponseSkeleton from './chat-response-skeleton';
import { ScrollArea, ScrollBar } from '@/libs/shared/components/ui/scroll-area';

export default function ChatResponseView() {
  const { generatedContent, isGenerating } = useChatContext();

  return (
    <div className="h-60 rounded-md bg-zinc-200 p-2">
      <ScrollArea className="h-52 w-full whitespace-nowrap rounded-md border">
        {isGenerating ? (
          <ChatResponseSkeleton />
        ) : (
          <Markdown
            components={{
              h1: ({ children }) => <h1 className="text-xl font-bold">{children}</h1>,

              h2: ({ children }) => <h2 className="text-lg font-bold">{children}</h2>,
            }}
            skipHtml={false}
          >
            {generatedContent}
          </Markdown>
        )}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
