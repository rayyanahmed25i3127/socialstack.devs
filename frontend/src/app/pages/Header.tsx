import { useState, type CSSProperties } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform } from "motion/react";

import imgLogoRecolored from "../../imports/DStory/eef17f758a83029ddf8e98fae373f5efc3059691.png";
import imgIconPlaceholder from "../../imports/DStory/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const navItems = [
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
];

export function Header({
  theme,
  onThemeChange,
}: {
  theme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}) {
  const d = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);
  const [navFloating, setNavFloating] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setNavFloating(latest > 0.05);
  });

  const navLink = d ? "text-[#e6f2dd]" : "text-[rgba(111,127,60,0.9)]";
  const drawerText = d ? "text-[#D9D9D9]" : "text-[#253236]";
  const contactBg = d ? "bg-[#c6e7bc]" : "bg-[rgba(111,127,60,0.9)]";
  const mobMenuBg = d ? "bg-[#2e3936]" : "bg-[#4a5e59]";
  const navGlassStyle = {
    background: d
      ? "linear-gradient(135deg, rgba(39,51,56,0.58), rgba(46,57,54,0.34))"
      : "linear-gradient(135deg, rgba(230,242,221,0.64), rgba(255,255,255,0.24))",
    borderColor: d ? "rgba(230,242,221,0.16)" : "rgba(111,127,60,0.2)",
    boxShadow: d
      ? "0 20px 55px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(183,221,103,0.08)"
      : "0 20px 55px rgba(63,79,74,0.15), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(111,127,60,0.12)",
    backdropFilter: "blur(24px) saturate(170%)",
    WebkitBackdropFilter: "blur(24px) saturate(170%)",
  } as CSSProperties;

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1"
        style={{
          width: progressScale,
          backgroundColor: d ? "#b7dd67" : "#273338",
          boxShadow: d ? "0 0 18px rgba(183,221,103,0.65)" : "0 0 18px rgba(39,51,56,0.34)",
        }}
      />

      {/* Nav */}
      <motion.nav
        initial={{ y: -90, opacity: 0, scale: 0.96, filter: "blur(12px)" }}
        animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.85, ease: easeOutExpo }}
        className={`fixed left-0 right-0 z-50 mx-auto flex items-center justify-between overflow-hidden border px-4 py-3 transition-all duration-500 ease-out md:px-6 ${
          navFloating
            ? "top-2.5 w-[calc(100%-1.5rem)] max-w-6xl rounded-full sm:w-[calc(100%-2.5rem)]"
            : "top-0 w-full max-w-none rounded-none border-x-0 border-t-0"
        }`}
        style={navGlassStyle}
      >
        <motion.div
          className={`pointer-events-none absolute inset-0 opacity-80 transition-[border-radius] duration-500 ${navFloating ? "rounded-full" : "rounded-none"}`}
          style={{
            background: d
              ? "linear-gradient(100deg, rgba(255,255,255,0.13), transparent 34%, rgba(183,221,103,0.1) 72%, transparent)"
              : "linear-gradient(100deg, rgba(255,255,255,0.72), transparent 38%, rgba(111,127,60,0.16) 76%, transparent)",
          }}
          animate={{ x: ["-18%", "18%", "-18%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.a href="/" className="relative z-10 inline-flex" aria-label="Go to home" whileHover={{ rotate: -3, scale: 1.08, filter: "drop-shadow(0 0 12px rgba(183,221,103,0.48))" }} whileTap={{ scale: 0.96 }}>
          <img
            src={d ? imgIconPlaceholder : imgLogoRecolored}
            alt="SocialStack"
            className="h-10 w-auto object-contain transition-transform duration-200 sm:h-11 md:h-12"
          />
        </motion.a>

        {/* Desktop links */}
        <div className={`relative z-10 hidden lg:flex gap-2 font-['Manrope:SemiBold',sans-serif] font-semibold text-lg ${navLink} transition-colors duration-300`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative overflow-hidden rounded-full px-4 py-2 transition-colors duration-300 after:absolute after:bottom-1.5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-[#b7dd67] after:transition-all after:duration-300 hover:after:w-1/2"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
              whileHover={{
                y: -3,
                backgroundColor: d ? "rgba(230,242,221,0.08)" : "rgba(111,127,60,0.1)",
                boxShadow: d ? "0 8px 22px rgba(183,221,103,0.08)" : "0 8px 22px rgba(63,79,74,0.1)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={() => onThemeChange(d ? "light" : "dark")}
            aria-label="Toggle theme"
            className={`relative flex h-8 w-16 items-center rounded-full border transition-all duration-300 ${
              d ? "bg-[#2e3936]/80" : "bg-white/30"
            } border-[rgba(200,231,123,0.25)]`}
            whileHover={{
              scale: 1.06,
              boxShadow: d ? "0 0 20px rgba(183,221,103,0.2)" : "0 0 20px rgba(111,127,60,0.16)",
            }}
            whileTap={{ scale: 0.92 }}
          >
            <Sun size={13} className="absolute left-[8px] text-[#b7dd67]" />
            <Moon size={13} className={`absolute right-[8px] ${d ? "text-[#e6f2dd]" : "text-[#273338]"}`} />
            <span
              className="absolute w-6 h-6 rounded-full bg-[#c8e77b] shadow-md transition-transform duration-300 left-1"
              style={{ transform: d ? "translateX(32px)" : "translateX(0)" }}
            />
          </motion.button>

          {/* Contact — desktop */}
          <motion.a
            href="/contact"
            className={`${contactBg} text-[#273338] font-['Manrope:Bold',sans-serif] font-bold text-[13px] px-3.5 py-2 rounded-full transition-all duration-200 sm:text-[15px] sm:px-5 sm:py-2.5`}
            whileHover={{
              scale: 1.07,
              y: -2,
              boxShadow: d ? "0 10px 25px rgba(183,221,103,0.22)" : "0 10px 25px rgba(63,79,74,0.2)",
              filter: "brightness(1.08)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${navLink} relative grid h-10 w-10 place-items-center rounded-full transition-all duration-200 hover:bg-white/10 hover:opacity-90 lg:hidden`}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative block h-5 w-6">
              {[0, 1, 2].map((line) => (
                <motion.span
                  key={line}
                  className={`absolute left-0 h-[2px] w-6 rounded-full ${d ? "bg-[#e6f2dd]" : "bg-[#273338]"}`}
                  initial={false}
                  animate={
                    line === 0
                      ? { y: menuOpen ? 9 : 2, rotate: menuOpen ? 45 : 0 }
                      : line === 1
                        ? { y: 9, opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0.25 : 1 }
                        : { y: menuOpen ? 9 : 16, rotate: menuOpen ? -45 : 0 }
                  }
                  transition={{ duration: 0.32, ease: easeOutExpo }}
                />
              ))}
            </span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className={`fixed left-0 right-0 top-[88px] z-40 mx-auto flex w-[calc(100%-1.5rem)] max-w-md flex-col gap-4 overflow-hidden rounded-[28px] border px-6 py-6 font-['Manrope:SemiBold',sans-serif] text-xl font-semibold shadow-[0_20px_45px_rgba(0,0,0,0.22)] lg:hidden ${mobMenuBg} ${drawerText}`}
            style={navGlassStyle}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 border-b ${d ? "border-white/10" : "border-[#253236]/15"} hover:opacity-70 hover:pl-2 transition-all duration-200`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
            <a href="/contact" onClick={() => setMenuOpen(false)} className={`mt-2 ${contactBg} text-[#273338] font-['Manrope:Bold',sans-serif] font-bold text-[15px] px-5 py-2.5 rounded-full self-start hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-200`}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so page content doesn't sit under the fixed nav */}
      <div className="h-[88px] md:h-[96px]" aria-hidden="true" />
    </>
  );
}
