import Link from "next/link";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const BlogDetails = async ({ params }) => {
  const id = (await params).id;
  // console.log(id);

  const data = await getData();
  // console.log("data", data)

  //extract specific data 
  const blog = data.find(item => item.id === parseInt(id));
  // console.log(blog);
  return (
    <div>
      <h2 className="text-3xl font-semibold text-indigo-500 mb-3">Blog Details</h2>
      <hr />
      <div className="card bg-base-100 w-6/12 mx-auto shadow-xl mt-3">
        <div className="card-body">
          <h2 className="card-title capitalize">{blog?.title}</h2>
          <p>{blog?.body}</p>
          <div className="card-actions justify-end mt-3">
            <Link className="btn bg-indigo-500 text-white" href="/">Go to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;