import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "motion/react";
import { Sun, Moon } from "lucide-react";
import darkSvg from "../imports/DFaQs-1/svg-za9lichgna";
import lightSvg from "../imports/LightFaQs/svg-vyh1hu06is";
import imgStack from "../imports/DFaQs-1/7d701444326e8df96a25df0b6c45d1370c34d2ea.png";

// ─── Theme tokens ─────────────────────────────────────────────────────────────

const DARK = {
  pageBg: "#222d31",
  navBg: "#222d31",
  navBorder: "transparent",
  logoPlaceholder: "#d9d9d9",
  navLink: "#e6f2dd",
  contactBg: "#c6e7bc",
  contactText: "#273338",
  faqsPillBg: "#2e3936",
  faqsPillText: "#c8e77b",
  faqsPillBorder: "rgba(196,240,107,0.15)",
  questionsFrom: "#ffffff",
  questionsTo: "#8cc9b4",
  weveGot: "rgba(183,221,103,0.8)",
  answersFrom: "rgba(255,255,255,0.8)",
  answersTo: "rgba(99,119,55,0.8)",
  decoMark: "#D9D9D9",
  squiggle: "#A8D465",
  tagline: "#c7d1cc",
  accent: "rgba(183,221,103,0.8)",
  brushFill: "#B7DD67",
  brushOpacity: 0.8,
  cardBg: "#253236",
  cardBorder: "#3f5757",
  questionText: "#f4f4ef",
  bulbFill: "#B7DD67",
  bulbOpacity: 0.8,
  arrowStroke: "#B7DD67",
  answerText: "#c7d1cc",
  hamburger: "#e6f2dd",
  mobileMenuBg: "#222d31",
  mobileMenuBorder: "#3f5757",
  hoverShadow: "rgba(183,221,103,0.12)",
  starFill: "#A8D465",
  starStroke: "#7DAA52",
  toggleBg: "#2e3936",
  toggleIndicator: "#c8e77b",
};

const LIGHT = {
  pageBg: "#e6f2dd",
  navBg: "#e6f2dd",
  navBorder: "rgba(111,127,60,0.2)",
  logoPlaceholder: "#4f5a4b",
  navLink: "#273338",
  contactBg: "#35594d",
  contactText: "#e6f2dd",
  faqsPillBg: "#2e3936",
  faqsPillText: "#c8e77b",
  faqsPillBorder: "rgba(196,240,107,0.15)",
  questionsFrom: "#2f372d",
  questionsTo: "#6e7f3f",
  weveGot: "rgba(111,127,60,0.9)",
  answersFrom: "rgba(47,55,45,0.9)",
  answersTo: "rgba(110,127,63,0.5)",
  decoMark: "#4F5A4B",
  squiggle: "#6F7F3C",
  tagline: "#273338",
  accent: "rgba(111,127,60,0.9)",
  brushFill: "#7D9444",
  brushOpacity: 0.9,
  cardBg: "#d4e1c5",
  cardBorder: "rgba(111,127,60,0.2)",
  questionText: "#2f372d",
  bulbFill: "#6F7F3C",
  bulbOpacity: 0.9,
  arrowStroke: "#6F7F3C",
  answerText: "#4f5a4b",
  hamburger: "#273338",
  mobileMenuBg: "#e6f2dd",
  mobileMenuBorder: "rgba(111,127,60,0.3)",
  hoverShadow: "rgba(111,127,60,0.15)",
  starFill: "#A8D465",
  starStroke: "#7DAA52",
  toggleBg: "rgba(111,127,60,0.15)",
  toggleIndicator: "#35594d",
};

type Tokens = typeof DARK;

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const faqItems = [
  { id: 1, question: "What does the term social stack mean?", answer: "Social stack refers to the collection of digital tools, platforms, and strategies used to build and grow your online presence — from social media channels to content workflows and analytics." },
  { id: 2, question: "How long does a project take?", answer: "Project timelines vary based on scope and complexity. Most projects range from 2 to 8 weeks, with a clear roadmap established during our kickoff session." },
  { id: 3, question: "How much does social stack cost?", answer: "Pricing depends on the services you need. We offer flexible packages starting from a discovery session. Reach out for a custom quote tailored to your goals." },
  { id: 4, question: "What is your process like?", answer: "We start with a strategy call to understand your goals, followed by research, planning, execution, and review phases — with your feedback at every step." },
  { id: 5, question: "Will i get support after the project is done?", answer: "Absolutely. We offer ongoing retainer support, monthly check-ins, and performance reviews to make sure everything keeps running smoothly after launch." },
  { id: 6, question: "Can I hire you for just one service?", answer: "Yes! Whether you need just content creation, social strategy, or full-stack support, we can tailor our services to exactly what you need." },
  { id: 7, question: `Do i need to speak "tech"?`, answer: "Not at all. We translate everything into plain language and guide you through every decision — no jargon, no confusion." },
];

