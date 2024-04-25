import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return <div className={`${pathname === "/" ? "bg-red-700" : "bg-red-300"}`}>Navbar</div>;
};

export default Navbar;
