import { motion } from "framer-motion";
import Beams from "../../components/Beams/Beams";

const About = () => {
  const chunks = [
    <>
      In late 2024, we're bringing together{" "}
      <span className="font-bold">1000+</span> of the next generation's
      changemakers to the largest youth-led event on the planet.
    </>,
    <>
      From students building tech, doing high-level research, or significantly
      impacting their communities, EclipseExpo will showcase youth initiatives
      and inspire youth to pursue impactful projects beyond the classroom. From
      speakers to an exposition hall, cutting-edge robotics to the arts,
      EclipseExpo will reshape how youth make the world's next biggest
      decisions. We're a global event based in Waterloo, Canada's hotspot for
      innovation.
    </>,
    <>
      EclipseExpo will be a full day of collaboration, inspiration, and
      networking, celebrating the next generation of leaders and changemakers,
      starting with you.
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
          EclipseExpo is for{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            you
          </span>
          th
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
