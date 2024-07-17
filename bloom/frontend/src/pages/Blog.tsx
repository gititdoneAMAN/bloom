import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative flex flex-col">
      <Navbar />
      {loading ? (
        <div className="flex items-center justify-center">Loading.....</div>
      ) : (
        <div className="flex flex-col justify-center gap-2 w-full h-full px-5 lg:px-16 mt-[5.5rem]">
          {data.map((blog: any) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                description={blog.description}
                title={blog.title}
                content={blog.content}
                author={blog.author.name}
                date={blog.date}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blog;
