import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Plus, Minus } from "lucide-react";

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

/* ─── Footer icons ─── */
import imgGmailD from "../../imports/DServicesExpanded/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramD from "../../imports/DServicesExpanded/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinD from "../../imports/DServicesExpanded/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";
import imgLogo from "../../imports/DServicesExpanded/eef17f758a83029ddf8e98fae373f5efc3059691.png";
import imgGmailL from "../../imports/LServicesBoth/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgInstagramL from "../../imports/LServicesBoth/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLinkedinL from "../../imports/LServicesBoth/5ac66073681efe5925013d8e779ef7ae2781251e.png";

/* ─── Nav icon ─── */
// A DIFFERENT asset from the footer logo above — it exists in the Figma export
// but was never imported/used in the previous version of this file, which is
// why it appeared to be "missing" rather than just mis-themed.
import imgNavIcon from "../../imports/DServicesExpanded/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";

// ─── Theme tokens ───────────────────────────────────────────────────────────

const DARK = {
  pageBg: "#222d31",
  navBg: "#222d31",
  navBorder: "transparent",
  navLink: "#e6f2dd",
  contactBg: "#c6e7bc",
  contactText: "#273338",
  hamburger: "#e6f2dd",
  mobileMenuBg: "#222d31",
  mobileMenuBorder: "#3f5757",
  toggleBg: "#2e3936",
  toggleIndicator: "#c8e77b",
  arrowStroke: "#B7DD67",

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

  footerBg: "rgba(183,221,103,0.9)",
  footerText: "#222d31",
};

const LIGHT = {
  pageBg: "#e6f2dd",
  navBg: "#e6f2dd",
  navBorder: "rgba(111,127,60,0.2)",
  navLink: "#273338",
  contactBg: "#35594d",
  contactText: "#e6f2dd",
  hamburger: "#273338",
  mobileMenuBg: "#e6f2dd",
  mobileMenuBorder: "rgba(111,127,60,0.3)",
  toggleBg: "rgba(111,127,60,0.15)",
  toggleIndicator: "#35594d",
  arrowStroke: "#6F7F3C",

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
  ctaButtonBg: "#7D9444",
  ctaButtonText: "#f4f4ef",
  ctaPillBg: "#1c2528",
  ctaPillText: "#c8e77b",
  ctaPaper: "rgba(244,238,227,0.7)",

  footerBg: "#3e4f4a",
  footerText: "rgba(183,221,103,0.9)",
};

type Tokens = typeof DARK;
const TRANSITION_CSS = "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease";

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

const CARD_VISUALS: Record<
  number,
  { collapsedCrop: IllustrationCrop; expandedCrop: IllustrationCrop; collapsedArrow?: ArrowDoodle }
> = {
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

// ─── Theme toggle (same pattern as FaqPage) ─────────────────────────────────

function ThemeToggle({ isDark, onToggle, tk }: { isDark: boolean; onToggle: () => void; tk: Tokens }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative flex items-center gap-1 px-1 py-1 rounded-full shrink-0"
      style={{
        backgroundColor: tk.toggleBg,
        border: `1px solid ${isDark ? "rgba(200,231,123,0.2)" : "rgba(111,127,60,0.25)"}`,
        transition: TRANSITION_CSS,
        width: 68,
        height: 34,
      }}
    >
      <motion.div
        className="absolute top-[3px] rounded-full size-[26px] z-0"
        animate={{ left: isDark ? "calc(100% - 29px)" : "3px" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ backgroundColor: tk.toggleIndicator }}
      />
      <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px]">
        <Sun size={14} style={{ color: isDark ? tk.arrowStroke : "#e6f2dd", transition: "color 0.3s" }} />
      </span>
      <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px]">
        <Moon size={14} style={{ color: isDark ? "#e6f2dd" : tk.arrowStroke, transition: "color 0.3s" }} />
      </span>
    </motion.button>
  );
}

// ─── Nav (temporary — will be replaced by the shared team header) ──────────

