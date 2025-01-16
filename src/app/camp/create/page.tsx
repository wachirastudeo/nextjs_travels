import { createLandmarkAction } from "@/actions/actions";
import Categoryinput from "@/components/form/Categoryinput";
import FormContainer from "src/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import Imageinput from "@/components/form/Imageinput";
import Provinceinput from "@/components/form/Provinceinput";
import SubmitButton from "@/components/form/SubmitButton";
import { TextAreaInput } from "@/components/form/TextAreaInput";
import Maplandmark from "@/components/map/Maplandmark";


const CreateCamp = async () => {

    return (
        <section>
            <h1 className="text-2xl text-center font-semibold pb-4  capitalize">New Landmark</h1>
            <div className="border w-1/2 mx-auto p-8 rounded-lg shadow-lg   flex justify-center ">

                <FormContainer action={createLandmarkAction}>
                    <div className=" gap-4 mt-4 ">
                        <FormInput name="name" label="Landmark Name" type="text" placeholder="Landmark Name" />
                    </div>

                    {/* category */}

                    <Categoryinput />
                    <TextAreaInput name="description" LabelText="Description" />
                    <FormInput
                        name="price"
                        label="Price"
                        type="number"
                        placeholder="Price" defaultValue={0} />
                    <Provinceinput />
                    <Imageinput />
                    <Maplandmark />

                    <SubmitButton className="sm:w-min lg:w-full " text="Create Landmark" size='lg' />

                </FormContainer>


            </div>
        </section>
    );
};
export default CreateCamp;