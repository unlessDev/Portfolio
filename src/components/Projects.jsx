import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-200 pb-4">
      <h2
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-20 text-center text-5xl font-bold"
      >
        Proyectos
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/3">
              <img
                src={project.image}
                width="420" // Establecer ancho explícito
                height="420" // Establecer altura explícita
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <p className="mb-2 font-semibold text-white">{project.title}</p>
              <p className="mb-4 text-white">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
