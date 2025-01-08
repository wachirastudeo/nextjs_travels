import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const TextAreaInput = ({ defaultValue, LabelText, name }: { defaultValue?: string, LabelText?: string, name: string }) => {
    return (
        <div>
            <Label className="text-white" htmlFor={name} >{LabelText || name}</Label>

            <Textarea placeholder={LabelText || name}
                id={name}
                name={name}
                defaultValue={defaultValue}
                rows={5}
                required
            >

            </Textarea>
        </div>
    )
}