function Nav({ isDark, onToggle, tk }: { isDark: boolean; onToggle: () => void; tk: Tokens }) {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About us", "Services", "Projects", "FAQs"];

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{ backgroundColor: tk.navBg, borderBottom: `1px solid ${tk.navBorder}`, transition: TRANSITION_CSS }}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 h-[72px] sm:h-[88px] gap-4">
        <img src={imgNavIcon} alt="SocialStack logo" className="w-[40px] h-[40px] object-contain shrink-0" />

        <div className="hidden md:flex items-center gap-6 lg:gap-10 flex-1 justify-center">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="font-['Manrope',sans-serif] font-semibold text-[15px] lg:text-[16px] whitespace-nowrap transition-colors"
              style={{ color: tk.navLink }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggle} tk={tk} />
          <motion.button
            className="font-['Manrope',sans-serif] font-bold text-[14px] lg:text-[15px] px-5 py-[10px] rounded-[800px] whitespace-nowrap"
            style={{ backgroundColor: tk.contactBg, color: tk.contactText, transition: TRANSITION_CSS }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggle} tk={tk} />
          <button
            className="flex flex-col justify-center gap-[5px] w-[44px] h-[44px] items-center rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block h-[2px] w-[22px] rounded-full origin-center" style={{ backgroundColor: tk.hamburger }} />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block h-[2px] w-[22px] rounded-full" style={{ backgroundColor: tk.hamburger }} />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block h-[2px] w-[22px] rounded-full origin-center" style={{ backgroundColor: tk.hamburger }} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: `1px solid ${tk.mobileMenuBorder}`, backgroundColor: tk.mobileMenuBg, transition: TRANSITION_CSS }}
          >
            <div className="flex flex-col px-6 py-3">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="font-['Manrope',sans-serif] font-semibold text-[16px] py-4 transition-colors"
                  style={{ color: tk.navLink, borderBottom: `1px solid ${tk.mobileMenuBorder}` }}
                >
                  {link}
                </a>
              ))}
              <button
                className="mt-4 mb-2 font-['Manrope',sans-serif] font-bold text-[15px] px-5 py-3 rounded-[800px]"
                style={{ backgroundColor: tk.contactBg, color: tk.contactText, transition: TRANSITION_CSS }}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
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

  return (
    <section className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center lg:items-center w-full">
      {/* Left: copy */}
      <div className="flex flex-col gap-5 sm:gap-6 flex-1 min-w-0 lg:max-w-[520px] w-full">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full w-fit" style={{ backgroundColor: tk.pillBg, border: `1px solid ${tk.pillBorder}`, transition: TRANSITION_CSS }}>
          <span className="font-['Manrope',sans-serif] font-medium text-[13px] sm:text-[14px] tracking-[2px] whitespace-nowrap" style={{ color: tk.accentText }}>
            WHAT WE DO
          </span>
        </div>

        {/* Fixed-aspect coordinate frame — exact Figma proportions (511 × 461) */}
        <div className="relative w-full" style={{ aspectRatio: "511/461" }}>
          {/* Spark rays — exact path, exact position (top-right of "We build") */}
          <svg
            className="absolute hidden sm:block"
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

          {/* Underline sketch beneath "Stack" */}
          <svg className="absolute hidden sm:block" style={{ left: "31.33%", top: "83.92%", width: "27.72%", height: "4.35%" }} viewBox="0 0 143.633 22.0289" fill="none" preserveAspectRatio="none">
            <path d={svgPaths.p3cf8e00} stroke={tk.underline} strokeLinecap="round" strokeWidth="2" />
          </svg>

          {/* Two small grey crossing doodle strokes, right of "Stack" */}
          <svg className="absolute hidden sm:block" style={{ left: "73.05%", top: "65%", width: "7%", height: "6.21%" }} viewBox="0 0 37.7663 30.6131" fill="none" preserveAspectRatio="none">
            <path d={svgPaths.p16352f30} stroke={tk.greyDoodle} strokeLinecap="round" strokeWidth="2" />
          </svg>
          <svg className="absolute hidden sm:block" style={{ left: "69.97%", top: "64.37%", width: "7.28%", height: "6.83%" }} viewBox="0 0 39.1966 33.4741" fill="none" preserveAspectRatio="none">
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
      <div className="relative shrink-0 w-full max-w-[480px] lg:max-w-none lg:w-[46%] rounded-[32px] lg:rounded-[60px] overflow-hidden aspect-[4/3] lg:aspect-[8/7]">
        <img alt="SocialStack portfolio stack" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={stackImg} />
        <FloatingStar style={{ left: "8%", top: "42%" }} delay={0} filled tk={tk} />
        <FloatingStar style={{ left: "30%", bottom: "14%" }} delay={1.2} tk={tk} />
        <FloatingStar style={{ right: "18%", top: "12%" }} delay={0.6} tk={tk} />
      </div>
    </section>
  );
}

