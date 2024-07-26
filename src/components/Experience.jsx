import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-200 pb-4">
      <h2
        className="bg-gradient-to-r from-blue-600 via-slate-400 to-purple-600 bg-clip-text 
        text-transparent my-16 text-center text-5xl font-bold"
      >
        Experiencias
      </h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-white">{experience.year}</p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <p className="mb-2 text-white font-semibold">
                {experience.role}:{" "}
                <span className="text-xl font-bold text-purple-700">
                  {experience.company}
                </span>
              </p>
              <p className="mb-4 text-white">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-purple-500"
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

export default Experience;
