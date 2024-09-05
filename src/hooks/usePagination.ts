import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { KEY_PAGE } from "../resources/constant";

export const usePagination = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [page, setPage] = useState<number>(1);

  const nextPage = () => {
    setPage(page + 1);
    navigate(`/?page=${page + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    setPage(page - 1);
    navigate(`/?page=${page - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const backToHome = () => {
    setPage(1);
    navigate("/");
  };

  useEffect(() => {
    let currentPage = searchParams?.get(KEY_PAGE) || 1;
    if (typeof currentPage === "string") {
      currentPage = parseInt(currentPage);
      if (isNaN(currentPage)) {
        currentPage = 1;
      }
    }
    setPage(currentPage);
  }, [searchParams]);

  return { page, nextPage, previousPage, setPage, backToHome };
};
