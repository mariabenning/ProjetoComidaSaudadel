
import React from 'react'
import Illutration from '../../img/Illustration.svg';
import { Menu, Header, ContainerPrincipal } from './styled';



const Home = () => {





    return (
        <ContainerPrincipal>
            <Header>
                <h1>HEALTHY FOOD</h1>
            </Header>
            <Menu>
                <button>HEALTHY  RECIPES </button>
                <button>BLOG</button>
                <button>JOIN</button>
                <button>REGISTER</button>
            </Menu>

            <h2>Ready for Trying a new recipe?</h2>
            <input placeholder="Search healthy recipes"></input>

            <img src={Illutration} ></img>

        </ContainerPrincipal>
    );
}



export default Home;