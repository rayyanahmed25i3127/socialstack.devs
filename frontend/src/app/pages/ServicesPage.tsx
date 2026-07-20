import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { motion } from "motion/react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePersistentTheme } from "../usePersistentTheme";

import svgPathsDark from "../../imports/DServicesExpanded/svg-xnbm573k17";
import svgPathsLight from "../../imports/LServicesBoth/svg-a37jqh11z0";
// Reused doodle paths (curved arrows) come from the collapsed-state export —
// they aren't present in the expanded-state path file.
import svgPathsCollapsed from "../../imports/DServicesCollapsed/svg-ttun6vaqn3";

/* ─── Hero stack image ─── */
import imgStackDark from "../../imports/DServicesExpanded/0e786878884b83f07a32f85b23d9341a88092329.png";
import imgStackLight from "../../imports/LServicesBoth/6c79c0ba117bc8effb67f4c92ded32145f882b72.png";

/* ─── Service thumbnails ─── */
import imgWebDevD from "../../imports/DServicesExpanded/fa7bad922431065273caa4ed0c63790ec0139f0f.png";
import imgUiUxD from "../../imports/DServicesExpanded/acb26c400f122c0c2317e979a6269f1013ad9ff1.png";
import imgSmmD from "../../imports/DServicesExpanded/64b16d18c1eba9a478a14f4f751c297d97e336cb.png";
import imgAdsD from "../../imports/DServicesExpanded/518fc0dd9785ed9acbec0b1dd52c1308094fa91e.png";
import imgAppD from "../../imports/DServicesExpanded/6759038b5bd1d09ee5df485b068151c242676868.png";
import imgWebDevL from "../../imports/LServicesBoth/921119828fcc21147ce212877404dd9541c81609.png";
import imgUiUxL from "../../imports/LServicesBoth/2ed50a14d6d521580e99ae4e08ce7e4acfa7577c.png";
import imgSmmL from "../../imports/LServicesBoth/09680b00dd75e5ee8737597ca14064b3b7ba3963.png";
import imgAdsL from "../../imports/LServicesBoth/5eaaed725156deefefa4ca8383e2fc773146f5d9.png";
import imgAppL from "../../imports/LServicesBoth/6c6f30c7a6d8bf735ae8d032ee6f3e83828f73cd.png";

/* ─── Tool / stack icons (shared across themes) ─── */
import imgReact from "../../imports/DServicesExpanded/f8c00e332bf811bdeb418ef0d912a3c1e6ddbe41.png";
import imgNodeJs from "../../imports/DServicesExpanded/4ad88a3630efa1304540be5e25220696736036b8.png";
import imgTailwind from "../../imports/DServicesExpanded/b3d59fa727c640a9b92bf2c550322559ac4b4731.png";
import imgMongodb from "../../imports/DServicesExpanded/e8f4e8daf35b0e1b1aea455842d24c699a5fe453.png";
import imgFigmaA from "../../imports/DServicesExpanded/38032c7162088bb989b6d80a4ea8812082581274.png";
import imgFigmaB from "../../imports/DServicesExpanded/26d7c232afa664b7bc6d2d79a4088265c6e4a83d.png";
import imgAdobe from "../../imports/DServicesExpanded/8e1aea2819e2a73149bb6d93def113e6aae7cf6c.png";
import imgInsta from "../../imports/DServicesExpanded/468c7475589eb27a78854d6df71df89373326cde.png";
import imgLinkd from "../../imports/DServicesExpanded/b62d1866882d20fd9ee5a3139a67bf2731c1c55e.png";
import imgCanva from "../../imports/DServicesExpanded/f6e213bb98b31a604201a5d4b4705a445869b7b3.png";
import imgFlutter from "../../imports/DServicesExpanded/1abccac24bb239ea183a5ccc9e58c3f97534737e.png";
import imgFirebase from "../../imports/DServicesExpanded/fcab6d310952243f23fc6d5de741d6f38d0c6f05.png";
import imgDart from "../../imports/DServicesExpanded/015b9bb4bc3f7ded175ce2da7edcca184eae6580.png";

// ─── Theme tokens ───────────────────────────────────────────────────────────

const DARK = {
  pageBg: "#222d31",

  cardBg: "#253236",
  lime: "#B7E66B",
  limeAccent: "rgba(183,221,103,0.85)",
  subtitleText: "#c7d1cc",
  accentText: "#c8e77b",
  cardHeading: "#f4f4ef",
  borderColor: "#3f5757",
  pillBg: "#2e3936",
  pillBorder: "rgba(196,240,107,0.15)",
  bulletsText: "rgba(230,242,221,0.9)",
  toolBorder: "rgba(183,221,103,0.5)",
  noteBg: "rgba(183,221,103,0.9)",
  noteText: "#1c2528",
  descriptionText: "rgba(230,242,221,0.8)",
  doodleStroke: "rgba(183,221,103,0.8)",

  heroText: "#f4f4ef",
  brushText: "#1c2528",
  underline: "#A8D465",
  starStroke: "#7DAA52",
  greyDoodle: "#D9D9D9",

  taglineBg: "#F4EEE3",
  taglineText: "#273338",

  ctaHeading: "#1c2528",
  ctaBody: "rgba(28,37,40,0.7)",
  ctaButtonBg: "#c8e77b",
  ctaButtonText: "#1c2528",
  ctaPillBg: "#1c2528",
  ctaPillText: "#c8e77b",
  // Exact requested colour — #F4EEE3 at 70% opacity (noise texture layered on top separately)
  ctaPaper: "rgba(244,238,227,0.7)",
};

