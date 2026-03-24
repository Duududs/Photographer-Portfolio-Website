import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      package: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors";
  const mutedFieldClasses = "text-muted-foreground/50";

  return (
    <section
      id="contact"
      className="px-6 pb-12 pt-24 md:px-10 md:pb-16 md:pt-32"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl text-foreground md:text-5xl">
            Agende seu ensaio
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Conte-me sobre a história de vocês
          </p>
        </motion.div>

        <motion.form
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Nome completo"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
            <input
              type="date"
              name="date"
              placeholder="Data desejada"
              value={formData.date}
              onChange={handleChange}
              className={`${inputClasses} ${!formData.date ? mutedFieldClasses : ""}`}
            />
          </div>

          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className={`${inputClasses} appearance-none cursor-pointer ${!formData.package ? mutedFieldClasses : ""}`}
          >
            <option value="">Selecione um pacote (opcional)</option>
            <option value="essencial">
              Ensaio Essencial - A partir de R$450
            </option>
            <option value="classico">
              Ensaio Classico - A partir de R$750
            </option>
            <option value="ensaio-completo">
              Ensaio Completo - A partir de R$1.200
            </option>
            <option value="civil">Casamento Civil - A partir de R$1.200</option>
            <option value="celebracao">
              Casamento Celebracao - A partir de R$2.500
            </option>
            <option value="wedding-day">
              Casamento Wedding Day - A partir de R$4.800
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Conte um pouco sobre vocês e o ensaio dos sonhos..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`${inputClasses} resize-none`}
          />

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-primary px-12 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-80"
            >
              Enviar Mensagem
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
