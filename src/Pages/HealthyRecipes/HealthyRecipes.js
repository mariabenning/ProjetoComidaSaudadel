import react from "react";
import comida_1 from '../../img/comida_1.svg'
import comida_2 from '../../img/comida_2.svg'
import comida_3 from '../../img/comida_3.svg'
import comida_4 from '../../img/comida_4.svg'





 const HealthyRecipes = () => {
    return (
      <div>
        
    <h1>Our Best Recipes</h1>
    <h2>Far far away, behind the word mountains, far from the countries
      Vokalia and Consonantia, there live the blind texts.</h2>
     <h2>Vokalia and Consonantia, there live the blind texts.</h2>

     <card>
     <img src={comida_1} ></img> 
     <p>Broccoli Salad with Bacon</p>
     <button>See Recipe</button>
     </card>


     <card>
     <img src={comida_2} ></img> 
     <p>Classic Beef Burgers</p>
     <button>See Recipe</button>
     </card>


     <card>
     <img src={comida_3} ></img> 
     <p>Classic Potato Salad</p>
     <button>See Recipe</button>
     </card>


     <card>
     <img src={comida_4}></img> 
     <p>Cherry Cobbler on the Grill</p>
     <button>See Recipe</button>
     </card>








      </div>
    );
  }


  export default HealthyRecipes;