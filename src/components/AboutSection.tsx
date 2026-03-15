import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };
const photographerPortrait = "/assets/photographer-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-section-muted">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden shadow-soft">
            <img
              src={photographerPortrait}
              className="h-full w-full object-cover"
              alt="Fotografa"
              loading="lazy"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 w-44 bg-card p-5 shadow-card md:-right-8 md:w-52"
          >
            <p className="font-serif text-base italic leading-relaxed tracking-[0.15em] text-muted-foreground">
              "A arte da fotografia e guardar o tempo em uma imagem."
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Sobre mim</p>
          <h2 className="mb-8 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Cada foto carrega um momento unico.
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Com mais de uma decada registrando historias de amor ao redor do mundo, desenvolvi um
            olhar atento e sensivel para os momentos que realmente importam. Minha fotografia busca
            capturar conexoes genuinas, sem forcar poses ou interferir no que acontece
            naturalmente.
          </p>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Cada ensaio e unico, porque cada casal tem sua propria historia. Meu objetivo e criar
            um ambiente leve e confortavel, onde voces possam simplesmente ser quem sao, enquanto a
            camera registra com sinceridade os momentos que tornam esse dia especial.
          </p>
          <a
            href="#contact"
            className="inline-block border-b border-foreground pb-1 text-sm uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-50"
          >
            Vamos conversar?
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
