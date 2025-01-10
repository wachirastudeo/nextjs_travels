import { fetchLandmark } from "@/actions/actions"
import LandmarkList from "./LandmarkList";

const LandmarkContainer = async () => {
    const landmarks = await fetchLandmark();
    console.log(landmarks);

    return (
        <div>
            <LandmarkList Landmarks={landmarks} />
        </div>
    )
}
export default LandmarkContainer