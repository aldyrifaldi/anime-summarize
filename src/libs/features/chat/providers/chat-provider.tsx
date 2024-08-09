'use client';

import { PropsWithChildren, useState } from "react";
import { chatContext } from '../context/chatContext';

export default function ChatProvider({ children }: PropsWithChildren) {
  const [generatedContent, setGeneratedContent] = useState('');
  
  return (
    <chatContext.Provider value={{
      generatedContent,
      setGeneratedContent,
    }}>
      {children}
    </chatContext.Provider>
  );
}
