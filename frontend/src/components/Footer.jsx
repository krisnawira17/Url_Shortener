import Logo from "../images/logo-dark.svg";
import fb from "../images/icon-facebook.svg";
import twt from "../images/icon-twitter.svg";
import pin from "../images/icon-pinterest.svg";
import ig from "../images/icon-instagram.svg";

export default function Footer() {
  return (
    <div className="flex flex-row bg-Very-Dark-Violet w-full relative z-10 px-44 justify-between pb-40">
      <img src={Logo} alt="log" className="object-contain" />

      <div className="flex flex-row gap-[15rem]">
        <div className="flex flex-row pt-[5rem]">
          <div className="flex flex-col  gap-[0.5rem]">
            <p className="font-bold mb-6 text-white">Features</p>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Link shortening
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Branded Links
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Analytics
            </ul>
          </div>
        </div>

        <div className="flex flex-row pt-[5rem]">
          <div className="flex flex-col  gap-[0.5rem]">
            <p className="font-bold mb-6 text-white">Resources</p>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Blog
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Developer
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Support
            </ul>
          </div>
        </div>

        <div className="flex flex-row pt-[5rem]">
          <div className="flex flex-col  gap-[0.5rem]">
            <p className="font-bold mb-6 text-white">Company</p>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              About
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Our Team
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Careers
            </ul>
            <ul className="font-medium text-[1rem] text-grey hover:text-cyan">
              Contact
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-[2rem]">
          <img src={fb} alt="facebook logo" className="object-contain"></img>
          <img src={twt} alt="twitter logo" className="object-contain"></img>
          <img src={pin} alt="pinterest logo" className="object-contain"></img>
          <img src={ig} alt="instagram logo" className="object-contain"></img>
        </div>
      </div>
    </div>
  );
}
