import React from "react";
import Card from "./Card";

const Cardlist = ({robots}) =>{

    const cardsArr = robots.map((user, index) =>{
        return(
            <Card 
            id={robots[index].id} 
            name = {robots[index].name} 
            email= {robots[index].email}/>

        );
    })
    
    return(
        <div>
            {cardsArr}
        </div>
    );
}

export default Cardlist