import { INFO, SECTIONS, WORK_EXPERIENCE } from "@config/strings";
import WorkExperienceSection from "@components/WorkExperienceSection";

function Portfolio() {
  return (
    <div className="flex flex-row max-w-[1280px] px-20 mx-auto gap-[20%]">
      <section className="pt-28 max-w-[350px] h-screen sticky top-0">
        <div className="flex flex-col select-none">
          <h1 className="text-white text-7xl">{INFO.name}</h1>
          <h3 className="text-white text-2xl">{INFO.title}</h3>
          <p className="text-custom-gray text-sm mt-5 font-[Poppins] text-left">{INFO.description}</p>
        </div>
        <div className="flex flex-col mt-16 gap-y-0 cursor-pointer select-none">
          {SECTIONS.map((section) => (
            <span
              key={section.title}
              className="text-custom-gray text-xl hover:text-white"
            >
              {section.title}
            </span>
          ))}
        </div>
        <div className="absolute flex bottom-20 gap-x-4 cursor-pointer select-none">
          <div>
            <span className="text-custom-gray hover:text-white">EMAIL</span>
          </div>
          <div>
            <span className="text-custom-gray hover:text-white">LINKEDIN</span>
          </div>
        </div>
      </section>
      <section className="flex-1 pt-28 select-none">
        <WorkExperienceSection />
      </section>
    </div>
  );
}

export default Portfolio;