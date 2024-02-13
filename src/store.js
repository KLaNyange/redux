import { configureStore } from "@reduxjs/toolkit";
import counter  from "./features/counterSlice";

const store = configureStore({ // la fonction qui va configurer le store 
    reducer:{
        counter
    }
})

console.log(store.getState());
export default store