const LIGHT = {
  pageBg: "#e6f2dd",

  cardBg: "rgba(111,127,60,0.1)",
  lime: "#7D9444",
  limeAccent: "rgba(111,127,60,0.9)",
  subtitleText: "rgba(39,51,56,0.75)",
  accentText: "rgba(111,127,60,0.95)",
  cardHeading: "#2f372d",
  borderColor: "rgba(111,127,60,0.25)",
  pillBg: "#526862",
  pillBorder: "rgba(196,240,107,0.25)",
  bulletsText: "rgba(34,45,49,0.9)",
  toolBorder: "rgba(111,127,60,0.5)",
  noteBg: "rgba(111,127,60,0.9)",
  noteText: "#f4f4ef",
  descriptionText: "rgba(34,45,49,0.8)",
  doodleStroke: "rgba(111,127,60,0.8)",

  heroText: "#273338",
  brushText: "#273338",
  underline: "#556052",
  starStroke: "#7DAA52",
  greyDoodle: "#9AA79A",

  taglineBg: "#F4EEE3",
  taglineText: "#273338",

  ctaHeading: "#1c2528",
  ctaBody: "rgba(28,37,40,0.7)",
  ctaButtonBg: "#273338",
  ctaButtonText: "#c8e77b",
  ctaPillBg: "#1c2528",
  ctaPillText: "#c8e77b",
  ctaPaper: "rgba(244,238,227,0.7)",
};

type Tokens = typeof DARK;
const TRANSITION_CSS = "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease";
const revealViewport = { once: true, margin: "-80px" };
const revealTransition = { duration: 0.72, ease: [0.16, 1, 0.3, 1] as const };
const revealUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: revealTransition },
};

function ServiceCardHoverStyles() {
  return (
    <style>
      {`
        @keyframes doodlePulse { 0% { transform: scale(1.2); } 25% { transform: scale(1); } 100% { transform: scale(1); } }
        @keyframes doodleFill { 0% { stroke-dashoffset: 1; } 45%, 55% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 1; } }

        .slice {
          --size-letter: clamp(13px, 1.25vw, 14px);
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
          height: calc(340% + 2em);
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
          width: calc(180% + 3em);
        }

        .slice:active {
          scale: 0.98;
          filter: brightness(0.9);
        }
      `}
    </style>
  );
}

// ─── Service content (copy only — no layout/vector data lives here) ────────

interface ToolItem {
  img: string;
  alt: string;
}

interface ServiceItem {
  id: number;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  thumbDark: string;
  thumbLight: string;
  toolboxLabel: string;
  tools: ToolItem[];
  noteRotation: number;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    number: "1",
    title: "Web Development",
    tagline: "Build once. Grow longer.",
    description: "Fast, scalable websites built for real businesses.",
    bullets: [
      "Responsive layouts for desktop, tablet, and mobile",
      "Deployment, optimisation, and ongoing support",
      "CMS integration for easy content management",
      "Clean, maintainable code built for scalability",
    ],
    thumbDark: imgWebDevD,
    thumbLight: imgWebDevL,
    toolboxLabel: "Our Tool Box:",
    tools: [
      { img: imgReact, alt: "React" },
      { img: imgNodeJs, alt: "Node.js" },
      { img: imgTailwind, alt: "Tailwind" },
      { img: imgMongodb, alt: "MongoDB" },
    ],
    noteRotation: -4,
  },
  {
    id: 2,
    number: "2",
    title: "UI/UX Design",
    tagline: "Designs that people enjoy.",
    description: "Thoughtful interfaces that make every interaction feel effortless.",
    bullets: [
      "Intuitive navigation for seamless user experience",
      "Accessibility standards to reach all users",
      "Custom design elements tailored to brand identity",
      "Analytics integration for data-driven decisions",
    ],
    thumbDark: imgUiUxD,
    thumbLight: imgUiUxL,
    toolboxLabel: "Our Tool Box:",
    tools: [
      { img: imgFigmaA, alt: "Figma" },
      { img: imgFigmaB, alt: "Illustrator" },
      { img: imgAdobe, alt: "Adobe" },
    ],
    noteRotation: 2,
  },
  {
    id: 3,
    number: "3",
    title: "Social Media Management",
    tagline: "Strategy. Content. Growth.",
    description: "Strategic content and campaigns that grow your audience.",
    bullets: [
      "Strategic content planning for consistent growth",
      "Engaging content tailored to your audience",
      "Community management that builds engagement",
      "Monthly reports with actionable insights",
    ],
    thumbDark: imgSmmD,
    thumbLight: imgSmmL,
    toolboxLabel: "Our Tool Box:",
    tools: [
      { img: imgInsta, alt: "Instagram" },
      { img: imgLinkd, alt: "LinkedIn" },
    ],
    noteRotation: 5,
  },
  {
    id: 4,
    number: "4",
    title: "Ads and Branding",
    tagline: "Identity that sticks.",
    description: "Build a recognizable brand that customers remember.",
    bullets: [
      "Memorable brand identities with clear direction",
      "Creative ads designed for better results",
      "Strategic campaigns focused on measurable growth",
      "Consistent branding across all platforms",
    ],
    thumbDark: imgAdsD,
    thumbLight: imgAdsL,
    toolboxLabel: "Our Tool Box:",
    tools: [
      { img: imgCanva, alt: "Canva" },
      { img: imgFigmaA, alt: "Figma" },
      { img: imgAdobe, alt: "Adobe" },
    ],
    noteRotation: -3,
  },
  {
    id: 5,
    number: "5",
    title: "App Development",
    tagline: "Worth the wait.",
    description: "Custom mobile apps built for performance and long-term growth.",
    bullets: [
      "Native and cross-platform application development",
      "User-focused experiences built for performance",
      "Secure backend systems with API integration",
      "Ongoing maintenance and feature improvements",
    ],
    thumbDark: imgAppD,
    thumbLight: imgAppL,
    toolboxLabel: "Our Tool Box:",
    tools: [
      { img: imgFlutter, alt: "Flutter" },
      { img: imgFirebase, alt: "Firebase" },
      { img: imgDart, alt: "Dart" },
    ],
    noteRotation: 6,
  },
];

