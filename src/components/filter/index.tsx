type Types = {
  name: string;
};

type PropsType = {
  filters?: Types[];
};

const Filter = (props: PropsType) => {
  return (
    <div className="md:px-3 md:py-6">
      <nav className="flex items-center space-x-1 overflow-y-auto md:mb-3 md:flex-col md:space-x-0 md:space-y-1 md:overflow-y-visible px-6 md:px-0 pb-2 pt-2 md:pt-0">
        {props.filters?.map((it: Types) => (
          <div
            key={it?.name}
            className="flex w-full items-center space-x-3 justify-between rounded-md p-2 transition-none duration-100 text-neutral-600 hover:text-dark dark:hover:text-white dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700/40 text-sm"
          >
            <span>
              {`${it?.name}`[0].toUpperCase() + `${it?.name}`.substring(1)}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Filter;
