import React from "react";

function Card(props) {
  return (
    <article className="pokemon-card">
      <h2 className="font-pixel">{props.name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt={props.name}
        onError={(e) => {
          e.target.src =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
          e.target.onError = null;
        }}
      ></img>
    </article>
  );
}

export default Card;
