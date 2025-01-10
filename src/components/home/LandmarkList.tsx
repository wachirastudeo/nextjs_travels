import LandmarkCard from "../card/LandmarkCard"

const LandmarkList = ({ Landmarks }) => {
    return (
        <div>
            {
                Landmarks.map((Landmark) => {
                    return (
                        <LandmarkCard key={Landmark.id} Landmark={Landmark} />
                    )
                })}

        </div>
    )
}
export default LandmarkList