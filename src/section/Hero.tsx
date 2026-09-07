export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-5 py-10 sm:px-8 sm:py-12 md:items-end md:px-10 md:pb-12 md:pt-28 lg:px-14 lg:pb-14 lg:pt-32 xl:px-16 xl:pb-16">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Top metadata */}
        <div className="mb-10 flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-[#7F8DA3] sm:mb-14 sm:text-[10px] sm:tracking-[0.2em] md:mb-16 md:text-[11px]">
          <span>
            Based in{" "}
            <span className="text-[#A8B7CC]">Kuwait</span>
          </span>

          <span className="hidden sm:block">
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <div>
          <p className="mb-4 flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#7DB7FF] sm:mb-5 sm:gap-3 sm:text-xs sm:tracking-[0.22em] md:text-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7DB7FF] shadow-[0_0_12px_rgba(125,183,255,0.8)]" />
            Frontend Engineer
          </p>

          <h1 className="text-[clamp(3.8rem,11vw,11rem)] font-semibold uppercase leading-[0.8] tracking-[-0.07em] text-[#F3F0E8] sm:text-[clamp(5rem,11vw,11rem)]">
            Tameer
            <br />

            <span className="ml-[6vw] bg-linear-to-r from-[#7DB7FF] via-[#A8C7FA] to-[#D5DFF0] bg-clip-text text-transparent sm:ml-[7vw]">
              Khan
            </span>
          </h1>
        </div>

        {/* Bottom information */}
        <div className="mt-10 border-t border-white/8 pt-5 sm:mt-14 sm:pt-6 md:mt-20">

          <div className="flex flex-col gap-6 sm:gap-5 lg:flex-row lg:items-start lg:justify-between">

            {/* Description */}
            <p className="max-w-85 text-sm leading-relaxed text-[#8D9AAF] sm:text-base">
              I build modern, scalable web experiences with React, Next.js and
              TypeScript.
            </p>

            {/* Links */}
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.18em] text-[#7F8DA3] sm:gap-8 sm:text-[11px] sm:tracking-[0.2em]">
              <a
                href="https://github.com/mohdtameerkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#A8C7FA]"
              >
                GitHub <span className="ml-1">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mohd-tameer-khan-479b39184/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#A8C7FA]"
              >
                LinkedIn <span className="ml-1">↗</span>
              </a>
            </div>

            {/* Scroll */}
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#687589] sm:block sm:text-[11px] sm:tracking-[0.2em]">
              Scroll to explore ↓
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}