
import { useCounter, useFetch } from '../Hooks';
import { Quote, LoadingQuote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(` https://dummyjson.com/quotes${ counter }`);
    const { author, quote } = !!data && data[17];
    // console.log(author,quote)
  return (

    <> 
     <h1>Rick and Morty Episodes</h1>
    <hr />

    {
      isLoading
       ? <LoadingQuote />
       : <Quote author={ author } quote= { quote } />
    }

    <button
      className=" btn btn-primary"
      onClick={ () => increment (1) }> 
      Next quote
    </button>  
    </>   
    )
}




