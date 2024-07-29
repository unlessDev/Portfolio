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
                Me dedico a crear soluciones tecnológicas innovadoras que
                mejoran la experiencia del usuario y apoyan el crecimiento
                empresarial. Mi enfoque se basa en aplicar los principios SOLID
                y respetar patrones de diseño, buscando siempre eficiencia,
                escalabilidad y facilidad de mantenimiento. Con un entusiasmo
                por aprender y mejorar, me esfuerzo por integrar las mejores
                prácticas de diseño en cada proyecto. Mi objetivo es contribuir
                positivamente al desarrollo de software, manteniéndome al día
                con las últimas tendencias y buscando siempre nuevas
                oportunidades para crecer y aportar valor.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              className="rounded-2xl w-full max-w-md lg:max-w-lg xl:max-w-xl"
              src={profilepic}
              width="550" // Ajusta esto según el tamaño real de tu imagen
              height="367" // Ajusta esto según el tamaño real de tu imagen
              alt="unlessDev"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
