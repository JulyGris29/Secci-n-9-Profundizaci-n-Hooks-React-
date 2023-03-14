import React from 'react';
import ReactDOM from 'react-dom/client';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { SimpleForm } from './02-useEffect/simpleForm';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCostumHook } from './01-useState/CounterWithCostumHook';
// import { HooksApp } from './HooksApp';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { Layout } from './useLayoutEffect/Layout';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import { TodoAdd } from './08-useReducer/TodoAdd';
// import './08-useReducer/intro-reducer'
// import {TodoApp} from './08-useReducer/TodoApp';
import { TodoList } from './08-useReducer/TodoList';
import './index.css'
import { TodoApp } from './08-useReducer/TodoApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    < TodoApp/>
  // </React.StrictMode>,
)
