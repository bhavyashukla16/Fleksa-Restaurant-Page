import React from "react";
import DisplayInCart from "./DisplayInCart";

function Cart(){
    return (
        <div className="cart">
            <img className="cart-logo" src="https://www.flaticon.com/svg/static/icons/svg/1170/1170678.svg" alt="cart-logo"></img>
            <h3 className="cart-title">Cart</h3>

            <div id="all-cart-dishes">
                <DisplayInCart />
            </div> 

            <div className="total-cost-div">
            <div id="cost"> $13.09 </div>
            </div>
            <button className="proceed-button"> 
            <div id="proceed-text"> Proceed </div>
            </button>

        </div>
    );
}

export default Cart;