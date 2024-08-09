import ChatGenerateForm from '@/libs/features/chat/components/chat-generate-form';
import ChatResponseView from '@/libs/features/chat/components/chat-response-view';
import Container from '@/libs/features/chat/layouts/container';
import ChatProvider from '@/libs/features/chat/providers/chat-provider';
import { useState } from 'react';

export default function Home() {

  return (
    <Container>
      <div className="mt-5">
        <ChatProvider>
          <ChatResponseView />
          <ChatGenerateForm />
        </ChatProvider>
      </div>
    </Container>
  );
}
