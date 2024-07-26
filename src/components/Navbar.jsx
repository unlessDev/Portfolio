import logo from "../assets/Logo.webp";

const Navbar = () => {
  return (
    <nav className="mb-9 flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          className="mx-2 w-12 rounded-xl"
          width="42"
          height="42"
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-xl text-white md:text-2xl lg:text-3xl">
        <a
          className="hover:text-gray-500 font-bold"
          target="_blank"
          rel="noopener noreferrer"
          alt="Github"
          href="https://github.com/unlessDev"
        >
          Github
        </a>
        <a
          className="hover:text-blue-400 font-bold"
          target="_blank"
          rel="noopener noreferrer"
          alt="Linkedin"
          href="https://www.linkedin.com/in/unlessdev/"
        >
          Linkedin
        </a>
        <a
          className="hover:text-red-500 font-bold"
          target="_blank"
          rel="noopener noreferrer"
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
