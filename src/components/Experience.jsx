import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-200 pb-8 lg:pb-16">
      <h2
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-8 lg:my-16 text-center text-4xl lg:text-5xl font-bold"
      >
        Experiencias
      </h2>

      <div className="container mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 lg:mb-12 flex flex-col lg:flex-row lg:items-start lg:justify-center"
          >
            <div className="w-full lg:w-1/4 mb-2 lg:mb-0">
              <p className="text-sm text-white font-medium">
                {experience.year}
              </p>
            </div>

            <div className="w-full lg:w-3/4 max-w-2xl">
              <p className="mb-2 text-white font-semibold">
                {experience.role}:{" "}
                <span className="text-lg lg:text-xl font-bold text-purple-700">
                  {experience.company}
                </span>
              </p>
              <p className="mb-4 text-white text-sm lg:text-base">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs lg:text-sm font-semibold text-purple-500"
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

export default Experience;
