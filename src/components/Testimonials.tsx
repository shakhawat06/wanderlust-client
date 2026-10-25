import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Top-Notch And The Cultural Experiences Were Unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/images/person2.png",
  },
  {
    quote:
      "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Extremely Knowledgeable. Highly Recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/images/person1.png",
  },
  {
    quote:
      "An Unforgettable Journey Through Japan! From The Bustling Streets Of Tokyo To The Serene Temples Of Kyoto, Every Moment Was Pure Magic.",
    name: "Emma Williams",
    location: "London, UK",
    image: "/images/person1.png",
  },
  {
    quote:
      "The Safari Adventure Was Beyond Amazing! We Saw The Big Five And The Lodges Were Luxurious. The Team Handled Every Detail Flawlessly.",
    name: "Daniel Rodriguez",
    location: "Toronto, Canada",
    image: "/images/person2.png",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          {/* Header: title on the left, prev/next arrows on the right */}
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-4xl font-light text-foreground md:text-5xl">
                What Travelers Say
              </h2>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Real experiences from our happy travelers
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <CarouselPrevious className="static size-10 border-border bg-background text-foreground/60 hover:bg-muted" />
              <CarouselNext className="static size-10 border-border bg-background text-foreground/60 hover:bg-muted" />
            </div>
          </div>

          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <figure className="flex h-full items-stretch gap-5 rounded-xl border border-border bg-white p-4">
                  <div className="flex flex-1 flex-col justify-between py-2 pl-2">
                    <blockquote className="text-sm font-bold leading-relaxed text-foreground">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <figcaption className="mt-5">
                      <p className="text-sm font-semibold text-brand">
                        — {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </figcaption>
                  </div>
                  <div className="relative min-h-[180px] w-32 shrink-0 self-stretch overflow-hidden rounded-lg sm:w-40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
