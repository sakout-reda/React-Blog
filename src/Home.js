import BlogList from "./BlogList";
import useFetch from "./useFetch.js";

const Home = () => {
  const title = "All Blogs";

  const {data: blogs, isLoading, myError} = useFetch('http://localhost:8000/blogs');


  return (
    <div className="home">
      { myError && <div> {myError}</div> }
      { isLoading && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title={title} />}
    </div>
  );
}

export default Home;