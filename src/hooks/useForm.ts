import { ChangeEvent, useState } from "react";

export const useForm = () => {
  const [formState, setFormState] = useState<string>("");

  const onHandlerChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFormState(value);
  };

  const onReset = () => {
    setFormState("");
  };

  return {
    formState,
    onHandlerChange,
    onReset,
  };
};
