import aboutImg from "../assets/anime2.jpeg"
import { FaChevronDown } from "react-icons/fa"

const About = () => {
  return (
    <div className="border-b border-neutral-900 font-semibold pb-4">
        <h1 className="my-20 text-blue-600 text-center text-4xl">
            Sobre Mí
        </h1>

        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="Sobre mí" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 maxw-xl py-6">
                    Soy un desarrollador full stack dedicado y versátil, con pasión por crear aplicaciones web eficientes y amigables para el usuario. 
                    Con 2 años de experiencia profesional, he trabajado con diversas tecnologías, como React, Next.js, Node.js, MySQL, PostgreSQL y MongoDB. 
                    Mi camino en el desarrollo web comenzó con una profunda curiosidad por cómo funcionan las cosas, y ha evolucionado en una carrera 
                    donde continuamente me esfuerzo por aprender y adaptarme a nuevos desafíos. Me destaco en entornos colaborativos y disfruto resolver 
                    problemas complejos para entregar soluciones de alta calidad. Fuera del código, me gusta mantenerme activo, explorar nuevas 
                    tecnologías y contribuir a proyectos de código abierto.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
};
export default About