import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPokemon } from "../actions/PokemonActions";
import { RootStore } from "../Store";
import "../App.css";
const Pokemon = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const [disable, setDisable] = useState(false);

  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const countSearch = React.useRef(0);
  //   const inputRef = React.useRef();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);
  const handleSubmit = () => {
    countSearch.current = countSearch.current + 1;
    dispatch(GetPokemon(pokemonName));
    if (countSearch.current === 3) {
      setDisable(true);
    }
  };

  //   const focus = () => {
  // inputRef.current.focus();
  //   };
  //   React.useEffect(() => focus());

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit} disabled={disable}>
        Search
      </button>

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

export default Pokemon;
