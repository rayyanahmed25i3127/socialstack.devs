import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

// ─── Assets (still used directly by this page's Hero / FAQ divider) ────────
import imgStack from "../../imports/DFaQs-1/7d701444326e8df96a25df0b6c45d1370c34d2ea.png";
import darkSvgPaths from "../../imports/DFaQs-1/svg-hylx692lcq";

import imgLightStack from "../../imports/LightFaQs/7d701444326e8df96a25df0b6c45d1370c34d2ea.png";
import lightSvgPaths from "../../imports/LightFaQs/svg-7o19qwhi4o";

// ─── FAQ data ───────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What does the term social stack mean?",
    a: "\"Social\" is all about people, content, and community. \"Stack\" is everything working behind the scenes: design, development, branding, and strategy. Together, it's the complete stack your brand needs to grow online."
  },
  {
    q: "How long does a project take?",
    a: "It depends on the project, but most websites and branding projects take around 2–5 weeks. We'll always share a clear timeline before we begin, so there are no surprises."
  },
  {
    q: "How much does social stack cost?",
    a: "Every project is different, so pricing depends on your goals and the scope of work. Tell us what you're building, and we'll recommend the best solution without unnecessary extras."
  },
  {
    q: "What is your process like?",
    a: "Simple: we discover, plan, design, build, and launch. You'll be involved throughout the process with regular updates and feedback, so nothing feels like a black box."
  },
  {
    q: "Will i get support after the project is done?",
    a: "Absolutely. Whether it's fixing bugs, updating content, or helping you settle in, we're just a message away even after launch."
  },
  {
    q: "Can I hire you for just one service?",
    a: "Of course! Whether you only need a website, branding, content, or design, we're happy to jump in wherever you need us. Feel free to contact anytime."
  },
  {
    q: "Do i need to speak “tech”?",
    a: "Not at all. You tell us what you're trying to achieve; we'll handle the jargon, the code, and everything in between."
  }
];

// ─── FAQ accordion ──────────────────────────────────────────────────────────

function BulbIcon({ theme = "dark" }) {
  const isLight = theme === "light";
  const svgPaths = isLight ? lightSvgPaths : darkSvgPaths;
  return (
    <div className="w-[30px] h-[30px] flex-shrink-0 relative">
      <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 21.6562 28.3125">
        <path d={svgPaths.p272e5600} fill={isLight ? "#6F7F3C" : "#B7DD67"} fillOpacity={isLight ? "0.9" : "0.8"} />
        <path d={svgPaths.p1b371500} fill={isLight ? "#6F7F3C" : "#B7DD67"} fillOpacity={isLight ? "0.9" : "0.8"} />
      </svg>
    </div>
  );
}

function ChevronIcon({ theme = "dark" }) {
  const isLight = theme === "light";
  const svgPaths = isLight ? lightSvgPaths : darkSvgPaths;
  return (
    <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 30 30">
      <path
        d={svgPaths.p972480}
        stroke={isLight ? "#6F7F3C" : "#B7DD67"}
        strokeLinecap="round"
        strokeOpacity="0.8"
        strokeWidth="2"
      />
    </svg>
  );
}

