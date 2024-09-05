import { Abilities, DataResult, TypesPokemon } from "../../../resources/type";

type PropsType = {
  title: string;
  values?: DataResult;
  isAbility?: boolean;
};

const List = (props: PropsType) => {
  //prettier-ignore
  const {
    isAbility = false,
  } = props;

  return (
    <div className="flex flex-col md:items-center">
      <h5 className="mb-2 md:text-2xl font-mono tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <div className="flex gap-2">
        {isAbility ? (
          <>
            {props.values?.abilities?.map((it: Abilities) => (
              <span
                key={it?.ability?.name}
                className="inline-flex cursor-pointer items-center px-2.5 py-0.5 rounded-full md:font-medium bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-mono hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors duration-100"
              >
                {it?.ability?.name}
              </span>
            ))}
          </>
        ) : (
          <>
            {props.values?.types?.map((it: TypesPokemon) => (
              <span
                key={it?.type?.name}
                className="inline-flex cursor-pointer items-center px-2.5 py-0.5 rounded-full md:font-medium bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-mono hover:bg-neutral-200 dark:hover:bg-neutral-700/50 transition-colors duration-100"
              >
                {it?.type?.name}
              </span>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default List;
