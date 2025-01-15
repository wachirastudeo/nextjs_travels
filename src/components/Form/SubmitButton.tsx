
"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
    className?: string;
    size?: btnSize;
    text?: string;
};
const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
    const { pending } = useFormStatus();
    return (
        <Button
            disabled={pending}
            type="submit"
            size={size}
            className={`${className} capitalize`}
        >
            {pending ? (
                <>
                    <RotateCw className="animate-spin" />
                    <span>Please wait...</span>
                </>
            ) : (
                <p>{text}</p>
            )}
        </Button>
    );
}
export default SubmitButton