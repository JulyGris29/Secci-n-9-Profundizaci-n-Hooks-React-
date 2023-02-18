import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [formState, setformState,] = useState( initialForm );  

    const onResetForm = () => {
      setformState ( initialForm );
    }
    
            
      const OnInputChange = ({ target }) => {
        const { name , value } = target;
        setformState({
          ...formState,
          [ name ]: value
        });
  
      }

  return {
    ...formState,
    formState,
    OnInputChange,
    onResetForm
    
  }
}
