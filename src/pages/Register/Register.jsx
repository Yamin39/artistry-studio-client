import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import "./Register.css";

const Register = () => {
  const { createUser, updateUserProfile, setLoading, setProfileLoader } = useAuth();
  const { successToast, errorToast } = useToast();
  const [passToggle, setPassToggle] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // email and pass verification
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorToast("Invalid email address");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      errorToast("Password should contain at least an Uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      errorToast("Password should contain at least a Lowercase letter");
      return;
    }

    if (password.length < 6) {
      errorToast("Password Length must be at least 6 character");
      return;
    }

    // register
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(result.user, name, photoURL)
          .then((res) => {
            console.log(res);
            setProfileLoader(true);
            successToast("Registration Successful");
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
            errorToast(err.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
        if (/email-already-in-use/.test(error.message)) {
          errorToast("Email already in use");
        } else {
          errorToast(error.message);
        }
        setLoading(false);
      });
  };

  return (
    <div className="max-w-[1440px] lg:pr-20 w-11/12 mx-auto flex justify-center items-center py-10">
      <div className="register-container p-10 flex relative lg:w-[43rem]">
        <div className="w-full sm:w-[26rem]">
          <div className="text-center space-y-2 mb-6">
            <h2 className="text-3xl font-bold">Register</h2>
            <p className="text-gray-600">Create your account</p>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col space-y-3 w-full">
            <input type="text" name="name" placeholder="Enter your name*" className="input bg-[#F5F5F5] rounded-sm w-full" required />
            <input type="text" name="photoURL" placeholder="Enter your photoURL*" className="input bg-[#F5F5F5] rounded-sm w-full" required />
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
        <div className="hidden lg:flex absolute -right-[9rem] top-1/2 -translate-y-1/2 max-w-80 h-96 p-10 text-center rounded-xl flex-col justify-center items-center bg-[#E2E0DC] drop-shadow-2xl">
          <h2 className="text-2xl font-semibold">Join the Artistic Community</h2>
          <p className="mt-4 text-gray-600">Unlock exclusive access to creative wonders. Join now for personalized experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
