'use client';

import Markdown from 'react-markdown';
import { useChatContext } from '../context/chatContext';
import ChatResponseSkeleton from './chat-response-skeleton';
import { ScrollArea, ScrollBar } from '@/libs/shared/components/ui/scroll-area';
import { markdownComponents } from '@/libs/shared/components/markdown-components';

export default function ChatResponseView() {
  const { generatedContent, isGenerating } = useChatContext();

  return (
    <ScrollArea className="h-52 w-full text-justify rounded-md border bg-zinc-800 p-5">
      {isGenerating ? (
        <ChatResponseSkeleton />
      ) : (
          <Markdown
            components={markdownComponents}
            skipHtml={false}
          >
            {generatedContent}
          </Markdown>
      )}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
