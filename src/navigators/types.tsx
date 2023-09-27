import { User } from '../types';

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: {
    user: User;
  };
};

export type PokemonsStackParamList = {
  Pokedex: undefined;
  AddPokemon: undefined;
};
