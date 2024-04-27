import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {
  const authContextInfo = useContext(AuthContext);
  return authContextInfo;
};

export default useAuth;
