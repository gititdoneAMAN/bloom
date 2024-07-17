import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";

const IndividualBlog = () => {
  const params = useParams();

  const [blogData, setBlogData] = useState({});
  const [nameData, setNameData] = useState("");

  useEffect(() => {
    alert(params.id);
    axios
      .get(`${BACKEND_URL}/api/v1/blog/individualPage/${params.id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBlogData(res.data);
        setNameData(res.data.author.name);
      });
  }, []);

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center relative">
      <Link
        to={"/blogs"}
        className="absolute top-8 right-8 bg-slate-400 p-2 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Link>
      <div className="flex flex-col mx-[50px] bg-white md:mx-[200px] p-4 rounded-3xl">
        <h1 className="text-3xl font-bold">{blogData.title}</h1>
        <div className="flex gap-2">
          <p>{nameData}</p>
          <p>{blogData.date}</p>
        </div>
        <p className="text-lg">{blogData.description}</p>
        <p className="text-xl">{blogData.content}</p>
      </div>
    </div>
  );
};

export default IndividualBlog;
