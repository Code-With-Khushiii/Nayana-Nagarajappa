import { useEffect, useState } from 'react';
import {
  Brain,
  ChevronDown,
  Cloud,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const experience = [
  {
    company: 'VibeSea',
    role: 'Software Engineer',
    location: 'USA',
    dates: 'Jan 2026 - Present',
    highlights: [
      'Built an AI-powered remote interview monitoring platform using LangChain and OpenAI GPT models, automating multimodal session analysis across text and visual signals and reducing manual review effort by 40%+.',
      'Improved LLM inference pipelines through prompt engineering and token optimization, increasing reliability while reducing production inference costs by 20%+.',
      'Evaluated and benchmarked Gemini, Claude, and GPT-4 across accuracy, latency, and cost, building evaluation frameworks to guide production model selection.',
      'Led development of production AI workflows for secure interview orchestration, integrating ML-driven decision pipelines, team management, and Stripe billing using Django and Next.js to improve scalability and operational efficiency.',
      'Partnered with product and engineering teams to deploy AI-driven monitoring workflows, improving platform reliability by 20%+ and enhancing end-user experience.',
    ],
  },
  {
    company: 'IBM',
    role: 'ML Engineer',
    location: 'India',
    dates: 'Aug 2020 - Jul 2024',
    highlights: [
      'Engineered and scaled enterprise AI/ML platform components for watsonx, supporting the end-to-end model lifecycle across hybrid cloud environments.',
      'Designed and deployed production-grade ML pipelines, reducing model deployment time by 30-50% and enabling continuous delivery of AI features.',
      'Built and maintained MLOps workflows, including CI/CD pipelines for model training, testing, and deployment, ensuring reliable and repeatable releases.',
      'Developed model monitoring and observability systems to track production performance, drift, and data quality.',
      'Implemented automated model validation and rollback mechanisms, improving system reliability and reducing production incidents.',
      'Contributed to LLM and generative AI initiatives, including prompt engineering, fine-tuning, and RAG architectures for enterprise use cases.',
      'Developed scalable APIs and microservices for high-availability, low-latency model serving.',
      'Deployed AI workloads across hybrid cloud infrastructure, optimizing resource utilization and cost efficiency.',
      'Integrated responsible AI and governance practices, including explainability, bias detection, and compliance controls.',
      'Collaborated cross-functionally to deliver production-ready AI solutions for enterprise-scale applications.',
    ],
  },
];

const projects = [
  {
    title: 'Premagic Replica',
    subtitle: 'AI-Based Event Photo Management Platform',
    stack:
      'Java, Spring Boot, React, AWS (S3, Lambda, Rekognition, RDS), Docker, Kubernetes, Terraform',
    points: [
      'Architected a cloud-native platform handling 2K-3K images per event using microservices on AWS with Terraform-managed infrastructure.',
      'Built event-driven pipelines with S3 and Lambda for scalable, asynchronous image processing.',
      'Integrated AWS Rekognition for automated face and object detection, improving search and album organization.',
      'Designed a secure multi-tenant backend with IAM, signed URLs, and SSL to enforce tenant isolation.',
      'Implemented end-to-end encryption and access control, strengthening platform security and reliability.',
    ],
  },
];

const skillCategories = [
  {
    icon: Brain,
    title: 'Machine Learning & AI',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'LLMs',
      'Generative AI',
      'Multimodal AI',
      'Prompt Engineering',
      'Fine-tuning',
      'RAG',
    ],
  },
  {
    icon: Workflow,
    title: 'LLM & AI Frameworks',
    skills: ['LangChain', 'OpenAI API', 'Hugging Face', 'FAISS', 'Pinecone'],
  },
  {
    icon: Cloud,
    title: 'MLOps & Infrastructure',
    skills: [
      'Docker',
      'Kubernetes',
      'CI/CD',
      'MLflow',
      'Airflow',
      'Model Monitoring',
      'Model Validation',
    ],
  },
  {
    icon: Database,
    title: 'Backend, Cloud & Data',
    skills: [
      'Django',
      'FastAPI',
      'REST APIs',
      'Microservices',
      'Distributed Systems',
      'Python',
      'SQL',
      'JavaScript/TypeScript',
      'AWS',
      'Azure',
      'Hybrid Cloud',
      'ETL',
      'PostgreSQL',
      'MongoDB',
    ],
  },
];

