import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import "../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Root = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Story Corner | Home </title>
      </Helmet>
      <div className="bg-[white] max-w-[90%] mx-auto min-h-screen text-black">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </HelmetProvider>
  );
};

export default Root;
