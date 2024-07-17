import { Link } from "react-router-dom";
import logo from "../assets/to-removebg-preview.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full pr-2 mr-5 fixed backdrop-blur-sm z-10 ">
      <img src={logo} alt="pic" className="m-2 h-[50px]" />
      <div className="flex gap-5 items-center">
        <Link
          to={"/createBlog"}
          className="bg-[#131842] p-2 rounded-2xl text-white flex items-center gap-1"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          Add Blog
        </Link>
        <Link to={"/account"} className="bg-white p-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
