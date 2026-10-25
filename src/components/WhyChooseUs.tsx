import Image from "next/image";

const features = [
  {
    icon: "/images/ShieldCheck.png",
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/images/MapTrifold.png",
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/images/Headset.png",
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#e6f6fa] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-4xl font-light text-foreground md:text-5xl">
          Why Choose Wanderlust
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-8 text-left shadow-sm"
            >
              <Image
                src={feature.icon}
                alt=""
                width={40}
                height={40}
                className="size-10"
              />
              <h3 className="mt-6 text-2xl font-normal text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
