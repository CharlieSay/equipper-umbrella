import { FormEvent } from 'react';

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  const target = event.target as HTMLTextAreaElement;
  localStorage.setItem('searchQuery', target.value);
};


export default handleSubmit
