'use client';

import { PropsWithChildren, useState } from 'react';
import { chatContext } from '../context/chatContext';

export default function ChatProvider({ children }: PropsWithChildren) {
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <chatContext.Provider
      value={{
        generatedContent,
        setGeneratedContent,
        isGenerating,
        setIsGenerating,
      }}
    >
      {children}
    </chatContext.Provider>
  );
}
