import { useState } from "react";

import { ENV } from "../constants";

export function useArticlesSearch() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const resetState = () => {
    setStatus("idle");
    setData(null);
    setError(null);
  };

  const onSearch = async (searchText) => {
    resetState();

    try {
      setStatus("loading");
      await fetch(
        `https://newsapi.org/v2/everything?q=${searchText}&apiKey=${ENV.NEWS_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
      setStatus("idle");
    } catch (e) {
      setStatus("error");
    }
  };

  return {
    status,
    error,
    data,
    onSearch,
  };
}
