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

          <div></div>
        </div>
      </div>
    </section>
  );
};
