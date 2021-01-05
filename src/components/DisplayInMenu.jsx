import React from "react";
import Counter from "./Counter";

  
function DisplayInMenu(props){

    return (
      <div className="dish"> 
        <p className="dish-name">{props.dishName}</p>
        <p className="dish-des">{props.dishDescription}</p>

        <div className="price-tag">
         <p className="dish-price">{props.dishPrice}</p>

         {(props.dishTag !== "")  && (
         <div className="tag-div">
         <p className="dish-tag">{props.dishTag}</p>
         </div> )
         }

          <Counter />

        </div>

         { props.id!== 6 && (
        <div className="bottom-hr"></div>
         )}
        
    </div>
    );
  }


export default DisplayInMenu;