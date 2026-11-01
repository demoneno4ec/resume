import { motion } from "framer-motion";

export interface JobItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  stack?: string[];
}

const Job = ({ job, index }: { job: JobItem; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
    className="relative pl-8 pb-10 last:pb-0"
  >
    {/* Timeline */}
    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_0_5px_hsl(var(--primary)/0.4)]" />
    <span className="absolute left-[5px] top-5 bottom-0 w-px bg-border" />

    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 className="font-display text-lg md:text-xl font-semibold text-foreground">
        {job.title} <span className="text-primary">· {job.company}</span>
      </h3>
      <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
    </div>

    <ul className="mt-3 space-y-1.5 text-sm md:text-[15px] leading-relaxed text-foreground/85">
      {job.bullets.map((b, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
          <span>{b}</span>
        </li>
      ))}
    </ul>

    {job.stack && (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.stack.map((s) => (
          <span key={s} className="chip font-mono">{s}</span>
        ))}
      </div>
    )}
  </motion.article>
);

export default Job;
