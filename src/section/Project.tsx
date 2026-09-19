
import { projectData } from "@/data/projects";
import Image from "next/image";

export function Project() {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-24 sm:px-8 md:py-32">

      {/* Section Header */}
      <div className="mb-14 border-t border-white/8 pt-5">
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F8DA3]">
              My Work
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            05
          </span>

        </div>
      </div>

      {/* Title */}
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl tracking-tight text-[#F3F0E8] sm:text-6xl">
          Featured{" "}
          <span className="text-[#22D3EE]">
            Projects.
          </span>
        </h2>

        <p className="mt-5 text-sm leading-6 text-[#8D9AAF] sm:text-base">
          A collection of projects showcasing modern frontend development,
          responsive interfaces, and scalable web applications.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-8">

        {projectData.map((item, index) => (
          <article
            key={item.id}
            className="group   grid overflow-hidden border border-white/8 bg-white/[0.015] transition-all duration-300 hover:border-[#22D3EE]/25 md:grid-cols-[1.1fr_1fr]"
          >

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden border-b border-white/8 bg-[#0B1B31] md:border-b-0 md:border-r">

              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                    Project Preview
                  </span>
                </div>
              )}


            </div>

            {/* Project Content */}
            <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10">

              <div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F8DA3]">
                  Featured Project
                </span>

                <h3 className="mt-3 text-2xl tracking-tight text-[#F3F0E8] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#8D9AAF]">
                  {item.description}
                </p>

              </div>

              {/* Technologies */}
              <div className="mt-8">

                <div className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  Technologies
                </div>

                <div className="flex flex-wrap gap-2">

                  {item.language.map((tech) => (
                    <span
                      key={tech}
                      className="border border-white/8 px-3 py-1.5 text-xs text-white/50 transition-colors duration-300 group-hover:border-[#22D3EE]/20 group-hover:text-[#F3F0E8]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
