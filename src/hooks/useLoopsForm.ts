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
    // Check rate limit
    const time = new Date().valueOf();
    const previousTimestamp = localStorage.getItem("loops-form-timestamp");

    if (previousTimestamp && Number(previousTimestamp) + 60000 > time) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: "Too many signups, please try again in a little while"
      });
      return;
    }

    localStorage.setItem("loops-form-timestamp", time.toString());
    
    setFormState(prev => ({ ...prev, isLoading: true }));

    try {
      const formBody = `userGroup=&mailingLists=&email=${encodeURIComponent(email)}&newsletter-form-input=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;
      
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
      if (error instanceof Error && error.message === "Failed to fetch") {
        setFormState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          errorMessage: "Too many signups, please try again in a little while"
        });
        return;
      }

      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Something went wrong'
      });
      localStorage.setItem("loops-form-timestamp", '');
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