const education = [
  {
    school: 'California State University, Chico',
    degree: 'Master of Science in Computer Science',
    dates: 'Aug 2024 - May 2026',
  },
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (!element) {
          continue;
        }

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-slate">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-teal/15 bg-ivory/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-left font-display text-lg tracking-[0.2em] text-slate md:text-xl"
          >
            NAYANA NAGARAJAPPA
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-[0.2em] transition-colors ${
                  activeSection === item.id ? 'text-teal' : 'text-slate/70 hover:text-slate'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="text-slate md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-teal/15 bg-ivory px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm tracking-[0.15em] text-slate/80 transition-colors hover:text-teal"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(26,154,170,0.22),_transparent_32%),linear-gradient(135deg,_#f7f7f2_0%,_#edf7f7_45%,_#e4f2ef_100%)] pt-28"
      >
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(90deg,transparent,rgba(17,24,39,0.06),transparent)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-teal shadow-sm">
              <Sparkles size={14} />
              AI/ML Engineer | MLOps
            </div>
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-slate md:text-6xl">
              Building production AI systems that are reliable, scalable, and cost-aware.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate/75">
              Applied AI/ML Engineer with 4+ years of experience building and deploying
              production-grade machine learning and LLM systems. Specialized in RAG
              architectures, multimodal AI pipelines, and scalable MLOps infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-teal px-4 py-2 text-sm font-medium text-white shadow-sm">
                RAG Systems
              </span>
              <span className="rounded-full bg-coral px-4 py-2 text-sm font-medium text-white shadow-sm">
                Multimodal AI
              </span>
              <span className="rounded-full bg-slate px-4 py-2 text-sm font-medium text-white shadow-sm">
                MLOps Platforms
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-slate/80">
              <a href="tel:+15306307166" className="inline-flex items-center gap-2 hover:text-teal">
                <Phone size={16} />
                +1 (530) 630-7166
              </a>
              <a
                href="mailto:nnagarajappa027@gmail.com"
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <Mail size={16} />
                nnagarajappa027@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/nayana-nagaraj09/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-teal"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 text-slate/55">
                <Github size={16} />
                GitHub
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-teal/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-teal/15 bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.5)] backdrop-blur">
              <img
                src="images/image.png"
                alt="Nayana Nagarajappa"
                className="mx-auto h-64 w-64 rounded-[2rem] object-cover shadow-lg"
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-ivory p-4">
                  <div className="text-2xl font-display text-slate">4+ yrs</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-slate/55">
                    AI/ML Experience
                  </div>
                </div>
                <div className="rounded-2xl bg-ivory p-4">
                  <div className="text-2xl font-display text-slate">20%+</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-slate/55">
                    Inference Cost Reduction
                  </div>
                </div>
                <div className="rounded-2xl bg-ivory p-4">
                  <div className="text-2xl font-display text-slate">40%+</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-slate/55">
                    Review Effort Saved
                  </div>
                </div>
                <div className="rounded-2xl bg-ivory p-4">
                  <div className="text-2xl font-display text-slate">Hybrid</div>
                  <div className="mt-1 text-sm uppercase tracking-[0.2em] text-slate/55">
                    Cloud AI Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 text-center">
          <button
            onClick={() => scrollToSection('summary')}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-slate/60 transition hover:text-teal"
          >
            Explore Resume
            <ChevronDown size={16} />
          </button>
        </div>
      </section>

      <section id="summary" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[2rem] border border-teal/15 bg-white p-10 shadow-sm">
            <div className="mb-6 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-teal">
              <ShieldCheck size={16} />
              Summary
            </div>
            <p className="text-2xl leading-10 text-slate md:text-3xl">
              Proven track record of reducing inference costs, improving model
              reliability, and delivering real-time AI solutions in cloud and hybrid
              environments.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-teal">Experience</p>
            <h2 className="mt-4 font-display text-4xl text-slate md:text-5xl">
              Production AI and MLOps work across enterprise and startup environments
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-[2rem] border border-teal/15 bg-ivory p-8 shadow-sm"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-display text-3xl text-slate">{item.company}</h3>
                    <p className="mt-2 text-lg font-medium text-teal">{item.role}</p>
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] text-slate/55">
                    {item.location} | {item.dates}
                  </div>
                </div>
                <div className="mt-8 grid gap-4">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white bg-white px-5 py-4 text-slate/80"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-coral">Projects</p>
            <h2 className="mt-4 font-display text-4xl text-slate md:text-5xl">
              Hands-on systems built for AI-powered product experiences
            </h2>
          </div>

          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-8 rounded-[2rem] border border-teal/15 bg-white p-8 shadow-sm md:grid-cols-[0.95fr_1.05fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-coral">Featured Project</p>
                <h3 className="mt-3 font-display text-3xl text-slate">{project.title}</h3>
                <p className="mt-2 text-lg text-teal">{project.subtitle}</p>
                <p className="mt-6 leading-8 text-slate/75">{project.stack}</p>
              </div>
              <div className="space-y-4">
                {project.points.map((point) => (
                  <div key={point} className="rounded-2xl bg-ivory px-5 py-4 text-slate/80">
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-teal">Skills</p>
            <h2 className="mt-4 font-display text-4xl text-slate md:text-5xl">
              Core technologies across applied AI, LLMs, and platform engineering
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-[2rem] border border-teal/15 bg-ivory p-8 shadow-sm"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white">
                    <category.icon size={26} />
                  </div>
                  <h3 className="font-display text-2xl text-slate">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-teal/15 bg-white px-4 py-2 text-sm text-slate/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-coral">Education</p>
            <h2 className="mt-4 font-display text-4xl text-slate md:text-5xl">
              Academic foundation in computer science
            </h2>
          </div>

          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-[2rem] border border-teal/15 bg-white p-8 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-coral text-white">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-slate">{item.school}</h3>
                    <p className="mt-2 text-lg text-teal">{item.degree}</p>
                  </div>
                </div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate/55">{item.dates}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-mist">Contact</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Open to AI engineering, LLM systems, and MLOps opportunities
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <a
              href="tel:+15306307166"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white/85 transition hover:bg-white/10"
            >
              <Phone size={18} />
              +1 (530) 630-7166
            </a>
            <a
              href="mailto:nnagarajappa027@gmail.com"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white/85 transition hover:bg-white/10"
            >
              <Mail size={18} />
              nnagarajappa027@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/nayana-nagaraj09/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white/85 transition hover:bg-white/10"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white/55">
              <Github size={18} />
              GitHub
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate py-6 text-center text-sm tracking-[0.2em] text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          NAYANA NAGARAJAPPA | AI/ML ENGINEER | MLOPS
        </div>
      </footer>
    </div>
  );
}

export default App;
