
import Image from "next/image"
const LandmarkCard = ({ Landmark }) => {
    const { name, image } = Landmark
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