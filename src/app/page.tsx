import ChatGenerateForm from '@/libs/features/chat/components/chat-generate-form';
import ChatResponseView from '@/libs/features/chat/components/chat-response-view';
import Container from '@/libs/features/chat/layouts/container';
import ChatProvider from '@/libs/features/chat/providers/chat-provider';
import { useState } from 'react';

export default function Home() {
  return (
    <Container>
      <div className="h-screen pb-14">
        <ChatProvider>
          <div className="flex h-full flex-col justify-end gap-5">
            <ChatResponseView />
            <ChatGenerateForm />
          </div>
        </ChatProvider>
      </div>
    </Container>
  );
}
