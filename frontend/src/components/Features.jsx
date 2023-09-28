import brandRecognition from "../images/icon-brand-recognition.svg";
import Card from "./Cards";

export default function Features() {
  return (
    <>
      <div className="relative z-10 mt-[15rem] flex flex-row justify-center">
        <div className="text-center flex flex-col gap-6">
          <h2 className="text-5xl font-bold text-Very-Dark-Blue">
            Advanced Statistics
          </h2>
          <p
            className="text-Grayish-Violet text-md w-[30rem]
      "
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-[15rem] flex flex-row  gap-8 justify-center">
        <div className=" absolute h-[0.5rem] w-[70rem] overflow-hidden z-0 bg-cyan mx-4 mt-40"></div>

        <Card
          image={brandRecognition}
          title="Brand Recognition"
          desc="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
        />

        <div className="mt-6">
          {" "}
          <Card
            image={brandRecognition}
            title="Brand Recognition"
            desc="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
        </div>

        <div className="mt-12">
          {" "}
          <Card
            image={brandRecognition}
            title="Brand Recognition"
            desc="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          />
        </div>
      </div>
    </>
  );
}
