import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/**
 * Shape returned by the destination details API
 * (GET http://localhost:8000/destination/:id).
 *
 * `rating`, `reviews` and `highlights` are optional — the matching sections
 * only render when the backend sends them.
 */
export interface DestinationDetailsData {
  _id: string;
  name: string;
  country: string;
  category?: string;
  price: string | number;
  duration: string;
  departureDate?: string;
  imageUrl: string;
  description?: string;
  rating?: number;
  reviews?: number;
  highlights?: string[];
}

const bookingPerks = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

export default function DestinationDetails({
  destination,
}: {
  destination: DestinationDetailsData;
}) {
  const hasRating = typeof destination.rating === "number";
  const hasReviews = typeof destination.reviews === "number";
  const description = destination.description;
  const highlights = destination.highlights ?? [];

  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
        {/* Action bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="h-9 gap-1.5 rounded-md px-3.5 text-sm"
            >
              <Pencil className="size-3.5" aria-hidden />
              Edit
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-9 gap-1.5 rounded-md border-destructive/30 px-3.5 text-sm text-destructive hover:bg-destructive/5 hover:text-destructive"
            >
              <Trash2 className="size-3.5" aria-hidden />
              Cancel
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-xl sm:aspect-[16/6]">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {destination.country}
            </p>

            <h1 className="mt-2 text-3xl font-light text-foreground md:text-4xl">
              {destination.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {hasRating && (
                <span className="flex items-center gap-1.5">
                  <Star
                    className="size-4 fill-emerald-500 text-emerald-500"
                    aria-hidden
                  />
                  <span className="font-medium text-foreground">
                    {destination.rating?.toFixed(1)}
                  </span>
                  {hasReviews && (
                    <span className="text-muted-foreground">
                      ({destination.reviews} reviews)
                    </span>
                  )}
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <CalendarDays
                  className="size-4 shrink-0 text-muted-foreground"
                  aria-hidden
                />
                <span className="font-medium text-foreground">
                  {destination.duration}
                </span>
              </span>
            </div>

            {description && (
              <>
                <h2 className="mt-8 text-xl font-medium text-foreground">
                  Overview
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </>
            )}

            {highlights.length > 0 && (
              <>
                <h2 className="mt-8 text-xl font-medium text-foreground">
                  Highlights
                </h2>
                {description && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                )}
                <ul className="mt-4 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-emerald-500"
                        aria-hidden
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Booking card */}
          <Card className="h-fit gap-0 rounded-xl border border-border p-5 ring-0 lg:sticky lg:top-24">
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="mt-1 text-3xl font-bold text-brand">
              ${destination.price}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">per person</p>

            {destination.departureDate && (
              <Input
                type="date"
                defaultValue={destination.departureDate}
                aria-label="Departure date"
                className="mt-5 h-11 rounded-md border-0 bg-muted px-3 text-sm"
              />
            )}

            <Link href=''>
              <Button
                type="button"
                className="mt-4 h-11 w-full gap-2 rounded-md bg-brand text-sm font-semibold text-white hover:bg-brand/90"
              >
                Book Now
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Link>
            <ul className="mt-5 flex flex-col gap-2.5">
              {bookingPerks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-emerald-500"
                    aria-hidden
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
