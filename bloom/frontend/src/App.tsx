import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Test from "./pages/Test";
import CreateBlog from "./pages/CreateBlog";
import Account from "./pages/Account";
import IndividualBlog from "./pages/IndividualBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<IndividualBlog />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/test" element={<Test />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
