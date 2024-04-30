import Landing from "../../sections/Landing/Landing";
import About from "../../sections/About/About";
import Cards from "../../sections/Cards/Cards";
import Sponsor from "../../sections/Sponsor/Sponsor";
import CTA from "../../sections/CTA/CTA";
import Footer from "../../sections/Footer/Footer";
// import Launch from "../../sections/Launch/Launch";

const Tiles: React.FC<{ order?: "up" | "down" }> = ({ order = "up" }) => {
  if (order === "up") {
    return (
      <div>
        <div className="h-12 bg-[#111111]"></div>
        <div className="h-12 bg-neutral-950 brightness-150"></div>
        <div className="h-12 bg-neutral-900 brightness-90"></div>
        <div className="h-12 bg-[#1c1c1f]"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="h-12 bg-[#1c1c1f]"></div>
        <div className="h-12 bg-neutral-900 brightness-90"></div>
        <div className="h-12 bg-neutral-950 brightness-150"></div>
        <div className="h-12 bg-[#111111]"></div>
      </div>
    );
  }
};

const Space: React.FC<{ bg?: "transparent" | "filled" }> = ({
  bg = "transparent",
}) => {
  return (
    <div
      className={`h-24 ${bg === "transparent" ? "bg-transparent" : "bg-bg"}`}
    ></div>
  );
};

const IndexPage = () => {
  return (
    <div className="w-screen h-screen relative left-0 top-0 overflow-x-clip">
      <Landing />

      <div className="h-12 bg-neutral-950 brightness-150"></div>
      <div className="h-12 bg-neutral-900 brightness-90"></div>
      <div className="h-12 bg-[#1c1c1f]"></div>
      <Space bg="filled" />

      {/* <Launch /> */}
      <About />
      <Cards />

      <Tiles order="down" />
      <Space />
      <Space />

      <Sponsor />

      <Space />
      <Space />
      <Tiles />
      <Space bg="filled" />

      <CTA />
      <Footer />
    </div>
  );
};

export default IndexPage;
