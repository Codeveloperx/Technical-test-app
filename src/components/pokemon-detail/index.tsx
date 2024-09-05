import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import route from "../../resources/route.json";
import { URL } from "../../context/globalContext";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "../common/imagen";
import { DataResult } from "../../resources/type";
import Abilities from "./list.tsx";
import Types from "./list.tsx";
import Loading from "./loading";

const PokemonDetail = () => {
  const { idpokemon } = useParams();

  const { data, isLoading } = useFetch(
    `${URL}${route.api.detail}/${idpokemon}`
  );

  const values = data as DataResult;
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="flex flex-col items-center mx-5 mt-8">
          <div className="w-auto mx-4">
            <div className="flex items-end gap-2 mb-2">
              <Link to={route.pages.home}>
                <button>
                  <ArrowLeftIcon className="size-5 text-blue-500" />
                </button>
              </Link>
              <h1 className="font-mono md:text-3xl">{values?.name}</h1>
            </div>
            <div className="flex p-4 w-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <Image
                src={values?.sprites?.other?.dream_world?.front_default}
                alt={values?.name}
              />
              <div className="flex p-4 gap-4 flex-col md:flex-row leading-normal">
                <Abilities
                  title="Habilidades"
                  values={values}
                  isAbility={true}
                />
                <Types title="Tipos" values={values} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
