import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="pb-20">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.6 }}
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-8 text-center text-5xl font-bold"
      >
        Contáctame
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.6 }}
          className="my-1"
        >
          Argentina, Córdoba
          <br />
          Mina Clavero
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.6 }}
          className="my-4"
        >
          +54 11 6 401 2064
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.6 }}
          href="mailto:unlessdev@gmail.com"
          className="border-b"
        >
         unlessdev@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
