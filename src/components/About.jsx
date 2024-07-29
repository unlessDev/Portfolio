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
                width="550" // Ajusta esto según el tamaño real de tu imagen
                height="367" // Ajusta esto según el tamaño real de tu imagen
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:flex lg:items-center">
            <p className="text-white text-center lg:text-left max-w-1xl mx-auto lg:mx-0">
              Soy un desarrollador Full-Stack con una pasión inquebrantable por
              transformar ideas innovadoras en aplicaciones web impactantes. Mi
              carrera está impulsada por un deseo insaciable de aprender y
              adaptarme a tecnologías avanzadas, destacando en JavaScript y Go,
              y dominando frameworks de vanguardia como ReactJS y Angular. Mi
              expertise en bases de datos SQL y NoSQL me permite diseñar
              soluciones robustas y escalables, ajustadas a las necesidades del
              mercado. Más allá del código, aplico los principios de Clean Code
              de Robert C. Martin, los fundamentos SOLID y patrones de diseño
              para asegurar calidad y mantenibilidad en cada proyecto. Me
              especializo en resolver problemas complejos con enfoques creativos
              y elegantes, y disfruto trabajando con diseño modular utilizando
              herramientas como Panda CSS. Fuera del trabajo, exploro las
              últimas tendencias tecnológicas y participo activamente en
              proyectos de código abierto, manteniéndome a la vanguardia del
              desarrollo. Mi compromiso con la excelencia y la mejora continua
              impulsa mi búsqueda constante de la perfección en cada desafío.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
