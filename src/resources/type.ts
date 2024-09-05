import { ChangeEvent } from "react";
export type TypeContext = {
  pokemons: Pokemon[];
  types: any[];
  formState: string;
  onHandlerChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
  error: boolean;
};

export type Action = {
  type: string;
  payload: unknown;
};

export type State = {
  data: unknown;
  isLoading: boolean;
  error: boolean;
};

export type DataResult = {
  id: number;
  name: string;
  abilities: Abilities[];
  types: TypesPokemon[];
  sprites: Sprites;
};

type Sprites = {
  other: Other;
  front_default: string;
};

type Other = {
  dream_world: DreamWorld;
};
type DreamWorld = {
  front_default: string;
};

export type Abilities = {
  ability: Ability;
};

export type Ability = {
  name: string;
};

export type TypesPokemon = {
  type: TypePokemon;
};
export type TypePokemon = {
  name: string;
};

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonData = {
  results: Pokemon[];
};

export type Types = {
  name: string;
  url: string;
};
