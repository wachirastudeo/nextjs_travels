'use client'

import SubmitButton from "@/components/Form/Button";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";

const createProfileAction = async(prevState:any,formData:FormData)=>{

  console.log('Server log:', formData.get('firstname'));

  return {message:'Create success'}
}
const CreateProfile = () => {
  return (
    <div>
      <section className="flex flex-col  justify-center  gap-2 w-1/2 mx-auto ">
        <h1 className="text-2xl font-semibold capitalize text-center">new user</h1>
        <div>
          <FormContainer action={createProfileAction}>
 
          <FormInput name="firstname" type="text" label="First name" placeHolder="First name" />
           <FormInput name="lastname" type="text" label="Last name" placeHolder="Last name"  />
           <FormInput name="username" type="text" label="User name" placeHolder="Username"  />

         <SubmitButton  className="w-min" text="Create Profile"  />
          </FormContainer>
          

        </div>
      </section>
    </div>
  );
};
export default CreateProfile;
