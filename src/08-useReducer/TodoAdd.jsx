
import { useForm } from '../Hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {
    const { description, OnInputChange, onResetForm} = useForm ({
        description: ''

    });

    const onFormSubmit = ( event ) =>{
        event.preventDefault();
        if (description.length <= 1 ) return;
        
        const NewTodo={
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(NewTodo)
        onResetForm();
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }  
                onChange={OnInputChange}
                />

            <button type="submit"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
