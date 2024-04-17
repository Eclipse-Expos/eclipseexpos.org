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
          Sponsorizza gli innovatori di{" "}
          <span className="font-bold bg-gradient-to-r from-yellow-300 to-green-600 bg-clip-text text-transparent">
            oggi
          </span>
        </h2>
        <h2
          className={`hidden md:block absolute top-0 left-0 text-center w-full transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          Sponsorizza i leader di{" "}
          <span className="font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
            domani
          </span>
        </h2>
      </div>
      <p className="mt-4 text-center">
        Aiuta gli changemaker della prossima generazione a trasformare le loro
        idee in realtà. Investire in EclipseITALIA significa investire in un
        futuro di creatività, iniziativa e cambiamento positivo.
      </p>
      <Button
        className="mt-8"
        onClick={() => {
          window.open("mailto:italia@eclipseexpos.org");
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setHover(true)}
        onMouseUp={() => setHover(false)}
      >
        Diventa uno sponsor
      </Button>
      <p className="mt-8 text-center">
        Metti il nome della tua azienda davanti ai futuri leader mondiali.
      </p>
    </div>
  );
};

export default Sponsor;
