import { useState } from 'react';

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export const useLoopsForm = () => {
  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: ''
  });

  const FORM_ID = 'cm4jl0ea9020rtt04rziloxdg';
  const LOOPS_ENDPOINT = `https://app.loops.so/api/newsletter-form/${FORM_ID}`;

  const handleSubmit = async (email: string, name: string) => {
    setFormState(prev => ({ ...prev, isLoading: true }));

    const formBody = `userGroup=Reddigen&mailingLists=&email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(name)}`;

    try {
      const response = await fetch(LOOPS_ENDPOINT, {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setFormState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          errorMessage: ''
        });
      } else {
        setFormState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: data.message || response.statusText
        });
      }
    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Something went wrong'
      });
    }
  };

  const resetForm = () => {
    setFormState({
      isLoading: false,
      isSuccess: false,
      isError: false,
      errorMessage: ''
    });
  };

  return {
    formState,
    handleSubmit,
    resetForm
  };
};