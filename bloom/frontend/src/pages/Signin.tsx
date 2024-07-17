import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import Quote from "../components/Quote";
import logo from "../assets/to-removebg-preview.png";
import { useState } from "react";
import { SigninInput } from "@amandevbhardwaj/bloom-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Signin = () => {
  const navigate = useNavigate();

  const [signinPayload, setSigninPayload] = useState<SigninInput>({
    username: "",
    password: "",
  });

  async function handleClick() {
    try {
      console.log("---------------", signinPayload);
      console.log(signinPayload.username, signinPayload.password);
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
        username: signinPayload.username,
        password: signinPayload.password,
      });
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("token", `Bearer ${response.data}`);
        alert("Signin Successful");
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
            SignIn
          </h2>
          <InputComponent
            label="Email"
            placeholder="Enter your email"
            type="text"
            onChange={(e) => {
              setSigninPayload((prev) => ({
                ...prev,
                username: e.target.value,
              }));
            }}
          />
          <InputComponent
            label="Password"
            placeholder="Enter your Password"
            type="password"
            onChange={(e) => {
              setSigninPayload((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <ButtonComponent label="Signin" onClick={handleClick} />
          <p className="w-full mb-2 flex gap-1 justify-center mt-1">
            Don't have an account?
            <Link className="text-red-500" to={"/signup"}>
              Signup.
            </Link>
          </p>
        </div>
      </div>
      <Quote
        label="The only way to achieve the impossible is to believe it is possible."
        author="- Charles Kingsleigh"
      />
    </div>
  );
};

export default Signin;
