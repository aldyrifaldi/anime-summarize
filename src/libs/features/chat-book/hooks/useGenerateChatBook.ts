'use client';
import { reactQueryKey } from '@/libs/constants/reactQueryKey';
import { geminiModel } from '@/libs/shared/utilities/geminiModel';
import { useMutation } from '@tanstack/react-query';
import { generativeText } from '../api';

export const useGenerateChatBook = () => {
  return useMutation({
    mutationKey: [reactQueryKey.chatBook.generateText],
    mutationFn: generativeText,
  });
};
