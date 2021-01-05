import React from "react";

function DisplayInCart(props){
    return ( 
        <div className="cart-dish">
           <p className="cart-dish-name">{props.nameOfDish}  {props.count}</p> 
           <p className="cart-dish-price">{props.dishPrice}</p>
        </div>
    );

}

export default DisplayInCart;