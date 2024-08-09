import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center">
      <div className="container w-10/12">{children}</div>
    </div>
  );
}