function FaqAccordion({ theme = "dark" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isLight = theme === "light";

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1150px] mx-auto px-4 md:px-10 pb-24 flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
            <div
            key={index}
            className={`rounded-[18px] ${isLight ? "bg-[#e6f2dd]" : "bg-[#222d31]"}`}
            style={{
              position: "sticky",
              top: 100 + index * 14,
              zIndex: 10 + index,
            }}
          >
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <button
              onClick={() => toggle(index)}
              className={`${isLight ? "bg-[rgba(111,127,60,0.15)] border-[rgba(111,127,60,0.15)] hover:bg-[rgba(111,127,60,0.2)] focus:ring-[#6F7F3C]" : "bg-[#253236] border-[#3f5757] hover:bg-[#2a383d] focus:ring-[#B7DD67]"} w-full border rounded-[18px] text-left relative overflow-hidden transition-colors focus:outline-none focus:ring-2`}
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between px-7 py-8 gap-4">
                <div className="flex items-center gap-[30px]">
                  <BulbIcon theme={theme} />
                  <h3 className={`font-['Manrope'] font-semibold ${isLight ? "text-[#2f372d]" : "text-[#f4f4ef]"} text-[20px] md:text-[24px] leading-[32px] tracking-[0.72px]`}>
                    {faq.q}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronIcon theme={theme} />
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-7 pb-8 pt-0">
                      <p className={`font-['Manrope'] font-medium ${isLight ? "text-[#2f372d]" : "text-[#c7d1cc]"} text-[17px] md:text-[19px] leading-[30px] md:leading-[36px] ml-[60px]`}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
          </div>
        );
      })}
    </section>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function HeroFrame({ theme = "dark" }) {
  const isLight = theme === "light";
  const svgPaths = isLight ? lightSvgPaths : darkSvgPaths;
  return (
    <div className="w-full flex flex-col overflow-visible">

      {/* Row 1: "Questions?" + doodles. Font-size lives on this flex row so the
          doodles (sized in em) always scale in lock-step with the heading.
          The row gap keeps a consistent clearance from the "?" while the text keeps right-side breathing room so glyph overhangs do not look clipped. */}
      <div className="-rotate-[1.8deg] origin-top-left flex items-start gap-[0.34em] sm:gap-[0.30em] md:gap-[0.25em] leading-[1.08] overflow-visible
        text-[52px] sm:text-[64px] md:text-[78px] lg:text-[88px] xl:text-[95px]">
        <p className={`bg-clip-text bg-gradient-to-r ${isLight ? "from-[#2f372d] to-[#6e7f3f]" : "from-white to-[#8cc9b4]"} to-[82%] font-['Patrick_Hand'] leading-[1.08] tracking-[-3.8px] text-transparent whitespace-nowrap shrink-0 text-[1em] relative z-10 overflow-visible pr-[0.08em] mr-[-0.08em]`}>
          Questions?
        </p>

        {/* Doodles — sized in em; column font is reduced on mobile so the whole
            cluster is noticeably smaller on phones, then full-size from md up. */}
        <div className="flex flex-col items-center shrink-0 pt-[0.06em] relative z-0 gap-[0.06em] text-[0.72em] sm:text-[0.85em] md:text-[1em]">
          {/* Vector 4 — curve, rotated 90° */}
          <div className="rotate-90">
            <svg
              className="w-[0.39em] h-[0.33em]"
              fill="none" viewBox="0 0 39.1966 33.4741"
            >
              <path d={svgPaths.p3358e300} stroke={isLight ? "#4F5A4B" : "#D9D9D9"} strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>

          {/* Vector 6 — animated pulsing wave */}
          <motion.div
            className="-rotate-4"
            initial={{ scaleX: 1.2, scaleY: 1.2 }}
            animate={{ scaleX: [1.2, 1, 1], scaleY: [1.2, 1, 1] }}
            transition={{
              scaleX: { duration: 2, times: [0, 0.25, 1], ease: ["easeOut", "linear"], repeat: Infinity },
              scaleY: { duration: 2, times: [0, 0.25, 1], ease: ["easeOut", "linear"], repeat: Infinity },
            }}
          >
            <svg
              className="w-[0.63em] h-[0.24em]"
              fill="none" viewBox="0 0 62 25"
            >
              <path d={svgPaths.p1f3fe04} stroke={isLight ? "#4F5A4B" : "#D9D9D9"} strokeLinecap="round" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Vector 3 — zigzag */}
          <svg
            className="w-[0.38em] h-[0.30em]"
            fill="none" viewBox="0 0 37.7663 30.6131"
          >
            <path d={svgPaths.p16352f30} stroke={isLight ? "#4F5A4B" : "#D9D9D9"} strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Row 2: "We've got answers" with wavy line anchored under "answers" */}
      <div className="-rotate-[1.8deg] origin-top-left -mt-1 sm:-mt-2 md:-mt-3 overflow-visible">
        <p className={`font-['Patrick_Hand'] tracking-[-3.4px] ${isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[rgba(183,221,103,0.8)]"} whitespace-nowrap
          text-[44px] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[85px] overflow-visible leading-[1.12]`}>
          {`We've got `}
          {/* "answers" + wavy underline as one inline unit. The line is anchored beneath the word with padding and z-index separation, so it cannot cover the final "s" or sit over the letters. */}
          <span className="relative inline-block overflow-visible pb-[0.18em] pr-[0.16em] mr-[-0.16em]">
            <span className={`relative z-10 inline-block overflow-visible bg-clip-text bg-gradient-to-b ${isLight ? "from-[rgba(111,127,60,0.9)] to-[rgba(111,127,60,0.9)]" : "from-[rgba(255,255,255,0.8)] to-[rgba(99,119,55,0.8)]"} text-transparent pr-[0.16em] mr-[-0.16em] tracking-[-0.02em]`}>
              answers
            </span>
            {/* Wavy line — Figma-sized: 141.633×20.029 at 85px type = 1.67em×0.24em */}
            <svg
              className="absolute left-[0.02em] top-[1.18em] z-0 w-[1.67em] h-[0.24em] pointer-events-none overflow-visible"
              fill="none" viewBox="0 0 143.633 22.0289" preserveAspectRatio="none"
            >
              <path d={svgPaths.p3cf8e00} stroke={isLight ? "#6F7F3C" : "#A8D465"} strokeLinecap="round" strokeWidth="2" />
            </svg>
          </span>
        </p>
      </div>

    </div>
  );
}

