import axios from "axios";
import { getPokemon } from "./fetchPokemon";

export const GetPokemonList = (page) => async (dispatch) => {
    try {
        let pokemonData = [];
        function setPokemonData(pokdat) {
            pokemonData = pokdat;
            dispatch({
                type: "POKEMON_LIST_SUCCESS",
                payload: res.data,
                pokemonImages: pokemonData,
            });
        }
        dispatch({
            type: "POKEMON_LIST_LOADING",
        });
        const perPage = 15;
        const offset = page * perPage - perPage;
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
        );

        const loadPokemon = async (data) => {
            let _pokemonData = await Promise.all(
                data.map(async (pokemon) => {
                    let pokemonRecord = await getPokemon(pokemon);
                    return pokemonRecord;
                })
            );
            setPokemonData(_pokemonData);
        };

        loadPokemon(res.data.results);
    } catch (e) {
        dispatch({
            type: "POKEMON_LIST_FAIL",
        });
    }
};

export const GetPokemon = (pokemon) => async (dispatch) => {
    try {
        dispatch({
            type: "POKEMON_MULTIPLE_LOADING",
        });

        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

        dispatch({
            type: "POKEMON_MULTIPLE_SUCCESS",
            payload: res.data,
            pokemonName: pokemon,
        });
    } catch (e) {
        dispatch({
            type: "POKEMON_MULTIPLE_FAIL",
        });
    }
};
