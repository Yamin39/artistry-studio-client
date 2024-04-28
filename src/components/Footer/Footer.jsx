import { CgCopyright } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#E2E0DC] dark:bg-[#111111] py-16">
      <div className="max-w-[1440px] w-11/12 mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-32 justify-between dark:text-white">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold">Give Feedback</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm mt-2">Share your thoughts! Help us enhance your artistic journey with valuable feedback.</p>
            <form className="mt-6">
              <div className="flex gap-6">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full border border-black dark:border-white bg-transparent px-4 py-3 rounded-2xl"
                  required
                />
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full border border-black dark:border-white bg-transparent px-4 py-3 rounded-2xl"
                  required
                />
              </div>
              <textarea
                rows="4"
                placeholder="Leave a message"
                className="w-full border border-black dark:border-white bg-transparent px-4 py-3 rounded-2xl mt-6"
                required
              ></textarea>
              <button className="btn bg-black dark:bg-white hover:bg-black hover:opacity-75 text-white dark:text-black w-full text-lg rounded-xl mt-4">
                Send
              </button>
            </form>
          </div>
          <div className="flex-1">
            <div className="mb-8">
              <Link to="/" className="font-semibold text-4xl">
                Artistry Studio
              </Link>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <h6 className="text-xl font-medium">Quick Links</h6>
                <ul className="font-light mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>
                    <Link to="/" className="hover:underline hover:text-gray-500 dark:hover:text-gray-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="hover:underline hover:text-gray-500 dark:hover:text-gray-400">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="hover:underline hover:text-gray-500 dark:hover:text-gray-400">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/all-art-&-craft-items" className="hover:underline hover:text-gray-400">
                      All Art & craft Items
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <h6 className="text-xl font-medium">Contact Info</h6>
                <ul className="font-light mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                  <li className="hover:underline hover:text-gray-500 dark:hover:text-gray-400">
                    <a href="mailto:contact@artistrystudio.com">contact@artistrystudio.com</a>
                  </li>
                  <li className="hover:underline hover:text-gray-500 dark:hover:text-gray-400">
                    <a href="tel:+01734562891">01734562891</a>
                  </li>
                  <li>
                    <p>Zindabazar, Sylhet</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <ul className="flex gap-6 items-center text-3xl text-gray-600 dark:text-gray-300">
                <li>
                  <a href="">
                    <TiSocialFacebookCircular />
                  </a>
                </li>
                <li>
                  <a href="">
                    <IoLogoInstagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <CiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-center mt-16">
          <p>
            Copyright <CgCopyright className="inline" /> 2024. Artistry Studio Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
