import { useState } from "react";
import bgShortenDesk from "../images/bg-shorten-desktop.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function LinkShortener() {
  const [originalLink, setOriginalLink] = useState("");
  const [links, setLinks] = useState([]);
  const [buttonEmpty, setButtonEmpty] = useState(false);
  const customBackground = {
    backgroundImage: `url(${bgShortenDesk})`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalLink) {
      setButtonEmpty(true);
    } else {
      const shortenLink = async () => {
        const res = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${originalLink}`
        );
        const data = await res.json();

        console.log(data.result);
        const newLink = {
          original: originalLink,
          shortened: data.result.short_link,
        };

        setLinks([...links, newLink]);
        setOriginalLink("");
      };
      shortenLink();
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-no-repeat mx-auto mt-28 w-[110rem] h-[9rem] rounded-lg bg-violet z-10 relative"
        style={customBackground}
      >
        <form
          className="p-8 flex flex-row gap-8 justify-center"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              className={`resize-none w-[90rem] h-[64px] p-4 pt-5 text-md rounded-xl ${
                buttonEmpty ? "border-4 border-red" : "border-none"
              }`}
              placeholder="Shorten link here..."
              onChange={(e) => setOriginalLink(e.target.value)}
              value={originalLink}
            />
            {buttonEmpty ? (
              <div className="text-red font mt-2 font-medium italic text-sm">
                Please add a link
              </div>
            ) : (
              ""
            )}
          </div>

          <button
            type="submit"
            className="bg-cyan text-white font-semibold p2 rounded-md w-44 h-16 hover:bg-hover-cyan hover:text-hover-white"
          >
            Shorten it!
          </button>
        </form>
      </div>

      <div className="mx-auto justify-center w-[110rem] mt-8 flex flex-col gap-6 z-10 relative">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-row items-center justify-between bg-white p-4 rounded-md"
          >
            <a className="ml-6 font-medium text-lg">{link.original}</a>
            <div className="flex flex-row gap-6 items-center">
              <a className="text-cyan text-lg">{link.shortened}</a>
              <CopyToClipboard text={link.shortened}>
                <button className="bg-cyan hover:bg-hover-cyan hover:text-hover-white text-white font-semibold p2 rounded-md w-32 h-12">
                  Copy
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
