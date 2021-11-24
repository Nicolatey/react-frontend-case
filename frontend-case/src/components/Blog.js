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
    <div className="container px-4 py-6 md:px-14 md:py-16 bg-gray-100">
      <div className="container bg-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {posts}
        </div>
      </div>
    </div>
  );
};

export default Blog;
