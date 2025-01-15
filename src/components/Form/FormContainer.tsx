"use client";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useActionState } from "react";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};

interface FormContainerProps {
  action: actionFunction;
  children: React.ReactNode;
}

const FormContainer = ({ action, children }: FormContainerProps) => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message, toast]); // ใส่ `toast` ใน dependency array

  return <form action={formAction}>{children}</form>;
};


export default FormContainer;
