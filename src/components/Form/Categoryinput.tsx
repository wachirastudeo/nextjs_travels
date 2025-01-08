import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { categories } from "@/utils/categories"
const Categoryinput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = "category"
    return (
        <div className="mb-2 ">
            <Label className="text-white" htmlFor={name} >{name}</Label>
            <Select
                defaultValue={defaultValue || categories[0].label}
                name={name}
                required

            >
                <SelectTrigger className="  ">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item) => {
                            return (
                                <SelectItem className="capitalize" key={item.label} value={item.label}>
                                    <span className="flex items-center gap-4">
                                        <item.icon />
                                        {item.label}
                                    </span>
                                </SelectItem>
                            )
                        })
                    }
                </SelectContent>
            </Select>


        </div>
    )
}
export default Categoryinput