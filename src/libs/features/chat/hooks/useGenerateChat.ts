'use client';

import { reactQueryKey } from '@/libs/constants/reactQueryKey';
import { useMutation } from '@tanstack/react-query';
import { generativeText } from '../api';

export const useGenerateChat = () => {
  return useMutation({
    mutationKey: [reactQueryKey.chatBook.generateText],
    mutationFn: generativeText,
  });
};
