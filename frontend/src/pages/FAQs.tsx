import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

// ─── Assets ─────────────────────────────────────────────────────────────────
import imgIconPlaceholder from "../imports/Nav/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";
import navSvgPaths from "../imports/Nav/svg-bwxa6ajcay";

import imgStack from "../imports/DFaQs-1/7d701444326e8df96a25df0b6c45d1370c34d2ea.png";
import darkSvgPaths from "../imports/DFaQs-1/svg-hylx692lcq";

import imgLightLogo from "../imports/LightFaQs/7827342e88d818352b12b7398ddea508cdbb3d6c.png";
import imgLightStack from "../imports/LightFaQs/7d701444326e8df96a25df0b6c45d1370c34d2ea.png";
import imgLightFooterLogo from "../imports/LightFaQs/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";
import imgLightGmail from "../imports/LightFaQs/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgLightInstagram from "../imports/LightFaQs/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLightLinkedin from "../imports/LightFaQs/5ac66073681efe5925013d8e779ef7ae2781251e.png";
import lightSvgPaths from "../imports/LightFaQs/svg-7o19qwhi4o";

import imgGmailPngBlack from "../imports/DFooter-1/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramPngBlack from "../imports/DFooter-1/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinIconVectorPngBlack from "../imports/DFooter-1/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";
import imgLogoRecolored1 from "../imports/DFooter-1/eef17f758a83029ddf8e98fae373f5efc3059691.png";

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

// ─── Nav (TEMPORARY — Rayyan is building the shared Navbar/Footer separately.
// This local version keeps the page fully working/testable in the meantime.
// Safe to delete this component and swap in the shared one once it lands —
// it isn't reused anywhere else in this file besides <FAQsPage>. ────────────

function SunIcon({ theme = "dark" }) {
  const stroke = theme === "light" ? "#273338" : "#B7DD67";
  return (
    <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
      <g clipPath="url(#sun-clip)">
        {[navSvgPaths.p24da2380, "M7 1.16667V2.33333", "M7 11.6667V12.8333", navSvgPaths.p37111300, navSvgPaths.p9000440, "M1.16667 7H2.33333", "M11.6667 7H12.8333", navSvgPaths.p9ee27e0, navSvgPaths.pe9da980].map((d, i) => (
          <path key={i} d={d} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        ))}
      </g>
      <defs><clipPath id="sun-clip"><rect fill="white" height="14" width="14" /></clipPath></defs>
    </svg>
  );
}

function MoonIcon() {
  return <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14"><path d={navSvgPaths.p3283c680} stroke="#E6F2DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" /></svg>;
}

function ThemeToggle({ theme, onThemeChange }) {
  const isLight = theme === "light";
  return (
    <button type="button" onClick={() => onThemeChange(isLight ? "dark" : "light")} className={`${isLight ? "bg-[rgba(111,127,60,0.9)]" : "bg-[#2e3936]"} h-[34px] relative rounded-full shrink-0 w-[68px] cursor-pointer select-none transition-colors`} aria-label="Toggle theme">
      <div aria-hidden className={`absolute border-[0.783px] ${isLight ? "border-[rgba(39,51,56,0.18)]" : "border-[rgba(200,231,123,0.2)]"} border-solid inset-0 pointer-events-none rounded-full`} />
      <motion.div className={`${isLight ? "bg-[#e6f2dd]" : "bg-[#c8e77b]"} absolute rounded-full size-[26px] top-[3.78px]`} animate={{ left: isLight ? 3.78 : 38.22 }} transition={{ duration: 0.22, ease: "easeInOut" }} />
      <div className="absolute flex items-center justify-center left-[4.78px] size-[26px] top-[4px]"><SunIcon theme={theme} /></div>
      <div className="absolute flex items-center justify-center left-[34.78px] size-[26px] top-[4px]"><MoonIcon /></div>
    </button>
  );
}

const navLinks = ["Services", "About us", "FAQs"];

function Nav({ theme = "dark", onThemeChange = () => {} }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <header className={`w-full relative z-50 transition-colors ${isLight ? "bg-[#e6f2dd]" : "bg-[#222d31]"}`}>
      <div className="w-full relative flex items-center px-6 md:px-20 py-4 md:py-6">
        <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] flex-shrink-0">
          <img src={isLight ? imgLightLogo : imgIconPlaceholder} alt="SocialStack" className="w-full h-full object-contain" />
        </div>
        <nav className="hidden lg:flex gap-12 items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => <a key={link} href="#" className={`font-['Manrope'] font-semibold ${isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[#e6f2dd]"} text-[20px] leading-normal hover:opacity-70 transition-opacity whitespace-nowrap`}>{link}</a>)}
        </nav>
        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
          <button className={`${isLight ? "bg-[rgba(111,127,60,0.9)]" : "bg-[#c6e7bc]"} rounded-full px-5 py-3 md:py-4 font-['Manrope'] font-bold text-[#273338] text-[14px] md:text-[15px] hover:opacity-90 transition-opacity whitespace-nowrap relative overflow-hidden`}>
            <span className="relative z-10">Contact</span>
          </button>
          <button className={`lg:hidden ${isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[#e6f2dd]"} hover:opacity-70 transition-opacity`} onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className={`lg:hidden overflow-hidden ${isLight ? "bg-[#dbeacb] border-t border-[rgba(111,127,60,0.18)]" : "bg-[#2e3936] border-t border-[rgba(200,231,123,0.15)]"}`}>
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => <a key={link} href="#" className={`font-['Manrope'] font-semibold ${isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[#e6f2dd]"} text-[20px] leading-normal py-2 hover:opacity-70 transition-opacity`} onClick={() => setMobileOpen(false)}>{link}</a>)}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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
          <motion.div
            key={index}
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
          <path d={isLight ? svgPaths.p38a6ba00 : svgPaths.p381f2700} fill={isLight ? "#7D9444" : "#B7DD67"} fillOpacity={isLight ? "0.9" : "0.8"} />
        </svg>
        <p className={`relative font-['Caveat_Brush'] text-[#273338] ${isLight ? "text-2xl md:text-[45px]" : "text-2xl md:text-[34px]"} leading-[32px] text-center z-10 px-4 whitespace-nowrap`}>
          FREQUENTLY ASKED QUESTIONS
        </p>
      </motion.div>
    </div>
  );
}

