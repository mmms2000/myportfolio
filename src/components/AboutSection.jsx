import { Code, GraduationCap, HeartHandshake } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate Web Developer
            </h3>
            <p className="text-muted-foreground">
              I’m a front-end developer who loves creating clean, interactive,
              and user focused web experiences. Building projects like
              MemoryMingle has strengthened my skills in React, Recoil, and
              Styled Components, and deepened my passion for problem solving.
            </p>

            <p className="text-muted-foreground">
              I’m currently learning Java to expand into backend development and
              become a well rounded full-stack developer. Every project is a
              chance to learn, grow, and craft better experiences through both
              design and code.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center ">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    specialize in building responsive and dynamic web interfaces
                    using modern frameworks like React and Recoil. focus on
                    delivering clean, intuitive user experiences through
                    thoughtful design and efficient component-based development.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Always exploring new technologies and tools to improve
                    development efficiency and design quality. I enjoy solving
                    problems and turning ideas into functional, aesthetic web
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">
                    Collaboration & Passion
                  </h4>
                  <p className="text-muted-foreground">
                    I value teamwork and clear communication in every project.
                    My passion for technology drives me to learn, share
                    knowledge, and contribute to meaningful digital products.
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
