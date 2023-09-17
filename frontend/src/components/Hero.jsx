import Working from "../images/illustration-working.svg";

export default function Hero() {
  return (
    <div className="flex flex-row mt-56 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-Very-Dark-Blue font-bold text-7xl ">
          More than just shorter links
        </h1>
        <p className="text-xl font-medium text-Grayish-Violet leading-9 w-[550px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white font-bold bg-cyan hover:opacity-60 py-4 w-48 rounded-full mt-5">
          Get Started
        </button>
      </div>
      <img
        src={Working}
        alt="Working illustration"
        className="object-contain h-[500px]"
      />
    </div>
  );
}
