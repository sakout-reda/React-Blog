import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const title = "All Blogs";
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [myError, setmyError] = useState(null);

  useEffect ( () =>{
    fetch('http://localhost:8000/blogs')
    .then(res =>{
      if(!res.ok){
        throw Error('Could not fetch data for that ressource');

      }
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsLoading(false);
      setmyError(null);
    })
    .catch(err => {
      setIsLoading(false);
      setmyError(err.message);
    })
  },[]);


  return (
    <div className="home">
      {myError && <div> {myError}</div> }
      { isLoading && <div>Loading...</div> }
       {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;