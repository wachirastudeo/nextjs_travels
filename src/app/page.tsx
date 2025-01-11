import LoaddingCard from "@/components/card/LoaddingCard";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
export default function Home() {
  return (
    <section>
      <Suspense fallback={<LoaddingCard />}>
        <LandmarkContainer />
      </Suspense>

    </section>
  );
}
