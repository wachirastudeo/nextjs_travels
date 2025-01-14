import { fetchMylandmark } from "@/actions/actions"
import EmptyList from "@/components/home/EmptyList"
import LandmarkList from "@/components/home/LandmarkList"

const Mylandmark = async () => {
    const mylandmarks = await fetchMylandmark()
    if (mylandmarks.length === 0) {
        return (
            <EmptyList headding="No landmark" message="Please try again" btnText="Back Home" />
        )
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold ">My Landmark</h1>
            <LandmarkList landmarks={mylandmarks} />
        </div>
    )
}
export default Mylandmark