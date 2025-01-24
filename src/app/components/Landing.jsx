import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const Landing = async () => {
  const data = await getData();
  // console.log("data", data)
  return (
    <div>
      {
        data.map(post => <div className="border rounded-md p-2 my-3 flex gap-2 capitalize" key={post.id}>
          <Link href={`/blog/${post.id}`}><h2>{post.id}. {post.title}</h2></Link>
          <GoLinkExternal />
        </div>)
      }
    </div>
  );
};

export default Landing;