// ─── 2. TaglineBanner ───────────────────────────────────────────────────────

function TaglineBanner({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const svgPaths = isDark ? svgPathsDark : svgPathsLight;
  return (
    <div className="relative w-full flex items-center justify-center py-6 sm:py-8">
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
    </div>
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
  isOpen,
  onToggle,
  isDark,
  tk,
}: {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
  isDark: boolean;
  tk: Tokens;
}) {
  const thumb = isDark ? service.thumbDark : service.thumbLight;
  const visuals = CARD_VISUALS[service.id];

  return (
    <article className="relative rounded-[20px] sm:rounded-[24px] w-full overflow-hidden" style={{ backgroundColor: tk.cardBg, border: `1px solid ${tk.borderColor}`, transition: TRANSITION_CSS }}>
      {/* Header row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 cursor-pointer text-left bg-transparent border-none"
      >
        <NumberBadge number={service.number} rotation={service.noteRotation} tk={tk} />

        {!isOpen ? (
          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <p className="font-['Manrope',sans-serif] font-extrabold text-[20px] sm:text-[28px] lg:text-[32px] leading-tight tracking-tight shrink-0" style={{ color: tk.cardHeading }}>
              {service.title}
            </p>
            <p className="hidden sm:block font-['Patrick_Hand',sans-serif] text-[18px] lg:text-[22px] leading-tight truncate" style={{ color: tk.accentText }}>
              {service.tagline}
            </p>
          </div>
        ) : (
          <div className="flex-1 min-w-0" />
        )}

        {/* Wide illustration strip, matching the Figma proportions (~3:1), with the
            exact crop for this card plus its reused curved-arrow doodle */}
        {!isOpen && (
          <div className="shrink-0 hidden md:block w-[220px] lg:w-[300px] relative">
            <IllustrationBox crop={visuals.collapsedCrop} src={thumb} alt={service.title}>
              {visuals.collapsedArrow && <ArrowOverlay arrow={visuals.collapsedArrow} color={tk.doodleStroke} />}
            </IllustrationBox>
          </div>
        )}

        <div className="shrink-0 flex items-center justify-center rounded-full size-[38px] sm:size-[48px]" style={{ border: `2px solid ${tk.limeAccent}` }}>
          {isOpen ? <Minus size={18} color={tk.limeAccent} /> : <Plus size={18} color={tk.limeAccent} />}
        </div>
      </button>

      {/* Expandable content */}
      <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.38s cubic-bezier(0.4, 0, 0.2, 1)" }}>
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 pl-[76px] sm:pl-[96px] pr-4 sm:pr-6 pb-6 sm:pb-8 pt-2">
            {/* Details column */}
            <div className="flex flex-col gap-4 flex-1 min-w-0 lg:max-w-[520px]">
              <p className="font-['Manrope',sans-serif] font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.1] tracking-tight" style={{ color: tk.cardHeading }}>
                {service.tagline}
              </p>
              <div>
                <p className="font-['Inter',sans-serif] leading-relaxed text-[18px] sm:text-[20px]" style={{ color: tk.descriptionText }}>
                  {service.description}
                </p>
                <svg className="mt-1 w-[180px] h-[10px]" viewBox="0 0 143.633 22.0289" fill="none">
                  <path d={(isDark ? svgPathsDark : svgPathsLight).p3cf8e00} stroke={tk.limeAccent} strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>

              <div className="flex flex-col gap-3 mt-1">
                <p className="font-['Caveat_Brush',sans-serif] text-[26px] sm:text-[30px]" style={{ color: tk.limeAccent }}>
                  What's inside
                </p>
                <ul className="flex flex-col gap-3">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="font-['Inter',sans-serif] font-medium text-[17px] sm:text-[19px] leading-relaxed flex items-start gap-2" style={{ color: tk.bulletsText }}>
                      <span style={{ color: tk.limeAccent }} className="shrink-0 mt-[2px]">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Illustration column — exact per-card crop, no overlay text of any kind */}
            <div className="flex flex-col gap-3 flex-1 min-w-0 lg:max-w-[440px]">
              <IllustrationBox crop={visuals.expandedCrop} src={thumb} alt={service.title} rounded />

              <p className="font-['Caveat_Brush',sans-serif] text-[22px] sm:text-[26px]" style={{ color: tk.limeAccent }}>
                {service.toolboxLabel}
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {service.tools.map((tool, i) => (
                  <ToolPill key={i} img={tool.img} alt={tool.alt} tk={tk} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── 4. ServicesSection ─────────────────────────────────────────────────────

function ServicesSection({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set([1]));

  const toggleCard = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="flex flex-col gap-4 sm:gap-6 w-full">
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} isOpen={openIds.has(service.id)} onToggle={() => toggleCard(service.id)} isDark={isDark} tk={tk} />
      ))}
    </section>
  );
}

