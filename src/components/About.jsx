import aboutImg from "../assets/Character-Perfil.webp";

const About = () => {
  return (
    <div className="border-b font-semibold pb-8 lg:pb-16">
      <h1
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-10 text-center text-4xl md:text-5xl font-bold"
      >
        Sobre Mí
      </h1>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex justify-center lg:justify-start">
              <img
                className="rounded-2xl w-full max-w-md lg:max-w-lg xl:max-w-xl"
                src={aboutImg}
                alt="Sobre mí"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:flex lg:items-center">
            <p className="text-white text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              Desarrollador dedicado y versátil, con pasión por crear
              aplicaciones Web eficientes y amigables para el usuario. Con 2
              años de experiencia profesional, he trabajado con diversas
              tecnologías, como: React, Next.js, Node.js, PostgreSQL y MongoDB.
              Mi camino en el desarrollo web comenzó con una profunda curiosidad
              por cómo funcionan las cosas, y ha evolucionado en una carrera
              donde continuamente me esfuerzo por aprender y adaptarme a nuevos
              desafíos. Me destaco en entornos colaborativos y disfruto resolver
              problemas complejos para entregar soluciones de la mejor calidad.
              Fuera del código, me gusta mantenerme activo, explorar nuevas
              tecnologías y contribuir a proyectos de código abierto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
