import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import Navi from "./components/Navi";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navi />
        <Hero />
      </div>
      <div className="">
        <LinkShortener />
      </div>
    </>
  );
}

export default App;
