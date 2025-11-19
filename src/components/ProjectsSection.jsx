import { ExternalLink, Github } from "lucide-react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group relative bg-card rounded-lg overflow-hidden 
             border-[2px] border-primary
             shadow-[0_0_15px_hsl(var(--primary)),inset_0_0_15px_hsl(var(--primary))]
             hover:shadow-[0_0_25px_hsl(var(--primary)),inset_0_0_20px_hsl(var(--primary))]
             transition-all duration-500 hover:scale-[1.02] card-hover"
          >
            <div className="md:h-100 h-48 overflow-hidden">
              <a href={project.demoUrl} >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                />
              </a>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key=""
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
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />{" "}
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
