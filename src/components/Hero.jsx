import profilepic from "../assets/Character-Focus.webp";

const Hero = () => {
  return (
    <div className="border-b text-white pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className="bg-gradient-to-r from-pink-600 via-slate-500 to-blue-600 bg-clip-text 
                                        text-transparent pb-12 text-6xl lg:mt-16 font-semibold lg:text-9xl"
            >
              unlessDev
            </h1>

            <span className="bg-gradient-to-r from-blue-500 via-slate-400 to-purple-600 bg-clip-text text-3xl text-transparent">
              Full Stack Developer
            </span>

            <p className="my-2 text-white max-w-xl py-8 font-medium tracking-wider">
              Con 2 años de experiencia mi enfoque es desarrollar soluciones
              innovadoras para el crecimiento empresarial y mejorar la
              experiencia de usuario. Además, poseo habilidades de liderazgo en
              equipos y proyectos, junto a un deseo constante de aprender y
              crecer profesionalmente. Mi compromiso con la excelencia y la
              mejora continua me permite aportar ideas frescas a cualquier
              proyecto.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={profilepic} alt="unlessDev" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
