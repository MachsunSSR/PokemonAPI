import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemon } from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {
    const pokemonName = props.match.params.pokemon;
    const dispatch = useDispatch();
    const pokemonState = useSelector((state) => state.Pokemon);

    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName));
    }, []);

    const showData = () => {
        console.log(pokemonState);
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const pokeData = pokemonState.data[pokemonName];
            return (
                <div>
                    <div>
                        <h1>Sprites</h1>
                        <img src={pokeData.sprites.front_default} alt="" />
                        <img src={pokeData.sprites.back_default} alt="" />
                        <img src={pokeData.sprites.front_shiny} alt="" />
                        <img src={pokeData.sprites.back_shiny} alt="" />
                    </div>
                </div>
            );
        }

        if (pokemonState.loading) {
            return <p>Loading....</p>;
        }

        if (pokemonState.errorMsg !== "") {
            return <p>Fetch data failed</p>;
        }

        return <p>Error fetching data</p>;
    };
    return (
        <div>
            <h1>{pokemonName}</h1>
            {showData()}
        </div>
    );
};

export default Pokemon;
