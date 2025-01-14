import LoaddingCard from "@/components/card/LoaddingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
export default async function Home({ searchParams }: { searchParams: { search?: string, category?: string } }) {

  const { search, category } = await searchParams;

  return (
    <section>
      <Suspense fallback={<LoaddingCard />}>

        <LandmarkContainer search={search} category={category} />
      </Suspense>

    </section>
  );
}
