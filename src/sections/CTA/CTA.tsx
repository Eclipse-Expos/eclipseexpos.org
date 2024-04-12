import { Button } from "eclipse-components";

const CTA = () => {
  return (
    <div className="bg-bg" id="message">
      <div className="typography">
        <h2>
          Stiamo{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            ASSUMENDO
          </span>
        </h2>
        <p className="mt-4">
          I giovani di oggi sono i leader di domani. Il domani arriverà più
          velocemente di quanto pensiamo; dobbiamo investire nei nostri giovani
          oggi.
          <br />
          <br />
          Unendoti al nostro team di pianificazione, aiuterai a offrire ai
          giovani la piattaforma per mostrare e far crescere le loro capacità di
          leadership. Unendo la prossima generazione, ci assicuriamo che il
          nostro impatto sia ottenuto in tutto il mondo dai giovani, su una
          scala più ampia che mai.
          <br />
          <br />
          Sei pronto/a?
        </p>
        <Button
          onClick={() => window.open("https://apply.eclipseexpos.org/")}
          className="mt-8"
        >
          Unisciti
        </Button>
      </div>
    </div>
  );
};

export default CTA;
