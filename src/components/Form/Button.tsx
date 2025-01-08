import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { RotateCw } from 'lucide-react';

interface ButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  text: string;
}
const SubmitButton = ({ className, size, text }: ButtonProps) => {
    const {pending} = useFormStatus()
  return (
    <Button 
    disabled={pending}
    type="submit" className={className} size={size}>
        {
            pending
            ?<RotateCw className="animate-spin" /> 
            :<p>{text}</p>

        }


    </Button>
  );
};
export default SubmitButton;
