import Logo from "../images/logo.svg";

export default function Navi() {
  return (
    <nav className="mt-12 flex flex-row justify-between text-Grayish-Violet">
      <div className="flex flex-row gap-20 items-center">
        <img src={Logo} alt="Logo" className="object-contain" />
        <ul className="flex flex-row gap-9 cursor-pointer font-bold text-base">
          <li className="hover:text-Very-Dark-Blue">Features</li>
          <li className="hover:text-Very-Dark-Blue">Pricing</li>
          <li className="hover:text-Very-Dark-Blue">Resources</li>
        </ul>
      </div>

      <div className="flex flex-row gap-10 font-bold">
        <button className="hover:text-Very-Dark-Blue">Log in</button>
        <button className="text-white bg-cyan hover:opacity-60 px-6 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
