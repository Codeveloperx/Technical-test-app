import axios, { AxiosResponse } from "axios";
import { useReducer, useEffect } from "react";
import {
  KEY_FETCH_ERROR,
  KEY_FETCH_REQUEST,
  KEY_FETCH_SUCCESS,
} from "../resources/constant";

import  type{ Action, DataResult, State } from "../resources/type";

function fetchReducer(state: State, action: Action) {
  switch (action.type) {
    case KEY_FETCH_REQUEST:
      return { ...state, isLoading: true, error: false };
    case KEY_FETCH_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case KEY_FETCH_ERROR:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
}

const useFetch = (url?: string, initialData: unknown | null = null) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: initialData,
    isLoading: false,
    error: false,
  });

  const fetchData = async (url: string) => {
    dispatch({ type: KEY_FETCH_REQUEST } as Action);
    try {
      const response = await axios.get<AxiosResponse<string, unknown>>(url);
      if (response.status !== 200) {
        dispatch({ type: KEY_FETCH_ERROR } as Action);
      }

      const data = response.data as unknown;
      dispatch({
        type: KEY_FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: KEY_FETCH_ERROR } as Action);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);

  return {
    isLoading: state.isLoading,
    error: state.error,
    data: state.data as DataResult,
  };
};

export default useFetch;
