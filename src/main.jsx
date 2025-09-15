import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './configure/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

// 1. What is <Provider>?
// It’s a special React component that comes from the react-redux library.
// Its job is to give your Redux store to the whole React app.
// Think of it like a power socket 🔌.
// If you don’t plug your app into it, your components won’t get electricity (the Redux store).

// 3. Why do we write store={store}?
// The store is the big box (warehouse) that holds all your state.
// store={store} means:
// 👉 “Hey Provider, here’s the warehouse. Please give it to all my components.”
// So any component inside <Provider> can now:
// Read state with useSelector.
// Change state with useDispatch.