import { motion } from "framer-motion";
import { Download, ExternalLink, Github, Mail } from "lucide-react";
import Section from "@/components/Section";
import Job, { JobItem } from "@/components/Job";
import avatar from "@/assets/maksim-pestov.jpg";

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Backend", items: ["Go", "PHP 8.x", "Laravel", "Symfony", "SQL", "JavaScript"] },
  { label: "Go-практика", items: ["GORM", "pgx", "Goroutines", "WaitGroup / Mutex", "golangci-lint", "Mattermost Plugin API"] },
  { label: "AI Engineering", items: ["AI-агенты", "AI-assisted SDLC", "Cursor", "Claude", "Gemini", "Kimi", "Qwen3.5-9B", "Генерация PHPUnit-тестов", "Test IT", "Prompt / context engineering"] },
  { label: "Архитектура", items: ["Transactional Outbox", "Микросервисы", "REST", "gRPC + Protobuf", "SOLID / DDD"] },
  { label: "Базы данных", items: ["PostgreSQL", "MySQL / MariaDB", "CockroachDB", "Redis", "ClickHouse", "Elasticsearch"] },
  { label: "Очереди / async", items: ["RabbitMQ", "Redis Pub/Sub", "Laravel Horizon", "Workers", "WebSocket"] },
  { label: "Platform & Observability", items: ["Docker", "Kubernetes", "GitLab CI", "Prometheus", "Grafana", "Alertmanager", "Loki"] },
  { label: "Качество кода", items: ["PHPUnit", "PHPStan", "SonarQube", "golint", "Postman / Newman", "Code review"] },
];

const jobs: JobItem[] = [
  {
    title: "Руководитель отдела web и мобильной разработки (Hands-on Tech Lead)",
    company: "12STOREEZ",
    period: "Авг 2026 — наст. время",
    bullets: [
      "Объединил web- и mobile-разработку в дирекции IT; руковожу 15 специалистами: backend, frontend/mobile, QA, BSA и L3/DevOps. Сформировал core-команду по ключевым направлениям.",
      "Лидирую AI-трансформацию backend-команды: агенты, правила и шаблоны для разработки и передачи задач в QA, включая генерацию артефактов для Test IT.",
      "В пилотном спринте с активным применением AI средний TTM снизился с 75,4 до 31,4 дня, Cycle Time — с 47,6 до 23,4 дня; продолжаю проверку устойчивости эффекта.",
      "Сохраняю hands-on участие: лично занимаюсь разработкой, архитектурой и техническим сопровождением production.",
    ],
    stack: ["Go", "PHP", "AI-агенты", "Test IT", "Technical Leadership"],
  },
  {
    title: "Руководитель отдела web-разработки (Tech Lead)",
    company: "12STOREEZ",
    period: "Окт 2023 — Июл 2026",
    bullets: [
      "Спроектировал архитектуру обменов сайта и 1С на Transactional Outbox, согласовал доработки на стороне 1С. Доля необеспеченных заказов в пиковые периоды снизилась примерно с 30% до 2%.",
      "Организовал ретроспективу обменов и управление надёжностью: SLI/SLO/SLA, дашборды и алерты для задержек доставки заказов, остатков и необеспеченных заказов.",
      "Разработал и внедрил AI-агента для генерации PHPUnit-тестов: прирост покрытия на 1 процентный пункт ускорился с 10 спринтов до 1 — в 10 раз.",
      "Спроектировал выделенный платёжный микросервис на Symfony и gRPC, затем организовал интеграцию Яндекс Сплита на его основе. Команда получила премию Яндекса за самую быструю интеграцию.",
      "Внедрил CI/CD со статическим анализом и тестами для legacy-кодовой базы; настроил Prometheus, Grafana, Alertmanager и Loki, участвовал в миграции монолита в Kubernetes.",
    ],
    stack: ["PHP", "Symfony", "Go", "Transactional Outbox", "RabbitMQ", "gRPC", "Prometheus", "Grafana"],
  },
  {
    title: "Архитектор микросервисной архитектуры",
    company: "12STOREEZ",
    period: "Мар 2023 — Сен 2023",
    bullets: [
      "Спроектировал кроссрегиональную архитектуру as-is → to-be и составил roadmap миграции.",
      "Разрабатывал микросервисы на PHP и Go; добавил инструментарий работы с БД на GORM и интегрировал golangci-lint в CI/CD.",
      "Внедрил PHPStan, PHPUnit и SonarQube; стандартизировал локальную среду разработки на docker-compose.",
    ],
    stack: ["PHP", "Go", "GORM", "Микросервисы", "GitLab CI"],
  },
  {
    title: "Team Lead PHP Backend",
    company: "AYAGROUP",
    period: "Май 2021 — Мар 2023",
    bullets: [
      "Лидировал команду backend и QA, выстраивал процессы разработки и релизов.",
      "Разрабатывал микросервисы на Laravel и Symfony, переводил функциональность из монолита и очереди с Horizon + Redis на RabbitMQ.",
      "Внедрил gRPC + Protobuf, PostgreSQL, Redis и Keycloak; оптимизировал схему БД и запросы.",
      "Обновил Laravel 7 → 8 и PHP 7.4 → 8.1; внедрил PHPStan, PHPUnit, SonarQube и Postman/Newman в CI/CD.",
    ],
    stack: ["Laravel", "Symfony", "PostgreSQL", "RabbitMQ", "gRPC", "Keycloak"],
  },
  {
    title: "Middle PHP Developer",
    company: "СОВКОМБАНК",
    period: "Дек 2020 — Май 2021",
    bullets: [
      "Разрабатывал микросервисы на Symfony и внутренние инструменты: linter, template-ms, пакеты и docker-compose. Интеграции с CockroachDB, RabbitMQ, Redis, S3 и Google LDAP.",
    ],
    stack: ["Symfony", "CockroachDB", "RabbitMQ", "S3", "Docker"],
  },
  {
    title: "Full-stack Developer",
    company: "АВТОДОРИЯ",
    period: "Мар 2020 — Дек 2020",
    bullets: [
      "Организовал миграцию с Yii2 на Laravel, разрабатывал модули на Vue.js и переносил legacy-код с jQuery.",
    ],
    stack: ["Yii2", "Laravel", "Vue.js"],
  },
  {
    title: "PHP Middle Developer",
    company: "CODEZAVOD",
    period: "Май 2019 — Мар 2020",
    bullets: [
      "Разработка на Laravel и Bitrix, автоматизация внутренних процессов, code review и настройка авто-деплоя.",
    ],
    stack: ["Laravel", "Bitrix", "Docker"],
  },
  {
    title: "PHP Developer",
    company: "WELLMEDIA · QSOFT",
    period: "Янв 2018 — Май 2019",
    bullets: [
      "Разрабатывал и поддерживал сайты и API для мобильных приложений, создавал собственные компоненты и импорт данных.",
    ],
    stack: ["PHP", "Bitrix", "MySQL"],
  },
];

