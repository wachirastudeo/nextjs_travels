
import { LandmarkCardProps } from "@/utils/types"
import Image from "next/image"
import LandmarkRating from "./LandmarkRating"
import FavoriteToggleButton from "./FavoriteToggleButton"
const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
    const { name, image, id, description, province, price, lat, lng, category } = landmark
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
                <h3 className="text-sm font-semibold mt-1">{name.substring(0, 30)} </h3>
                <LandmarkRating />

            </div>

            <p className="text-sm text-muted-foreground">
                {description.substring(0, 100)}
            </p>
            <div className="mt-2 flex justify-between items-center">
                <span className="font-semibold text-sm">ราคา : {price}</span>

                <span className="font-semibold text-sm ">{province}</span>
            </div>
            <div className="absolute top-3 right-1 z-10">
                <FavoriteToggleButton landmarkId={id} />

            </div>
        </article >
    )
}
export default LandmarkCard