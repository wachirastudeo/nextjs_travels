"use client";
import { useActionState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { ActionFunction } from "@/utils/types"; // Updated to use consistent naming

// Ensure initialState matches expected state structure in useActionState
const initialState = {
  message: "",
  formValues: {},
};

const FormContainer = ({ action, children }: {
  action: ActionFunction; // Ensure ActionFunction matches useActionState expectations
  children: React.ReactNode;
}) => {
  const { toast } = useToast();

  // Ensure action and initialState align with useActionState definition
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state, toast]); // Ensure dependencies are correct

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
