import logo from "../assets/devwhite.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12 rounded-xl" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          className="hover:text-gray-500" 
          target="_blank" 
          href="https://github.com/unlessDev">
            <FaGithub />
          </a>
        <a 
          className="hover:text-blue-400"
          target="_blank" 
          href="https://www.linkedin.com/in/unlessdev/">
            <FaLinkedin />
        </a>
        <a 
          className="hover:text-red-500"
          target="_blank" 
          href="https://www.youtube.com/@unlessDev">
            <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
