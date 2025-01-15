import { useState } from "react";

export type ActionFunction = (
  state: { message: string },
  payload: FormData
) => { message: string } | Promise<{ message: string }>;

export type LandmarkCardProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  province: string;
  price: number;
  lat: number;
  lng: number;
};

export const useActionState = (
  action: ActionFunction,
  initialState: { message: string }
): [
  state: { message: string },
  formAction: (payload: FormData) => void
] => {
  const [state, setState] = useState(initialState);

  const formAction = async (payload: FormData) => {
    const result = await action(state, payload);
    setState(result);
  };

  return [state, formAction];
};
