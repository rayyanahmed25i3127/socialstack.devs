import { useState, useRef } from "react";
import { Sun, Moon, Menu, X, ArrowRight, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Logo: lime B7DD67 (dark nav + light footer)
import imgLogoBright from "../../imports/DContact/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";
// Logo: dark 222D31 (dark footer)
import imgLogoDark from "../../imports/DContact/eef17f758a83029ddf8e98fae373f5efc3059691.png";
// Logo: olive #6F7F3C (light nav)
import imgLogoOlive from "../../imports/LContact/7827342e88d818352b12b7398ddea508cdbb3d6c.png";

// Social icons — recolored/light for dark bg
import imgGmailRecolored from "../../imports/DContact/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgInstagramRecolored from "../../imports/DContact/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLinkedinRecolored from "../../imports/DContact/5ac66073681efe5925013d8e779ef7ae2781251e.png";

// Social icons — dark for light bg
import imgGmailDark from "../../imports/DContact/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramDark from "../../imports/DContact/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinDark from "../../imports/DContact/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";

const navLinks = ["Services", "About us", "Projects", "FAQs"];
const footerLinks = ["About Us", "Our Services", "FAQs", "Contact Us"];

// Point this at your deployed backend URL in production (e.g. via import.meta.env.VITE_API_URL)
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Stagger children helper
const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// Floating orb decorations
function Orb({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// Animated social icon wrapper
function SocialIcon({ src, alt, href = "#" }: { src: string; alt: string; href?: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.2, rotate: 6 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <img src={src} alt={alt} className="w-10 h-10 object-contain" />
    </motion.a>
  );
}

// Animated nav link
function NavLink({ label, dark }: { label: string; dark: boolean }) {
  return (
    <motion.a
      href="#"
      className="font-['Manrope',sans-serif] font-semibold text-[17px] lg:text-[20px] relative group"
      style={{ color: dark ? "#e6f2dd" : "rgba(111,127,60,0.9)" }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {label}
      <span
        className="absolute -bottom-0.5 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full"
        style={{ backgroundColor: dark ? "#c8e77b" : "rgba(111,127,60,0.9)" }}
      />
    </motion.a>
  );
}

// Animated form field
function FormField({
  label,
  type = "text",
  placeholder,
  dark,
  value,
  onChange,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder: string;
  dark: boolean;
  value: string;
  onChange: (v: string) => void;
  className?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div className={`flex flex-col gap-1.5 ${className}`} variants={fadeUp}>
      <motion.label
        className="font-['Outfit',sans-serif] font-extralight text-[14px] lg:text-[16px] text-center transition-all duration-200"
        style={{ color: focused ? (dark ? "#526862" : "rgba(111,127,60,0.9)") : "#273338" }}
        animate={{ scale: focused ? 1.02 : 1 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="relative"
        animate={{
          boxShadow: focused
            ? dark
              ? "0 0 0 2px rgba(62,79,74,0.55)"
              : "0 0 0 2px rgba(111,127,60,0.3)"
            : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full h-11 border bg-transparent px-3 text-[14px] lg:text-[16px] font-['Outfit',sans-serif] font-thin outline-none transition-colors duration-200 text-center"
          style={{
            borderColor: focused
              ? dark ? "rgba(82,104,98,0.85)" : "rgba(111,127,60,0.6)"
              : "rgba(39,51,56,0.16)",
            color: "#273338",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Animated textarea field
function TextareaField({
  label,
  placeholder,
  dark,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  dark: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div className="flex flex-col gap-1.5 items-center w-full" variants={fadeUp}>
      <motion.label
        className="font-['Outfit',sans-serif] font-extralight text-[14px] lg:text-[16px] transition-all duration-200"
        style={{ color: focused ? (dark ? "#526862" : "rgba(111,127,60,0.9)") : "#273338" }}
        animate={{ scale: focused ? 1.02 : 1 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="w-full relative"
        animate={{
          boxShadow: focused
            ? dark
              ? "0 0 0 2px rgba(62,79,74,0.55)"
              : "0 0 0 2px rgba(111,127,60,0.3)"
            : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.2 }}
      >
        <textarea
          placeholder={placeholder}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full border bg-transparent px-3 py-4 text-[14px] lg:text-[16px] font-['Outfit',sans-serif] font-thin outline-none transition-colors duration-200 resize-none text-center"
          style={{
            borderColor: focused
              ? dark ? "rgba(82,104,98,0.85)" : "rgba(111,127,60,0.6)"
              : "rgba(39,51,56,0.16)",
            color: "#273338",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Controlled form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const dark = isDark;

  // Parallax tilt on the form card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -6;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const handleSubmit = async () => {
    setError(null);

    const name = `${firstName.trim()} ${lastName.trim()}`.trim();
    if (!name || !email.trim() || !query.trim()) {
      setError("Please fill in your name, email, and query before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: email.trim(), message: query.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again later.");
      }

      setSubmitting(false);
      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setQuery("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setSubmitting(false);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col font-['Outfit',sans-serif] relative overflow-x-hidden"
      animate={{ backgroundColor: dark ? "#273338" : "#e6f2dd" }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient orbs */}
      <Orb
        style={{
          width: 400,
          height: 400,
          top: -80,
          right: -100,
          background: dark
            ? "radial-gradient(circle, rgba(184,221,103,0.07) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(111,127,60,0.08) 0%, transparent 70%)",
        }}
      />
      <Orb
        style={{
          width: 300,
          height: 300,
          bottom: 200,
          left: -80,
          background: dark
            ? "radial-gradient(circle, rgba(200,231,123,0.05) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(82,104,98,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── NAV ── */}
      <motion.nav
        className="w-full flex items-center justify-between px-6 md:px-10 lg:px-20 py-5 relative z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <motion.div
          className="h-12 w-16 shrink-0"
          whileHover={{ scale: 1.08, rotate: -3 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <img
            src={dark ? imgLogoBright : imgLogoOlive}
            alt="SocialStack logo"
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
            >
              <NavLink label={link} dark={dark} />
            </motion.div>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Theme toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            className="relative flex items-center h-8 w-[60px] rounded-full px-1 shrink-0"
            style={{
              backgroundColor: dark ? "#2e3936" : "rgba(111,127,60,0.15)",
              border: `1px solid ${dark ? "rgba(200,231,123,0.2)" : "rgba(111,127,60,0.3)"}`,
            }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
            transition={{ duration: 0.3 }}
          >
            <Sun size={12} className="absolute left-2" style={{ color: "#b7dd67" }} />
            <Moon size={12} className="absolute right-2" style={{ color: dark ? "#e6f2dd" : "rgba(111,127,60,0.7)" }} />
            <motion.div
              className="absolute h-[22px] w-[22px] rounded-full shadow-sm"
              animate={{ left: dark ? "calc(100% - 26px)" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              style={{ backgroundColor: dark ? "#c8e77b" : "rgba(111,127,60,0.9)" }}
            />
          </motion.button>

          {/* CTA – desktop */}
          <motion.button
            className="hidden md:flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full font-['Manrope',sans-serif] font-bold text-sm lg:text-[15px] shrink-0"
            style={{
              backgroundColor: dark ? "#c6e7bc" : "rgba(111,127,60,0.9)",
              color: "#273338",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(183,221,103,0.3)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            Contact <ArrowRight size={13} />
          </motion.button>

          {/* Hamburger */}
          <motion.button
            className="flex md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: dark ? "#e6f2dd" : "rgba(111,127,60,0.9)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden flex flex-col px-6 pb-4 gap-4 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: dark ? "#273338" : "#e6f2dd", overflow: "hidden" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="font-['Manrope',sans-serif] font-semibold text-[18px]"
                style={{ color: dark ? "#e6f2dd" : "rgba(111,127,60,0.9)" }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              className="self-start flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full font-['Manrope',sans-serif] font-bold text-sm"
              style={{ backgroundColor: dark ? "#c6e7bc" : "rgba(111,127,60,0.9)", color: "#273338" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact <ArrowRight size={13} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN ── */}
      <main className="flex-1 flex flex-col items-center px-4 sm:px-6 pb-16">

        {/* Badge */}
        <motion.div
          className="self-start ml-4 sm:ml-6 lg:ml-12 mt-6 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-5 py-2 rounded-full border cursor-default"
            style={{
              backgroundColor: dark ? "#2e3936" : "#526862",
              borderColor: "rgba(196,240,107,0.15)",
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(200,231,123,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span
              className="font-['Manrope',sans-serif] font-medium text-[16px] lg:text-[20px] tracking-[2px]"
              style={{ color: "#c8e77b" }}
            >
              {dark ? "Contact" : "Contact Us"}
            </span>
          </motion.div>
        </motion.div>

        {/* Form card with 3D tilt */}
        <motion.div
          ref={formRef}
          className="w-full max-w-3xl rounded-sm px-6 sm:px-10 lg:px-16 py-10 flex flex-col gap-6 cursor-default"
          style={{
            backgroundColor: dark ? "#e6f2dd" : "rgba(111,127,60,0.15)",
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: tilt.x,
            rotateY: tilt.y,
          }}
          transition={{
            opacity: { delay: 0.4, duration: 0.6 },
            y: { delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            scale: { delay: 0.4, duration: 0.6 },
            rotateX: { type: "spring", stiffness: 120, damping: 20 },
            rotateY: { type: "spring", stiffness: 120, damping: 20 },
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ boxShadow: dark ? "0 24px 60px rgba(0,0,0,0.35)" : "0 24px 60px rgba(111,127,60,0.2)" }}
        >
          <motion.h2
            className="font-['Outfit',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] text-center"
            style={{ color: dark ? "#253236" : "rgba(111,127,60,0.9)" }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Get in touch
          </motion.h2>

          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Name row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <FormField
                label="First Name"
                placeholder="Please enter your first name..."
                dark={dark}
                value={firstName}
                onChange={setFirstName}
                className="flex-1"
              />
              <FormField
                label="Last Name"
                placeholder="Please enter your last name..."
                dark={dark}
                value={lastName}
                onChange={setLastName}
                className="flex-1"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <FormField
                label="Email Address"
                type="email"
                placeholder="Please enter your email..."
                dark={dark}
                value={email}
                onChange={setEmail}
                className="w-full sm:w-3/4"
              />
            </div>

            {/* Query */}
            <TextareaField
              label="Query"
              placeholder="Please enter what you have in mind..."
              dark={dark}
              value={query}
              onChange={setQuery}
            />

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-center font-['Outfit',sans-serif] font-normal text-[14px] lg:text-[16px]"
                  style={{ color: "#c0392b" }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.div className="flex justify-center" variants={fadeUp}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="flex items-center gap-2 px-8 py-3 rounded-full font-['Outfit',sans-serif] font-normal text-[18px] lg:text-[20px]"
                    style={{ backgroundColor: "#b7dd67", color: "#273338" }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    Sent! ✓
                  </motion.div>
                ) : (
                  <motion.button
                    key="submit"
                    className="flex items-center gap-2 px-8 py-3 rounded-full font-['Outfit',sans-serif] font-normal text-[18px] lg:text-[20px]"
                    style={{
                      backgroundColor: "#b7dd67",
                      color: "#273338",
                      boxShadow: "-5px 10px 2px rgba(39,51,56,0.4)",
                    }}
                    onClick={handleSubmit}
                    disabled={submitting}
                    whileHover={{ scale: 1.06, boxShadow: "-6px 14px 4px rgba(39,51,56,0.45)", backgroundColor: "#c8e77b" }}
                    whileTap={{ scale: 0.95, boxShadow: "-2px 4px 1px rgba(39,51,56,0.3)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    {submitting ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-[#273338] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Submit <Send size={16} />
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Social icons below form */}
        <motion.div
          className="flex items-center gap-6 mt-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <SocialIcon src={dark ? imgInstagramRecolored : imgInstagramDark} alt="Instagram" />
          <SocialIcon src={dark ? imgGmailRecolored : imgGmailDark} alt="Gmail" />
          <SocialIcon src={dark ? imgLinkedinRecolored : imgLinkedinDark} alt="LinkedIn" />
        </motion.div>
      </main>

      {/* ── FOOTER ── */}
      <motion.footer
        className="w-full px-6 sm:px-10 lg:px-16 pt-12 pb-6 flex flex-col gap-8"
        style={{ backgroundColor: dark ? "rgba(183,221,103,0.8)" : "#3e4f4a" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
          {/* Brand */}
          <motion.div
            className="flex flex-col gap-5 max-w-xl"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <motion.img
                src={dark ? imgLogoDark : imgLogoBright}
                alt="SocialStack"
                className="h-14 w-14 object-contain"
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span
                className="font-['Caveat_Brush',cursive] text-[32px] lg:text-[40px]"
                style={{ color: dark ? "#222d31" : "rgba(183,221,103,0.8)" }}
              >
                SocialStack
              </span>
            </div>
            <p
              className="font-['Outfit',sans-serif] font-light text-[18px] sm:text-[22px] lg:text-[26px] leading-snug"
              style={{ color: dark ? "#273338" : "rgba(183,221,103,0.8)" }}
            >
              We provide ease in all your tech needs. Contact us today for a quote or reach out to learn more about our services.
            </p>
            <div className="flex items-center gap-5 mt-1">
              <SocialIcon src={dark ? imgGmailDark : imgGmailRecolored} alt="Gmail" />
              <SocialIcon src={dark ? imgInstagramDark : imgInstagramRecolored} alt="Instagram" />
              <SocialIcon src={dark ? imgLinkedinDark : imgLinkedinRecolored} alt="LinkedIn" />
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {footerLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                className="font-['Outfit',sans-serif] font-light text-[18px] sm:text-[22px] leading-[50px] relative group"
                style={{ color: dark ? "#273338" : "rgba(183,221,103,0.8)" }}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                whileHover={{ x: 4 }}
              >
                {link}
                <span
                  className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: dark ? "#273338" : "rgba(183,221,103,0.8)" }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Email */}
        <motion.p
          className="font-['Outfit',sans-serif] font-medium text-[18px] sm:text-[26px] lg:text-[32px] text-center"
          style={{ color: dark ? "#273338" : "rgba(183,221,103,0.8)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          ss.socialstack@gmail.com
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-full h-px opacity-20"
          style={{ backgroundColor: dark ? "#273338" : "#e6f2dd" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p
            className="font-['Outfit',sans-serif] font-extralight text-[16px] sm:text-[20px] lg:text-[22px]"
            style={{ color: dark ? "#273338" : "rgba(183,221,103,0.8)" }}
          >
            © 2026 SocialStack
          </p>
          <p
            className="font-['Outfit',sans-serif] font-extralight text-[16px] sm:text-[20px] lg:text-[22px]"
            style={{ color: dark ? "#273338" : "rgba(183,221,103,0.8)" }}
          >
            All rights reserved
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}
