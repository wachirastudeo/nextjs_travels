import { createLandmarkAction } from "@/actions/actions";
import { SubmitButton } from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";


const CreateCamp = async () => {

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">New Landmark</h1>
            <div className="border p-8 rounded-md">

                <FormContainer action={createLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name="name" label="Landmark Name" type="text" placeHolder="Landmark Name" />


                    </div>
                    <SubmitButton text="Create Landmark" size='lg' />
                </FormContainer>


            </div>
        </section>
    );
};
export default CreateCamp;