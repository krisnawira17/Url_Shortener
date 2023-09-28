import bgBoostDesk from "../images/bg-boost-desktop.svg";

export default function Boost() {
  const customBackground = {
    backgroundImage: `url(${bgBoostDesk})`,
  };

  return (
    <div
      className="bg-cover bg-no-repeat relative w-full h-[16rem] z-10 bg-violet mt-[15rem]"
      style={customBackground}
    >
      <div className="items-center flex flex-col p-[4rem]">
        <h1 className="text-[2.5rem] font-bold text-white">
          Boost your links today
        </h1>
        <button className="text-white hover:text-hover-white bg-cyan hover:bg-hover-cyan p-4 w-[12rem] rounded-3xl font-semibold mt-8">
          Get Started
        </button>
      </div>
    </div>
  );
}
