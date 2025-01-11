import { LandmarkCardProps } from "@/utils/types"

const OtherInfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
    return (
        <div className="text-white">
            <span className="text-xs md:text-sm bg-teal-600  py-2 px-4 rounded-full">{landmark.province}</span>
            <p
                className="text-2xl font-semibold md:my-3 
          md:text-4xl md:leading-[80px] sm:text-xl"
            >
                {landmark.name}
            </p>
            <p className="text-lg">{landmark.description.substring(0, 40) + "..."}</p>
        </div>
    );
}
export default OtherInfo