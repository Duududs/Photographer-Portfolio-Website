import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };

const steps = [
  {
    number: "01",
    title: "Reunião Inicial",
    description:
      "Vamos nos conhecer. Conversamos sobre a história de vocês, o estilo que desejam e planejamos cada detalhe do ensaio.",
  },
  {
    number: "02",
    title: "O Ensaio",
    description:
      "No dia, minha abordagem é leve e natural. Sem poses forçadas — apenas vocês dois sendo vocês mesmos nos cenários mais bonitos.",
  },
  {
    number: "03",
    title: "A Entrega",
    description:
      "Em até 15 dias úteis, vocês recebem uma galeria online com todas as fotos editadas com carinho, prontas para eternizar.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="section-spacing px-6 md:px-10 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
          Experiência
        </h2>
        <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">
          Como funciona o processo
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: i * 0.15 }}
            className="text-center md:text-left"
          >
            <span className="font-serif text-6xl md:text-7xl text-muted-foreground/30 block mb-4">
              {step.number}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
