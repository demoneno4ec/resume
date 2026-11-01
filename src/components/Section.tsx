import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, children }: SectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="scroll-mt-24 py-16 md:py-24"
  >
    <div className="mb-8 flex items-center gap-3">
      <span className="section-title">{eyebrow}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
    <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
    <div className="mt-8">{children}</div>
  </motion.section>
);

export default Section;
