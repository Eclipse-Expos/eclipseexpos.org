import { Button } from "eclipse-components";
import { useState } from "react";

const Sponsor = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`typography !max-w-[50rem] flex flex-col items-center`}
      id="sponsor"
    >
      <div className="relative top-0 left-0 w-full mb-4 md:mb-16">
        <h2
          className={`relative md:absolute top-0 left-0 text-center w-full transition-opacity duration-300 ${
            hover ? "md:opacity-0" : "md:opacity-100"
          }`}
        >
          Sponsor the innovators of{" "}
          <span className="font-bold bg-gradient-to-r from-[#22D3EE] to-[#6EE7B7] bg-clip-text text-transparent">
            today
          </span>
        </h2>
        <h2
          className={`hidden md:block absolute top-0 left-0 text-center w-full transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          Sponsor the leaders of{" "}
          <span className="font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            tomorrow
          </span>
        </h2>
      </div>
      <p className="mt-4 text-center">
        Empower the next generation's changemakers to turn their{" "}
        <strong>ideas into reality</strong>. Investing in EclipseExpo is
        investing in a future of creativity, initiative, and positive change.
      </p>
      <Button
        className="mt-8"
        onClick={() => {
          window.open("mailto:sponsor@eclipseexpos.org");
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setHover(true)}
        onMouseUp={() => setHover(false)}
      >
        Become a sponsor
      </Button>
      <p className="mt-8 text-center">
        Put your company's name in front of the world's future leaders.
      </p>
    </div>
  );
};

export default Sponsor;