const SERVICE_SLUGS = [
  "web-development",
  "ui-ux-design",
  "social-media-management",
  "ads-branding",
  "app-development",
];

function getServiceIndexFromHash() {
  if (typeof window === "undefined") return 0;
  const slug = window.location.hash.replace("#", "").trim().toLowerCase();
  const index = SERVICE_SLUGS.indexOf(slug);
  return index >= 0 ? index : 0;
}

// ─── Exact image crop data, pulled from the Figma Make export ─────────────
// Each thumbnail PNG is a full illustration (bigger than the card slot, with
// its own baked-in annotations like "designs that make sense" or "COMING
// SOON"). Figma Make crops/zooms into a specific window of each image per
// card, per state. These percentages are converted directly from the pixel
// values in the generated `index.tsx` files — not approximated.

interface CropRect {
  left: number;
  top: number;
  width: number;
  height: number;
}
interface IllustrationCrop {
  /** width/height, e.g. "347/110" — keeps the box's proportions correct at any size */
  aspect: string;
  /** the crop "window" as a % of the box */
  window: CropRect;
  /** if present, the image is placed at these % *within* the window (exact zoom/pan).
   *  If absent, the image simply covers the window (object-cover). */
  inner?: CropRect;
}
interface ArrowDoodle {
  path: string;
  viewBox: string;
  rect: CropRect;
}

interface CardVisual {
  collapsedCrop: IllustrationCrop;
  expandedCrop: IllustrationCrop;
  collapsedArrow?: ArrowDoodle;
}

const CARD_VISUALS: Record<number, CardVisual> = {
  1: {
    collapsedCrop: { aspect: "347/110", window: { left: -8.83, top: -18.09, width: 71.76, height: 115.45 } },
    expandedCrop: { aspect: "432/327", window: { left: 0, top: 0, width: 100, height: 100 } },
    collapsedArrow: {
      path: svgPathsCollapsed.pf8e5c00,
      viewBox: "0 0 74.1266 56.8944",
      rect: { left: 51.21, top: 39.75, width: 21.07, height: 50.73 },
    },
  },
  2: {
    collapsedCrop: {
      aspect: "347/110",
      window: { left: -8.83, top: -18.09, width: 71.76, height: 115.45 },
      inner: { left: 29.32, top: 1.24, width: 49.8, height: 98.28 },
    },
    expandedCrop: {
      aspect: "432/327",
      window: { left: 0, top: 0, width: 100, height: 100 },
      inner: { left: 5.64, top: -7.32, width: 85.9, height: 114.23 },
    },
    collapsedArrow: {
      path: svgPathsCollapsed.pf8e5c00,
      viewBox: "0 0 74.1266 56.8944",
      rect: { left: 51.21, top: 39.75, width: 21.07, height: 50.73 },
    },
  },
  3: {
    collapsedCrop: { aspect: "426/158", window: { left: 0, top: 5.13, width: 52.58, height: 101.9 } },
    expandedCrop: {
      aspect: "418/288",
      window: { left: 0, top: 0, width: 100, height: 100 },
      inner: { left: -2.32, top: 2.29, width: 101.28, height: 99.8 },
    },
    collapsedArrow: {
      path: svgPathsCollapsed.p1ebf7a80,
      viewBox: "0 0 66.3476 49.7552",
      rect: { left: 55.63, top: 22.85, width: 15.46, height: 30.86 },
    },
  },
  4: {
    collapsedCrop: {
      aspect: "337/110",
      window: { left: -22.09, top: -4.45, width: 79.82, height: 108.18 },
      inner: { left: 23.34, top: -18.37, width: 53.53, height: 123.7 },
    },
    expandedCrop: {
      aspect: "402/327",
      window: { left: 0, top: 0, width: 100, height: 100 },
      inner: { left: -3.94, top: -23.99, width: 107.46, height: 135.05 },
    },
    collapsedArrow: {
      path: svgPathsCollapsed.p1cbd7d80,
      viewBox: "0 0 72.2418 34.0776",
      rect: { left: 50.02, top: 68.27, width: 21.07, height: 30.0 },
    },
  },
  5: {
    collapsedCrop: { aspect: "366/110", window: { left: -9.5, top: -22.64, width: 86.34, height: 140 } },
    expandedCrop: { aspect: "432/327", window: { left: 0, top: 0, width: 100, height: 100 } },
    // No collapsed arrow for this card in the Figma export — "COMING SOON" is baked
    // into the App Development thumbnail itself, next to a plain plus icon.
  },
};

// ─── Illustration renderer (shared by collapsed + expanded states) ────────

