import ChatResponseView from '@/libs/features/chat/components/chat-response-view';
import Container from '@/libs/features/chat/layouts/container';
import ChatProvider from '@/libs/features/chat/providers/chat-provider';
import { useState } from 'react';

export default function Home() {

  return (
    <Container>
      <h1>Home</h1>
      <ChatProvider>
        <ChatResponseView />
      </ChatProvider>
    </Container>
  );
}
