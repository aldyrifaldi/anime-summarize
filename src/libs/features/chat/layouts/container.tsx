import Navbar from '@/libs/shared/components/Navbar';
import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="container w-10/12">{children}</div>
    </div>
  );
}
