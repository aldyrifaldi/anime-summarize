'use client';

import { reactQueryKey } from '@/libs/constants/reactQueryKey';
import { QueryClient, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { generativeText } from '../api';

export const useGenerateChat = (
  options: Omit<UseMutationOptions<string, Error, string, unknown>, 'mutationFn' | 'mutationKey'>,
) => {
  return useMutation<string, Error, string, unknown>({
    mutationKey: [reactQueryKey.chat.generateText],
    mutationFn: generativeText,
    ...options,
  });
};
