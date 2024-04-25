import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
