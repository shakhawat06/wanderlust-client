import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

/**
 * Shape returned by the destinations API (GET http://localhost:8000/destinations).
 * `rating` is optional — the badge only renders when the backend sends one.
 */
export interface DestinationCardData {
  _id: string;
  name: string;
  country: string;
  price: string | number;
  duration: string;
  imageUrl: string;
  rating?: number;
}

export default function DestinationCard({
  destination,
}: {
  destination: DestinationCardData;
}) {
  return (
    <Card className="gap-0 rounded-xl border border-border bg-card p-0 ring-0 transition-shadow hover:shadow-md">
      <div className="relative aspect-16/10 w-full overflow-hidden">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover/card:scale-105"
        />
        {typeof destination.rating === "number" && (
          <Badge className="absolute top-3 right-3 h-6 rounded-md bg-white px-2 text-xs font-semibold text-foreground shadow-sm">
            {destination.rating.toFixed(1)}
            <Star className="fill-current" aria-hidden />
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" aria-hidden />
          {destination.country}
        </p>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-medium text-foreground">
            {destination.name}
          </h3>
          <p className="shrink-0 text-lg font-semibold text-foreground">
            ${destination.price}
            <span className="text-xs font-normal text-muted-foreground">
              /Person
            </span>
          </p>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3.5 shrink-0" aria-hidden />
          {destination.duration}
        </p>

        <Link
          href={`/destinations/${destination._id}`}
          className="mt-1 inline-flex w-fit items-center gap-1 text-xs font-bold tracking-wide text-brand uppercase underline underline-offset-4 hover:text-brand/80"
        >
          Book Now
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </Card>
  );
}
