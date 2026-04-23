import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Cloud,
  Code,
  ExternalLink,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Server,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary =
    'Applied AI/ML Engineer with 4+ years of experience building and deploying production-grade machine learning and LLM systems. Specialized in RAG architectures, multimodal AI pipelines, and scalable MLOps infrastructure. Proven track record of reducing inference costs, improving model reliability, and delivering real-time AI solutions in cloud and hybrid environments.';

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
      subtitle: 'Java, Spring Boot, React, AWS, Docker, Kubernetes, Terraform',
      category: 'AI & Cloud Platform',
      introduction:
        'Built an AI-based event photo management platform with a cloud-native architecture designed for secure, scalable image ingestion, processing, and search.',
      problem:
        'Event photo platforms must process thousands of images efficiently while maintaining secure tenant isolation, strong access controls, and fast discovery experiences.',
      objective:
        'Create a scalable event photo management system with asynchronous AI-powered processing, secure multi-tenant access, and reliable cloud deployment.',
      methodology: [
        'Architected a cloud-native platform handling 2K-3K images per event using microservices on AWS with Terraform-managed infrastructure.',
        'Built event-driven pipelines with S3 and Lambda for scalable, asynchronous image processing.',
        'Integrated AWS Rekognition for automated face and object detection, improving search and album organization.',
        'Designed a secure multi-tenant backend with IAM, signed URLs, and SSL to ensure data isolation.',
        'Implemented end-to-end encryption and access control, strengthening platform security and reliability.',
      ],
      results: [
        'Enabled scalable processing for 2K-3K images per event.',
        'Improved searchability and album organization through AI-based tagging and detection.',
        'Delivered strong tenant isolation and secure access workflows.',
        'Strengthened overall platform reliability with encryption and controlled access.',
      ],
      conclusion:
        'The project demonstrates end-to-end ownership across backend systems, AI integration, cloud infrastructure, and security for real-world event media workflows.',
      link: '',
    },
  ];

  const skillCategories = [
    {
      icon: Code,
      title: 'Machine Learning & AI',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LLMs', 'Generative AI', 'Multimodal AI', 'Prompt Engineering', 'Fine-tuning', 'RAG'],
    },
    {
      icon: Rocket,
      title: 'LLM & AI Frameworks',
      skills: ['LangChain', 'OpenAI API', 'Hugging Face', 'Vector Databases (FAISS, Pinecone)'],
    },
    {
      icon: TrendingUp,
      title: 'MLOps & Infrastructure',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'MLflow', 'Airflow', 'Model Monitoring', 'Model Validation'],
    },
    {
      icon: Cloud,
      title: 'Backend & Systems',
      skills: ['Django', 'FastAPI', 'REST APIs', 'Microservices', 'Distributed Systems'],
    },
    {
      icon: Users,
      title: 'Languages & Cloud',
      skills: ['Python', 'SQL', 'JavaScript/TypeScript', 'AWS', 'Azure', 'Hybrid Cloud', 'Data Pipelines', 'ETL'],
    },
    {
      icon: Server,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB'],
    },
  ];

  const education = [
    {
      school: 'California State University, Chico',
      degree: 'Master of Science in Computer Science',
      location: 'California, USA',
      dates: 'Aug 2024 - May 2026',
      details: 'Graduate studies focused on computer science foundations and advanced software systems.',
    },
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];
  const certifications: Array<{ title: string; platform: string; description: string; link: string }> = [];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = [
        'hero',
        'summary',
        'experience',
        'projects',
        'skills',
        'education',
        ...(papers.length > 0 ? ['papers'] : []),
        ...(certifications.length > 0 ? ['certifications'] : []),
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [papers.length, certifications.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certificate' }] : []),
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              NAYANA NAGARAJAPPA
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Nayana Nagarajappa"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              NAYANA NAGARAJAPPA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              AI/ML Engineer | MLOps
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'EXPERIENCE', value: '4+ YRS', detail: 'Production AI Systems' },
              { label: 'INFERENCE COST REDUCTION', value: '20%+', detail: 'Prompt Optimization' },
              { label: 'MANUAL REVIEW REDUCTION', value: '40%+', detail: 'Multimodal Workflows' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Applied AI engineering experience across LLM systems, multimodal workflows, MLOps infrastructure, model evaluation, and production deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Code,
                title: 'Applied AI Systems',
                detail: 'Built production-grade machine learning and LLM systems with a focus on practical deployment, reliability, and business impact.',
              },
              {
                icon: Rocket,
                title: 'LLM & RAG',
                detail: 'Worked across RAG architectures, multimodal pipelines, prompt engineering, model benchmarking, and evaluation workflows.',
              },
              {
                icon: Lightbulb,
                title: 'MLOps Delivery',
                detail: 'Improved inference efficiency, strengthened observability, and delivered scalable AI solutions in cloud and hybrid environments.',
              },
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Experience building AI workflows and ML platforms across startup and enterprise environments.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} | {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Selected work across AI-powered product systems, cloud infrastructure, and applied machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in implementation details or architecture notes?
              <button onClick={() => scrollToSection('contact')} className="text-black ml-1 font-regular italic">
                Reach out for more project information.
              </button>
            </p>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button onClick={() => setSelectedProject(null)} className="text-brown hover:text-black transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>

              {projects[selectedProject].link && (
                <div>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">LINK</h3>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Applied AI, LLM systems, infrastructure, backend engineering, and cloud technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} | {edu.dates}
                  </div>
                </div>
                <p className="text-brown leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {papers.length > 0 && (
        <section id="papers" className="py-24 bg-cream">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display text-black mb-6 tracking-wide">PAPERS PUBLISHED</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
              <p className="text-lg text-brown max-w-2xl mx-auto font-light">
                Research and publications in AI, ML systems, and applied software engineering.
              </p>
            </div>
            <div className="space-y-8">
              {papers.map((paper, index) => (
                <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                  <p className="text-brown font-medium mb-2">{paper.publication} | {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {certifications.length > 0 && (
        <section id="certifications" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
              <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            </div>
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                  <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                  <p className="text-brown font-medium">{cert.platform}</p>
                  <p className="text-brown leading-relaxed font-light">{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Open to AI engineering, LLM systems, and MLOps-focused opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a href="tel:+15306307166" className="text-white/80 font-light hover:text-white transition-colors">
                +1 (530) 630-7166
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a href="mailto:nnagarajappa027@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">
                nnagarajappa027@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">California, USA</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/nayana-nagaraj09/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Github className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">GitHub</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Nayana Nagarajappa | AI/ML Engineering & MLOps
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
