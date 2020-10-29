import { FormEvent } from "react";

export const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  const target = event.target as HTMLTextAreaElement;
  console.log(target.value);
  localStorage.setItem("searchQuery", target.value);
};