// ─── 5. PricingCTA ──────────────────────────────────────────────────────────

function PricingCTA({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const paperPath = isDark ? svgPathsDark.p28df1400 : svgPathsLight.p38c75100;

  return (
    <section className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1236 372" fill="none" preserveAspectRatio="none">
          <defs>
            <clipPath id="ctaPaperClip" clipPathUnits="userSpaceOnUse">
              <path d={paperPath} />
            </clipPath>
            {/* Grain/noise texture — density 100%, grain size ~0.5, colour #000000, layered on the paper fill */}
            <filter id="ctaPaperNoise" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.28 0.28 0.28 0 0" />
            </filter>
          </defs>
          <path d={paperPath} fill={tk.ctaPaper} />
          <g clipPath="url(#ctaPaperClip)">
            <rect width="1236" height="372" filter="url(#ctaPaperNoise)" />
          </g>
        </svg>
      </div>

      {/* Only the PRICING oval sits top-right — everything else is centered inside the paper area */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-10 inline-flex items-center justify-center px-4 py-2 rounded-full z-10" style={{ backgroundColor: tk.ctaPillBg }}>
        <span className="font-['Manrope',sans-serif] font-medium text-[12px] sm:text-[13px] tracking-[2px]" style={{ color: tk.ctaPillText }}>
          PRICING
        </span>
      </div>

      <div className="relative flex flex-col items-center text-center gap-4 sm:gap-5 px-6 sm:px-12 pt-14 sm:pt-16 pb-10 sm:pb-14 max-w-[620px] mx-auto">
        <p className="font-['Manrope',sans-serif] font-extrabold leading-tight" style={{ color: tk.ctaHeading, fontSize: "clamp(26px, 4.5vw, 48px)" }}>
          Each Stack is different.
        </p>

        <p className="font-['Manrope',sans-serif] font-medium max-w-[480px] leading-relaxed text-[14px] sm:text-[16px]" style={{ color: tk.ctaBody }}>
          Every business has different goals, timelines and requirements. We'll recommend the right services and give you a clear quote, before we build anything.
        </p>

        <a
          href="mailto:ss.socialstack@gmail.com"
          className="inline-flex items-center justify-center rounded-[10px] px-6 sm:px-7 py-3 no-underline"
          style={{ backgroundColor: tk.ctaButtonBg }}
        >
          <span className="font-['Manrope',sans-serif] font-extrabold text-[13px] sm:text-[14px] tracking-[1.5px]" style={{ color: tk.ctaButtonText }}>
            LET'S PRICE YOUR STACK
          </span>
        </a>
      </div>
    </section>
  );
}

// ─── 6. FooterPlaceholder ───────────────────────────────────────────────────

function FooterPlaceholder({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  const gmailIcon = isDark ? imgGmailD : imgGmailL;
  const igIcon = isDark ? imgInstagramD : imgInstagramL;
  const liIcon = isDark ? imgLinkedinD : imgLinkedinL;

  return (
    <footer className="w-full mt-10 sm:mt-16" style={{ backgroundColor: tk.footerBg, transition: TRANSITION_CSS }}>
      <div className="max-w-[1360px] mx-auto flex flex-col lg:flex-row gap-8 px-6 sm:px-10 lg:px-20 py-10 sm:py-14">
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-center gap-3">
            <img alt="SocialStack logo" src={imgLogo} className="w-12 h-12 object-contain" />
            <span className="font-['Caveat_Brush',sans-serif] text-[26px]" style={{ color: tk.footerText }}>
              SocialStack
            </span>
          </div>
          <p className="font-['Outfit',sans-serif] font-light max-w-[480px] leading-relaxed text-[16px] sm:text-[18px]" style={{ color: tk.footerText }}>
            We provide ease in all your tech needs. Contact us today for a quote or reach out to learn more about our services.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a href="mailto:ss.socialstack@gmail.com" aria-label="Email">
              <img alt="Email" src={gmailIcon} className="w-8 h-8 object-cover rounded-full" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img alt="Instagram" src={igIcon} className="w-8 h-8 object-cover rounded-full" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img alt="LinkedIn" src={liIcon} className="w-8 h-8 object-cover rounded-full" />
            </a>
          </div>
          <p className="font-['Outfit',sans-serif] font-medium text-[15px] sm:text-[16px]" style={{ color: tk.footerText }}>
            ss.socialstack@gmail.com
          </p>
        </div>

        <div className="flex flex-col gap-1">
          {["About Us", "Our Services", "FAQs", "Contact Us"].map((link) => (
            <a key={link} href="#" className="font-['Outfit',sans-serif] font-light text-[16px] sm:text-[18px] leading-[2.2] no-underline" style={{ color: tk.footerText }}>
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-6 sm:px-10 lg:px-20 pb-6 sm:pb-8">
        <p className="font-['Outfit',sans-serif] font-extralight text-[13px] sm:text-[14px]" style={{ color: tk.footerText }}>
          © 2026 SocialStack
        </p>
        <p className="font-['Outfit',sans-serif] font-extralight text-[13px] sm:text-[14px]" style={{ color: tk.footerText }}>
          All rights reserved
        </p>
      </div>
    </footer>
  );
}

// ─── Root page ──────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [isDark, setIsDark] = useState(true);
  const tk = isDark ? DARK : LIGHT;

  return (
    <motion.div animate={{ backgroundColor: tk.pageBg }} transition={{ duration: 0.4 }} className="min-h-screen">
      <Nav isDark={isDark} onToggle={() => setIsDark((v) => !v)} tk={tk} />

      <main className="w-full max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-14 flex flex-col gap-14 sm:gap-20">
        <ServicesHero isDark={isDark} tk={tk} />
        <TaglineBanner isDark={isDark} tk={tk} />
        <ServicesSection isDark={isDark} tk={tk} />
        <PricingCTA isDark={isDark} tk={tk} />
      </main>

      <FooterPlaceholder isDark={isDark} tk={tk} />
    </motion.div>
  );
}