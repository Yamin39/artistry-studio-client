import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1440px] w-10/12 mx-auto font-poppins">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
