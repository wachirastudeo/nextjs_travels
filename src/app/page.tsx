import LoaddingCard from "@/components/card/LoaddingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
export default async function Home({ searchParams }: { searchParams: { search?: string } }) {

  const search = await searchParams.search

  return (
    <section>
      <Suspense fallback={<LoaddingCard />}>

        <LandmarkContainer search={search} />
      </Suspense>

    </section>
  );
}
