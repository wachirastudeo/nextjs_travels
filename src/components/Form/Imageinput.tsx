import { Input } from "../ui/input"
import { Label } from "../ui/label"

const name = 'image'
const Imageinput = () => {
    return (
        <div>
            <Label className="text-white capitalize">{name}</Label>
            <Input type="file" name={name} id={name} required accept="image/*" />
        </div>
    )
}
export default Imageinput