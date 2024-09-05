import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";

type PropsType = {
  value?: string;
};
const Message = (props: PropsType) => {
  return (
    <div data-testid = "not-found" className="mt-6 flex w-full flex-col items-center justify-center text-gray-600 dark:text-gray-400">
      <ArchiveBoxXMarkIcon className="size-14 text-black" />
      <p className="text-xl mb-1 font-medium">No se encontro el pokemon</p>
      <p className="text-md mb-4 font-mono">{`"${props.value}"`}</p>
    </div>
  );
};

export default Message;
