import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.6 }}
            className="my-10 text-center text-4xl">
                Pongamonos En Contacto
        </motion.h1>

                <div className="text-center tracking-tighter">
                    <motion.p 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.6 }}
                        className="my-4">
                            Ubicación
                    </motion.p>

                    <motion.p 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.6 }}
                        className="my-4">
                            Teléfono
                    </motion.p>

                    <motion.a 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.6 }}
                        href="" 
                        className="border-b">
                            Mail
                    </motion.a>
                </div>
    </div>
  )
}

export default Contact