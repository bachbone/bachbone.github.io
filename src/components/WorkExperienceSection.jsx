import {  WORK_EXPERIENCE } from "@config/strings";

function TechStack({ techStack }) {
   return (
    <div className="flex mt-4 gap-2 flex-wrap">
      {techStack.map((tech, index) => (
        <div key={index} className="flex items-center border-custom-gray p-1 border-[1px] border-solid rounded-[10px] font-[Poppins]">
          <span className="text-custom-gray text-xs">{tech}</span>
        </div>
      ))}
    </div>
   );
}

function ProjectDuties({ duties }) {
  return (
    <div className="flex flex-col mt-2 font-[Poppins] gap-y-1">
      {duties.map((duty, index) => (
        <div key={index} className="flex justify-start align-text-top">
          <span className="text-custom-gray text-xs">● {duty}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectSection({ project }) {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col ml-[5%]">
        <span className="text-white text-xl">{project.role}</span>
        <span className="text-custom-gray text-md">{project.projectName}</span>
        <ProjectDuties duties={project.duties} />
        <TechStack techStack={project.techStack} />
      </div>
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <div className="select-none gap-1 mb-40">
      <h2 className="text-white text-4xl mb-16">Work Experience</h2>
      <div className="flex flex-col gap-y-10">
        {WORK_EXPERIENCE.map((experience, index) => (
          <div key={index} className="flex flex-col">
            <div className="mb-2">
              <h3 className="text-white text-3xl">{experience.company}</h3>
              <span className="text-custom-gray text-md text-start">{experience.duration}</span>
            </div>
            <div className="flex flex-col gap-y-4">
              {experience.projects.map((project, index) => (
                <ProjectSection key={index} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperienceSection;