import {createSlice} from "@reduxjs/toolkit" // une fonction qui va prendre plusieurs choses un name, un etat initial et un objet "reducers" -> qui contient les actions

const initialState = {
    value: 0
}

export const counter = createSlice({
    name:'counter', 
    initialState, 
    reducers:{
        ajouter(state){
            state.value++
        },
        diminuer(state){
            state.value--
        },
        multiplier(state){
            state.payload = 10
            state.value = state.value * state.payload
        },
        diviser(state){
            state.value = state.value / 3
        }
    }
})
console.log(counter);
export const {ajouter, diminuer, multiplier, diviser} = counter.actions
export default counter.reducer