'use client';

import Markdown from 'react-markdown';
import { useChatContext } from '../context/chatContext';
import ChatResponseSkeleton from './chat-response-skeleton';
import { ScrollArea, ScrollBar } from '@/libs/shared/components/ui/scroll-area';

export default function ChatResponseView() {
  const { generatedContent, isGenerating } = useChatContext();

  return (
    <div className="p-2 rounded-sm border border-zinc-600">
      <ScrollArea className="h-52 w-full text-justify rounded-md border">
        {isGenerating ? (
          <ChatResponseSkeleton />
        ) : (
          <div className="h-80 dark:bg-zinc-800">
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
        )}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  );
}
