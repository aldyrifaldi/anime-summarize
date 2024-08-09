import ChatResponseView from '@/libs/features/chat-book/components/chat-response-view';
import Container from '@/libs/features/chat-book/layouts/container';

export default function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <ChatResponseView />
    </Container>
  );
}
