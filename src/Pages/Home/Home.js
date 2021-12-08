
import React from 'react'
import Illutration from '../../img/Illustration.svg';
import { NavMenu, Header, HomePage, TextPage, InputHome, ImgHome } from './styled';



const Home = () => {





    return (
        <div>
             <HomePage>
            <Header>
                <h1>HEALTHY FOOD</h1>
            
            <nav>
                <NavMenu>
                <NavMenu>HEALTHY  RECIPES </NavMenu>
                <NavMenu>BLOG</NavMenu>
                <NavMenu>JOIN</NavMenu>
                <NavMenu>REGISTER</NavMenu>
                </NavMenu>
               
            </nav>

            </Header>

            
           
            <TextPage>Ready for Trying a new recipe?</TextPage>
            <InputHome type = "search" id = "search" placeholder ="Search healthy recipes"></InputHome>
            

           
            </HomePage>
        </div>
    );
}



export default Home;