import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormInputProps {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string | number;
  placeHolder?: string;
}
const FormInput = ({
  name,
  label,
  type,
  defaultValue,
  placeHolder,
}: FormInputProps) => {
  return (
    <div>
      <Label className="" htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeHolder}
      />
    </div>
  );
};
export default FormInput;
