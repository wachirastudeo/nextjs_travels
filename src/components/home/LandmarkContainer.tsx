import { fetchLandmark, fetchLandmarksHero } from "@/actions/actions"
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LandmarkContainer = async () => {
    const landmarks: LandmarkCardProps[] = await fetchLandmark();
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