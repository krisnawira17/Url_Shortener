import { useState } from "react";
import bgShortenDesk from "../images/bg-shorten-desktop.svg";

export default function LinkShortener() {
  const [originalLink, setOriginalLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const customBackground = {
    backgroundImage: `url(${bgShortenDesk})`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.shrtco.de/v2/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: originalLink }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedLink(data.result.full_short_link);
      } else {
        console.error("Error shortening link");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat mx-auto mt-12 w-[1110px] rounded-lg bg-violet"
      style={customBackground}
    >
      <form
        className="p-8 flex flex-row gap-8 justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="resize-none w-[780px] h-[64px] p-4 pt-5 text-md rounded-xl"
          placeholder="Shorten link here..."
          value={originalLink}
          onChange={(e) => setOriginalLink(e.target.value)}
        />
        <button
          type="submit"
          className="bg-cyan text-white font-semibold p2 rounded-md w-44"
        >
          Shorten it!
        </button>
      </form>
      {shortenedLink && (
        <div className="text-white text-center mt-4">
          Shortened Link:{" "}
          <a href={shortenedLink} target="_blank" rel="noopener noreferrer">
            {shortenedLink}
          </a>
        </div>
      )}
    </div>
  );
}
