import { useState, useEffect } from "react";

const url = "https://pcfy.redberryinternship.ge/api";

function useFetch(section) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await fetch(url + section, {
        headers: {
          Authorization: "86594610eaa240e3e57306664e9e221b",
        },
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      setData(result.data);
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (err) {
      setIsLoading(false);
      setError(err);
    }
  }, [section]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useFetch;
