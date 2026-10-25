import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative flex min-h-[360] w-full items-center justify-center overflow-hidden py-20 md:min-h-[420]">
      {/* Background image */}
      <Image
        src="/images/CTA.png"
        alt="Airplane flying over a tropical island"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h2 className="text-4xl font-light text-white md:text-5xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/85 md:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <Link
          href="/destinations"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-none bg-white px-7 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:bg-white/90"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
