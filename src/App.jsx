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

// useDispatch
// Think of it like a remote control 🎮.
// It lets you send actions (button presses) to the store.
// When you call dispatch(action), the store looks at the action and uses the reducer to update the state.
// Here, pressing the button will dispatch the increment action, and the reducer will update the counter.

// useSelector
// Think of it like a window 🪟 into the store.
// It lets you look inside and grab just the piece of state you need.
// Every time the state changes, your component will re-render with the new value.

// . Super Kid Explanation

// useDispatch = your hand 🖐️ pressing the buttons (actions).

// useSelector = your eyes 👀 looking inside the toy box (store).

// Without hands → you can’t change toys.
// Without eyes → you don’t know what toys you have.

// Together, you can see and change the box. 🎉

// 👉 In short:

// useDispatch → send actions (change state).

// useSelector → read state (get data).