import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url, {
        headers: {
          Authorization: "86594610eaa240e3e57306664e9e221b",
        },
      });
      if(!response.ok)
      {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setData(result.data);
      console.log(result.data);
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
