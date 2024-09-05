import PokemonItem from "../pokemon-item";
import { TrashIcon } from "@heroicons/react/24/outline";
import { usePagination } from "../../hooks/usePagination";
import { Pokemon } from "../../resources/type";
import Message from "../message";

type PropsType = {
  values?: Pokemon[];
  children?: React.ReactNode;
  page?: number;
  perPage?: number;
  searchPokemon?: string;
  onReset?: () => void;
};

const PokemonList = (props: PropsType) => {
  const { backToHome } = usePagination();

  //prettier-ignore
  const {
    perPage = 20,
    page = 0,
    searchPokemon = "",
    values = [] 
  } = props;

  const data = values
    ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
    ?.filter((it: Pokemon) =>
      it?.name.toLowerCase().includes(searchPokemon?.toLowerCase())
    );

  const onClear = () => {
    if (props.onReset) {
      props.onReset();
    }
    backToHome();
  };

  const isEmpty = data.length === 0;

  return (
    <div className="container mx-auto px-6 pt-4 xl:px-4">
      {props.searchPokemon && (
        <div className="flex flex-col justify-start items-start gap-4">
          <button
            onClick={onClear}
            data-testid="clear-search-button"
            className="flex items-center justify-center gap-1 space-x-1 rounded-md py-1.5 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity"
          >
            <TrashIcon className="size-5 text-blue-500" />
            Clear Result
          </button>
          {!isEmpty && (
            <div className="w-auto">
              <h2 data-testid="search-results-count" className="break-words">
                Se encontraron {data.length} pokemones con la palabra{" "}
                <strong>{props.searchPokemon}</strong>
              </h2>
            </div>
          )}
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
        {data?.map((it: Pokemon) => (
          <PokemonItem key={it?.name} testId="pokemon-item" url={it?.url} />
        ))}
      </div>
      {isEmpty ? (
        <Message value={props.searchPokemon} />
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

export default PokemonList;
