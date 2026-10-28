import { Suspense } from "react";
import { notFound } from "next/navigation";
import DestinationDetails from "@/components/DestinationDetails";
import { Skeleton } from "@/components/ui/skeleton";

async function DestinationDetailsContent({
  params,
}: Pick<PageProps<"/destinations/[id]">, "params">) {
  const { id } = await params;

  let destination = null;

  try {
    const res = await fetch(`http://localhost:8000/destination/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      destination = await res.json();
    }
  } catch {
    destination = null;
  }

  // Backend responds with an empty body when the destination doesn't exist
  if (!destination?._id) notFound();

  return <DestinationDetails destination={destination} />;
}

function DestinationDetailsSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-40" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-20" />
        </div>
      </div>

      <Skeleton className="mt-5 aspect-[16/6] w-full rounded-xl" />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="mt-4 h-4 w-full max-w-2xl" />
          <Skeleton className="h-4 w-full max-w-2xl" />
        </div>
        <Skeleton className="h-80 rounded-xl" />
      </div>
    </div>
  );
}

const DestinationDetailsPage = ({
  params,
}: PageProps<"/destinations/[id]">) => {
  return (
    <Suspense fallback={<DestinationDetailsSkeleton />}>
      <DestinationDetailsContent params={params} />
    </Suspense>
  );
};

export default DestinationDetailsPage;
