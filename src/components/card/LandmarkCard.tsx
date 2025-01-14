
import { LandmarkCardProps } from "@/utils/types"
import Image from "next/image"
import LandmarkRating from "./LandmarkRating"
import FavoriteToggleButton from "./FavoriteToggleButton"
import Link from "next/link"
const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
    const { name, image, id, description, province, price, lat, lng, category } = landmark
    return (
        <article className="group relative flex flex-col min-h-[400px] mb-4  ">
            <Link href={`/landmark/${id}`}>
                <div className="relative h-[300px]  rounded-md mb-2 ">
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
                    {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                </p>
                <div className="mt-auto flex justify-between items-center">
                    <span className="font-semibold text-sm">ราคา : {price} บาท</span>

                    <span className="font-semibold text-sm ">{province}</span>
                </div>
                <div className="absolute top-3 right-1 z-10">
                    <FavoriteToggleButton landmarkId={id} />

                </div>
            </Link>
        </article >
    )
}
export default LandmarkCard