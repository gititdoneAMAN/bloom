import Quote from "../components/Quote";
import logo from "../assets/to-removebg-preview.png";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@amandevbhardwaj/bloom-common";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [signupPayload, setSignupPayload] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function handleClick() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        name: signupPayload.name,
        email: signupPayload.email,
        password: signupPayload.password,
      });
      console.log(response);
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("token", `Bearer ${response.data}`);
        alert("Signup Successful");
        navigate("/blogs");
      }
    } catch (err) {
      alert("Some error occured");
    }
  }

  return (
    <div className="flex w-screen h-screen lg:justify-between relative">
      <img src={logo} alt="pic" className="m-2 h-[50px] absolute" />
      <div className="flex items-center justify-center w-full">
        <div className="bg-white  w-[60%] rounded-3xl p-5 shadow-lg shadow-slate-400">
          <h2 className="text-3xl font-bold text-center font-['lexend'] underline decoration-solid">
            Create Account
          </h2>
          <InputComponent
            label="Name"
            placeholder="Enter your name"
            type="text"
            onChange={(e) => {
              setSignupPayload((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <InputComponent
            label="Email"
            placeholder="Enter your email"
            type="text"
            onChange={(e) => {
              setSignupPayload((prev) => ({ ...prev, email: e.target.value }));
            }}
          />
          <InputComponent
            label="Password"
            placeholder="Enter your Password"
            type="password"
            onChange={(e) => {
              setSignupPayload((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <ButtonComponent label="Signup" onClick={handleClick} />
          <p className="w-full mb-2 flex gap-1 justify-center mt-1">
            Already have an account?
            <Link className="text-red-500" to={"/signin"}>
              Signin.
            </Link>
          </p>
        </div>
      </div>
      <Quote
        label="The future belongs to those who believe in the beauty of their
          dreams."
        author="- Eleanor Roosevelt"
      />
    </div>
  );
};

export default Signup;
