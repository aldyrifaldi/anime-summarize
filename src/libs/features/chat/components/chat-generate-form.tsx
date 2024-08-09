'use client';

import { Input } from '@/libs/shared/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { chatGenerateSchema, ChatGenerateSchema } from '../schemas/chatGenerateSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGenerateChat } from '../hooks/useGenerateChat';

export default function ChatGenerateForm() {
  const form = useForm<ChatGenerateSchema>({
    resolver: zodResolver(chatGenerateSchema),
  });

  const sendChat = useGenerateChat();

  const handleSubmit = (data: ChatGenerateSchema) => {
    sendChat.mutate(data.text);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="flex flex-col">
        <Controller
          control={form.control}
          name="text"
          render={({ field }) => <Input {...field} />}
        />
      </div>
      <button type="submit">Generate</button>
    </form>
  );
}
