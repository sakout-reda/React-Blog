import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, myError } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

     const deleteBlog = () =>  {
        fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }
    return (
        <div className="blog-details">
            {isLoading && <div>Loadding...</div>}
            {myError && <div>{myError}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <button onClick={() => deleteBlog(blog.id)}>Delete Me</button>
                    <p> Wrriten by {blog.author} </p>
                    <div> {blog.body} </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;