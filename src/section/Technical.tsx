
    "use client";

    import { useState } from "react";

    export function Technical() {
    const [activeID, setactiveID] = useState(0);

    console.log(activeID);

    const skills = [
        {
        id: 0,
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
        },
        {
        id: 1,
        title: "Backend",
        skills: ["Node.js", "REST API", "Firebase", "Supabase"],
        },
        {
        id: 2,
        title: "Tools",
        skills: ["Git", "GitHub", "Postman", "Vercel"],
        },
        {
        id: 3,
        title: "Testing & Data",
        skills: ["React Query", "Axios", "MSW"],
        },
    ];

    return (
        <section className="mx-auto w-full max-w-300 px-5 py-24 sm:px-8 md:py-32">

        {/* Header */}
        <div className="mb-10 border-t border-white/8 pt-5">
            <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7DB7FF]" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-[#7F8DA3]">
                Technical Expertise
                </span>
            </div>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                04
            </span>

            </div>
        </div>

        {/* Title */}
        <div className="mb-14 max-w-2xl">
            <h2 className="text-2xl tracking-tight text-[#F3F0E8] sm:text-6xl">
            Tech <span className="text-[#7DB7FF]">Skills.</span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#8D9AAF] sm:text-base">
            A comprehensive overview of my technical skills and expertise
            across modern web technologies and development tools.
            </p>
        </div>

        {/* Skills */}
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">

            {/* Categories */}
            <div className="border-l border-white/10">

            {skills.map((item) => (
                <div
                key={item.id}
                onClick={() => setactiveID(item.id)}
                className={`cursor-pointer border-b border-white/6 px-5 py-4 text-left text-sm transition-colors ${
                    activeID === item.id
                    ? "border-l-2 border-[#7DB7FF] bg-white/3 text-[#F3F0E8]"
                    : "text-white/35 hover:text-white/70"
                }`}
                >
                <div className="flex items-center justify-between">
                    <span>{item.title}</span>

                    <span
                    className={`text-[10px] ${
                        activeID === item.id
                        ? "text-[#7DB7FF]"
                        : "text-white/20"
                    }`}
                    >
                    0{item.id + 1}
                    </span>
                </div>
                </div>
            ))}

            </div>

            {/* Skills Content */}
            <div className="min-h-55 border border-white/8 bg-white/2 p-6 sm:p-8">

            {skills.map((item) => (
                <div
                key={item.id}
                className={`${activeID === item.id ? "visible" : "hidden"}`}
                >

                <div className="mb-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#7DB7FF]">
                    0{item.id + 1} / {item.title}
                    </span>

                    <h3 className="mt-2 text-2xl tracking-tight text-[#F3F0E8]">
                    {item.title}
                    </h3>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                    {item.skills.map((lang) => (
                    <div
                        key={lang}
                        className="border-b border-white/8 py-3 text-sm text-white/50 transition-colors hover:text-[#F3F0E8]"
                    >
                        {lang}
                    </div>
                    ))}
                </div>

                </div>
            ))}

            </div>

        </div>

        </section>
    );
    }

