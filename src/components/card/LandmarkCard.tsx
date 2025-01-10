
import { LandmarkCardProps } from "@/utils/types"
import Image from "next/image"
const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
    const { name, image, id, province, price, lat, lng, category } = landmark
    return (
        <article className="group relative">
            <div className="relative h-[300px]">
                {name}
                <Image
                    src={image}
                    alt={name}
                    sizes="(max-width: 768px) 100vw ,50vw"
                    fill
                    className="object-cover"
                />
            </div>
        </article>
    )
}
export default LandmarkCard