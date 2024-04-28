import Lottie from "lottie-react";
import loadingAnimation from "../animations/loading.json";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        <Lottie className="size-36" animationData={loadingAnimation} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
