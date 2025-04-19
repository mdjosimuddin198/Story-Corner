import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import "../App.css";

const Root = () => {
  return (
    <div className="bg-[white] max-w-[90%] mx-auto min-h-screen text-black">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
