import { motion } from "framer-motion";
import Beams from "../../components/Beams/Beams";

const About = () => {
  const chunks = [
    <>
      All'inizio del 2025, prevediamo di riunire la prossima generazione di
      changemaker italiani in uno dei più grandi eventi giovanili del paese.
    </>,
    <>
      Che si tratti di studenti che sviluppano tecnologia, fanno ricerche di
      alto livello o incidono in modo significativo sulle loro comunità,
      EclipseITALIA presenterà le iniziative giovanili e ispirerà i giovani a
      perseguire progetti di grande impatto oltre la classe. Dai relatori a una
      sala espositiva, dalla robotica all'avanguardia alle arti, EclipseITALIA
      ridisegnerà il modo in cui i giovani prendono le decisioni più importanti
      del mondo. Siamo un'organizzazione globale con sede originariamente a
      Waterloo, il centro nevralgico dell'innovazione in Canada.
    </>,
    <>
      EclipseITALIA sarà una giornata piena di collaborazione, ispirazione e
      networking, celebrando la prossima generazione di leader e artefici del
      cambiamento, a partire da te.
    </>,
  ];

  return (
    <motion.div
      className="bg-[#1c1c1f] spaced relative border-y-[1px] border-y-neutral-700"
      id="about"
    >
      <div className="typography spaced py-16 relative z-50">
        <motion.h2
          className="text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          EclipseITALIA è per la gioven
          <span className="font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            TU
          </span>
        </motion.h2>
        <p className="mt-4 flex flex-col gap-8 z-20">
          {chunks.map((chunk, i) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: "all" }}
                key={`about-chunk-${i}`}
              >
                {chunk}
              </motion.div>
            );
          })}
        </p>
      </div>
      <Beams />
    </motion.div>
  );
};

export default About;
