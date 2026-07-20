import { useState, useRef, type CSSProperties } from "react";
import { Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePersistentTheme } from "../usePersistentTheme";

// Social icons — recolored/light for dark bg
import imgGmailRecolored from "../../imports/DContact/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgInstagramRecolored from "../../imports/DContact/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLinkedinRecolored from "../../imports/DContact/5ac66073681efe5925013d8e779ef7ae2781251e.png";

// Social icons — dark for light bg
import imgGmailDark from "../../imports/DContact/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramDark from "../../imports/DContact/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinDark from "../../imports/DContact/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";

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

const BUSINESS_TYPES = [
  "Restaurant or Cafe",
  "Retail Store",
  "Education",
  "Furniture",
  "Agriculture",
  "Hotel",
  "Construction",
  "Real Estate",
  "HealthCare",
  "Other - Tell us about it in the message box below.",
];

// Floating orb decorations
function Orb({ style }: { style: CSSProperties }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// Compact stacked glass social icon card
function SocialIcon({
  src,
  alt,
  href = "#",
  dark,
  rotation,
}: {
  src: string;
  alt: string;
  href?: string;
  dark: boolean;
  rotation: number;
}) {
  return (
    <a
      href={href}
      className="contact-social-glass group relative grid h-[82px] w-[74px] shrink-0 place-items-center overflow-hidden rounded-2xl border shadow-[0_18px_28px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{
        "--r": rotation,
        background: dark
          ? "linear-gradient(180deg, rgba(230,242,221,0.16), rgba(230,242,221,0.04))"
          : "linear-gradient(180deg, rgba(39,51,56,0.12), rgba(255,255,255,0.26))",
        borderColor: dark ? "rgba(230,242,221,0.12)" : "rgba(39,51,56,0.14)",
      } as CSSProperties}
      aria-label={alt}
    >
      <img src={src} alt="" className="relative z-10 h-8 w-8 object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105" />
      <span
        className="absolute bottom-0 left-0 flex h-7 w-full items-center justify-center text-[10px] font-light tracking-[0.08em]"
        style={{
          background: dark ? "rgba(230,242,221,0.07)" : "rgba(39,51,56,0.08)",
          color: dark ? "rgba(230,242,221,0.82)" : "rgba(39,51,56,0.78)",
        }}
      >
        {alt}
      </span>
    </a>
  );
}

