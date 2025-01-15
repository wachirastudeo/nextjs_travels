'use client';
import { toggleFavoriteAction } from "@/actions/actions"
import FormContainer from "@/components/form/FormContainer"
import { usePathname } from "next/navigation";
import { CardSubmitButton } from "@/components/form/Buttons";
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