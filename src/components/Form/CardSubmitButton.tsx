'use client';
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Heart, RotateCw } from "lucide-react";

const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
    // console.log('is', isFavorite)
    const { pending } = useFormStatus()
    return <Button
        type="submit"
        size='icon'
        variant='outline'
    >
        {
            pending
                ? <RotateCw className="animate-spin" />
                : isFavorite
                    ? <Heart fill="back" />
                    : <Heart />
        }
    </Button>;
}
export default CardSubmitButton