import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const title = "All Blogs";
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }

  ]);

  const deleteBlog = (id) =>{
    const newBlogs=blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);

  }
  const [name,setName] = useState("luigi");

  useEffect ( () =>{
    console.log("Hello world");
  },[name]);


  return (
    <div className="home">
      <BlogList blogs={blogs} title={title} deleteBlog={deleteBlog}/>
      <button onClick={() =>setName("mario")}>Change name</button>
      <p>{name}</p>
      {/*       <BlogList blogs={blogs.filter((blog) => blog.author === 'luigi')} title="Luigi blogs" /> */}
    </div>
  );
}

export default Home;