// ─── Footer (TEMPORARY — same note as Nav above: Rayyan's shared Footer will
// replace this. Kept here so the page renders complete/testable for now. ────

function Footer({ theme = "dark" }) {
  const isLight = theme === "light";
  const textClass = isLight ? "text-[rgba(183,221,103,0.8)]" : "text-black";
  return (
    <footer className={`w-full ${isLight ? "bg-[#3e4f4a]" : "bg-[rgba(183,221,103,0.8)]"} relative px-6 py-10 md:px-14 md:py-16 flex flex-col mt-10`}>
      <div className="max-w-[1370px] w-full mx-auto flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Section - Logo & Bio */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="flex items-center gap-4">
            <img src={isLight ? imgLightFooterLogo : imgLogoRecolored1} alt="SocialStack Logo" className="w-[80px] h-[100px] object-contain" />
            <h2 className={`font-['Caveat_Brush'] ${isLight ? "text-[rgba(183,221,103,0.8)]" : "text-[#222d31]"} text-[32px] md:text-[40px] m-0`}>SocialStack</h2>
          </div>
          <p className={`font-['Outfit'] font-light ${textClass} text-[20px] md:text-[32px] leading-snug`}>
            We provide ease in all your tech needs. Contact us today for a quote or reach out to learn more about our services.
          </p>
          <div className="flex gap-6 mt-4">
            <a href="#" className="hover:scale-110 transition-transform"><img src={isLight ? imgLightGmail : imgGmailPngBlack} alt="Gmail" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" /></a>
            <a href="#" className="hover:scale-110 transition-transform"><img src={isLight ? imgLightInstagram : imgInstagramPngBlack} alt="Instagram" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" /></a>
            <a href="#" className="hover:scale-110 transition-transform"><img src={isLight ? imgLightLinkedin : imgLinkedinIconVectorPngBlack} alt="LinkedIn" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover" /></a>
          </div>
          <p className={`font-['Outfit'] font-medium ${textClass} text-[24px] md:text-[36px] mt-2 lg:mt-0 lg:absolute lg:left-1/2 lg:top-[342px] lg:-translate-x-1/2 lg:whitespace-nowrap`}>
            ss.socialstack@gmail.com
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-col gap-4 lg:pt-10 lg:pr-20">
          <a href="#" className={`font-['Outfit'] font-light ${textClass} text-[20px] md:text-[24px] hover:underline`}>About Us</a>
          <a href="#" className={`font-['Outfit'] font-light ${textClass} text-[20px] md:text-[24px] hover:underline`}>Our Services</a>
          <a href="#" className={`font-['Outfit'] font-light ${textClass} text-[20px] md:text-[24px] hover:underline`}>FAQs</a>
          <a href="#" className={`font-['Outfit'] font-light ${textClass} text-[20px] md:text-[24px] hover:underline`}>Contact Us</a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1370px] w-full mx-auto mt-16 pt-6 border-t-[3px] border-[rgba(39,51,56,0.2)] flex flex-col md:flex-row justify-between gap-4">
        <p className={`font-['Outfit'] font-extralight ${textClass} text-[18px] md:text-[24px]`}>© 2026 SocialStack</p>
        <p className={`font-['Outfit'] font-extralight ${textClass} text-[18px] md:text-[24px]`}>All rights reserved</p>
      </div>
    </footer>
  );
}

// ─── FAQs Page ──────────────────────────────────────────────────────────────

export default function FAQsPage() {
  const [theme, setTheme] = useState("dark");
  const isLight = theme === "light";

  return (
    <main className={`min-h-screen flex flex-col transition-colors duration-300 ${isLight ? "bg-[#e6f2dd] text-[#273338]" : "bg-[#222d31] text-white"}`}>
      <Nav theme={theme} onThemeChange={setTheme} />
      <Hero theme={theme} />
      <FaqDivider theme={theme} />
      <FaqAccordion theme={theme} />
      <Footer theme={theme} />
    </main>
  );
}
