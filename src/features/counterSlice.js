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
        multiplier(state, action){
            action.payload = 10
            state.value = state.value * action.payload
        },
        diviser(state){
            state.value = state.value / 3
        }
    }
})
console.log(counter);
export const {ajouter, diminuer, multiplier, diviser} = counter.actions
export default counter.reducer