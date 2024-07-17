import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  async function handleClick() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog/create`,
      {
        title,
        content,
        description,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response);
    if (response.data.msg === "Blog created") {
      alert("Blog created");
      navigate("/blogs");
    }
  }

  return (
    <div className="w-full h-screen flex items-center justify-center gap-2 relative">
      <Link
        to={"/blogs"}
        className="absolute right-8 bg-slate-400 p-2 top-8 rounded-full  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Link>
      <div className="bg-white w-[50%] h-[80%] rounded-3xl border shadow-md overflow-hidden">
        <ReactQuill
          value={content}
          onChange={setContent}
          theme="snow"
          className="w-full h-full border-none text-center rounded-3xl"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 h-[80%] w-[25%]  p-2 rounded-3xl">
        <textarea
          className="w-full h-[30%] p-2 text-lg rounded-3xl shadow-md"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <textarea
          className="w-full h-[30%] p-2 text-lg rounded-3xl shadow-md"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Author"
          className="w-full rounded-3xl p-3 shadow-md"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="w-full bg-[#131842] text-white p-3 rounded-3xl text-xl font-semibold shadow-md shadow-slate-400"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
