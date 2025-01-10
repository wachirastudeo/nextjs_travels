
import { LandmarkCardProps } from "@/utils/types"
import Image from "next/image"
import LandmarkRating from "./LandmarkRating"
const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
    const { name, image, id, province, price, lat, lng, category } = landmark
    return (
        <article className="group relative">
            <div className="relative h-[300px] rounded-md mb-2">
                {name}
                <Image
                    src={image}
                    alt={name}
                    sizes="(max-width: 768px) 100vw ,50vw"
                    fill
                    className="object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex  justify-between items-center">
                <h3 className="text-sm font-semibold mt-1">{name} </h3>
                <LandmarkRating />
            </div>
        </article>
    )
}
export default LandmarkCard