import { useState, type CSSProperties } from "react";
import { motion } from "motion/react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePersistentTheme } from "../usePersistentTheme";

// ─── Assets (Figma "Projects" export — dark + light) ────────────────────────
// The path data in DProjects/LProjects is pixel-identical between themes
// (only fill/stroke colours differ, handled via the token objects below),
// so a single svgPaths import covers both — no need to switch source files.
import svgPaths from "../../imports/DProjects/svg-xfsfh84v07";

import imgNotebookDark from "../../imports/DProjects/87736a7b5a07fc26f8054101eb4117e3c4ad5b02.png";
import imgNotebookLight from "../../imports/LProjects/e8343c528247ac02c20cb9550191a8f8ecdc7613.png";

// ─── Theme tokens ─────────────────────────────────────────────────────────
// Pulled directly from the Figma "D-Projects" / "L-Projects" exports.
// One exception: the wavy underline stroke in the light export was left as
// #F4F4EF (near-white) — almost invisible against the light CTA panel, and
// clearly a leftover from the dark variant rather than an intentional
// choice. It's swapped here for the same muted-olive stroke used on the
// other light-mode doodles so the mark stays legible in both themes.

const DARK = {
  pageBg: "#222d31",

  badgeBg: "#2e3936",
  badgeBorder: "rgba(196,240,107,0.15)",
  badgeText: "#c8e77b",

  headingPrimary: "#f4f4ef",
  headingAccent: "rgba(183,221,103,0.8)",
  subtitle: "#FFFFFF",

  ctaPanelBg: "#253236",
  ctaPanelBorder: "#4c5a53",
  ctaDivider: "#4c5a53",
  ctaHeading: "#e6f2dd",
  ctaBrushFill: "#B7DD67",
  ctaBrushFillOpacity: 0.8,
  ctaBrushText: "#222d31",
  ctaDoodleStroke: "#F4F4EF",
  ctaBodyText: "#f4f4ef",
  ctaButtonBg: "rgba(183,221,103,0.8)",
  ctaButtonText: "#253236",
  ctaArrowStroke: "#F4F4EF",
};

const LIGHT = {
  pageBg: "#e6f2dd",

  badgeBg: "#526862",
  badgeBorder: "rgba(196,240,107,0.15)",
  badgeText: "#c8e77b",

  headingPrimary: "#2f372d",
  headingAccent: "rgba(111,127,60,0.9)",
  subtitle: "#556052",

  ctaPanelBg: "rgba(111,127,60,0.15)",
  ctaPanelBorder: "#4f5a4b",
  ctaDivider: "#4f5a4b",
  ctaHeading: "#273338",
  ctaBrushFill: "#6F7F3C",
  ctaBrushFillOpacity: 0.9,
  ctaBrushText: "#e6f2dd",
  ctaDoodleStroke: "#6F7F3C",
  ctaBodyText: "#2f372d",
  ctaButtonBg: "rgba(111,127,60,0.9)",
  ctaButtonText: "#e6f2dd",
  ctaArrowStroke: "#6F7F3C",
};

type Tokens = typeof DARK;
const TRANSITION_CSS = "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease";

function SliceButtonStyles() {
  return (
    <style>
      {`
        .slice {
          --size-letter: clamp(16px, 1.7vw, 20px);
          padding: 0.5em 1em;
          font-size: var(--size-letter);
          background-color: transparent;
          border: calc(var(--size-letter) / 6) solid var(--c2);
          border-radius: 0.55em;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
        }

        .slice > .text {
          font-weight: 800;
          color: var(--c2);
          position: relative;
          z-index: 1;
          transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
        }

        .slice::after {
          content: "";
          width: 0;
          height: calc(300% + 1em);
          position: absolute;
          translate: -50% -50%;
          inset: 50%;
          rotate: 30deg;
          background-color: var(--c2);
          transition: 1000ms cubic-bezier(0.83, 0, 0.17, 1);
        }

        .slice:hover > .text,
        .slice:focus-visible > .text {
          color: var(--c1);
        }

        .slice:hover::after,
        .slice:focus-visible::after {
          width: calc(120% + 1em);
        }

        .slice:active {
          scale: 0.98;
          filter: brightness(0.9);
        }
      `}
    </style>
  );
}

// ─── 1. Hero — badge + headline + subtitle ───────────────────────────────

