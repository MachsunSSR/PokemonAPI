import React from "react";
import typeColors from "../helpers/typeColors";
import "./card.css";

function Card({ pokemon }) {
    return (
        <div className="pokemon">
            <div class="img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div class="info">
                <span class="number">
                    #{pokemon.id.toString().padStart(3, "0")}
                </span>
                <h3 class="name">{pokemon.name}</h3>
                <small class="type">
                    Type: <span>{pokemon.type}</span>
                </small>
                <div className="Card__types">
                    {pokemon.types.map((type) => {
                        return (
                            <div
                                className="Card__type"
                                style={{
                                    backgroundColor: typeColors[type.type.name],
                                }}
                            >
                                {type.type.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Card;