function Hero({ theme = "dark" }) {
  const isLight = theme === "light";
  const svgPaths = isLight ? lightSvgPaths : darkSvgPaths;
  return (
    <section className="w-full flex flex-col lg:flex-row gap-10 items-center justify-between px-4 md:px-10 pt-2 pb-10 max-w-[1400px] mx-auto">

      {/* Left: FAQ header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 w-full lg:w-[43%] items-start"
      >
        {/* FAQs badge */}
        <div className={`${isLight ? "bg-[#526862]" : "bg-[#2e3936]"} rounded-full px-6 py-3 border border-[rgba(196,240,107,0.15)] inline-block`}>
          <p className="font-['Manrope'] font-medium text-[#c8e77b] text-lg tracking-[2px] uppercase">
            FAQs
          </p>
        </div>

        <HeroFrame theme={theme} />

        {/* Subtitle */}
        <p className={`font-['Manrope'] font-extrabold ${isLight ? "text-[#273338]" : "text-[#c7d1cc]"} text-[18px] md:text-[20px] max-w-[434px] leading-[32px] mt-4`}>
          Everything you need to know about working with{" "}
          <span className={isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[rgba(183,221,103,0.8)]"}>social stack</span>
        </p>
      </motion.div>

      {/* Right: Stack image with float animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-[55%] relative"
      >
        <div className="relative w-full aspect-[745/547] max-w-[745px] mx-auto rounded-[99px] overflow-hidden">
          <motion.img
            src={isLight ? imgLightStack : imgStack}
            alt="Social Stack Illustration"
            className="w-full h-full object-contain"
            animate={{ y: [0, -12, 0], rotate: [0, 0.6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Star 1 — left side */}
          <div className="absolute top-[36%] left-[4%] w-[26px] h-[22px] pointer-events-none">
            <svg className="w-full h-full" fill="none" viewBox="0 0 26.5 22.4017">
              <path d={svgPaths.p13e16b80} fill="#A8D465" stroke="#7DAA52" />
            </svg>
          </div>
          {/* Star 2 — upper right */}
          <div className="absolute top-[12%] right-[14%] w-[26px] h-[22px] pointer-events-none">
            <svg className="w-full h-full" fill="none" viewBox="0 0 26.5 22.4017">
              <path d={svgPaths.p13e16b80} stroke="#7DAA52" />
            </svg>
          </div>
        </div>
      </motion.div>

    </section>
  );
}

// ─── Divider ────────────────────────────────────────────────────────────────

function FaqDivider({ theme = "dark" }) {
  const isLight = theme === "light";
  const svgPaths = isLight ? lightSvgPaths : darkSvgPaths;
  return (
    <div className="w-full flex justify-center py-8 md:py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative w-[90vw] ${isLight ? "max-w-[798px]" : "max-w-[528px]"} h-[70px] md:h-[94px] flex items-center justify-center`}
      >
        {/* Actual Figma brush stroke SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          fill="none"
          viewBox={isLight ? "0 0 847.642 94" : "0 0 560.846 94"}
          preserveAspectRatio="none"
        >
<path d={isLight ? lightSvgPaths.p38a6ba00 : darkSvgPaths.p381f2700} fill={isLight ? "#7D9444" : "#B7DD67"} fillOpacity={isLight ? "0.9" : "0.8"} />        </svg>
        <p className={`relative font-['Caveat_Brush'] text-[#273338] ${isLight ? "text-2xl md:text-[45px]" : "text-2xl md:text-[34px]"} leading-[32px] text-center z-10 px-4 whitespace-nowrap`}>
          FREQUENTLY ASKED QUESTIONS
        </p>
      </motion.div>
    </div>
  );
}

// ─── FAQs Page ──────────────────────────────────────────────────────────────

export default function FaqPage() {
  const [theme, setTheme] = useState("dark");
  const isLight = theme === "light";

  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-300 ${isLight ? "bg-[#e6f2dd] text-[#273338]" : "bg-[#222d31] text-white"}`}>
      <Header theme={theme} onThemeChange={setTheme} />
      <Hero theme={theme} />
      <FaqDivider theme={theme} />
      <FaqAccordion theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
