import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
  const successToast = (sms) =>
    toast.success(sms, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });

  const errorToast = (sms) =>
    toast.error(sms, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });

  const warningToast = (sms) =>
    toast.warn(sms, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });

  return { successToast, errorToast, warningToast };
};

export default useToast;
