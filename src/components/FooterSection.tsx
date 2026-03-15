const FooterSection = () => {
  return (
    <footer className="py-16 md:py-20 border-t border-border/50 text-center">
      <p className="font-serif italic text-2xl md:text-3xl mb-8 text-foreground">
        Ji-eun (지은)
      </p>
      <div className="flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-8">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Pinterest
        </a>
        <a href="#contact" className="hover:text-foreground transition-colors">
          Contato
        </a>
      </div>

      <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.15em]">
        © 2025 Ji-eun (지은) Photography. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default FooterSection;
