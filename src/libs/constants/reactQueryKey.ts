export const reactQueryKey = {
  chat: {
    all: 'chat-book',
    byId: (id: string) => ['chat-book', id],
    generateText: 'chat-book-create',
  },
};
