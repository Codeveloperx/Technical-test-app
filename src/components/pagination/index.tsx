type PropsType = {
  page?: number;
  perPage?: number;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  maxItems?: number;
};

const Pagination = (props: PropsType) => {
  //prettier-ignore
  const { 
    perPage = 20,
    page= 0,
    maxItems = 0
  } = props;

  const lastPage = Math.ceil(maxItems / perPage);
  const disabledPrevious = page === 1;
  const disabledNext = page === lastPage;

  return (
    <nav
      data-testid="pagination-container"
      className="flex justify-center items-center mt-8"
    >
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            disabled={disabledPrevious}
            onClick={props.onPrevPage}
            className={`flex items-center ${
              disabledPrevious ? "bg-gray-100 text-gray-500" : ""
            } justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            Previous
          </button>
        </li>
        <li>
          <button
            disabled={disabledNext}
            onClick={props.onNextPage}
            className={`flex items-center ${
              disabledNext ? "bg-gray-100 text-gray-500" : ""
            } justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
