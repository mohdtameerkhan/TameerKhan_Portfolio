
"use client";

import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export function Contact() {
  return (
    <footer className="mx-auto w-full max-w-300 px-5 pb-8 pt-16 sm:px-8">
      <div className="overflow-hidden rounded-2xl border border-[#7DB7FF]/20 bg-[#7DB7FF]/4 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8">

        {/* Main Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          {/* Identity + Email */}
          <div>
            <p className="text-2xl font-medium tracking-tight text-[#F3F0E8]">
              Tameer Khan
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#7DB7FF]">
              Frontend Engineer · Kuwait
            </p>

            <a
              href="mailto:Khantameer087@gmail.com"
              className="mt-6 inline-block text-base text-[#F3F0E8] transition-colors hover:text-[#7DB7FF]"
            >
              Khantameer087@gmail.com ↗
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-white/40">

            <a
              href="https://github.com/mohdtameerkhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-[#7DB7FF]"
            >
              <SiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/mohd-tameer-khan-479b39184/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[#7DB7FF]"
            >
              <FaLinkedinIn size={20} />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-5 text-[9px] uppercase tracking-[0.16em] text-white/25 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © {new Date().getFullYear()} Tameer Khan
          </span>

          <span>
            Designed & Built with Next.js
          </span>

        </div>

      </div>
    </footer>
  );
}

