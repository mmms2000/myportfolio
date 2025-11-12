import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Memory Mingle",
    description:
      "A shared photo album platform that allows close friends to create and share memorable moments together. I was responsible for developing the album group creation and display pages, as well as the search page.",
    image: "/src/assets/project1.png",
    tags: ["React", "styledComponent", "React-Router", "Recoil", "React-Query"],
    demoUrl: "https://github.com/MemoryMingle/FE.git",
    githubUrl: "https://github.com/MemoryMingle/FE.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="#projects" className="py-24 px-4 relative">
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
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="md:h-60 h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
              />
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
