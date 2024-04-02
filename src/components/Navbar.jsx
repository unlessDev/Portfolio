import logo from "../assets/devWhite.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-1">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12 rounded-xl" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaLinkedin />
        <FaYoutube />
    </div>
  </nav>
}

export default Navbar