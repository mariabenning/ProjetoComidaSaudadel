
import { NavMobile } from "./styled";
import { useState} from "react"

const MenuMobile = () => {
const [ active, setMode] = useState(false);
const ToggleMode = () => {
setMode(!active)

}

    return (

        <div>

            <NavMobile >Menu</NavMobile>
            <ul>

                <li>
                    <a href="/healthyrecipes">HEALTHY RECIPES </a>
                </li>
                <li>
                    <a href="/blog">BLOG </a>
                </li>
                <li>
                    <a href="/join">JOIN </a>
                </li>
                <li>
                    <a href="/register">REGISTER </a>
                </li>



            </ul>


        </div>
    )





}

export default MenuMobile;