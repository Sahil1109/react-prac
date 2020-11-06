import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPokemon } from "./actions/PokemonActions";
import { RootStore } from "./Store";
import "./App.css";
const App = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleSubmit = () => dispatch(GetPokemon(pokemonName));
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.loading ? (
        <div>LOADING...</div>
      ) : pokemonState.pokemon ? (
        <div>
          <img
            src={pokemonState.pokemon.sprites.front_default}
            className="poke-pic"
            alt=""
          />
          {pokemonState.pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>
      ) : (
        <div>EMPTY</div>
      )}
    </div>
  );
};

export default App;
