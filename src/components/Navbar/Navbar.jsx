import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import "./Navbar.css";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  const { successToast } = useToast();
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "dark") {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = (mode) => {
    localStorage.setItem("theme", mode);
    if (mode === "dark") {
      setTheme("dark");
    } else if (mode === "light") {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-art-&-craft-items">All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/add-craft-item">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/my-art-&-craft-list">My Art&Craft List</NavLink>
      </li>
      <li>
        <details>
          <summary className="dark:text-black lg:dark:text-white">Themes</summary>
          <ul className="z-10 p-2 dark:text-black">
            <li>
              <button onClick={() => handleTheme("light")}>Light</button>
            </li>
            <li>
              <button onClick={() => handleTheme("dark")}>Dark</button>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        successToast("Successfully logged out");
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-[#E2E0DC] dark:bg-[#040506] dark:text-white">
      <div className="max-w-[1440px] w-11/12 mx-auto py-3">
        <div className="navbar px-0 justify-between">
          <div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost px-2 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 dark:text-black rounded-box w-52">
                {links}
              </ul>
            </div>
            <div>
              <Link to="/" className="font-semibold text-lg xl:md:text-2xl">
                Artistry Studio
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="navLink-container menu menu-horizontal gap-1 2xl:gap-2 2xl:px-1 font-medium text-xs 2xl:text-base">{links}</ul>
          </div>

          {loading ? (
            <div className="btn btn-ghost">
              <span className="loading loading-spinner"></span>
              loading...
            </div>
          ) : (
            <div>
              {user ? (
                <div className="flex gap-3 justify-center items-center">
                  <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName || "Name not found"}
                    data-tooltip-place="bottom"
                    className="bg-gray-300 rounded-full cursor-pointer"
                  >
                    <img className="size-8 2xl:size-10 rounded-full object-cover" src={user.photoURL} alt="User" />
                  </a>
                  <button
                    onClick={handleLogOut}
                    className="btn h-auto min-h-0 dark:btn-outline btn-error rounded-sm text-xs 2xl:text-base bg-secondary-color text-white py-2 xl:px-7  hover:bg-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-x-1 md:space-x-4 nav-right">
                  <NavLink
                    to="/login"
                    className="login btn btn-outline h-auto min-h-0 text-xs 2xl:text-base border rounded-sm dark:border-white dark:text-white py-2 xl:px-7"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/Register"
                    className="login btn btn-neutral bg-[#B59460] dark:bg-white text-white dark:text-black dark:hover:brightness-90 hover:bg-transparent hover:text-black h-auto min-h-0 text-xs 2xl:text-base border border-[#B59460] hover:border-black rounded-sm py-2 xl:px-7"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Tooltip className="max-w-56 lg:max-w-96 z-10" id="my-tooltip" />
    </nav>
  );
};

export default Navbar;
