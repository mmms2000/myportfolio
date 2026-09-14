import { ExternalLink, Github, Lock } from "lucide-react";
import winkorea from "../assets/winkorea.jpg";
import winkoreavisa from "../assets/winkoreavisa.jpg";
import nbridge from "../assets/nbridge.jpg";
import easytongyeok from "../assets/easytongyeok.jpg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
{
    id: 4,
    title: "WIN KOREA — 외국인 구직·상담 플랫폼",
    description:
      "A lead-funnel platform connecting foreign job seekers in Korea with consultants. Applicants submit a resume and inquiry, staff are assigned, and the case moves through chat consultation to completion. Multilingual by default.",
    image: winkorea,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "Spring Boot", "PostgreSQL", "Redis"],
    demoUrl: "https://winkorea.net",
    private: true,
  },
{
    id: 5,
    title: "WIN KOREA Visa — 비자 서류 준비 시스템",
    description:
      "An internal tool that collects international students' documents once, verifies them once, and reuses them everywhere — auto-filling the Korean immigration integrated application form (별지 제34호) as a print-ready PDF.",
    image: winkoreavisa,
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Spring Boot", "Java 21", "PostgreSQL", "PDFBox"],
    demoUrl: "https://winkoreavisa.vercel.app",
    private: true,
  },
{
    id: 6,
    title: "N.Bridge Center — 좌석·룸 예약 및 출입 관리",
    description:
      "A full-stack reservation and access system for a student support center in Busan. Students book seats or rooms on a live floor map and receive a digital door key over KakaoTalk; admins manage approvals, members, and visit statistics.",
    image: nbridge,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "Spring Boot", "PostgreSQL", "FCM", "i18n"],
    demoUrl: "https://nbridge.vercel.app",
    private: true,
  },
{
    id: 7,
    title: "Easy 통역 — 실시간 라이브 통역 서비스",
    description:
      "Real-time live interpretation for multilingual services. Listeners scan a QR code and hear their language instantly — no app, no login — across 76 languages, with seamless language switching mid-stream. Interpreters broadcast straight from the browser.",
    image: easytongyeok,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebRTC", "Spring Boot", "PostgreSQL"],
    demoUrl: "https://easytongyeok.org",
    private: true,
  },
  {
    id: 1,
    title: "Memory Mingle",
    description:
      "A shared photo album platform that allows close friends to create and share memorable moments together. I was responsible for developing the album group creation and display pages, as well as the search page.",
    image: project1,
    tags: ["React", "styledComponent", "React-Router", "Recoil", "React-Query"],
    demoUrl: "https://github.com/MemoryMingle/FE.git",
    githubUrl: "https://github.com/MemoryMingle/FE.git",
  },
{
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "A responsive and modern portfolio website built to showcase my projects, skills, and experience as a frontend developer. It features a dynamic theme toggle, smooth scroll animations, and reusable React components for scalability.",
    image: project2, 
    tags: ["React", "Tailwind CSS", "JavaScript", "Lucide-React", "Vercel"],
    demoUrl: "https://mosesmyatminshwe.vercel.app", 
  },
{
  id: 3,
  title: "My Portfolio Website",
  description:
    "A personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, and development journey. It includes a responsive design, dark mode toggle, smooth scrolling, and reusable components for easy scalability.",
  image: project3, 
  tags: ["React", "Tailwind CSS", "Lucide-React", "Vercel"],
  demoUrl: "https://mosesmyatminshwe-woad.vercel.app/", 
  githubUrl: "https://github.com/mmms2000/myportfolio",
},
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl max-auto">
          Here are some of my recent projects. each one highlights my passion
          for creating clean, responsive, and dynamic web applications using
          modern frameworks and tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group relative bg-card rounded-lg overflow-hidden 
             border-[2px] border-primary
             shadow-[0_0_15px_hsl(var(--primary)),inset_0_0_15px_hsl(var(--primary))]
             hover:shadow-[0_0_25px_hsl(var(--primary)),inset_0_0_20px_hsl(var(--primary))]
             transition-all duration-500 hover:scale-[1.02] card-hover"
          >
            <div className="h-48 md:h-72 overflow-hidden">
              {project.image ? (
                <a href={project.demoUrl}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              ) : (
                // ponytail: private repos have no screenshots yet - gradient placeholder
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-primary/5 p-6">
                  <span className="text-lg font-semibold text-center text-foreground/80">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title} </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 items-center">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.private && (
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Lock size={14} /> Private repo
                    </span>
                  )}
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
