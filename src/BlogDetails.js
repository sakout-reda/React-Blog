import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, myError } = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-details">
            {isLoading && <div>Loadding...</div>}
            {myError && <div>{myError}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> Wrriten by {blog.author} </p>
                    <div> {blog.body} </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;