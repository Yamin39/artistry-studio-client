import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import notFoundAnimation from "../../animations/notFoundAnimation.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div>
        <div>
          <Lottie className="max-w-[24rem]" animationData={notFoundAnimation} />
        </div>
        <div className="text-center">
          <h4 className="text-3xl sm:text-5xl font-light mt-4">Not Found</h4>
          <p className="sm:text-lg font-medium max-w-96 mx-auto mt-3 sm:mt-5 mb-3">
            Something went wrong or <br /> The page you are looking is doesn&apos;t exist!
          </p>
          <Link to="/" className="btn bg-[#B59460] hover:bg-[#B59460] hover:brightness-90 px-6 rounded-sm text-lg font-medium text-white mb-10 lg:mb-0">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