function IllustrationBox({
  crop,
  src,
  alt,
  rounded = false,
  children,
}: {
  crop: IllustrationCrop;
  src: string;
  alt: string;
  rounded?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${rounded ? "rounded-[12px]" : ""}`} style={{ aspectRatio: crop.aspect }}>
      <div
        className="absolute"
        style={{
          left: `${crop.window.left}%`,
          top: `${crop.window.top}%`,
          width: `${crop.window.width}%`,
          height: `${crop.window.height}%`,
          overflow: crop.inner ? "hidden" : "visible",
        }}
      >
        {crop.inner ? (
          <img
            alt={alt}
            src={src}
            className="absolute max-w-none"
            style={{
              left: `${crop.inner.left}%`,
              top: `${crop.inner.top}%`,
              width: `${crop.inner.width}%`,
              height: `${crop.inner.height}%`,
            }}
          />
        ) : (
          <img alt={alt} src={src} className="absolute inset-0 w-full h-full object-cover" />
        )}
      </div>
      {children}
    </div>
  );
}

function ArrowOverlay({ arrow, color }: { arrow: ArrowDoodle; color: string }) {
  return (
    <svg
      className="absolute pointer-events-none hidden lg:block"
      style={{ left: `${arrow.rect.left}%`, top: `${arrow.rect.top}%`, width: `${arrow.rect.width}%`, height: `${arrow.rect.height}%` }}
      viewBox={arrow.viewBox}
      fill="none"
      preserveAspectRatio="none"
    >
      <path d={arrow.path} stroke={color} strokeOpacity="0.8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function FloatingStar({ style, delay = 0, filled = false, tk }: { style: React.CSSProperties; delay?: number; filled?: boolean; tk: Tokens }) {
  return (
    <motion.div
      className="absolute hidden sm:block"
      style={{ width: 27, height: 22, ...style }}
      animate={{ y: [-5, 5, -5], rotate: [0, 15, 0, -15, 0] }}
      transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay } }}
    >
      <svg className="block size-full" fill="none" viewBox="0 0 26.5 22.4017">
        <path d={svgPathsDark.p13e16b80} fill={filled ? tk.underline : "none"} stroke={tk.starStroke} />
      </svg>
    </motion.div>
  );
}

// ─── Small shared pieces ────────────────────────────────────────────────────

function NumberBadge({ number, rotation, tk }: { number: string; rotation: number; tk: Tokens }) {
  return (
    <div className="flex items-center justify-center shrink-0 size-[44px] sm:size-[52px]">
      <div style={{ transform: `rotate(${rotation}deg)` }} className="relative">
        <div
          className="relative flex items-center justify-center rounded-[4px] size-[40px] sm:size-[48px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)]"
          style={{ backgroundColor: tk.noteBg, transition: TRANSITION_CSS }}
        >
          {/* Paperclip — tilted, pinned to the top-left corner, like a real clipped note */}
          <div className="absolute -top-[7px] -left-[7px]" style={{ transform: "rotate(-35deg)" }}>
            <svg width="16" height="22" viewBox="0 0 12 24" fill="none">
              <path d="M6 1C3.2 1 1.2 3 1.2 5.8V16.5C1.2 20.2 3.2 23 6 23C8.8 23 10.8 20.2 10.8 16.5V5.8C10.8 3 8.8 1 6 1Z" stroke="#B0B0B0" strokeWidth="1.3" fill="none" />
              <path d="M6 5.5C4.7 5.5 3.8 6.4 3.8 7.8V16.5C3.8 18.5 4.8 19.8 6 19.8C7.2 19.8 8.2 18.5 8.2 16.5V7.8C8.2 6.4 7.3 5.5 6 5.5Z" stroke="#B0B0B0" strokeWidth="1.1" fill="none" />
            </svg>
          </div>
          <p className="font-['Manrope',sans-serif] font-semibold text-[16px] sm:text-[18px]" style={{ color: tk.noteText }}>
            {number}
          </p>
        </div>
      </div>
    </div>
  );
}

function ToolPill({ img, alt, tk }: { img: string; alt: string; tk: Tokens }) {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[52px] sm:size-[58px] overflow-hidden bg-white/5" style={{ border: `1px solid ${tk.toolBorder}`, transition: TRANSITION_CSS }}>
      <img alt={alt} className="absolute inset-0 w-full h-full object-contain p-2" src={img} />
    </div>
  );
}

// ─── 1. ServicesHero ────────────────────────────────────────────────────────
// The headline block below is laid out as one fixed-aspect coordinate frame
// (511×461, matching the Figma frame exactly) with every element positioned
// by percentage, exactly as authored in Figma. This is why it now scales
// correctly instead of the highlight shapes clipping the text.

function ServicesHero({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const svgPaths = isDark ? svgPathsDark : svgPathsLight;
  const stackImg = isDark ? imgStackDark : imgStackLight;
  const badgeSpinPrimary = isDark ? "rgba(34,211,238,0.95)" : "rgba(39,51,56,0.95)";
  const badgeSpinSecondary = isDark ? "rgba(103,232,249,0.92)" : "rgba(63,79,74,0.92)";

  return (
    <motion.section
      className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-center w-full"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
    >
      {/* Left: copy */}
      <div className="flex flex-col gap-5 sm:gap-6 flex-1 min-w-0 lg:max-w-[520px] w-full">
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
              style={{ backgroundColor: tk.pillBg, transition: TRANSITION_CSS }}
            >
              <span className="text-[#c8e77b] font-['Manrope',sans-serif] font-medium text-xl tracking-[2px] whitespace-nowrap">
                WHAT WE DO
              </span>
            </span>
          </motion.div>
        </div>

        {/* Fixed-aspect coordinate frame — exact Figma proportions (511 × 461) */}
        <div className="relative w-full" style={{ aspectRatio: "511/461" }}>
          {/* Spark rays — exact path, exact position (top-right of "We build") */}
          <svg
            className="absolute hidden sm:block origin-center animate-[doodlePulse_2s_ease-out_infinite]"
            style={{ left: "54.29%", top: "6.34%", width: "12.04%", height: "4.97%" }}
            viewBox="0 0 63.5175 24.8902"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d={svgPathsDark.p12a49780} stroke={tk.greyDoodle} strokeLinecap="round" strokeWidth="2" />
          </svg>

          {/* "Social" highlight — sized to fully contain the word, with a small
              safety margin added on top of the raw Figma ratio since web fonts
              render slightly differently than Figma's own text engine */}
          <svg
            className="absolute"
            style={{ left: "27%", top: "29%", width: "72%", height: "33%", transform: "rotate(-2.8deg)" }}
            viewBox="0 0 343.79 115.36"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d={svgPaths.p1f3b3c80} fill={tk.lime} fillOpacity={0.9} />
          </svg>

          {/* "Stack" highlight — same treatment */}
          <svg
            className="absolute"
            style={{ left: "-1%", top: "50%", width: "69%", height: "31%", transform: "rotate(-2.8deg)" }}
            viewBox="0 0 337.04 125.234"
            fill="none"
            preserveAspectRatio="none"
          >
            <path d={isDark ? svgPathsDark.p21217180 : svgPathsLight.p45a2000} fill={tk.lime} fillOpacity={0.9} />
          </svg>

          {/* "We build" / "your" */}
          <div className="absolute" style={{ left: "-0.3%", top: "3.6%", width: "68%", transform: "rotate(-1.8deg)", transformOrigin: "left top" }}>
            <p className="font-['Patrick_Hand',sans-serif] leading-[0.95]" style={{ fontSize: "clamp(38px, 6.2vw, 76px)", letterSpacing: "-0.03em", color: tk.heroText }}>
              We build
            </p>
            <p className="font-['Patrick_Hand',sans-serif] leading-[0.95] mt-1" style={{ fontSize: "clamp(38px, 6.2vw, 76px)", letterSpacing: "-0.03em", color: tk.heroText }}>
              your
            </p>
          </div>

          {/* "Social" text — centered over its highlight */}
          <div className="absolute flex items-center justify-center" style={{ left: "-4%", top: "30%", width: "126%", height: "29%", transform: "rotate(-3deg)" }}>
            <span className="font-['Caveat_Brush',sans-serif] leading-[0.95] whitespace-nowrap" style={{ fontSize: "clamp(38px, 6.4vw, 74px)", letterSpacing: "-0.03em", color: tk.brushText }}>
              Social
            </span>
          </div>

          {/* "Stack" text */}
          <div className="absolute flex items-center" style={{ left: "13.5%", top: "53%", width: "56%", height: "27%", transform: "rotate(-3deg)" }}>
            <span className="font-['Caveat_Brush',sans-serif] leading-[0.95] whitespace-nowrap" style={{ fontSize: "clamp(38px, 6.4vw, 74px)", letterSpacing: "-0.03em", color: tk.brushText }}>
              Stack
            </span>
          </div>

          {/* Underline sketch beneath "Stack" — same draw-in/hold/draw-out
              gradient fill loop used on the Home page, with matching colors
              per theme. */}
          <svg className="absolute hidden sm:block" style={{ left: "31.33%", top: "83.92%", width: "27.72%", height: "4.35%" }} viewBox="0 0 143.633 22.0289" fill="none" preserveAspectRatio="none">
            <defs>
              <linearGradient id={isDark ? "stackDoodleFillDark" : "stackDoodleFillLight"} x1="0%" y1="0%" x2="100%" y2="0%">
                {isDark ? (
                  <>
                    <stop offset="0%" stopColor="#8cc9b4" />
                    <stop offset="50%" stopColor="#b7dd67" />
                    <stop offset="100%" stopColor="#e6f2dd" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#4f5a4b" />
                    <stop offset="50%" stopColor="#6f7f3c" />
                    <stop offset="100%" stopColor="#b7dd67" />
                  </>
                )}
              </linearGradient>
            </defs>
            <path
              d={svgPaths.p3cf8e00}
              stroke={`url(#${isDark ? "stackDoodleFillDark" : "stackDoodleFillLight"})`}
              strokeLinecap="round"
              strokeWidth="2"
              pathLength="1"
              strokeDasharray="1"
              className="animate-[doodleFill_2.6s_ease-in-out_infinite]"
            />
          </svg>

          {/* Two small grey crossing doodle strokes, right of "Stack" */}
          <svg className="absolute hidden sm:block origin-center animate-[doodlePulse_2s_ease-out_infinite]" style={{ left: "73.05%", top: "65%", width: "7%", height: "6.21%" }} viewBox="0 0 37.7663 30.6131" fill="none" preserveAspectRatio="none">
            <path d={svgPaths.p16352f30} stroke={tk.greyDoodle} strokeLinecap="round" strokeWidth="2" />
          </svg>
          <svg className="absolute hidden sm:block origin-center animate-[doodlePulse_2s_ease-out_infinite]" style={{ left: "69.97%", top: "64.37%", width: "7.28%", height: "6.83%" }} viewBox="0 0 39.1966 33.4741" fill="none" preserveAspectRatio="none">
            <path d={svgPaths.p3358e300} stroke={tk.greyDoodle} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>

        <p className="font-['Manrope',sans-serif] font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-[480px]" style={{ color: tk.subtitleText, transition: "color 0.4s ease" }}>
          We turn ideas into content, content into brands, and brands into experiences.
        </p>

        <p
          className="font-['Patrick_Hand',sans-serif] text-[22px] sm:text-[28px] lg:text-[32px] leading-tight"
          style={{ color: tk.accentText, transform: "rotate(-1deg)", transformOrigin: "left center" }}
        >
          Ideas. Design. Code. Impact. :)
        </p>
      </div>

      {/* Right: stack image */}
      <motion.div
        className="relative shrink-0 w-full max-w-[480px] lg:max-w-none lg:w-[46%] rounded-[32px] lg:rounded-[60px] overflow-hidden aspect-[4/3] lg:aspect-[8/7]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img alt="SocialStack portfolio stack" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={stackImg} />
        <FloatingStar style={{ left: "8%", top: "42%" }} delay={0} filled tk={tk} />
        <FloatingStar style={{ left: "30%", bottom: "14%" }} delay={1.2} tk={tk} />
        <FloatingStar style={{ right: "18%", top: "12%" }} delay={0.6} tk={tk} />
      </motion.div>
    </motion.section>
  );
}

