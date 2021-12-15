
import { NavMobile, NavMenu } from "./styled";
import { useState} from "react"
import { FiMenu } from "react-icons/fi";
import { FiX  } from "react-icons/fi";



const MenuMobile = () => {

const [openMenu, setOpenMenu] = useState(false);

const handleOpen = () => {
setOpenMenu(!openMenu)
console.log("voce clicou");
}

    return (

                <>
            
                 <button onClick={handleOpen}>
                      <FiMenu size="30" color = "red"></FiMenu> 
                    {/* <FiX size="30" color = "red"></FiX> */}
                  
                     
                </button>

          <NavMobile>

        
            <NavMenu>
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
            </NavMenu>
            </NavMobile>
            
        </>
    )





}

export default MenuMobile;