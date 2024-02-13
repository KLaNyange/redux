import { useDispatch } from "react-redux"
import "./Button.css"
import { ajouter, diminuer, diviser, multiplier } from "../../features/counterSlice"
function Button() {
    const dispatchButton = useDispatch() //permet d'envoyer les actions au reducer
    return (
        <div>
            <button onClick={()=>dispatchButton(ajouter())}> + </button>
            <button onClick={()=>dispatchButton(diminuer())}> - </button>
            <button onClick={()=>dispatchButton(multiplier())}> * </button>
            <button onClick={()=>dispatchButton(diviser())}> / </button>
        </div>
    )
}
export default Button
