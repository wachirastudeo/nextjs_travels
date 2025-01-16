"use client";

import { toggleFavoriteAction } from "@/actions/actions";
import { usePathname } from "next/navigation";
import CardSubmitButton from "../form/CardSubmitButton";
import FormContainer from "../form/FormContainer";

interface FavoriteToggleFormProps {
    favoriteId: string | null;
    landmarkId: string;
}

const FavoriteToggleForm = ({
    favoriteId,
    landmarkId,
}: FavoriteToggleFormProps) => {
    const pathname = usePathname();

    // Bind toggle action with required arguments
    const toggleAction = toggleFavoriteAction.bind(null, {
        favoriteId,
        landmarkId,
        pathname,
    });

    return (
        <div className="favorite-toggle-form">
            <FormContainer action={toggleAction}>
                <CardSubmitButton isFavorite={!!favoriteId} />
            </FormContainer>
        </div>
    );
};

export default FavoriteToggleForm;
