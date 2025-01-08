import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/Form/Buttons";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


const CreateProfile = async () => {
  const user = await currentUser()
  if (user?.privateMetadata.hasProfile) redirect('/')

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">

        <FormContainer action={createProfileAction}>
          <div className="flex gap-4 mt-4">
            <FormInput name="firstName" label="Fist Name" type="text" placeHolder="First Name" />
            <FormInput name="lastName" label="Last Name" type="text" placeHolder="Last Name" />
            <FormInput name="username" label="Username" type="text" placeHolder="Username" />
          </div>
          <SubmitButton text="create profile" size='lg' />
        </FormContainer>


      </div>
    </section>
  );
};
export default CreateProfile;