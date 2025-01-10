
import Image from "next/image"
const LandmarkCard = ({ Landmark }) => {
    const { name, image } = Landmark
    return (
        <article className="group relative">
            <div className="relative h-[300px]">
                {name}
                <Image src={image} layout="fill" objectFit="cover
                " alt={name}
                    sizes="(max-with: 768px) 100vw, (max-with: 1200px) 50vw, 33vw" />
            </div>
        </article>
    )
}
export default LandmarkCard