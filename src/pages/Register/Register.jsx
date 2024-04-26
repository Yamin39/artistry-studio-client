import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="max-w-[1440px] lg:pr-20 w-11/12 mx-auto flex justify-center items-center py-10">
      <div id="register-container" className="p-10 flex relative lg:w-[43rem]">
        <div className="w-full sm:w-[26rem]">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold">Register</h2>
            <p className="text-gray-600">Create your account</p>
          </div>
          <form className="flex flex-col space-y-3 w-full">
            <input type="text" name="name" placeholder="Enter your name*" className="input bg-[#F5F5F5] rounded-sm w-full" />
            <input type="text" name="photoURL" placeholder="Enter your photoURL*" className="input bg-[#F5F5F5] rounded-sm w-full" />
            <input type="email" name="email" placeholder="Enter email address*" className="input bg-[#F5F5F5] rounded-sm w-full" />
            <input type="password" name="password" placeholder="Enter password*" className="input bg-[#F5F5F5] rounded-sm w-full" />
            <button className="btn bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 px-6 rounded-sm text-lg font-medium text-white mb-10 lg:mb-0">
              Register
            </button>
          </form>
          <hr className="my-6 border-b border-b-gray-400" />
          <p className="text-gray-600 text-center">
            Already have an account?{" "}
            <Link className="text-black font-medium underline" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex absolute -right-[9rem] max-w-80 h-96 p-10 text-center rounded-xl flex-col justify-center items-center bg-[#E2E0DC] drop-shadow-2xl">
          <h2 className="text-2xl font-semibold">Join the Artistic Community</h2>
          <p className="mt-4 text-gray-600">Unlock exclusive access to creative wonders. Join now for personalized experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
