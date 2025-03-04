import { INFO, SECTIONS } from "@config/strings";

function Portfolio() {
  return (
    <div className="flex flex-row max-w-[1280px] px-20 mx-auto gap-[20%]">
      <section className="pt-28 max-w-[350px] h-screen sticky top-0">
        <div className="flex flex-col select-none">
          <h1 className="text-white text-7xl">{INFO.name}</h1>
          <h3 className="text-white text-2xl">{INFO.title}</h3>
        </div>
        <div className="flex flex-col mt-20 gap-y-0 cursor-pointer select-none">
          {SECTIONS.map((section) => (
            <span
              key={section.title}
              className="text-custom-gray text-xl hover:text-white"
            >
              {section.title}
            </span>
          ))}
        </div>
      </section>
      <section className="flex-1 pt-28 h-[20000px] select-none">
        <div className="select-none gap-1 mb-40">
          <h2 className="text-white text-3xl">About</h2>
          <p className="text-custom-gray text-sm font-[Open_Sans] mt-4 text-left">{INFO.description}</p>
        </div>
        <div className="select-none gap-1 mb-40">
          <h2 className="text-white text-3xl">About</h2>
          <p className="text-custom-gray text-sm font-[Open_Sans] mt-4 text-left">{INFO.description}</p>
        </div>
        <div className="select-none gap-1 mb-40">
          <h2 className="text-white text-3xl">About</h2>
          <p className="text-custom-gray text-sm font-[Open_Sans] mt-4 text-left">{INFO.description}</p>
        </div>
        <div className="select-none gap-1 mb-40">
          <h2 className="text-white text-3xl">About</h2>
          <p className="text-custom-gray text-sm font-[Open_Sans] mt-4 text-left">{INFO.description}</p>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;