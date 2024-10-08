'use client';

import { Input } from '@/libs/shared/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { chatGenerateSchema, ChatGenerateSchema } from '../schemas/chatGenerateSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useGenerateChat } from '../hooks/useGenerateChat';
import { Button } from '@/libs/shared/components/ui/button';
import { use } from 'react';
import { useChatContext } from '../context/chatContext';
import { Textarea } from '@/libs/shared/components/ui/textarea';

export default function ChatGenerateForm() {
  const form = useForm<ChatGenerateSchema>({
    resolver: zodResolver(chatGenerateSchema),
  });

  const { setIsGenerating, setGeneratedContent } = useChatContext();

  const sendChat = useGenerateChat({
    onMutate: () => {
      setIsGenerating(true);
    },
    onSuccess: (data) => {
      setGeneratedContent(data);
    },
    onSettled: () => {
      setIsGenerating(false);
    },
  });

  const handleSubmit = (data: ChatGenerateSchema) => {
    sendChat.mutate(data.text);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="flex flex-col gap-2">
        <Controller
          control={form.control}
          name="text"
          render={({ field }) => <Textarea placeholder="Take your imagination to reality🤩" {...field} />}
        />
        <Button type="submit">Generate</Button>
      </div>
    </form>
  );
}
