/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className="flex flex-col gap-6 relative z-10">
      <div className="bg-white w-[22rem] p-8 rounded-md mx-auto">
        <div className="bg-violet p-4 w-[6rem] h-[6rem] rounded-full relative -mt-20 mb-[2rem] overflow-hidden">
          <img
            src={props.image}
            alt="brand recognition"
            className="object-fill mb-8 h-[3rem] mx-auto mt-2"
          />
        </div>

        <h3 className="font-bold text-lg mb-4">{props.title}</h3>
        <p className="text-Grayish-Violet text-[15px]">{props.desc}</p>
      </div>
    </div>
  );
}
