import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };

const packageGroups = [
  {
    title: "Ensaios",
    packages: [
      {
        name: "Essencial",
        price: "A partir de R$450",
        features: [
          "2 horas de ensaio",
          "15 fotos editadas",
          "Galeria online privada",
        ],
      },
      {
        name: "Clássico",
        price: "A partir de R$750",
        features: [
          "2 horas de cobertura",
          "40 fotos editadas",
          "Galeria online privada",
          "2 locações",
        ],
        featured: true,
      },
      {
        name: "Ensaio Completo",
        price: "A partir de R$1.200",
        features: [
          "3 horas de ensaio",
          "80+ fotos editadas",
          "Galeria online privada",
          "3 locações",
          "Vídeo highlights",
        ],
      },
    ],
  },
  {
    title: "Casamentos",
    packages: [
      {
        name: "Civil",
        price: "A partir de R$1.200",
        features: [
          "3 horas de cobertura",
          "Cerimônia civil ou mini wedding",
          "Galeria online privada",
          "Preview em até 72 horas",
        ],
      },
      {
        name: "Celebração",
        price: "A partir de R$2.500",
        features: [
          "6 horas de cobertura",
          "Making of + cerimônia + recepção",
          "150+ fotos editadas",
          "Galeria online privada",
        ],
        featured: true,
      },
      {
        name: "Wedding Day",
        price: "A partir de R$4.800",
        features: [
          "8 horas de cobertura",
          "Cobertura completa do casamento",
          "Ensaio pre wedding",
          "Vídeo highlights",
          "Álbum digital",
        ],
      },
    ],
  },
];

const PackagesSection = () => {
  return (
    <section
      id="packages"
      className="section-spacing bg-section-muted px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16 text-center md:mb-20"
        >
          <h2 className="mb-4 font-serif text-4xl text-foreground md:text-5xl">
            Investimento
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Ensaios e casamentos organizados separadamente
          </p>
        </motion.div>

        <div className="space-y-20">
          {packageGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: groupIndex * 0.1 }}
            >
              <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                    {group.title}
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3 md:gap-10">
                {group.packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...transition, delay: index * 0.12 }}
                    className={`flex flex-col items-center bg-card p-8 text-center shadow-card md:p-10 ${
                      pkg.featured
                        ? "scale-[1.02] ring-1 ring-foreground/10"
                        : ""
                    }`}
                  >
                    <div className="mb-8 flex min-h-[108px] w-full flex-col items-center justify-start">
                      <div className="mb-3 h-4">
                        {pkg.featured && (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                            Mais procurado
                          </span>
                        )}
                      </div>
                      <h4 className="mb-2 font-serif text-2xl text-foreground md:text-3xl">
                        {pkg.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {pkg.price}
                      </p>
                    </div>
                    <ul className="mb-10 w-full space-y-3 text-sm text-muted-foreground">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="border-b border-border/50 py-2 last:border-0"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-auto flex w-full items-center justify-center bg-primary py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80"
                    >
                      Solicitar orçamento
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
