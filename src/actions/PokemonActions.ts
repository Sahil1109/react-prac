import { Dispatch } from "react";
import {
  PokemonDispatchType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "./PokemonActionTypes";
import axios from "axios";
export const GetPokemon = (pokemon: string) => async (
  dispatch: Dispatch<PokemonDispatchType>
) => {
  try {
    dispatch({
      type: POKEMON_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: POKEMON_SUCCESS,
      payload: {
        abilities: res.data.abilities,
        sprites: res.data.sprites,
        stats: res.data.stats,
      },
    });
  } catch (e) {
    dispatch({
      type: POKEMON_FAIL,
    });
  }
};