function ProjectsHero({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const badgeSpinPrimary = isDark ? "rgba(34,211,238,0.95)" : "rgba(39,51,56,0.95)";
  const badgeSpinSecondary = isDark ? "rgba(103,232,249,0.92)" : "rgba(63,79,74,0.92)";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center pt-4 sm:pt-6 pb-0 px-4"
    >
      <div className="mb-10 text-left">
        <motion.div
          className="relative inline-flex overflow-hidden rounded-full p-[2px] cursor-default"
          whileHover={{ scale: 1.05, x: 5 }}
        >
          <motion.span
            className="absolute inset-[-80%] rounded-full opacity-90"
            style={{
              background:
                `conic-gradient(from 0deg, transparent 0deg, transparent 64deg, ${badgeSpinPrimary} 82deg, transparent 104deg, transparent 360deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            className="absolute inset-[-80%] rounded-full opacity-75"
            style={{
              background:
                `conic-gradient(from 180deg, transparent 0deg, transparent 64deg, ${badgeSpinSecondary} 82deg, transparent 104deg, transparent 360deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }}
          />
          <span
            className="relative z-10 inline-flex rounded-full px-8 py-3 border border-[rgba(196,240,107,0.15)] transition-all duration-300"
            style={{ backgroundColor: tk.badgeBg, transition: TRANSITION_CSS }}
          >
            <span
              className="text-[#c8e77b] font-['Manrope',sans-serif] font-medium text-xl tracking-[2px]"
            >
              Our Projects
            </span>
          </span>
        </motion.div>
      </div>

      <h1 className="font-['Caveat_Brush',sans-serif] leading-[1.15] tracking-[-0.02em] mb-5 sm:mb-6">
        <span className="block text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px]" style={{ color: tk.headingPrimary, transition: TRANSITION_CSS }}>
          Great ideas
        </span>
        <span className="block text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px]" style={{ color: tk.headingAccent, transition: TRANSITION_CSS }}>
          take time to build
        </span>
      </h1>

      <p
        className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[18px] md:text-[20px] max-w-[480px] mx-auto leading-[1.5] md:leading-[29px]"
        style={{ color: tk.subtitle, transition: "color 0.4s ease" }}
      >
        {"We're currently working on amazing projects. Once they are ready, you'll see them soon"}
      </p>
    </motion.section>
  );
}

// ─── 2. Illustration — floating notebook ─────────────────────────────────

function ProjectsIllustration({ isDark }: { isDark: boolean }) {
  return (
    <section className="flex justify-center px-2 sm:px-4 py-0 -mt-10 sm:-mt-16 md:-mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full max-w-[1100px]"
      >
        <motion.img
          src={isDark ? imgNotebookDark : imgNotebookLight}
          alt="Open notebook with a PROJECTS header and a checklist — Idea, Planning, Design, and Development checked off, Launch still pending — with a Coming Soon sticky note tag"
          className="w-full h-auto object-contain"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

// ─── 3. CTA — "Ready to build your stack?" ────────────────────────────────

function ProjectsCTA({ tk }: { tk: Tokens }) {
  const sliceStyle = {
    "--c1": tk.ctaButtonText,
    "--c2": tk.ctaButtonBg,
  } as CSSProperties;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="px-3 sm:px-8 md:px-12 lg:px-20 pb-16 sm:pb-20"
    >
      <div
        className="max-w-[1100px] mx-auto rounded-[18px] overflow-hidden"
        style={{ backgroundColor: tk.ctaPanelBg, border: `1px solid ${tk.ctaPanelBorder}`, transition: TRANSITION_CSS }}
      >
        <div className="flex flex-col md:flex-row items-stretch min-h-[220px]">
          {/* Left column */}
          <div className="flex-1 px-6 sm:px-8 md:px-12 py-8 flex flex-col justify-center relative">
            {/* "Ready to  build" — tilted handwritten */}
            <div className="-rotate-[7deg] origin-left w-fit mb-1">
              <p
                className="font-['Caveat_Brush',sans-serif] text-[40px] sm:text-[52px] md:text-[62px] lg:text-[70px] leading-[1.25] tracking-[-2.8px] whitespace-pre"
                style={{ color: tk.ctaHeading, transition: "color 0.4s ease" }}
              >
                {"Ready to  build"}
              </p>
            </div>

            {/* "Your stack?" with green brush stroke behind it */}
            <div className="-rotate-[7deg] origin-left relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[364px]">
              <div className="relative h-[46px] sm:h-[60px] md:h-[68px] lg:h-[76px] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363.392 75.7645">
                  <path d={svgPaths.p3e6522f0} fill={tk.ctaBrushFill} fillOpacity={tk.ctaBrushFillOpacity} />
                </svg>
                <p
                  className="absolute inset-0 flex items-center justify-center font-['Caveat_Brush',sans-serif] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[62px] tracking-[-2.8px] text-center leading-none whitespace-nowrap"
                  style={{ color: tk.ctaBrushText, transition: "color 0.4s ease" }}
                >
                  Your stack?
                </p>
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px my-6" style={{ backgroundColor: tk.ctaDivider, transition: "background-color 0.4s ease" }} />

          {/* Right column */}
          <div className="flex-1 px-6 sm:px-8 md:px-12 py-8 flex flex-col items-center justify-center gap-5 relative">
            <p
              className="font-['Manrope',sans-serif] font-bold text-[16px] sm:text-[18px] md:text-[20px] text-center leading-[32px] tracking-[0.4px] max-w-[340px]"
              style={{ color: tk.ctaBodyText, transition: "color 0.4s ease" }}
            >
              {"Have a project in mind? Let's turn your idea into reality"}
            </p>

            <div className="relative">
              <motion.a
                href="/contact"
                className="slice inline-flex items-center justify-center font-['Inter',sans-serif] tracking-[0.6px] whitespace-nowrap no-underline"
                style={sliceStyle}
              >
                <span className="text">Start your project</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Root page ────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [theme, setTheme] = usePersistentTheme();
  const isDark = theme === "dark";
  const tk = isDark ? DARK : LIGHT;

  return (
    <motion.main
      animate={{ backgroundColor: tk.pageBg }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col"
    >
      <SliceButtonStyles />
      <Header theme={theme} onThemeChange={setTheme} />

      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col gap-0 sm:gap-1 flex-1">
        <ProjectsHero isDark={isDark} tk={tk} />
        <ProjectsIllustration isDark={isDark} />
        <ProjectsCTA tk={tk} />
      </div>

      <Footer theme={theme} />
    </motion.main>
  );
}
