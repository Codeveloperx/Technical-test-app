import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Image from "../common/imagen";
import Skeleteton from "../sekeleton";
import route from "../../resources/route.json";

type PropsType = {
  url?: string;
  testId?: string;
};

const PokemonItem = (props: PropsType) => {
  const { data, isLoading } = useFetch(props.url);

  const dataSource =
    data?.sprites?.other?.dream_world?.front_default ||
    data?.sprites?.front_default;

  return (
    <>
      {isLoading && <Skeleteton />}

      {!isLoading && (
        <Link to={`${route.pages.detail}/${data?.id}`}>
          <div
            data-testid={props.testId}
            className="flex flex-col items-center justify-center rounded-md p-4 gap-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/20 transition-colors duration-100 group"
          >
            <div className="mb-3 flex flex-col space-y-1 items-center justify-center">
              <h2>{data?.name as string}</h2>
            </div>
            <Image src={dataSource} alt={data?.name} className="h-[100px]" />
            <div className="flex items-center space-x-1 pt-5">
              <div className="flex gap-2">
                {data?.types?.map((it: any) => (
                  <span
                    key={it?.type?.name}
                    className="inline-flex cursor-pointer items-center px-2.5 py-0.5 rounded-full font-medium bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-mono hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors duration-100"
                  >
                    {it?.type?.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default PokemonItem;
