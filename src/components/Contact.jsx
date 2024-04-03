import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-600 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.6 }}
        className="my-10 text-center text-4xl"
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
          href=""
          className="border-b"
        >
          unlessdev@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
