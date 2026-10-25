import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const searchFields = [
  { label: "Location", placeholder: "Address, City Or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { label: "Budget", placeholder: "$0-$3000" },
  { label: "People", placeholder: "5-10" },
];

export default function Banner() {
  return (
    <section className="relative flex min-h-[calc(100vh-3.5rem)] w-full flex-col overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/Banner.png"
        alt="Aerial view of a turquoise bay"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="max-w-3xl text-5xl font-light leading-tight text-white drop-shadow-sm md:text-7xl">
          Discover Your
          <br />
          Next Adventure
        </h1>
        <p className="mt-5 max-w-xl text-sm text-white/90 md:text-base">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel destinations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button className="h-11 gap-2 rounded-none bg-[#0fa0d1] px-7 text-sm font-bold uppercase tracking-wide cursor-pointer text-white hover:bg-[#097396]">
            Explore Now
            <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button className="h-11 rounded-none bg-white/20 px-7 text-sm font-bold uppercase tracking-wide text-white cursor-pointer hover:bg-white/30">
            View Destination
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative z-10 grid w-full grid-cols-1 bg-black/50 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-5">
        {searchFields.map((field) => (
          <div
            key={field.label}
            className="border-b border-white/20 px-6 py-3 text-left sm:border-r last:sm:border-r-0 lg:border-b-0"
          >
            <p className="text-sm font-bold text-white">{field.label}</p>
            <p className="text-xs text-white/70">{field.placeholder}</p>
          </div>
        ))}
        <button
          type="button"
          className="bg-brand px-6 py-4 text-left text-sm font-bold text-white transition-colors hover:bg-brand/85"
        >
          Search
        </button>
      </div>
    </section>
  );
}