// ─── 2. TaglineBanner ───────────────────────────────────────────────────────

function TaglineBanner({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const svgPaths = isDark ? svgPathsDark : svgPathsLight;
  return (
    <motion.div
      className="relative w-full flex items-center justify-center py-6 sm:py-8"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
    >
      <div className="relative w-full max-w-[1100px] flex items-center justify-center px-6 py-6 sm:py-8">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1161 112" fill="none" preserveAspectRatio="none">
            <path d={svgPaths.p12bda380} fill={tk.taglineBg} fillOpacity="0.85" />
          </svg>
        </div>
        <p
          className="relative z-10 font-['Patrick_Hand',sans-serif] text-center leading-tight"
          style={{ color: tk.taglineText, fontSize: "clamp(18px, 3vw, 32px)" }}
        >
          Strategy meets design, content meets code, and ideas meet impact.
        </p>
      </div>
    </motion.div>
  );
}

// ─── 3. ServiceCard ─────────────────────────────────────────────────────────
// Note: there is intentionally NO caption text, sticky note, or badge overlaid
// on the illustration here. Every one of those ("designs that make sense",
// "COMING SOON", tool taglines, etc.) is already baked into the source PNG —
// adding our own text on top just duplicates/collides with it. Getting the
// crop right (via IllustrationBox) is what makes the real artwork show correctly.

function ServiceCard({
  service,
  isDark,
  tk,
  active = false,
}: {
  service: ServiceItem;
  isDark: boolean;
  tk: Tokens;
  active?: boolean;
}) {
  const thumb = isDark ? service.thumbDark : service.thumbLight;
  const visuals = CARD_VISUALS[service.id];
  const cardStyle = {
    backgroundColor: isDark ? tk.cardBg : "#eef3e2",
    transition: TRANSITION_CSS,
    boxShadow: active
      ? isDark
        ? "0 28px 70px rgba(0,0,0,0.42)"
        : "0 28px 70px rgba(63,79,74,0.24)"
      : isDark
        ? "0 18px 46px rgba(0,0,0,0.28)"
        : "0 18px 46px rgba(63,79,74,0.16)",
  } as CSSProperties;
  const glowColor = isDark ? "rgba(183,221,103,0.98)" : "rgba(47,79,55,0.98)";
  const glowSoft = isDark ? "rgba(183,221,103,0.28)" : "rgba(47,79,55,0.24)";
  const glassBorder = isDark ? "rgba(230,242,221,0.28)" : "rgba(255,255,255,0.62)";

  return (
    <article
      className="relative h-full w-full overflow-hidden rounded-[34px] p-3 text-left shadow-2xl shadow-black/35 outline-none"
      style={{
        background: `linear-gradient(135deg, ${glassBorder}, rgba(255,255,255,0.08), ${glassBorder})`,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
      }}
    >
      {active && (
        <motion.div
          className="absolute inset-[-52%] rounded-full opacity-90 blur-[0.7px]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, transparent 58deg, ${glowSoft} 78deg, ${glowColor} 108deg, ${glowColor} 122deg, ${glowSoft} 148deg, transparent 172deg, transparent 360deg)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[24px] px-5 py-6 sm:px-6 sm:py-7"
        style={cardStyle}
      >
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <NumberBadge number={service.number} rotation={service.noteRotation} tk={tk} />
          </div>
          <p className="font-['Patrick_Hand',sans-serif] text-right text-[20px] leading-tight" style={{ color: tk.accentText }}>
            {service.tagline}
          </p>
        </div>

        <div className="relative mt-5">
          <IllustrationBox crop={visuals.expandedCrop} src={thumb} alt={service.title} rounded />
        </div>

        <div className="relative mt-6 flex min-h-0 flex-1 flex-col">
          <h3 className="font-['Manrope',sans-serif] text-[28px] font-extrabold leading-[1.05] tracking-tight sm:text-[32px]" style={{ color: tk.cardHeading }}>
            {service.title}
          </h3>
          <p className="mt-3 font-['Inter',sans-serif] text-[15px] leading-relaxed sm:text-[16px]" style={{ color: tk.descriptionText }}>
            {service.description}
          </p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {service.bullets.slice(0, 3).map((bullet, i) => (
              <li key={i} className="flex items-start gap-2 font-['Inter',sans-serif] text-[13px] font-medium leading-snug sm:text-[14px]" style={{ color: tk.bulletsText }}>
                <span className="mt-[1px] shrink-0" style={{ color: tk.limeAccent }}>✓</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-5">
            <p className="font-['Caveat_Brush',sans-serif] text-[22px]" style={{ color: tk.limeAccent }}>
              {service.toolboxLabel}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2.5">
              {service.tools.map((tool, i) => (
                <ToolPill key={i} img={tool.img} alt={tool.alt} tk={tk} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── 4. ServicesSection ─────────────────────────────────────────────────────

function MobileServicesDeck({ isDark, tk, active, onActiveChange }: { isDark: boolean; tk: Tokens; active: number; onActiveChange: (index: number) => void }) {

  return (
    <div className="flex flex-col gap-4 sm:hidden">
      {SERVICES.map((service, index) => {
        const expanded = active === index;
        const thumb = isDark ? service.thumbDark : service.thumbLight;
        const visuals = CARD_VISUALS[service.id];

        return (
          <motion.article
            key={service.id}
            layout
            className="relative overflow-hidden rounded-[28px] p-[1px]"
            style={{
              background: expanded
                ? `linear-gradient(135deg, ${tk.limeAccent}, rgba(255,255,255,0.18), ${tk.limeAccent})`
                : isDark
                  ? "rgba(230,242,221,0.16)"
                  : "rgba(39,51,56,0.16)",
              boxShadow: expanded
                ? isDark
                  ? "0 24px 55px rgba(0,0,0,0.34)"
                  : "0 24px 55px rgba(63,79,74,0.18)"
                : "none",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.42, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={() => onActiveChange(index)}
              className="relative block w-full overflow-hidden rounded-[27px] px-4 py-4 text-left"
              style={{
                background: isDark ? "rgba(37,50,54,0.92)" : "rgba(238,243,226,0.94)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              <div className="flex items-center gap-3">
                <NumberBadge number={service.number} rotation={service.noteRotation} tk={tk} />
                <div className="min-w-0 flex-1">
                  <h3 className="font-['Manrope',sans-serif] text-[22px] font-extrabold leading-tight" style={{ color: tk.cardHeading }}>
                    {service.title}
                  </h3>
                  <p className="font-['Patrick_Hand',sans-serif] text-[18px] leading-tight" style={{ color: tk.accentText }}>
                    {service.tagline}
                  </p>
                </div>
                <motion.span
                  className="grid size-9 shrink-0 place-items-center rounded-full border text-2xl leading-none"
                  style={{ color: tk.limeAccent, borderColor: tk.toolBorder }}
                  animate={{ rotate: expanded ? 45 : 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  +
                </motion.span>
              </div>

              <motion.div
                layout
                initial={false}
                animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-4">
                  <IllustrationBox crop={visuals.expandedCrop} src={thumb} alt={service.title} rounded />
                  <p className="mt-4 font-['Inter',sans-serif] text-[14px] leading-relaxed" style={{ color: tk.descriptionText }}>
                    {service.description}
                  </p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.bullets.slice(0, 3).map((bullet) => (
                      <li key={bullet} className="flex gap-2 font-['Inter',sans-serif] text-[13px] font-medium leading-snug" style={{ color: tk.bulletsText }}>
                        <span style={{ color: tk.limeAccent }}>✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <ToolPill key={tool.alt} img={tool.img} alt={tool.alt} tk={tk} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </button>
          </motion.article>
        );
      })}
    </div>
  );
}

function ServicesSection({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const [active, setActive] = useState(getServiceIndexFromHash);
  const [hovered, setHovered] = useState<number | null>(null);
  const total = SERVICES.length;

  useEffect(() => {
    const syncActiveFromHash = () => {
      setActive(getServiceIndexFromHash());
      window.setTimeout(() => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };

    syncActiveFromHash();
    window.addEventListener("hashchange", syncActiveFromHash);
    return () => window.removeEventListener("hashchange", syncActiveFromHash);
  }, []);

  const go = useCallback(
    (dir: number) => setActive((value) => (value + dir + total) % total),
    [total]
  );

  const arrowStyle = {
    borderColor: isDark ? "rgba(230,242,221,0.52)" : "rgba(39,51,56,0.5)",
    color: isDark ? "#e6f2dd" : "#273338",
    background: isDark
      ? "linear-gradient(135deg, rgba(230,242,221,0.12), rgba(255,255,255,0.04))"
      : "linear-gradient(135deg, rgba(230,242,221,0.72), rgba(255,255,255,0.28))",
    boxShadow: isDark
      ? "0 14px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.14)"
      : "0 14px 30px rgba(63,79,74,0.14), inset 0 1px 0 rgba(255,255,255,0.72)",
    backdropFilter: "blur(18px) saturate(160%)",
    WebkitBackdropFilter: "blur(18px) saturate(160%)",
  } as CSSProperties;

  const arrowButton = (dir: number, label: string, symbol: string, side: "left" | "right") => (
    <motion.button
      type="button"
      aria-label={label}
      onClick={() => go(dir)}
      className={`absolute top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border text-3xl leading-none transition-colors duration-300 sm:h-12 sm:w-12 sm:text-4xl ${
        side === "left" ? "left-4 lg:left-10" : "right-4 lg:right-10"
      }`}
      style={arrowStyle}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <span className="-mt-1">{symbol}</span>
    </motion.button>
  );

  return (
    <section
      id="services"
      className="services-vertical-stage relative w-full overflow-x-visible overflow-y-hidden px-8 py-10 sm:px-12 sm:py-14"
      onMouseLeave={() => setHovered(null)}
    >
      <h2
        className="mb-8 text-center font-['Caveat_Brush',sans-serif] text-[4.5rem] font-normal leading-none tracking-normal sm:text-[7rem]"
        style={{ color: isDark ? "#c8e77b" : "#273338" }}
      >
        SERVICES
      </h2>

      <MobileServicesDeck isDark={isDark} tk={tk} active={active} onActiveChange={setActive} />

      <div className="relative mx-auto hidden h-[590px] w-full max-w-[980px] sm:block">
        {arrowButton(-1, "Previous service", "‹", "left")}
        {arrowButton(1, "Next service", "›", "right")}
        {SERVICES.map((service, index) => {
          let offset = index - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          const abs = Math.abs(offset);
          const visible = abs <= 1;
          const isActive = offset === 0;
          const isHovered = hovered === index;

          return (
            <motion.button
              key={service.id}
              type="button"
              aria-label={`Show ${service.title}`}
              className="absolute left-1/2 top-1/2 cursor-pointer rounded-[34px] text-left outline-none"
              style={{
                zIndex: isActive ? total + 5 : isHovered ? total + 2 : total - abs,
                pointerEvents: visible ? "auto" : "none",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => {
                setHovered(index);
              }}
              onFocus={() => {
                setHovered(index);
              }}
              onBlur={() => setHovered(null)}
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * 137}px)`,
                y: "-50%",
                width: isActive ? "min(430px, 86vw)" : "min(340px, 70vw)",
                height: isActive ? 775 : 660,
                scale: isActive ? 0.67 : 0.58,
                opacity: visible ? 1 : 0,
                filter: visible ? (isActive ? "blur(0px)" : "blur(4px)") : "blur(8px)",
                rotateY: isActive ? 0 : offset < 0 ? 8 : -8,
              }}
              transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
            >
              <ServiceCard service={service} isDark={isDark} tk={tk} active={isActive} />
            </motion.button>
          );
        })}
      </div>

      <div className="relative mt-2 hidden items-center justify-center gap-2 sm:flex">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            type="button"
            aria-label={`Go to ${service.title}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className="h-2.5 rounded-full transition-all duration-300"
            style={{
              width: index === active ? 28 : 10,
              background: index === active ? tk.limeAccent : isDark ? "rgba(230,242,221,0.28)" : "rgba(39,51,56,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── 5. PricingCTA ──────────────────────────────────────────────────────────

function PricingCTA({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const sliceStyle = {
    "--c1": tk.ctaButtonText,
    "--c2": tk.ctaButtonBg,
  } as CSSProperties;
  const panelBg = isDark ? "rgba(37,50,54,0.62)" : "rgba(244,238,227,0.42)";
  const panelBorder = isDark ? "rgba(200,231,123,0.24)" : "rgba(39,51,56,0.22)";
  const divider = isDark ? "rgba(230,242,221,0.18)" : "rgba(39,51,56,0.18)";
  const headingColor = isDark ? "#c8e77b" : "#273338";

  return (
    <motion.section
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={revealUp}
    >
      <div
        className="relative overflow-hidden rounded-[28px] border px-5 py-8 shadow-2xl sm:rounded-[34px] sm:px-10 sm:py-12 lg:px-14"
        style={{
          background: `linear-gradient(135deg, ${panelBg}, ${isDark ? "rgba(34,45,49,0.34)" : "rgba(230,242,221,0.5)"})`,
          borderColor: panelBorder,
          boxShadow: isDark ? "0 28px 80px rgba(0,0,0,0.26)" : "0 24px 70px rgba(39,51,56,0.12)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: isDark
              ? "linear-gradient(115deg, rgba(200,231,123,0.08), transparent 34%, rgba(140,201,180,0.08))"
              : "linear-gradient(115deg, rgba(39,51,56,0.06), transparent 34%, rgba(125,148,68,0.1))",
          }}
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_auto_1.05fr] lg:gap-12">
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
            <p
              className="font-['Caveat_Brush',sans-serif] text-[4.5rem] font-normal leading-none tracking-normal sm:text-[7rem]"
              style={{ color: headingColor }}
            >
              PRICING
            </p>
          </div>

          <div
            className="hidden h-full min-h-[190px] w-px justify-self-center lg:block"
            style={{ backgroundColor: divider }}
          />

          <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
            <p
              className="font-['Manrope',sans-serif] text-[28px] font-extrabold leading-tight sm:text-[36px] lg:text-[42px]"
              style={{ color: tk.cardHeading }}
            >
              Each Stack is different.
            </p>

            <p className="max-w-[580px] font-['Manrope',sans-serif] text-[15px] font-medium leading-relaxed sm:text-[17px]" style={{ color: tk.descriptionText }}>
              Every business has different goals, timelines and requirements. We'll recommend the right services and give you a clear quote before we build anything.
            </p>

            <a
              href="/contact"
              className="slice mt-1 inline-flex items-center justify-center font-['Manrope',sans-serif] tracking-[1.5px] whitespace-nowrap no-underline"
              style={sliceStyle}
            >
              <span className="text">
                LET'S PRICE YOUR STACK
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Root page ──────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [theme, setTheme] = usePersistentTheme();
  const isDark = theme === "dark";
  const tk = isDark ? DARK : LIGHT;

  return (
    <motion.div animate={{ backgroundColor: tk.pageBg }} transition={{ duration: 0.4 }} className="min-h-screen">
      <ServiceCardHoverStyles />
      <Header theme={theme} onThemeChange={setTheme} />

      <main className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-14 flex flex-col gap-14 sm:gap-20">
        <ServicesHero isDark={isDark} tk={tk} />
        <TaglineBanner isDark={isDark} tk={tk} />
        <ServicesSection isDark={isDark} tk={tk} />
        <PricingCTA isDark={isDark} tk={tk} />
      </main>

      <Footer theme={theme} />
    </motion.div>
  );
}
