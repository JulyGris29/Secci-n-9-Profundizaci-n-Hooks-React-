import { useEffect } from 'react';
import { useForm } from '../Hooks/useForm';

export const FormWithCustomHook = () => {
  
    const {formState, OnInputChange, username, email, password, onResetForm} = useForm({
      username: 'strider',
        email: 'julian@gmail.com',
        password:'',


    });
        // const { username, email, password }= formState;    

  return (
    <>
        <h1>Formulario con custom Hook Simple</h1>
        <hr/>

        <input
            type='text'   
            className='form-control'
            placeholder='Username' 
            name='username'
            value={ username }
            onChange= { OnInputChange }
        /> 

        <input
            type='email'   
            className='form-control mt-2'
            placeholder='julian@gmail.com' 
            name='email'
            value={ email }
            onChange= { OnInputChange }
        />

         <input
            type='Password'   
            className='form-control mt-2'
            placeholder='Contraseña' 
            name='password'
            value={ password }
            onChange= { OnInputChange }
         /> 

         <button onClick={ onResetForm } className='btn btn-primary mt-2'>borrar</button>

        
    
    </>
    
    

  )
}
