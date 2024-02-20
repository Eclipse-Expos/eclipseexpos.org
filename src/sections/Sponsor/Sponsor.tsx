import { Button } from "eclipse-components";

const Sponsor = () => {
  return (
    <div className="typography !max-w-[50rem]" id="sponsor">
      <h2 className="text-center">
        Sponsor the leaders of{" "}
        <span className="font-bold bg-gradient-to-r from-yellow-300 to-green-600 bg-clip-text text-transparent">
          tomorrow
        </span>
      </h2>
      <p className="mt-4 text-center">
        Empower the next generation’s changemakers to turn their ideas into
        reality. Investing in Eclipse2024 is investing in a future of
        creativity, initiative, and positive change.
      </p>
      <Button
        className="shadow-md hover:brightness-[1.15] transition-all border-white hover:border-white bg-gradient-to-r from-yellow-500 to-green-600 shadow-yellow-400 mx-auto mt-8"
        onClick={() => {
          window.open("mailto:sponsor@eclipseexpos.org");
        }}
      >
        Become a sponsor
      </Button>
      <p className="mt-8 text-center">
        Put your name in front of the world's future leaders.
      </p>
    </div>
  );
};

export default Sponsor;
