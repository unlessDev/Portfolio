import logo from "../assets/Logo.webp";

const Navbar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12 rounded-xl" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-4xl text-white">
        <a
          className="hover:text-gray-500 font-bold text-2xl"
          target="_blank"
          alt="Github"
          href="https://github.com/unlessDev"
        >
          Github
        </a>
        <a
          className="hover:text-blue-400 font-bold text-2xl"
          target="_blank"
          alt="Linkedin"
          href="https://www.linkedin.com/in/unlessdev/"
        >
          Linkedin
        </a>
        <a
          className="hover:text-red-500 font-bold text-2xl"
          target="_blank"
          alt="Youtube"
          href="https://www.youtube.com/@unlessDev"
        >
          Youtube
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
