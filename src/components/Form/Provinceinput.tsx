import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { provinces } from "@/utils/provinces"
const Provinceinput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = "province"
    return (
        <div className="mb-2 ">
            <Label className=" capitalize" htmlFor={name} >{name}</Label>
            <Select
                defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
                name={name}
                required

            >
                <SelectTrigger className="  ">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((item) => {
                            return (
                                <SelectItem className="capitalize"
                                    key={item.PROVINCE_ID}
                                    value={item.PROVINCE_NAME}>
                                    <span className="flex items-center">
                                        {item.PROVINCE_NAME}
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
export default Provinceinput