import { motion } from "framer-motion";

import profilepic from "../assets/anime.jpeg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-200 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-600 via-slate-500 to-blue-600 bg-clip-text 
                                        text-transparent pb-12 text-6xl lg:mt-16 font-semibold lg:text-9xl"
            >
              unlessDev
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-500 via-slate-400 to-purple-600 bg-clip-text text-3xl text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-8 font-medium tracking-wider"
            >
              Con 2 años de experiencia mi enfoque es desarrollar soluciones innovadoras para el
              crecimiento empresarial y mejorar la experiencia de usuario.
              Además, poseo habilidades de liderazgo en equipos y proyectos, 
              junto a un deseo constante de aprender y crecer profesionalmente. 
              Mi compromiso con la excelencia y la mejora continua me permite
              aportar ideas frescas a cualquier proyecto.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
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