// ─── Transition helper ────────────────────────────────────────────────────────

const TRANSITION_CSS = "background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease";

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

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
      {/* Sliding indicator */}
      <motion.div
        className="absolute top-[3px] rounded-full size-[26px] z-0"
        animate={{ left: isDark ? "calc(100% - 29px)" : "3px" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ backgroundColor: tk.toggleIndicator }}
      />
      {/* Sun icon */}
      <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px]">
        <Sun
          size={14}
          style={{ color: isDark ? tk.arrowStroke : "#e6f2dd", transition: "color 0.3s" }}
        />
      </span>
      {/* Moon icon */}
      <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px]">
        <Moon
          size={14}
          style={{ color: isDark ? "#e6f2dd" : tk.arrowStroke, transition: "color 0.3s" }}
        />
      </span>
    </motion.button>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav({ isDark, onToggle, tk }: { isDark: boolean; onToggle: () => void; tk: Tokens }) {
  const [open, setOpen] = useState(false);
  const links = ["Services", "About us", "Projects", "FAQs"];

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{
        backgroundColor: tk.navBg,
        borderBottom: `1px solid ${tk.navBorder}`,
        transition: TRANSITION_CSS,
      }}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 h-[72px] sm:h-[88px] gap-4">
        {/* Logo */}
        <div
          className="w-[40px] h-[40px] rounded-[6px] shrink-0"
          style={{ backgroundColor: tk.logoPlaceholder, transition: TRANSITION_CSS }}
        />

        {/* Desktop links */}
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

        {/* Desktop right: toggle + contact */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggle} tk={tk} />
          <motion.button
            className="font-['Manrope',sans-serif] font-bold text-[14px] lg:text-[15px] px-5 py-[10px] rounded-[800px] whitespace-nowrap"
            style={{
              backgroundColor: tk.contactBg,
              color: tk.contactText,
              transition: TRANSITION_CSS,
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
          </motion.button>
        </div>

        {/* Mobile right: toggle + hamburger */}
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

      {/* Mobile dropdown */}
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

// ─── Bulb icon ────────────────────────────────────────────────────────────────

function BulbIcon({ size = 30, tk }: { size?: number; tk: Tokens }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div className="absolute overflow-clip" style={{ width: size, height: size }}>
        <div className="absolute" style={{ inset: `${size * 0.028}px ${size * 0.139}px` }}>
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6562 28.3125">
            <g>
              <path d={darkSvg.p272e5600} fill={tk.bulbFill} fillOpacity={tk.bulbOpacity} />
              <path d={darkSvg.p1b371500} fill={tk.bulbFill} fillOpacity={tk.bulbOpacity} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Floating star ────────────────────────────────────────────────────────────

function FloatingStar({ style, delay = 0, filled = false, tk }: { style: React.CSSProperties; delay?: number; filled?: boolean; tk: Tokens }) {
  return (
    <motion.div
      className="absolute"
      style={{ width: 27, height: 22, ...style }}
      animate={{ y: [-5, 5, -5], rotate: [0, 15, 0, -15, 0] }}
      transition={{
        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <svg className="block size-full" fill="none" viewBox="0 0 26.5 22.4017">
        <path d={darkSvg.p13e16b80} fill={filled ? tk.starFill : "none"} stroke={tk.starStroke} />
      </svg>
    </motion.div>
  );
}

// ─── Hero display text ────────────────────────────────────────────────────────

function HeroDisplayText({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  return (
    <div className="relative w-full">
      {/* "Questions?" */}
      <div style={{ transform: "rotate(-1.8deg)", transformOrigin: "left center" }}>
        <p
          className="font-['Patrick_Hand',sans-serif] not-italic leading-none"
          style={{
            fontSize: "clamp(56px, 13vw, 95px)",
            letterSpacing: "-0.04em",
            color: tk.questionsFrom,
            transition: "color 0.4s ease",
          }}
        >
          Questions?
        </p>
      </div>

      {/* Squiggle underline — desktop only */}
      <motion.div
        className="hidden md:block absolute"
        style={{ width: 142, height: 20, left: 268, top: 220 }}
        animate={{ x: [-3, 3, -3], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="block w-full h-full" fill="none" viewBox="0 0 143.633 22.0289">
          <path d={darkSvg.p3cf8e00} stroke={tk.squiggle} strokeLinecap="round" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Sketch marks — desktop only */}
      <motion.div
        className="hidden md:block absolute"
        style={{ width: 36, height: 29, left: 374, top: 72 }}
        animate={{ rotate: [-5, 5, -5], y: [-2, 2, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg className="block w-full h-full" fill="none" viewBox="0 0 37.7663 30.6131">
          <path d={darkSvg.p16352f30} stroke={tk.decoMark} strokeLinecap="round" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div
        className="hidden md:block absolute"
        style={{ width: 31, height: 37, left: 375, top: 2 }}
        animate={{ rotate: [85, 95, 85], x: [-2, 2, -2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg className="block w-full h-full" fill="none" viewBox="0 0 39.1966 33.4741">
          <path d={darkSvg.p3358e300} stroke={tk.decoMark} strokeLinecap="round" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Animated Vector 6 — desktop only */}
      <motion.div
        className="hidden md:flex absolute items-center justify-center"
        style={{ width: 62, height: 27, left: 371, top: 47 }}
        initial={{ scaleX: 1.2, scaleY: 1.2 }}
        animate={{ scaleX: [1.2, 1, 1], scaleY: [1.2, 1, 1] }}
        transition={{
          scaleX: { duration: 2, times: [0, 0.25, 1], ease: ["easeOut", "linear"], repeat: Infinity },
          scaleY: { duration: 2, times: [0, 0.25, 1], ease: ["easeOut", "linear"], repeat: Infinity },
        }}
      >
        <div className="-rotate-4 size-full">
          <svg className="block size-full" fill="none" viewBox="0 0 62 25">
            <path d={darkSvg.p1f3fe04} stroke={tk.decoMark} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </motion.div>

      {/* "We've got answers" */}
      <div className="mt-1 sm:mt-2" style={{ transform: "rotate(-1.8deg)", transformOrigin: "left center" }}>
        <p
          className="font-['Patrick_Hand',sans-serif] not-italic leading-none"
          style={{
            fontSize: "clamp(50px, 12vw, 85px)",
            letterSpacing: "-0.04em",
            color: tk.weveGot,
            transition: "color 0.4s ease",
          }}
        >
          {"We've got "}
          <span style={{ color: tk.weveGot }}>answers</span>
        </p>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center mb-2 sm:mb-4">
      {/* Left: text */}
      <div className="flex flex-col gap-5 sm:gap-6 flex-1 min-w-0 lg:max-w-[550px] lg:min-w-[480px]">
        {/* FAQs pill */}
        <motion.div
          className="relative rounded-[999px] w-fit"
          style={{ backgroundColor: tk.faqsPillBg, height: 54 }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center px-4 h-full sm:h-[68px]">
            <p className="font-['Manrope',sans-serif] font-medium leading-[20px] text-[16px] sm:text-[20px] tracking-[2px] whitespace-nowrap" style={{ color: tk.faqsPillText }}>
              FAQs
            </p>
          </div>
          <div aria-hidden className="absolute border inset-0 pointer-events-none rounded-[999px]" style={{ borderColor: tk.faqsPillBorder }} />
        </motion.div>

        <HeroDisplayText isDark={isDark} tk={tk} />

        <p
          className="font-['Manrope',sans-serif] font-extrabold text-[14px] sm:text-[18px] lg:text-[20px] leading-relaxed max-w-[434px]"
          style={{ color: tk.tagline, transition: "color 0.4s ease" }}
        >
          Everything you need to know about working with{" "}
          <span style={{ color: tk.accent, transition: "color 0.4s ease" }}>social stack</span>
        </p>
      </div>

      {/* Right: stack image — desktop only */}
      <div className="hidden lg:block relative rounded-[99px] overflow-hidden shrink-0 w-[520px] xl:w-[680px] h-[440px] xl:h-[520px]">
        <img alt="Social stack notebooks" className="absolute inset-0 w-full h-full object-contain pointer-events-none" src={imgStack} />
        <FloatingStar style={{ left: 28, top: 201 }} delay={0} filled tk={tk} />
        <FloatingStar style={{ left: 475, top: 65 }} delay={1.2} tk={tk} />
        <FloatingStar style={{ right: 20, bottom: 40 }} delay={0.6} tk={tk} />
      </div>
    </section>
  );
}

// ─── Divider brush ────────────────────────────────────────────────────────────

function DividerBrush({ isDark, tk }: { isDark: boolean; tk: Tokens }) {
  // Dark uses the narrower brush (560w), light uses the wider one (847w)
  const brushPath = isDark ? darkSvg.p381f2700 : lightSvg.p38a6ba00;
  const viewBox = isDark ? "0 0 560.846 94" : "0 0 847.642 94";

  return (
    <div className="w-full flex justify-center py-4 sm:py-6">
      <motion.div
        className="relative h-[60px] sm:h-[80px] lg:h-[94px] flex items-center justify-center"
        style={{ width: "min(528px, 100%)" }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0">
          <svg className="absolute block inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
            <path d={brushPath} fill={tk.brushFill} fillOpacity={tk.brushOpacity} />
          </svg>
        </div>
        <p className="relative z-10 font-['Caveat_Brush',sans-serif] not-italic text-[#273338] text-[13px] sm:text-[22px] lg:text-[28px] text-center leading-tight px-8">
          FREQUENTLY ASKED QUESTIONS
        </p>
      </motion.div>
    </div>
  );
}

// ─── FAQ row — sticky stack effect ───────────────────────────────────────────

function FaqRow({
  item,
  index,
  isOpen,
  onToggle,
  tk,
}: {
  item: (typeof faqItems)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  tk: Tokens;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const stickyTop = 88 + index * 10;

  return (
    <div ref={wrapperRef} style={{ position: "sticky", top: stickyTop, zIndex: 10 + index }}>
      <motion.div
        style={{ scale }}
        whileHover={{ y: -4, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
        className="origin-top"
      >
        <motion.button
          onClick={onToggle}
          className="relative rounded-[18px] w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            backgroundColor: tk.cardBg,
            transition: TRANSITION_CSS,
          }}
          whileHover={{ boxShadow: `0 8px 40px ${tk.hoverShadow}` }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col px-4 sm:px-7 py-5 sm:py-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-[30px] flex-1 min-w-0">
                <BulbIcon size={30} tk={tk} />
                <p
                  className="font-['Manrope',sans-serif] font-semibold leading-snug text-[13px] sm:text-[18px] lg:text-[24px] tracking-[0.02em] text-left flex-1"
                  style={{ color: tk.questionText, transition: "color 0.4s ease" }}
                >
                  {item.question}
                </p>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="relative shrink-0 size-[28px] sm:size-[30px]"
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                  <g clipPath="url(#faq-clip)">
                    <path d={darkSvg.p972480} stroke={tk.arrowStroke} strokeLinecap="round" strokeOpacity="0.9" strokeWidth="2" />
                  </g>
                  <defs>
                    <clipPath id="faq-clip">
                      <rect fill="white" height="30" width="30" />
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p
                    className="font-['Manrope',sans-serif] text-[13px] sm:text-[15px] leading-relaxed mt-3 pb-1 pl-[42px] sm:pl-[60px]"
                    style={{ color: tk.answerText, transition: "color 0.4s ease" }}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div
            aria-hidden
            className="absolute border inset-0 pointer-events-none rounded-[18px]"
            style={{ borderColor: tk.cardBorder, transition: "border-color 0.4s ease" }}
          />
        </motion.button>
      </motion.div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [openId, setOpenId] = useState<number | null>(null);

  const tk = isDark ? DARK : LIGHT;

  return (
    <motion.div
      animate={{ backgroundColor: tk.pageBg }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <Nav isDark={isDark} onToggle={() => setIsDark((v) => !v)} tk={tk} />

      <main className="w-full max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-10">
        <Hero isDark={isDark} tk={tk} />
        <DividerBrush isDark={isDark} tk={tk} />

        <section className="relative flex flex-col gap-3 sm:gap-4 mt-2 pb-[40vh]">
          {faqItems.map((item, index) => (
            <FaqRow
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              tk={tk}
            />
          ))}
        </section>
      </main>
    </motion.div>
  );
}