function ContactFormStyles() {
  return (
    <style>{`
      .contact-field::placeholder {
        opacity: 0.4;
      }
      .contact-social-stack .contact-social-glass {
        margin-inline: -0.9rem;
        transform: rotate(calc(var(--r) * 1deg));
      }
      .contact-social-stack:hover .contact-social-glass,
      .contact-social-stack:focus-within .contact-social-glass {
        margin-inline: 0.35rem;
        transform: rotate(0deg) translateY(-2px);
      }
    `}</style>
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
  inputMode,
  className = "",
}: {
  label: string;
  type?: string;
  placeholder: string;
  dark: boolean;
  value: string;
  onChange: (v: string) => void;
  inputMode?: "text" | "numeric" | "email";
  className?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div className={`flex flex-col gap-1.5 ${className}`} variants={fadeUp}>
      <motion.label
        className="font-['Outfit',sans-serif] font-medium text-[14px] lg:text-[16px] text-center transition-all duration-200"
        style={{ color: focused ? (dark ? "#b7dd67" : "#273338") : (dark ? "rgba(230,242,221,0.82)" : "rgba(39,51,56,0.78)") }}
        animate={{ scale: focused ? 1.02 : 1 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="relative rounded-2xl"
        animate={{
          boxShadow: focused
            ? dark
              ? "0 0 0 1px rgba(183,221,103,0.5), 0 0 24px rgba(183,221,103,0.12)"
              : "0 0 0 1px rgba(39,51,56,0.4), 0 0 20px rgba(39,51,56,0.1)"
            : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.2 }}
      >
        <input
          type={type}
          inputMode={inputMode}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="contact-field w-full h-12 rounded-2xl border px-4 text-[14px] lg:text-[16px] font-['Outfit',sans-serif] font-light outline-none transition-colors duration-200 text-center placeholder:transition-colors"
          style={{
            borderColor: focused
              ? dark ? "rgba(183,221,103,0.7)" : "rgba(39,51,56,0.55)"
              : dark ? "rgba(230,242,221,0.18)" : "rgba(39,51,56,0.18)",
            background: dark ? "rgba(230,242,221,0.08)" : "rgba(255,255,255,0.2)",
            color: dark ? "#e6f2dd" : "#273338",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
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
        className="font-['Outfit',sans-serif] font-medium text-[14px] lg:text-[16px] transition-all duration-200"
        style={{ color: focused ? (dark ? "#b7dd67" : "#273338") : (dark ? "rgba(230,242,221,0.82)" : "rgba(39,51,56,0.78)") }}
        animate={{ scale: focused ? 1.02 : 1 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="w-full relative rounded-2xl"
        animate={{
          boxShadow: focused
            ? dark
              ? "0 0 0 1px rgba(183,221,103,0.5), 0 0 24px rgba(183,221,103,0.12)"
              : "0 0 0 1px rgba(39,51,56,0.4), 0 0 20px rgba(39,51,56,0.1)"
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
          className="contact-field w-full rounded-2xl border px-4 py-4 text-[14px] lg:text-[16px] font-['Outfit',sans-serif] font-light outline-none transition-colors duration-200 resize-none text-center"
          style={{
            borderColor: focused
              ? dark ? "rgba(183,221,103,0.7)" : "rgba(39,51,56,0.55)"
              : dark ? "rgba(230,242,221,0.18)" : "rgba(39,51,56,0.18)",
            background: dark ? "rgba(230,242,221,0.08)" : "rgba(255,255,255,0.2)",
            color: dark ? "#e6f2dd" : "#273338",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function SelectField({
  label,
  dark,
  value,
  onChange,
  options,
}: {
  label: string;
  dark: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div className="flex flex-col gap-1.5 w-full" variants={fadeUp}>
      <motion.label
        className="font-['Outfit',sans-serif] font-medium text-[14px] lg:text-[16px] text-center transition-all duration-200"
        style={{ color: focused ? (dark ? "#b7dd67" : "#273338") : (dark ? "rgba(230,242,221,0.82)" : "rgba(39,51,56,0.78)") }}
        animate={{ scale: focused ? 1.02 : 1 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="relative rounded-2xl"
        animate={{
          boxShadow: focused
            ? dark
              ? "0 0 0 1px rgba(183,221,103,0.5), 0 0 24px rgba(183,221,103,0.12)"
              : "0 0 0 1px rgba(39,51,56,0.4), 0 0 20px rgba(39,51,56,0.1)"
            : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.2 }}
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="contact-field w-full h-12 appearance-none rounded-2xl border px-4 pr-10 text-center text-[14px] lg:text-[16px] font-['Outfit',sans-serif] font-light outline-none transition-colors duration-200"
          style={{
            borderColor: focused
              ? dark ? "rgba(183,221,103,0.7)" : "rgba(39,51,56,0.55)"
              : dark ? "rgba(230,242,221,0.18)" : "rgba(39,51,56,0.18)",
            background: dark ? "rgba(230,242,221,0.08)" : "rgba(255,255,255,0.2)",
            color: value ? (dark ? "#e6f2dd" : "#273338") : (dark ? "rgba(230,242,221,0.28)" : "rgba(39,51,56,0.28)"),
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <option value="">Select your business type...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm"
          style={{ color: dark ? "rgba(230,242,221,0.62)" : "rgba(39,51,56,0.62)" }}
        >
          v
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function ContactPage() {
  const [theme, setTheme] = usePersistentTheme();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Controlled form fields
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [query, setQuery] = useState("");

  const dark = theme === "dark";
  const badgeGlow = dark
    ? ["rgba(34,211,238,0.95)", "rgba(103,232,249,0.92)"]
    : ["rgba(39,51,56,0.9)", "rgba(63,79,74,0.82)"];
  const formGlow = dark ? "rgba(183,221,103,0.95)" : "rgba(47,79,55,0.95)";
  const glassBorder = dark ? "rgba(230,242,221,0.28)" : "rgba(255,255,255,0.58)";

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

    const businessAbout = businessType;
    if (!fullName.trim() || !contactNumber.trim() || !email.trim() || !businessName.trim() || !businessAbout || !query.trim()) {
      setError("Please fill in your full name, contact number, email, business details, and message before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName.trim(),
          email: email.trim(),
          message: [
            `Contact Number: ${contactNumber.trim()}`,
            `Business Name: ${businessName.trim()}`,
            `Business About: ${businessAbout}`,
            "",
            query.trim(),
          ].join("\n"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again later.");
      }

      setSubmitting(false);
      setSubmitted(true);
      setFullName("");
      setContactNumber("");
      setEmail("");
      setBusinessName("");
      setBusinessType("");
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
      <ContactFormStyles />
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

      <Header theme={theme} onThemeChange={setTheme} />

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
            className="relative inline-flex overflow-hidden rounded-full p-[2px] cursor-default"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="absolute inset-[-80%] rounded-full opacity-90"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, transparent 64deg, ${badgeGlow[0]} 82deg, transparent 104deg, transparent 360deg)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute inset-[-80%] rounded-full opacity-75"
              style={{
                background: `conic-gradient(from 180deg, transparent 0deg, transparent 64deg, ${badgeGlow[1]} 82deg, transparent 104deg, transparent 360deg)`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "linear" }}
            />
            <span
              className="relative z-10 inline-flex rounded-full px-6 py-2.5 border transition-all duration-300"
              style={{
                backgroundColor: dark ? "#2e3936" : "#526862",
                borderColor: "rgba(196,240,107,0.15)",
              }}
            >
              <span
                className="font-['Manrope',sans-serif] font-medium text-[16px] lg:text-[20px] tracking-[2px]"
                style={{ color: "#c8e77b" }}
              >
                Contact
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Form card with 3D tilt */}
        <motion.div
          ref={formRef}
          className="relative w-full max-w-3xl overflow-hidden rounded-[38px] p-[6px] cursor-default"
          style={{
            background: `linear-gradient(135deg, ${glassBorder}, rgba(255,255,255,0.08), ${glassBorder})`,
            boxShadow: dark
              ? "0 28px 75px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.08)"
              : "0 28px 70px rgba(63,79,74,0.18), inset 0 1px 0 rgba(255,255,255,0.55)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
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
          whileHover={{
            boxShadow: dark
              ? "0 34px 85px rgba(0,0,0,0.42), 0 0 28px rgba(183,221,103,0.1)"
              : "0 34px 80px rgba(63,79,74,0.24), 0 0 28px rgba(47,79,55,0.1)",
          }}
        >
          <motion.span
            className="absolute inset-[-55%] z-0 rounded-full opacity-80"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, transparent 70deg, ${formGlow} 112deg, transparent 154deg, transparent 360deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
          />
          <div
            className="relative z-10 flex flex-col gap-6 rounded-[32px] px-6 py-10 sm:px-10 lg:px-16"
            style={{
              background: dark
                ? "linear-gradient(145deg, #273338 0%, #2e3936 58%, #273338 100%)"
                : "linear-gradient(145deg, #e6f2dd 0%, #f4faef 52%, #e6f2dd 100%)",
              border: dark ? "1px solid rgba(230,242,221,0.1)" : "1px solid rgba(111,127,60,0.12)",
              boxShadow: dark
                ? "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(183,221,103,0.08)"
                : "inset 0 1px 0 rgba(255,255,255,0.75), inset 0 -1px 0 rgba(111,127,60,0.12)",
              backdropFilter: "blur(26px) saturate(170%)",
              WebkitBackdropFilter: "blur(26px) saturate(170%)",
            }}
          >
            <motion.h2
              className="font-['Outfit',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[38px] text-center"
              style={{
                backgroundImage: dark
                  ? "linear-gradient(90deg, #e6f2dd 0%, #b7dd67 34%, #6f7f3c 56%, #2f4f37 76%, #e6f2dd 100%)"
                  : "linear-gradient(90deg, #253236 0%, #526862 42%, #6f7f3c 58%, #253236 100%)",
                backgroundSize: "220% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 24, backgroundPosition: "0% 50%" }}
              animate={{ opacity: 1, y: 0, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                backgroundPosition: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              Get in touch
            </motion.h2>

          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {/* Contact details */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <FormField
                label="Your Full Name"
                placeholder="Please enter your full name..."
                dark={dark}
                value={fullName}
                onChange={(value) => setFullName(value.replace(/[^A-Za-z\s]/g, ""))}
                className="flex-1"
              />
              <FormField
                label="Contact Number"
                type="tel"
                inputMode="numeric"
                placeholder="Please enter your contact number..."
                dark={dark}
                value={contactNumber}
                onChange={(value) => setContactNumber(value.replace(/\D/g, ""))}
                className="flex-1"
              />
            </div>

            {/* Email and business name */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <FormField
                label="Email Address"
                type="email"
                inputMode="email"
                placeholder="Please enter your email..."
                dark={dark}
                value={email}
                onChange={setEmail}
                className="flex-1"
              />
              <FormField
                label="Business Name"
                placeholder="Please enter your business name..."
                dark={dark}
                value={businessName}
                onChange={setBusinessName}
                className="flex-1"
              />
            </div>

            <SelectField
              label="What is your business about?"
              dark={dark}
              value={businessType}
              onChange={(value) => {
                setBusinessType(value);
              }}
              options={BUSINESS_TYPES}
            />

            {/* Message */}
            <TextareaField
              label="Message"
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
                    className="group relative isolate h-14 w-40 overflow-hidden rounded-full border font-['Outfit',sans-serif] font-medium text-[17px] lg:text-[19px]"
                    style={{
                      background: dark
                        ? "linear-gradient(135deg, rgba(198,231,188,0.96), rgba(183,221,103,0.86))"
                        : "linear-gradient(135deg, rgba(111,127,60,0.96), rgba(82,104,98,0.9))",
                      color: dark ? "#273338" : "#e6f2dd",
                      borderColor: dark ? "rgba(230,242,221,0.24)" : "rgba(39,51,56,0.22)",
                      boxShadow: dark
                        ? "0 14px 34px rgba(0,0,0,0.25), 0 0 18px rgba(183,221,103,0.16), inset 0 1px 0 rgba(255,255,255,0.42)"
                        : "0 14px 30px rgba(63,79,74,0.22), inset 0 1px 0 rgba(255,255,255,0.22)",
                    }}
                    onClick={handleSubmit}
                    disabled={submitting}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: dark
                        ? "0 18px 42px rgba(0,0,0,0.3), 0 0 26px rgba(183,221,103,0.22), inset 0 1px 0 rgba(255,255,255,0.5)"
                        : "0 18px 38px rgba(63,79,74,0.28), 0 0 20px rgba(39,51,56,0.12), inset 0 1px 0 rgba(255,255,255,0.28)",
                    }}
                    whileTap={{ scale: 0.96, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    initial={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.span
                      className="absolute inset-0 -z-10 opacity-60"
                      style={{
                        background: "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.42) 45%, transparent 70%)",
                      }}
                      animate={{ x: ["-120%", "120%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {submitting ? (
                      <motion.div
                        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#273338] border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                      />
                    ) : (
                      <>
                        <span className="absolute left-8 top-1/2 -translate-x-10 -translate-y-1/2 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100">
                          Submit
                        </span>
                        <Send
                          size={28}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-[calc(100%-2.25rem)] group-hover:h-5 group-hover:w-5"
                          strokeWidth={2.35}
                        />
                      </>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
          </div>
        </motion.div>

        {/* Social icons below form */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.p
            className="font-['Manrope',sans-serif] text-sm font-medium uppercase tracking-[0.32em]"
            style={{ color: dark ? "rgba(230,242,221,0.78)" : "rgba(39,51,56,0.72)" }}
          >
            Socials
          </motion.p>
          <div className="contact-social-stack flex items-center justify-center">
            <SocialIcon src={dark ? imgInstagramRecolored : imgInstagramDark} alt="Instagram" href="https://www.instagram.com/socialstack.dev/" dark={dark} rotation={-14} />
            <SocialIcon src={dark ? imgGmailRecolored : imgGmailDark} alt="Mail" href="mailto:ss.socialstack@gmail.com" dark={dark} rotation={4} />
            <SocialIcon src={dark ? imgLinkedinRecolored : imgLinkedinDark} alt="LinkedIn" href="https://www.linkedin.com/company/socialstack-dev/" dark={dark} rotation={16} />
          </div>
        </motion.div>
      </main>

      <Footer theme={theme} />
    </motion.div>
  );
}
