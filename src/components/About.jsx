import aboutImg from "../assets/Character-Perfil.webp";

const About = () => {
  return (
    <div className="border-b font-semibold pb-4">
      <h1
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-10 text-center text-5xl font-bold"
      >
        Sobre Mí
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              width="420" // Ajusta esto según el tamaño real de tu imagen
              height="420" // Ajusta esto según el tamaño real de tu imagen
              alt="Sobre mí"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <p className="my-2 max-w-xl text-white py-6">
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
