import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

const Login = () => {
  const [passToggle, setPassToggle] = useState(false);
  const { successToast, errorToast } = useToast();
  const { logIn, logInWithGoogle, logInWithGithub } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  // social login
  const handleSocialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        console.log(result.user);
        successToast("Login Successful");
        navigate(state || "/");
      })
      .catch((error) => console.log(error));
  };

  // login with email & pass
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // email and pass verification
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorToast("Invalid email address");
      return;
    }

    if (password.length < 6) {
      errorToast("Password Length must be at least 6 character");
      return;
    }

    // login
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        successToast("Login Successful");
        navigate(state || "/");
      })
      .catch((error) => {
        console.error(error);
        if (/invalid-credential/.test(error.message)) {
          errorToast("Email or Password is wrong");
        } else {
          errorToast(error.message);
        }
      });
  };
  return (
    <div className="max-w-[1440px] lg:pl-20 w-11/12 mx-auto flex justify-center items-center py-10">
      <div
        className="p-10 flex justify-end relative lg:w-[43rem]"
        style={{
          boxShadow: "0 0 15px #e2e0dc inset",
          borderTopRightRadius: "3rem",
          borderBottomLeftRadius: "3rem",
        }}
      >
        <div className="w-full sm:w-[26rem]">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold">Login</h2>
            <p className="text-gray-600">Login to your account</p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col space-y-3 w-full">
            <input type="email" name="email" placeholder="Enter email address*" className="input bg-[#F5F5F5] rounded-sm w-full" required />
            <div className="relative">
              <input
                type={passToggle ? "text" : "password"}
                name="password"
                placeholder="Enter password*"
                className="input bg-[#F5F5F5] rounded-sm w-full"
                required
              />
              <div onClick={() => setPassToggle(!passToggle)} className="absolute top-0 right-3 translate-y-1/2 text-[1.4rem] cursor-pointer bg-[#F5F5F5]">
                {passToggle ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
            <button className="btn bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 px-6 rounded-sm text-lg font-medium text-white mb-10 lg:mb-0">
              Login
            </button>
          </form>
          <div className="flex justify-center gap-5 items-center my-6">
            <hr className="flex-1 border-b border-b-gray-200" />
            <p className="text-gray-400">OR login with</p>
            <hr className="flex-1 border-b border-b-gray-200" />
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={() => handleSocialLogin(logInWithGoogle)} className="flex-1 btn btn-outline px-6 rounded-sm text-lg font-medium mb-10 lg:mb-0">
              <FcGoogle />
              Google
            </button>
            <button onClick={() => handleSocialLogin(logInWithGithub)} className="flex-1 btn btn-outline px-6 rounded-sm text-lg font-medium mb-10 lg:mb-0">
              <FaGithub />
              GitHub
            </button>
          </div>
          <hr className="my-6 border-b border-b-gray-200" />
          <p className="text-gray-600 text-center">
            Don&apos;t have any account?{" "}
            <Link className="text-black font-medium underline" to="/register">
              Register
            </Link>
          </p>
        </div>
        <div className="hidden lg:flex absolute -left-[9rem] top-1/2 -translate-y-1/2 max-w-80 h-96 p-10 text-center rounded-xl flex-col justify-center items-center bg-[#E2E0DC] drop-shadow-2xl">
          <h2 className="text-2xl font-semibold">Welcome Back!</h2>
          <p className="mt-4 text-gray-600"> Log in to Explore Your Artistic Journey. Dive into creativity. Let&apos;s paint your imagination.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
