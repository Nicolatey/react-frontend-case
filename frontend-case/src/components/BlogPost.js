const BlogPost = (props) => {
  return (
    <div className="shadow-lg rounded-md h-96">
      <img
        src={props.post.img_url}
        alt=""
        className="object-cover w-full h-1/4"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-700 pb-4 overflow-hidden">
          {props.post.title}
        </h1>
        <p className="overflow-ellipsis overflow-hidden">
          {props.post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
