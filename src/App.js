import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/" exact component={PokemonList} />
                <Route path="/pokemon/:pokemon" exact component={Pokemon} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
