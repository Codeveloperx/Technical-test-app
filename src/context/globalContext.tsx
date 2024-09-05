import axios from "axios";
import route from "../resources/route.json";
import { createContext, useState, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { KEY_LIMIT } from '../resources/constant';

import type {
  Pokemon,
  PokemonData,
  TypeContext,
  Types,
} from "../resources/type";

export const URL = import.meta.env.VITE_API_URL;

type PropsType = {
  children?: React.ReactNode;
};

const GlobalContext = createContext<TypeContext>({} as TypeContext);

const GlobalProvider = (props: PropsType) => {
  const url = `${URL}/${route.api.all}?${KEY_LIMIT}=${1000}`;

  const { formState, onHandlerChange, onReset } = useForm();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<Types[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get<PokemonData>(url);

      setPokemons(response?.data?.results);
    } catch (error) {
      setError(true);
    }
  };

  const getPokemonsType = async () => {
    const { data } = await axios.get(`${URL}/${route.api.type}`);
    setTypes([...data.results]);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    getPokemonsType();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ pokemons, types, formState, onHandlerChange, onReset, error }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
