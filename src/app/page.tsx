import LoaddingCard from "@/components/card/LoaddingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";

type Params = Promise<{ search?: string, category?: string }>

export default async function Home({ searchParams }: { searchParams: Params }) {
  const { search, category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoaddingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
}
