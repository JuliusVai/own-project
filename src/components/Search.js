import React from "react";

function Search(props) {
  return (
    <div className="search__wrapper">
      <h2 className="search__title">Search for delicious food: </h2>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} type="text" />
        <button className="search_button">Search</button>
      </form>
    </div>
  );
}

export default Search;
