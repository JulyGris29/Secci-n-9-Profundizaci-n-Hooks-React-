import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  
    const [formState, setformState] = useState({
      username: 'strider',
      email: 'julian@gmail.com'
      
    });

    const { username, email } = formState;

    const OnInputChange = ({ target }) => {
      const { name , value } = target;
      setformState({
        ...formState,
        [ name ]: value
      });

    }

    useEffect( () =>{
      // console.log('useEffect called!!!')
    }, []);
    
    useEffect ( () => {
      // console.log('formState changed');
    }, [formState]);

    useEffect ( () => {
      // console.log('email changed');
    }, [email]);

  return (
    <>
        <h1>Formulario Simple</h1>
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
        

        {
            (username === 'strider2') && <Message/>
        }
    
    </>
    
    

  )
}
