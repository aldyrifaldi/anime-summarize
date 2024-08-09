export const reactQueryKey = {
  chatBook: {
    all: 'chat-book',
    byId: (id: string) => ['chat-book', id],
    generateText: 'chat-book-create',
  },
};
