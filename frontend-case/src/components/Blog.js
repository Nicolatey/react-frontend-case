import axios from "axios";
import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const token = "pj11daaQRz7zUIH56B9Z";
    axios
      .get("http://178.62.198.162/api/posts", {
        headers: {
          token: token,
        },
      })
      .then((Response) => {
        const htmlPosts = Response.data.map((post, index) => {
          return (
            <BlogPost 
              post={post}
            />
          );
        });
        setPosts(htmlPosts)
      });
  }, []);

  return (
    <div className="container bg-white p-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        {posts}
      </div>
    </div>
  );
};

export default Blog;
