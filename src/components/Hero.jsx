import profilepic from "../assets/Character.webp";

const Hero = () => {
  return (
    <div className="border-b text-white pb-4 lg:pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex flex-col items-center lg:items-start">
              <h1
                className="bg-gradient-to-r from-pink-600 via-slate-500 to-blue-600 bg-clip-text 
                text-transparent pb-4 lg:pb-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center lg:text-left"
              >
                unlessDev
              </h1>
              <span
                className="bg-gradient-to-r from-blue-500 via-slate-400 to-purple-600 bg-clip-text 
                text-2xl md:text-3xl text-transparent text-center lg:text-left"
              >
                Full Stack Developer
              </span>
              <p className="mt-4 lg:mt-8 text-white max-w-xl text-center lg:text-left font-medium tracking-wider">
                Con 2 años de experiencia mi enfoque es desarrollar soluciones
                innovadoras para el crecimiento empresarial y mejorar la
                experiencia de usuario. Además, poseo habilidades de liderazgo
                en equipos y proyectos, junto a un deseo constante de aprender y
                crecer profesionalmente. Mi compromiso con la excelencia y la
                mejora continua me permite aportar ideas frescas a cualquier
                proyecto.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              className="rounded-2xl w-full max-w-md lg:max-w-lg xl:max-w-xl"
              src={profilepic}
              alt="unlessDev"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
