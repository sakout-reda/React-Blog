import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [myError, setmyError] = useState(null);

  useEffect(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch data for that ressource');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
          setmyError(null);
        })
        .catch(err => {
          setIsLoading(false);
          setmyError(err.message);
        })

  }, [url]);
  return {data, isLoading, myError};
}

export default useFetch;