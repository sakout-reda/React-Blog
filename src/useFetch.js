import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [myError, setmyError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {


      fetch(url, { signal: abortCont.signal })
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
          if (err.name === 'AbortError'){
            console.log('fetch aborted');
          }
          else{
            setIsLoading(false);
            setmyError(err.message);
          }

        })
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, myError };
}

export default useFetch;