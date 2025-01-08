import { createLandmarkAction } from "@/actions/actions";
import { SubmitButton } from "@/components/Form/Buttons";
import Categoryinput from "@/components/Form/Categoryinput";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import { TextAreaInput } from "@/components/Form/TextAreaInput";


const CreateCamp = async () => {

    return (
        <section>
            <h1 className="text-2xl text-center font-semibold pb-4  capitalize">New Landmark</h1>
            <div className="border w-1/2 bg-cyan-600 mx-auto p-8 rounded-lg shadow-md   flex justify-center ">

                <FormContainer action={createLandmarkAction}>
                    <div className=" gap-4 mt-4 ">
                        <FormInput name="name" label="Landmark Name" type="text" placeHolder="Landmark Name" />
                    </div>

                    {/* category */}

                    <Categoryinput />
                    <TextAreaInput name="description" LabelText="Description" />
                    <SubmitButton className="sm:w-min lg:w-full " text="Create Landmark" size='lg' />

                </FormContainer>


            </div>
        </section>
    );
};
export default CreateCamp;