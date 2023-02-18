import { useCounter } from '../Hooks/useCounter'


export const CounterWithCostumHook = () => {

    const { counter, increment, decrement,reset } = useCounter();


  return (
    <>
    <h1>Counter With Hook: { counter }</h1>
    <hr/>

    <button onClick={ () => increment (2) } clasName='btn btn-primary'>+1</button>
    <button onClick={ reset } clasName='btn btn-primary'>Reset</button>
    <button onClick={ () => decrement  (2) }  clasName='btn btn-primary'>-1</button>


    

    </>
  )
}
