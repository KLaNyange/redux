import { useSelector } from "react-redux"
import "./Compteur.css"

function Compteur() {
    const counter = useSelector((state) => state.counter) //useSelector va nous permettre de venir chercher une partie du state
    console.log(counter);
    return (
        <div>
            <h1>{counter.value}</h1>
        </div>
    )
}
export default Compteur
