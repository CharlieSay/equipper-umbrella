import { FormEvent } from 'react';

export const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  const target = event.target as HTMLTextAreaElement;
  localStorage.setItem('searchQuery', target.value);
};
