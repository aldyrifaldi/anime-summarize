import { Skeleton } from '@/libs/shared/components/ui/skeleton';

export default function ChatResponseSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
