import Boost from "./components/Boost";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import Navi from "./components/Navi";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navi />
        <Hero />
      </div>
      <div className="absolute z-0 overflow-hidden h-[110rem] mt-[12rem] w-full bg-violetBg"></div>
      <div>
        <LinkShortener />
        <Features />
        <Boost />
      </div>
      <Footer />
    </>
  );
}

export default App;
