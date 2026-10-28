import DestinationCard, {
  type DestinationCardData,
} from "@/components/DestinationCard";

const DestinationsPage = async () => {

  const res =  await fetch('http://localhost:8000/destinations')
  const data: DestinationCardData[] = await res.json();
  console.log(data);
  
  return (
    <section className="w-full bg-white px-5 py-4">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900">
          Explore All Destinations
        </h1>

        <p className="mt-2 text-sm text-neutral-500">
          Find your perfect travel experience from our curated collection
        </p>

        <div className="grid grid-cols-3 gap-5 mt-15">
          {
            data.map(destination => <DestinationCard key={destination._id} destination={destination} />)
          }
        </div>
      </div>
    </section>
  );
};

export default DestinationsPage;
