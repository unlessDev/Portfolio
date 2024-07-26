import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-200 pb-8 lg:pb-16">
      <h2
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-10 lg:my-20 text-center text-4xl lg:text-5xl font-bold"
      >
        Proyectos
      </h2>
      <div className="container mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 lg:mb-20 flex flex-col lg:flex-row items-center lg:items-start"
          >
            <div className="w-full lg:w-5/12 mb-6 lg:mb-0 lg:pr-8">
              <div className="max-w-lg mx-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:pl-8">
              <h3 className="mb-4 text-2xl lg:text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-6 text-white text-base lg:text-lg">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
