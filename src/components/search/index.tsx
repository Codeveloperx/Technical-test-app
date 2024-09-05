import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent } from "react";

type PropsType = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
  value?: string;
};

const Search = (props: PropsType) => {
  return (
    <div className="sticky top-[77px] z-50">
      <div className="relative w-full text-[16px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
          <MagnifyingGlassIcon className="size-6 text-blue-500" />
        </div>
        <form>
          <input
            data-testid="box-search"
            onChange={props.onChange}
            value={props.value}
            type="text"
            id="search"
            name="search"
            placeholder="Search pokemons."
            className="w-full border-b border-neutral-300 bg-white p-3 px-11 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:focus:ring-neutral-700"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;
