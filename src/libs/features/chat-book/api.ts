import { BaseApiRequest } from '@/libs/shared/utilities/baseApi';
import { geminiModel } from '@/libs/shared/utilities/geminiModel';

type GenerativeTextResponse = string;

export const generativeText = async (prompt: string): Promise<GenerativeTextResponse> => {
  const result = await geminiModel.generateContent(prompt);
  const response = await result.response;
  if (!response.candidates) {
    throw new Error('No candidates found');
  }

  const texts = response.candidates[0].content.parts.map((part) => part.text);

  return texts.join('\n\n');
};
