import {
  PokemonDispatchType,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
} from "../actions/PokemonActionTypes";

interface IInitialState {
  loading: boolean;
  pokemon?: PokemonType;
}

const initialState: IInitialState = {
  loading: false,
};

const pokemonReducer = (
  state: IInitialState = initialState,
  action: PokemonDispatchType
): IInitialState => {
  switch (action.type) {
    case POKEMON_FAIL:
      return { loading: false };
    case POKEMON_LOADING:
      return { loading: true };
    case POKEMON_SUCCESS: {
      return { loading: false, pokemon: action.payload };
    }
    default:
      return state;
  }
};

export default pokemonReducer;
