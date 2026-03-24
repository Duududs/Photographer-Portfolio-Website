import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };

const portfolioItems = [
  { src: "/assets/portfolio-1.jpg", alt: "Casal na praia ao por do sol" },
  { src: "/assets/portfolio-2.jpg", alt: "Casal sob arvore no outono" },
  {
    src: "/assets/portfolio-3.jpg",
    alt: "Detalhe das maos entrelacadas",
    frameClassName: "h-[28rem] md:h-[32rem]",
    imgClassName: "h-full w-full object-cover",
  },
  { src: "/assets/portfolio-4.jpg", alt: "Casal dancando no campo" },
  { src: "/assets/portfolio-5.jpg", alt: "Casal em rua europeia" },
  { src: "/assets/portfolio-6.jpg", alt: "Momento intimo no sofa" },
  { src: "/assets/portfolio-7.jpg", alt: "Retrato de casal em nova sessao" },
  {
    src: "/assets/portfolio-8.jpg",
    alt: "Nova fotografia de casal ao ar livre",
  },
  { src: "/assets/portfolio-9.jpg", alt: "Novo momento registrado do casal" },
];

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="px-6 pb-24 pt-14 md:px-10 md:pb-32 md:pt-16"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-12 md:mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Portfólio
          </p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-serif text-4xl italic leading-none text-foreground md:text-6xl">
              Momentos únicos, registrados pela lente e apresentados em sua
              forma mais autêntica.
            </h2>
          </div>
        </motion.div>

        <div className="columns-1 gap-6 md:columns-2 md:gap-8 xl:columns-3">
          {portfolioItems.map((item, i) => (
            <motion.figure
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              className="mb-6 break-inside-avoid md:mb-8"
            >
              <div
                className={`overflow-hidden bg-stone-100 shadow-soft ${item.frameClassName || ""}`}
              >
                <img
                  src={item.src}
                  className={`block h-auto w-full ${item.imgClassName || ""}`}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
