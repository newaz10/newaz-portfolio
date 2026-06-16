"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "~/data/personal";
import { AnimatedSection } from "~/components/ui/AnimatedSection";
import { SectionHeading } from "~/components/ui/SectionHeading";
import avatarImg from "~/assets/avatar.jpeg";

export function About() {
  return (
    <AnimatedSection id="about">
      <div className="mx-auto max-w-5xl px-4">
        {" "}
        {/* Increased max-width slightly for breathing room */}
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        {/* Changed items-start to items-center for perfect vertical alignment */}
        <div className="grid gap-8 md:grid-cols-[240px_1fr] items-center">
          {/* Round Avatar */}
          <motion.div
            className="relative mx-auto md:mx-0 group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced border and shadow to match screenshot glow */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-[3px] border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300 group-hover:border-red-500/60 group-hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]">
              <Image
                src={avatarImg}
                alt="Newaz - Full-Stack Developer"
                width={224}
                height={224}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Bio & Stats Card */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 bg-white/[0.03] backdrop-blur-md">
              <p className="text-[#a1a1aa] leading-relaxed text-base md:text-lg">
                {personalInfo.bio}
              </p>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center group/stat">
                  <p className="text-3xl md:text-4xl font-bold text-red-500 transition-colors group-hover/stat:text-red-400">
                    1+
                  </p>
                  <p className="text-xs md:text-sm text-[#a1a1aa]/60 mt-1 font-medium uppercase tracking-wide">
                    Years Exp.
                  </p>
                </div>
                <div className="text-center group/stat">
                  <p className="text-3xl md:text-4xl font-bold text-orange-500 transition-colors group-hover/stat:text-orange-400">
                    15+
                  </p>
                  <p className="text-xs md:text-sm text-[#a1a1aa]/60 mt-1 font-medium uppercase tracking-wide">
                    Projects
                  </p>
                </div>
                <div className="text-center group/stat">
                  <p className="text-3xl md:text-4xl font-bold text-red-500 transition-colors group-hover/stat:text-red-400">
                    10+
                  </p>
                  <p className="text-xs md:text-sm text-[#a1a1aa]/60 mt-1 font-medium uppercase tracking-wide">
                    Clients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
