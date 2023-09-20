import { Fragment, useState } from 'react';
import './App.css';
import InputTodo from './assets/components/InputTodo';
import EditTodo from './assets/components/EditTodo';
import ListTodo from './assets/components/ListTodo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fragment>
        <InputTodo />
        <EditTodo />
        <ListTodo />
      </Fragment>
    </>
  )
}

export default App