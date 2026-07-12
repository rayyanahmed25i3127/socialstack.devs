// ─────────────────────────────────────────────────────────────────────────────
// Shared Header
// Extracted from FaqPage.tsx so every page uses one nav implementation instead
// of each page carrying its own copy. TEMPORARY — will be replaced wholesale
// once the lead dev delivers the official shared Header. Pages should only
// ever import { Header } from "./Header" and never redefine their own nav,
// so that swap is a one-file change with zero edits to any page.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

import imgIconPlaceholder from "../../imports/Nav/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";
import navSvgPaths from "../../imports/Nav/svg-bwxa6ajcay";
import imgLightLogo from "../../imports/LightFaQs/7827342e88d818352b12b7398ddea508cdbb3d6c.png";

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

export function Header({ theme = "dark", onThemeChange = () => {} }) {
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