const profileCards = [
  { k: "Инженерный результат", v: "Переработал обмены сайта и 1С: необеспеченные заказы в пиковые периоды — примерно с 30% до 2%." },
  { k: "Go Backend", v: "3 года в рабочих, open-source и pet-проектах: сервисы, плагины, GORM, pgx и конкурентная обработка." },
  { k: "AI & SDLC", v: "Создаю AI-агентов и встраиваю их в разработку, тестирование и подготовку QA-документации." },
  { k: "Архитектура", v: "Transactional Outbox, асинхронные интеграции, микросервисы, REST и gRPC." },
  { k: "Platform", v: "CI/CD, Kubernetes, observability, статический анализ и внутренние инструменты разработки." },
  { k: "Hands-on лидерство", v: "15 человек в прямом управлении; сохраняю личное участие в разработке, архитектуре и production." },
];

const projects = [
  {
    title: "AI Unit Test Writer",
    context: "12STOREEZ",
    description: "AI-агент анализирует diff PHP-кода, находит изменённую бизнес-логику, создаёт и обновляет PHPUnit-тесты и запускает проверки. Прирост покрытия на 1 процентный пункт ускорился в 10 раз.",
    stack: ["AI-агенты", "PHPUnit", "PHP", "Git diff"],
  },
  {
    title: "Profile Custom Fields",
    context: "Mattermost · production",
    description: "Разработал Go-плагин для настраиваемых полей профиля: REST API, разграничение прав, KV-хранилище, веб-интерфейс и тесты. Решение используется в корпоративном мессенджере.",
    stack: ["Go", "REST", "Mattermost Plugin API", "KV Store"],
  },
  {
    title: "Sber HTML Parser",
    context: "Pet project",
    description: "Go-парсер брокерских отчётов с параллельной обработкой файлов, ограничением конкурентности, PostgreSQL/pgx, retry-логикой, JSON-логами и тестами.",
    stack: ["Go", "Goroutines", "pgx", "PostgreSQL", "Docker"],
  },
  {
    title: "devex",
    context: "Open source",
    description: "Merged PR #11: настроил golangci-lint, исправил ошибки линтеров и тесты в Go-проекте.",
    stack: ["Go", "golangci-lint", "Static analysis"],
    url: "https://github.com/rusinikita/devex/pull/11",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border print:hidden">
        <div className="container flex items-center justify-between py-3">
          <a href="#top" className="font-mono text-sm text-primary">~/pestov.maksim</a>
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Профиль</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Проекты</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Навыки</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Опыт</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <a
            href="/Pestov_Maksim_Senior_Backend_Developer.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary-glow transition-colors"
            download
          >
            <Download className="h-3.5 w-3.5" /> PDF
          </a>
        </div>
      </header>

      <section id="top" className="container pt-20 md:pt-28 pb-12">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-primary"
            >
              Резюме · Hands-on Tech Lead / Senior Backend Engineer
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              Максим Пестов
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-3xl text-lg md:text-xl text-muted-foreground"
            >
              Backend-разработчик и технический лидер с <span className="text-foreground font-medium">8+ лет</span> опыта,
              из них <span className="text-gradient font-semibold">3 года использую Go</span>. Руковожу командой из 15 человек,
              проектирую надёжные интеграции и внедряю AI-инструменты в инженерные процессы.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Go", "PHP 8", "Transactional Outbox", "AI-агенты", "gRPC", "PostgreSQL", "RabbitMQ", "Kubernetes"].map((t) => (
                <span key={t} className="chip font-mono text-[11px]">{t}</span>
              ))}
            </motion.div>

            <p className="hidden print:block mt-3 text-sm text-muted-foreground">
              pestovmv@yandex.ru · github.com/demoneno4ec/resume
            </p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-3 print:hidden"
            >
              <a
                href="/Pestov_Maksim_Senior_Backend_Developer.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors shadow-soft"
              >
                <Download className="h-4 w-4" /> Скачать PDF
              </a>
              <a
                href="https://github.com/demoneno4ec/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative justify-self-center md:justify-self-end print:hidden"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/40 to-primary-glow/20 blur-2xl" />
            <img
              src={avatar}
              alt="Максим Пестов — Hands-on Tech Lead / Senior Backend Engineer"
              loading="eager"
              className="relative h-44 w-44 md:h-56 md:w-56 rounded-full object-cover border-2 border-primary/40 shadow-soft"
            />
          </motion.div>
        </div>
      </section>

      <div className="container">
        <Section id="about" eyebrow="01 / Профиль" title="Инженерные результаты и лидерство">
          <div className="grid md:grid-cols-3 gap-4">
            {profileCards.map((c) => (
              <motion.div
                key={c.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-xl border border-border bg-card/60 p-5 hover:border-primary/40 transition-colors"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">{c.k}</div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/85">{c.v}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="02 / Проекты" title="Go, AI и платформенная разработка">
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-border bg-card/60 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{project.context}</div>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} на GitHub`}
                      className="text-muted-foreground hover:text-primary transition-colors print:hidden"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span key={item} className="chip font-mono text-[11px]">{item}</span>
                  ))}
                </div>
                {project.url && (
                  <p className="hidden print:block mt-2 text-xs text-muted-foreground">{project.url}</p>
                )}
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="03 / Стек" title="Технологии и практики">
          <div className="grid md:grid-cols-2 gap-4">
            {skillGroups.map((g) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-border bg-card/60 p-5"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mb-3">
                  {g.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span key={i} className="chip font-mono text-[11px]">{i}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="04 / Опыт" title="Карьерный путь">
          <div>
            {jobs.map((j, i) => (
              <Job key={j.company + j.period} job={j} index={i} />
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="05 / Образование" title="Учёба и развитие">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="font-display text-lg font-semibold">КНИТУ-КАИ им. А.Н. Туполева</div>
              <div className="text-sm text-muted-foreground mt-1">Высшее, инженер-менеджер · 2008 — 2014</div>
              <p className="mt-3 text-sm text-foreground/85">
                Технический английский · Японский N5 · Постоянное самообразование
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Курс</div>
              <div className="font-display text-lg font-semibold mt-1">Slurm — «Мониторинг в Grafana»</div>
              <p className="mt-3 text-sm text-foreground/85">
                Prometheus, Grafana, Alertmanager, Loki — дашборды, алерты и LogQL-запросы.
              </p>
            </div>
          </div>
        </Section>

        <Section id="talks" eyebrow="06 / Спикерство" title="Внутренние митапы 12STOREEZ">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">2025</div>
              <p className="mt-3 text-sm text-foreground/85">Доклад «PHPStan — инструкции к применению», организация внутреннего митапа.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">2024</div>
              <p className="mt-3 text-sm text-foreground/85">Доклад «Postman — gitflow и автоматизация», организация внутреннего митапа.</p>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="07 / Связь" title="Готов обсудить вакансию">
          <div className="flex flex-wrap gap-3 print:hidden">
            <a
              href="https://github.com/demoneno4ec/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4 text-primary" /> github.com/demoneno4ec
            </a>
            <a
              href="/Pestov_Maksim_Senior_Backend_Developer.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-glow transition-colors shadow-soft"
            >
              <Download className="h-4 w-4" /> Резюме PDF
            </a>
            <a
              href="mailto:pestovmv@yandex.ru"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" /> pestovmv@yandex.ru
            </a>
          </div>
        </Section>

        <footer className="border-t border-border py-8 text-xs text-muted-foreground print:hidden">
          © {new Date().getFullYear()} Максим Пестов · Hands-on Tech Lead / Senior Backend Engineer
        </footer>
      </div>
    </main>
  );
};

export default Index;
