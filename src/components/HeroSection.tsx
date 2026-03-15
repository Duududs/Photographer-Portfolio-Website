import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };
const heroImage = "/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex h-svh items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.2, 0, 0, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          className="h-full w-full object-cover brightness-[0.8]"
          alt="Casal ao por do sol em campo de flores"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground/30 via-transparent to-foreground/10" />
      <div className="relative z-10 text-center text-primary-foreground">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...transition, delay: 0.5 }}
          className="mb-4 font-serif text-5xl tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Capturing Intimacy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xs uppercase tracking-[0.3em] text-primary-foreground/80 sm:text-sm"
        >
          Fotografia de Casais & Casamentos
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">Scroll</span>
        <div className="h-8 w-px bg-primary-foreground/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
