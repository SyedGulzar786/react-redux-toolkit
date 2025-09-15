import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToy, removeToy } from './features/counterSlice'

function App() {
const count = useSelector(state => state.counter.value);
const dispatch = useDispatch();

  return (
<div>
<h1>toys: {count}</h1>
<button onClick={()=>dispatch(addToy())}>addToy</button>
<button onClick={()=>dispatch(removeToy())}>removetoy</button>
</div>
);
}

export default App
