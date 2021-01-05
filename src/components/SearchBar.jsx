import React from "react";

function SearchBar(){
    return (
        <div className="SearchBar">
        <img className="Search-icon" src="https://www.flaticon.com/svg/static/icons/svg/622/622669.svg" alt="search-icon"></img>
        <input className="search" type="text" placeholder="Search" style={{ borderStyle: "hidden", borderRadius: "10px"}}></input>
        </div>
    );
}

export default SearchBar;