import { Outlet } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </div>
  );
};

export default Root;
