import React from "react";

function Content(props) {
  return (
    <div className="content">
      <h3>{props.title}</h3>
      <img className="content__main_image" src={props.image} />
      <p>Publisher: "{props.publisher}"</p>
      <div className="content__bot">
        <a className="link" href={props.link}>
          Ingredients and Cooking Instructions
        </a>
      </div>
      <button
        onClick={() => props.addToFavourites(props.link, props.title, props.id)}
        className="content__button"
      >
        Add to Favourites
      </button>
    </div>
  );
}

export default Content;
