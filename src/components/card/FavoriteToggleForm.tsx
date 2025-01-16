"use client";
import { toggleFavoriteAction } from "@/actions/actions"
import { usePathname } from "next/navigation";
import CardSubmitButton from "src/components/form/CardSubmitButton";
import Formcontainer from "../form/Formcontainer";
interface FavoriteToggleFormProps {
    favoriteId: string | null;
    landmarkId: string;
}


const FavoriteToggleForm = ({
    favoriteId,
    landmarkId
}: FavoriteToggleFormProps) => {
    const pathname = usePathname();
    console.log('id', favoriteId)


    const toggleAction = toggleFavoriteAction.bind(null, { favoriteId, landmarkId, pathname })


    return (
        <div>
            <Formcontainer action={toggleAction} >
                <CardSubmitButton isFavorite={!!favoriteId} />

            </Formcontainer>


        </div>
    )
}
export default FavoriteToggleForm