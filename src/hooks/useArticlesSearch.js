import { useState, useRef } from "react";

import { ENV } from "../constants";
import { debounce } from "../helpers/debounce";

export function useArticlesSearch() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);

  const resetState = () => {
    setStatus("idle");
    setData(null);
    setError(null);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const debouncedSearch = debounce(async (searchText) => {
    try {
      setStatus("loading");

      if (searchText === "throw") {
        throw new Error(
          "Simulated error: Not connected to a internet connection!"
        );
      }

      const abortController = new AbortController();
      const signal = abortController.signal;
      abortControllerRef.current = abortController;

      await fetch(
        `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${ENV.NEWS_API_KEY}`,
        { signal }
      )
        .then((response) => response.json())
        .then((data) => setData(data));
      setStatus("idle");
    } catch (e) {
      if (e.name === "AbortError") {
        console.log("Request cancelled!");
        return;
      }
      setStatus("error");
      setError(e);
    }
  }, 300);

  const onSearch = async (searchText) => {
    resetState();

    if (searchText.trim() == "") return;

    debouncedSearch(searchText);
  };

  return {
    status,
    error,
    data,
    onSearch,
  };
}
