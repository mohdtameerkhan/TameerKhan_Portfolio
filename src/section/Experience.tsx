
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function Experience() {
  const [activeId, setActiveId] = useState(1);

  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      year: "Full time",
      company: "Pathlabs",
      date: "Date — Date",
      description:
        "Contributed to OptaCut and OptaPlan, manufacturing SaaS platforms serving 200+ clients with cutting optimization and production planning solutions. Built full-stack features spanning React UIs, REST APIs, and database architecture to improve workflow efficiency and system performance.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      year: "Full time",
      company: "Pathlabs",
      date: "Date — Date",
      description:
        "Contributed to OptaCut and OptaPlan, manufacturing SaaS platforms serving 200+ clients with cutting optimization and production planning solutions. Built full-stack features spanning React UIs, REST APIs, and database architecture to improve workflow efficiency and system performance.",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8">

      {/* Header */}
      <div className="mb-14 border-t border-white/[0.08] pt-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7DB7FF]" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F8DA3]">
              Career Journey
            </span>
          </div>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            03
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="mb-16">
        <h2 className="text-5xl tracking-tight text-[#F3F0E8] sm:text-6xl">
          Work <span className="text-[#7DB7FF]">Experience.</span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-6 text-[#8D9AAF] sm:text-base">
          My professional journey across software engineering roles,
          building real-world applications across different industries.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-white/10" />

        {experiences.map((exp) => {
          const isActive = activeId === exp.id;

          return (
            <div
              key={exp.id}
              className="relative pl-8"
            >

              {/* Timeline dot */}
              <span
                className={`absolute left-0 top-8 h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "border-[#7DB7FF] bg-[#7DB7FF]"
                    : "border-white/30 bg-[#0B1220]"
                }`}
              />

              {/* Experience */}
              <div className="border-b border-white/10">

                {/* Clickable area */}
                <button
                  type="button"
                  onClick={() => setActiveId(exp.id)}
                  className="flex w-full items-start justify-between gap-5 py-7 text-left"
                >

                  <div>

                    {/* Company / Date */}
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span
                        className={`text-xs uppercase tracking-wider ${
                          isActive
                            ? "text-[#7DB7FF]"
                            : "text-[#7F8DA3]"
                        }`}
                      >
                        {exp.company}
                      </span>

                      <span className="text-white/20">•</span>

                      <span className="text-xs text-white/30">
                        {exp.date}
                      </span>
                    </div>

                    {/* Role */}
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className={`text-xl transition-colors sm:text-2xl ${
                          isActive
                            ? "text-[#F3F0E8]"
                            : "text-white/50"
                        }`}
                      >
                        {exp.title}
                      </h3>

                      <span className="text-xs text-white/25">
                        {exp.year}
                      </span>
                    </div>

                  </div>

                  {/* Arrow */}
                  <ChevronDown
                    size={18}
                    className={`mt-1 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "rotate-180 text-[#7DB7FF]"
                        : "text-white/30"
                    }`}
                  />

                </button>

                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "max-h-60 pb-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="max-w-2xl text-sm leading-7 text-[#8D9AAF]">
                    {exp.description}
                  </p>
                </div>

              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
