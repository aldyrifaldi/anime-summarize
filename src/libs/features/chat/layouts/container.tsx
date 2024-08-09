import Navbar from '@/libs/shared/components/navbar';
import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="container w-10/12">{children}</div>
    </div>
  );
}
