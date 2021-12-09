
import React from 'react'

import { BackgroundHome, Header, NavMenu , TextHome } from './styled';



const Home = () => {





    return (

        <div>

            <BackgroundHome>
                <NavMenu>
                    <NavMenu>HEALTHY  RECIPES</NavMenu>
                    <NavMenu>BLOG</NavMenu>
                    <NavMenu>JOIN</NavMenu>
                    <NavMenu>REGISTER</NavMenu>

                </NavMenu>
            </BackgroundHome>
            <Header>


                <h1>HEALTHY FOOD</h1>

            </Header>
            <TextHome >
            <h2>Ready for Trying a new recipe?</h2>
            <input type="search" id="search" placeholder="Search healthy recipes"></input>
            <img src="https://cdn-icons-png.flaticon.com/512/2089/2089732.png" alt="pesquisar" height="16px" width="16px"></img>
            </TextHome>
        </div>

    );
}



export default Home;