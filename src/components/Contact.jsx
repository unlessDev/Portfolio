const Contact = () => {
  return (
    <div className="pb-20 pt-8">
      <h1
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-8 text-center text-6xl font-bold"
      >
        Contáctate
      </h1>
      <div className="text-center text-white tracking-tighter">
        <p className="my-1 text-2xl">
          Argentina, Córdoba
          <br />
          Mina Clavero
        </p>
        <p className="my-4 text-2xl">+54 11 6 401 2064</p>
        <a href="mailto:unlessdev@gmail.com" className="border-b text-3xl">
          unlessdev@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
