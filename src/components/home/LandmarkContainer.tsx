import { fetchLandmark, fetchLandmarksHero } from "@/actions/actions"
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LandmarkContainer = async ({ search }: { search?: string }) => {
    const landmarks: LandmarkCardProps[] = await fetchLandmark({ search });
    const landmarksHero: LandmarkCardProps[] = await fetchLandmarksHero();

    // console.log(landmarks);

    return (

        <div>

            <Hero landmarks={landmarksHero} />
            <LandmarkList landmarks={landmarks} />
        </div>
    )
}
export default LandmarkContainer