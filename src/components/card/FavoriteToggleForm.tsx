'use client';
import { toggleFavoriteAction } from "@/actions/actions"
import FormContainer from "src/components/form/FormContainer"
import { usePathname } from "next/navigation";
import CardSubmitButton from "../form/CardSubmitButton";
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
            <FormContainer action={toggleAction} >
                <CardSubmitButton isFavorite={!!favoriteId} />

            </FormContainer>
        </div>
    )
}
export default FavoriteToggleForm