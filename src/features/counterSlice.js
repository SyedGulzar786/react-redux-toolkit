import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{ value:0 },
    reducers: {
        addToy: (state)=>{
state.value += 1;
        },
        removeToy: (state)=>{
state.value -= 1;
        },
    },
});

export const { addToy, removeToy } = counterSlice.actions;
export default counterSlice.reducer;


// reducers are the actions => the rules that defines how to change the box , the rules inside a rulbook
// reducer is the brain that do the work and reducers are the work the action that reducer does addToy, removeToy are actions that are define reducers. 
// reducer is the brain the worker the machine that follow those rules, action and do change the box., is the rule book