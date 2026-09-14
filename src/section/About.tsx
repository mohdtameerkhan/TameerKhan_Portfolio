
import Image from "next/image";
import {
  Monitor,
  Braces,
  Layers3,
  Gauge,
  Accessibility,
  Download,
} from "lucide-react";

const interests = [
  {
    icon: Monitor,
    title: "UI Development",
    color: "#7DB7FF",
  },
  {
    icon: Braces,
    title: "API Design & Development",
    color: "#A78BFA",
  },
  {
    icon: Layers3,
    title: "Frontend Architecture",
    color: "#5EEAD4",
  },
  {
    icon: Gauge,
    title: "Performance",
    color: "#FBBF24",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    color: "#FB7185",
  },
];

export function About() {
  return (
    <section className="mx-auto w-full max-w-300 px-5 py-24 sm:px-8 md:py-32">

      {/* Section heading */}
      <div className="mb-14 flex items-center justify-between border-t border-white/8 pt-5">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7DB7FF] shadow-[0_0_12px_rgba(125,183,255,0.6)]" />

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F8DA3]">
            About Me
          </span>
        </div>

        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
          02
        </span>
      </div>

      {/* 30 / 70 layout */}
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-10">

        {/* ================= IMAGE ================= */}
        <div className="md:flex-3">

          <div className="group relative mx-auto aspect-4/5 w-full max-w-85 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02] md:mx-0">

            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/tameer.jpeg"
                alt="tameer Khan"
                fill
                sizes="(max-width: 768px) 90vw, 340px"
                className=" object-center  transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>

          </div>

          <p className="mt-4 max-w-85 text-[10px] uppercase tracking-[0.16em] text-white/25">
            Frontend Engineer · Kuwait
          </p>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="group rounded-2xl border border-white/10 bg-white/2.5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01] sm:p-8 md:flex-7 md:p-10">

          {/* Heading */}
          <h2 className="text-[clamp(2rem,2vw,5rem)] leading-[0.9] tracking-[-0.055em] text-[#F3F0E8]">
            Core
            <span className="text-[#7DB7FF]"> Interests.</span>
          </h2>

          {/* Description */}
          <p className="mt-2 max-w-2xl text-base leading-7 text-[#8D9AAF]">
            I focus on building modern frontend experiences that are
            responsive, performant, accessible, and maintainable.
          </p>

          {/* Core interests */}
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">

            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <div
                  key={interest.title}
                  className="group/interest flex min-h-5 items-center gap-4 rounded-xl border border-white/[0.07] bg-white/2.5 p-0.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/4.5"
                >

                  {/* Icon */}
                  <div
                    className="flex h-10 w-11 shrink-0 items-center justify-center transition-all duration-300"
                    style={{
                      color: interest.color,
                    }}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.5}
                      className="transition-all duration-300 group-hover/interest:scale-125 group-hover/interest:drop-shadow-[0_0_6px_currentColor]"
                    />
                  </div>

                  {/* Title */}
                  <span className="text-sm leading-5 text-white/55 transition-colors duration-300 group-hover/interest:text-[#F3F0E8]">
                    {interest.title}
                  </span>

                </div>
              );
            })}

          </div>

          {/* Bottom */}
          <div className="mt-4 flex flex-col gap-6 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">

            <h3 className="max-w-md text-lg font-medium leading-snug tracking-tight text-[#F3F0E8]">
              Open to building and shipping impactful products.
            </h3>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/2.5 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white/55 backdrop-blur-md transition-all duration-300 hover:border-[#7DB7FF]/40 hover:bg-white/5 hover:text-[#F3F0E8]"
            >
              Download Resume

              <Download
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

