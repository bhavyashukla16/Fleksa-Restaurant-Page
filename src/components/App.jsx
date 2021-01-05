import React from "react";
import HeadingImage from "./HeadingImage";
import Navbar from "./Navbar";
import TypesOfDishes from "./TypesOfDishes";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Cart from "./Cart";
import Venue from "./Venue";
import DisplayInMenu from "./DisplayInMenu";
import IndianDishes from "../IndianDishes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeadingImage />
      <TypesOfDishes />
      <p className="dish-title">Indian Dishes</p>
      <div className="title-hr" />

      <div id="all-dishes-div">
      {IndianDishes.map(dishItem => {
        return (
          <DisplayInMenu 
            key={dishItem.id}
            id={dishItem.id}
            dishName={dishItem.name}
            dishDescription={dishItem.description}
            dishPrice={dishItem.price}
            dishTag={dishItem.tag}
          />
        );
      })}
      </div>
       
      <SearchBar />
      <Venue />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
