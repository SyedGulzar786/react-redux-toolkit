import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"

export const store = configureStore({
reducer:{
    counter: counterReducer,
},
});

// const store = configureStore({
//   reducer: { ... },       // ✅ required: all your slice reducers go here
//   middleware: [ ... ],    // optional: extra custom middleware
//   devTools: true,         // optional: enable Redux DevTools (default: true)
//   preloadedState: { ... },// optional: initial state of the store
//   enhancers: [ ... ]      // optional: add store enhancers (rarely needed)
// });
