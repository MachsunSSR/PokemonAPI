import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { GetPokemonList } from "../actions/pokemonActions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Card from "../components/Card";
import "./list.css";

const PokemonList = (props) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemonList = useSelector((state) => state.PokemonList);

    React.useEffect(() => {
        FetchData(GetPokemonList(1));
    }, []);

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page));
    };

    const ShowData = () => {
        if (pokemonList.loading) {
            return <p>loading...</p>;
        }

        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className="grid-container">
                    {pokemonList.data.map((e1, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    to={`pokemon/${e1.name}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Card
                                        pokemon={pokemonList.dataPokemon[index]}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            );
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>;
        }

        return <p>unable to fetch data</p>;
    };

    return (
        <div>
            <div>
                <p>Search : </p>
                <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    onClick={() => props.history.push(`/pokemon/${search}`)}
                >
                    Search
                </button>
            </div>
            {ShowData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => FetchData(data.selected + 1)}
                    containerClassName={"pagination"}
                />
            )}
        </div>
    );
};

export default PokemonList;
