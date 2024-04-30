import { motion } from "framer-motion";
import Beams from "../../components/Beams/Beams";
import { Button } from "eclipse-components";

/*
🌙 What piques your curiosity? Join us at our inaugural EclipseExpo
        launch, an event designed to connect young innovators aged 14-18 from
        across Kitchener-Waterloo! Whether you're a creator, thinker, or
        dreamer, this is your platform to showcase your unique projects—or learn
        from others! Not only will you expand your network, but you'll also dive
        deep into the opportunities our organization, Eclipse Expositions will
        offer in the near future. Don't miss your chance to be inspired, share
        your passion, and learn what it takes to turn your ideas into reality.
        */

const Luma = () => {
  const chunks = [
    <>
      🌙 What piques your curiosity? Join us at our inaugural EclipseExpo
      launch, an event designed to connect young innovators aged 14-18 from
      across Kitchener-Waterloo! Whether you're a creator, thinker, or dreamer,
      this is your platform to showcase your unique projects—or learn from
      others!
    </>,
    <>
      Not only will you expand your network, but you'll also dive deep into the
      opportunities our organization, Eclipse Expositions will offer in the near
      future. Don't miss your chance to be inspired, share your passion, and
      learn what it takes to turn your ideas into reality.
    </>,
    <Button className="p-auto">
      <a
        href="https://lu.ma/event/evt-QLCr4PocbBACrcA"
        className="luma-checkout--button p-2 py-4"
        data-luma-action="checkout"
        data-luma-event-id="evt-QLCr4PocbBACrcA"
      >
        Register for Launch
      </a>

      <script
        id="luma-checkout"
        src="https://embed.lu.ma/checkout-button.js"
      ></script>
    </Button>,
  ];

  return (
    <motion.div
      className="bg-[#1c1c1f] spaced relative border-y-[1px] border-y-neutral-700"
      id="luma"
    >
      <div className="typography spaced py-16 relative z-50">
        <motion.h2
          className="text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Eclipse Expos
          <span className="mx-2 font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Launch
          </span>
        </motion.h2>
        <p className="mt-4 flex flex-col gap-8 z-20">
          {chunks.map((chunk, i) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: "all" }}
                key={`luma-chunk-${i}`}
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

export default Luma;
