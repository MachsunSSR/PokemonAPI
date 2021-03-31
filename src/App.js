import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import Navbar from "./components/Navbar";
import PageCookie from "./cookie/PageCookie";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={PageCookie} />
                <Route path="/home" exact component={PokemonList} />
                <Route path="/pokemon/:pokemon" exact component={Pokemon} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
}

export default App;
