"use client";

import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { ActionFunction } from "@/utils/types"; // Ensure this type is defined correctly

const initialState = {
  message: "",
  formValues: {},
};

const FormContainer = ({
  action,
  children,
}: {
  action: ActionFunction; // Ensure this matches the useActionState type expectations
  children: React.ReactNode;
}) => {
  const { toast } = useToast();

  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message, toast]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(event.currentTarget); // Extract form data
        formAction(formData); // Pass the FormData to formAction
      }}
    >
      {children}
    </form>
  );
};

export default FormContainer;
