import ChatResponseView from '@/libs/features/chat/components/chat-response-view';
import Container from '@/libs/features/chat/layouts/container';

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <ChatResponseView />
    </Container>
  );
}
