import { useCallback, useEffect, useState, type CSSProperties, type Key } from "react";
import { Sun, Moon, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import Vector from "../../imports/Vector";

import imgRayyan from "../../imports/DStory/1ba56544bea3416d9f45f3730e4ed9415eda98d9.png";
import imgMuznna from "../../imports/DStory/54b4775e735e8d33aae69e7d977931da932187d7.png";
import imgAnas from "../../imports/DStory/b54dabec21e7e5a207a21991bc119ef3ad6d6669.png";
import imgMaryam from "../../imports/DStory/5761bf9cdb8d6ebc48c02f0b9c25c2468c798100.png";
import imgFatima from "../../imports/DStory/d51c35334695ee2870baf4962d266295e4b30692.png";

import imgGmailDark from "../../imports/DStory/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramDark from "../../imports/DStory/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinDark from "../../imports/DStory/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";
import imgGmailLight from "../../imports/LStory/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgInstagramLight from "../../imports/LStory/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLinkedinLight from "../../imports/LStory/5ac66073681efe5925013d8e779ef7ae2781251e.png";

import imgLogoRecolored from "../../imports/DStory/eef17f758a83029ddf8e98fae373f5efc3059691.png";
import imgIconPlaceholder from "../../imports/DStory/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";

const team = [
  {
    name: "Muznna Majid",
    role: "Lead Front End Dev",
    img: imgMuznna,
    portfolio: "https://muznna.vercel.app/",
    github: "https://github.com/muznna-dev",
    imgPos: "42% 10%",
    greeting: "Hello!",
    bio: "a frontend developer with a sharp eye for layout, responsiveness, and interaction. Brings designs to life through smooth interfaces and thoughtful user experience.",
  },
  {
    name: "Rayyan Ahmed",
    role: "Lead Full Stack Dev",
    img: imgRayyan,
    portfolio: "https://ryansfolio.netlify.app/",
    github: "https://github.com/rayyanahmed25i3127",
    imgPos: "50% 18%",
    greeting: "Yo !",
    bio: "a full-stack developer focused on building polished, reliable web experiences. Handles both frontend detail and backend structure, turning ideas into functional products with clean execution.",
  },
  {
    name: "Fatima Akhtar",
    role: "UI/UX Design & Social Media",
    img: imgFatima,
    portfolio: "https://fatima-t.vercel.app/",
    github: "https://github.com/fatima-akhtar-t",
    imgPos: "50% 38%",
    greeting: "Hi !",
    bio: "a UI/UX and social media creative with a strong sense of aesthetics and storytelling. Works on design clarity, brand presence, and engaging digital content.",
  },
  {
    name: "Muhammad Anas",
    role: "Lead Back End Dev",
    img: imgAnas,
    portfolio: "https://muhammadanas1017.netlify.app/",
    github: "https://github.com/Anas10171007",
    imgPos: "50% 8%",
    greeting: "SUP !",
    bio: "a backend developer focused on logic, APIs, and system reliability. Builds the foundation that keeps products fast, secure, and ready to scale.",
  },
  {
    name: "Maryam Yousaf",
    role: "UI/UX Design & Social Media",
    img: imgMaryam,
    portfolio: "https://meowryam.netlify.app/",
    github: "https://github.com/meowryam",
    imgPos: "50% 42%",
    greeting: "Hey !",
    bio: "a UI/UX and social media creative focused on visual identity, content, and user flow. Helps shape how SocialStack looks, feels, and communicates.",
  },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: "-90px" };
const AUTOPLAY_MS = 4200;
const STACK_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easeOutExpo } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

function AnimatedButtonStyles() {
  return (
    <style>
      {`
        .ss-uiverse-btn {
          --border-radius: 24px;
          --padding: 4px;
          --transition: 0.4s;
          --button-color: #101010;
          --button-text: #ffffff;
          --button-muted: rgba(255, 255, 255, 0.55);
          --highlight-color-hue: 92deg;
          position: relative;
          isolation: isolate;
          user-select: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 48px;
          min-width: 148px;
          padding: 0.58em 0.82em 0.58em 1.08em;
          font-family: "Outfit", "Inter", "Segoe UI", sans-serif;
          font-size: 1rem;
          font-weight: 500;
          background-color: var(--button-color);
          border: solid 1px rgba(255, 255, 255, 0.16);
          border-radius: var(--border-radius);
          cursor: pointer;
          overflow: visible;
          box-shadow:
            inset 0px 1px 1px rgba(255, 255, 255, 0.24),
            inset 0px 2px 2px rgba(255, 255, 255, 0.16),
            inset 0px 4px 4px rgba(255, 255, 255, 0.1),
            inset 0px 8px 8px rgba(255, 255, 255, 0.05),
            0px 10px 24px rgba(0, 0, 0, 0.28);
          transition:
            transform var(--transition),
            box-shadow var(--transition),
            border var(--transition),
            background-color var(--transition);
        }

        .ss-uiverse-btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--border-radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(0,0,0,0.18), rgba(0,0,0,0.58));
          z-index: -1;
          transition:
            box-shadow var(--transition),
            filter var(--transition);
          box-shadow:
            0 -8px 8px -6px transparent inset,
            0 -16px 16px -8px transparent inset,
            1px 1px 1px rgba(255,255,255,0.14),
            2px 2px 2px rgba(255,255,255,0.08),
            -1px -1px 1px rgba(0,0,0,0.18),
            -2px -2px 2px rgba(0,0,0,0.08);
        }

        .ss-uiverse-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(
            0deg,
            rgba(255,255,255,0.95),
            hsl(var(--highlight-color-hue), 72%, 66%),
            hsla(var(--highlight-color-hue), 72%, 66%, 0.48) 8%,
            transparent
          );
          opacity: 0;
          transition:
            opacity var(--transition),
            filter var(--transition);
        }

        .ss-uiverse-icon {
          position: relative;
          z-index: 1;
          flex: 0 0 auto;
          width: 22px;
          height: 22px;
          color: var(--button-text);
          animation: ss-uiverse-flicker 2s linear infinite;
          animation-delay: 0.5s;
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.58));
          transition:
            color var(--transition),
            filter var(--transition),
            opacity var(--transition);
        }

        .ss-uiverse-text {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .ss-uiverse-letter {
          position: relative;
          display: inline-block;
          color: var(--button-muted);
          animation: ss-uiverse-letter 2s ease-in-out infinite;
          transition:
            color var(--transition),
            text-shadow var(--transition),
            opacity var(--transition);
        }

        .ss-uiverse-btn:hover,
        .ss-uiverse-btn:focus-visible {
          border: solid 1px hsla(var(--highlight-color-hue), 86%, 72%, 0.52);
          transform: translateY(-3px) scale(1.025);
          outline: none;
        }

        .ss-uiverse-btn:hover::before,
        .ss-uiverse-btn:focus-visible::before {
          box-shadow:
            0 -8px 8px -6px rgba(255,255,255,0.62) inset,
            0 -16px 16px -8px hsla(var(--highlight-color-hue), 74%, 66%, 0.34) inset,
            1px 1px 1px rgba(255,255,255,0.2),
            2px 2px 2px rgba(255,255,255,0.08),
            -1px -1px 1px rgba(0,0,0,0.18),
            -2px -2px 2px rgba(0,0,0,0.08);
        }

        .ss-uiverse-btn:hover::after,
        .ss-uiverse-btn:focus-visible::after {
          opacity: 1;
          mask-image: linear-gradient(0deg, #fff, transparent);
        }

        .ss-uiverse-btn:hover .ss-uiverse-icon,
        .ss-uiverse-btn:focus-visible .ss-uiverse-icon {
          color: var(--button-text);
          filter:
            drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 76%, 66%))
            drop-shadow(0 -4px 6px rgba(0,0,0,0.56));
          animation: none;
        }

        .ss-uiverse-btn:hover .ss-uiverse-letter,
        .ss-uiverse-btn:focus-visible .ss-uiverse-letter {
          color: var(--button-text);
          text-shadow: 0 0 3px hsla(var(--highlight-color-hue), 82%, 72%, 0.64);
        }

        .ss-uiverse-btn:active {
          transform: translateY(-1px) scale(0.98);
          border: solid 1px hsla(var(--highlight-color-hue), 90%, 78%, 0.74);
          background-color: hsla(var(--highlight-color-hue), 42%, 20%, 0.72);
        }

        @keyframes ss-uiverse-letter {
          50% {
            text-shadow: 0 0 3px rgba(255,255,255,0.54);
            color: var(--button-text);
          }
        }

        @keyframes ss-uiverse-flicker {
          50% {
            opacity: 0.42;
          }
        }

        .ss-uiverse-letter:nth-child(1) { animation-delay: 0s; }
        .ss-uiverse-letter:nth-child(2) { animation-delay: 0.08s; }
        .ss-uiverse-letter:nth-child(3) { animation-delay: 0.16s; }
        .ss-uiverse-letter:nth-child(4) { animation-delay: 0.24s; }
        .ss-uiverse-letter:nth-child(5) { animation-delay: 0.32s; }
        .ss-uiverse-letter:nth-child(6) { animation-delay: 0.4s; }
        .ss-uiverse-letter:nth-child(7) { animation-delay: 0.48s; }
        .ss-uiverse-letter:nth-child(8) { animation-delay: 0.56s; }
        .ss-uiverse-letter:nth-child(9) { animation-delay: 0.64s; }

        .ss-social-btn {
          --social-front: #101010;
          --social-hover-front: rgba(180, 180, 180, 0.68);
          --social-back: #101010;
          --social-border: rgba(255, 255, 255, 0.2);
          --social-glow: rgba(255, 255, 255, 0.28);
          position: relative;
          isolation: isolate;
          display: inline-grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border-radius: 18px;
          border: 1px solid var(--social-border);
          background: var(--social-front);
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.14),
            0 8px 18px rgba(0,0,0,0.24);
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.45s,
            border-color 0.45s,
            box-shadow 0.45s;
        }

        .ss-social-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: 18px;
          background: var(--social-back);
          opacity: 0;
          transform: rotate(0deg) translate(0, 0);
          transition:
            opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ss-social-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.42), transparent 48%),
            radial-gradient(circle at 24% 18%, rgba(255,255,255,0.32), transparent 30%);
          opacity: 0;
          transition: opacity 0.45s;
        }

        .ss-social-btn:hover,
        .ss-social-btn:focus-visible {
          transform: translate(-7px, 1px);
          background: var(--social-hover-front);
          border-color: color-mix(in srgb, var(--social-border) 68%, #ffffff);
          box-shadow:
            inset 0 1px 1px rgba(255,255,255,0.34),
            0 16px 28px rgba(0,0,0,0.24),
            0 0 18px var(--social-glow);
          outline: none;
        }

        .ss-social-btn:hover::before,
        .ss-social-btn:focus-visible::before {
          opacity: 1;
          transform: rotate(34deg) translate(13px, 4px);
        }

        .ss-social-btn:hover::after,
        .ss-social-btn:focus-visible::after {
          opacity: 1;
        }

        .ss-social-icon {
          position: relative;
          z-index: 1;
          width: 32px;
          height: 32px;
          object-fit: cover;
          border-radius: 5px;
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.32));
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.45s;
        }

        .ss-social-icon-dark {
          filter:
            brightness(0)
            saturate(100%)
            invert(86%)
            sepia(76%)
            saturate(476%)
            hue-rotate(26deg)
            brightness(103%)
            contrast(94%)
            drop-shadow(0 0 3px rgba(183,221,103,0.4));
        }

        .ss-social-icon-light {
          filter:
            brightness(0)
            saturate(100%)
            invert(18%)
            sepia(13%)
            saturate(830%)
            hue-rotate(151deg)
            brightness(95%)
            contrast(88%)
            drop-shadow(0 0 2px rgba(39,51,56,0.28));
        }

        .ss-social-btn:hover .ss-social-icon,
        .ss-social-btn:focus-visible .ss-social-icon {
          transform: scale(0.96);
          filter: drop-shadow(0 0 3px rgba(255,255,255,0.48));
        }

        .ss-social-btn:hover .ss-social-icon-dark,
        .ss-social-btn:focus-visible .ss-social-icon-dark {
          filter:
            brightness(0)
            saturate(100%)
            invert(88%)
            sepia(88%)
            saturate(520%)
            hue-rotate(22deg)
            brightness(108%)
            contrast(95%)
            drop-shadow(0 0 6px rgba(183,221,103,0.72));
        }

        .ss-social-btn:hover .ss-social-icon-light,
        .ss-social-btn:focus-visible .ss-social-icon-light {
          filter:
            brightness(0)
            saturate(100%)
            invert(18%)
            sepia(13%)
            saturate(830%)
            hue-rotate(151deg)
            brightness(95%)
            contrast(88%)
            drop-shadow(0 0 4px rgba(39,51,56,0.42));
        }
      `}
    </style>
  );
}

function AnimatedLinkButton({
  href,
  label,
  variant,
  dark,
}: {
  href: string;
  label: string;
  variant: "portfolio" | "github";
  dark: boolean;
}) {
  const Icon = variant === "github" ? Github : ExternalLink;
  const style = {
    "--button-color": dark ? "#263238" : "#e6f2dd",
    "--button-text": dark ? "#e6f2dd" : "#253236",
    "--button-muted": dark ? "rgba(230,242,221,0.58)" : "rgba(37,50,54,0.62)",
    "--highlight-color-hue": dark ? "88deg" : "132deg",
  } as CSSProperties;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ss-uiverse-btn"
      style={style}
    >
      <Icon className="ss-uiverse-icon" strokeWidth={variant === "github" ? 2.3 : 2.1} />
      <span className="ss-uiverse-text" aria-label={label}>
        {label.split("").map((letter, index) => (
          <span className="ss-uiverse-letter" key={`${letter}-${index}`}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </span>
    </a>
  );
}

function FooterSocialButton({
  src,
  alt,
  href,
  dark,
  index,
}: {
  src: string;
  alt: string;
  href: string;
  dark: boolean;
  index: number;
   key?: Key; 
}) {
  const style = {
    "--social-front": dark ? "#273338" : "rgba(183,221,103,0.85)",
    "--social-hover-front": dark ? "rgba(39,51,56,0.68)" : "rgba(183,221,103,0.85)",
    "--social-back": dark ? "#273338" : "rgba(183,221,103,0.85)",
    "--social-border": dark ? "rgba(230,242,221,0.22)" : "rgba(39,51,56,0.28)",
    "--social-glow": dark ? "rgba(183,221,103,0.24)" : "rgba(39,51,56,0.18)",
  } as CSSProperties;

  return (
    <a
      href={href}
      className="ss-social-btn"
      style={style}
      aria-label={alt}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <img src={src} alt="" className={`ss-social-icon ${dark ? "ss-social-icon-dark" : "ss-social-icon-light"}`} />
    </a>
  );
}

function RevealText({
  children,
  className,
  desktopOnly = false,
}: {
  children: string;
  className: string;
  desktopOnly?: boolean;
}) {
  return (
    <motion.p
      className={`${desktopOnly ? "hidden md:block" : ""} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.28em] inline-block"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, delay: index * 0.018, ease: easeOutExpo }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

function MobileStoryText({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <motion.p
      className={`md:hidden ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.p>
  );
}

/* Brush-stroke heading — uses the real Figma SVG path via the Vector component */
function BrushHeading({
  children,
  textColor,
  brushFill,
}: {
  children: string;
  textColor: string;
  brushFill: string;
}) {
  return (
    /* outer wrapper handles the rotation */
    <motion.div
      initial={{ opacity: 0, rotate: -8, scale: 0.9, y: 22 }}
      whileInView={{ opacity: 1, rotate: -3.82, scale: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="relative inline-block px-10 sm:px-16 pt-3 pb-5"
    >
      {/* Vector fills the padded container, preserveAspectRatio="none" stretches it to the right pill-like shape */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ "--fill-0": brushFill } as CSSProperties}
      >
        <Vector />
      </div>
      <motion.span
        className="relative z-10 font-['Caveat_Brush:Regular',sans-serif] not-italic whitespace-nowrap leading-none block"
        style={{ fontSize: "clamp(1.9rem, 6vw, 4rem)", color: textColor }}
        initial={{ letterSpacing: "0.08em" }}
        whileInView={{ letterSpacing: "0em" }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}

function TeamFlipStack({
  cardBg,
  cardBorder,
  dark,
}: {
  cardBg: string;
  cardBorder: string;
  dark: boolean;
}) {
  const total = team.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cardStage, setCardStage] = useState<0 | 1 | 2>(0);
  const [reduced, setReduced] = useState(false);
  const active = team[current];
  const glowColor = dark ? "rgba(183,221,103,0.95)" : "rgba(47,79,55,0.95)";
  const glassBorder = dark ? "rgba(230,242,221,0.28)" : "rgba(255,255,255,0.58)";
  const accent = dark ? "#b7dd67" : "#3f5f38";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const next = useCallback(() => {
    setCardStage(0);
    setCurrent((value) => (value + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCardStage(0);
    setCurrent((value) => (value - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, paused, reduced]);

  return (
    <motion.div
      variants={fadeUp}
      className="mx-auto mb-16 grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(330px,500px)_1fr]"
      onMouseEnter={() => {
        setPaused(true);
        setHovering(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
        setHovering(false);
      }}
    >
      <div className="relative mx-auto w-full max-w-[432px]" style={{ perspective: "1800px" }}>
        <div className="relative aspect-[4/5] w-full">
          {team.map((member, index) => {
            const slot = (index - current + total) % total;
            const sign = index % 2 === 0 ? 1 : -1;
            const isFront = slot === 0;
            const depth = slot;
            const exposed = hovering && !reduced;

            let transform: string;
            let opacity: number;
            let zIndex: number;

            if (reduced) {
              opacity = isFront ? 1 : 0;
              transform = "none";
              zIndex = isFront ? total + 10 : 0;
            } else if (isFront) {
              const scale = hovering ? 1.055 : 1;
              transform = `translate3d(0,0,0) rotate(0deg) rotateY(0deg) scale(${scale})`;
              opacity = 1;
              zIndex = total + 10;
            } else if (depth <= 3) {
              const ty = depth * (exposed ? 24 : 16);
              const tx = sign * depth * (exposed ? 18 : 7);
              const rot = sign * depth * (exposed ? 5.4 : 3.2);
              const rotY = -depth * (exposed ? 7 : 4.5);
              const scale = 1 - depth * (exposed ? 0.045 : 0.055);
              transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) rotateY(${rotY}deg) scale(${scale})`;
              opacity = depth === 1 ? (exposed ? 0.78 : 0.92) : depth === 2 ? (exposed ? 0.48 : 0.6) : (exposed ? 0.26 : 0.32);
              zIndex = total + 10 - depth;
            } else {
              transform = `translate3d(0, 72px, 0) rotate(${sign * 10}deg) rotateY(-24deg) scale(0.8)`;
              opacity = 0;
              zIndex = 0;
            }

            return (
              <button
                key={member.name}
                type="button"
                onClick={() => {
                  if (!isFront) return;
                  setCardStage((value) => (value === 0 ? 1 : value === 1 ? 2 : 0));
                }}
                className={`absolute inset-0 cursor-pointer overflow-hidden rounded-[28px] ${cardBorder} p-2.5 text-left shadow-2xl shadow-black/50 outline-none focus-visible:ring-2 focus-visible:ring-[#b7dd67]`}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  background: `linear-gradient(135deg, ${glassBorder}, rgba(255,255,255,0.08), ${glassBorder})`,
                  backdropFilter: "blur(18px)",
                  transition: reduced
                    ? "opacity 0.4s ease"
                    : `transform 0.85s ${STACK_EASE}, opacity 0.85s ${STACK_EASE}`,
                  transformStyle: "preserve-3d",
                  pointerEvents: isFront ? "auto" : "none",
                }}
                aria-label={cardStage > 0 && isFront ? `Show photo of ${member.name}` : `Flip card for ${member.name}`}
              >
                <motion.div
                  className="absolute inset-[-45%] rounded-full opacity-70"
                  style={{
                    background: `conic-gradient(from 0deg, transparent 0deg, transparent 72deg, ${glowColor} 112deg, transparent 152deg, transparent 360deg)`,
                  }}
                  animate={isFront ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
                />
                <div
                  className={`relative h-full rounded-[25px] ${cardBg}`}
                  style={{
                    backgroundColor: isFront && cardStage > 0
                      ? (dark ? "#263238" : "#e6f2dd")
                      : undefined,
                    transformStyle: "preserve-3d",
                    transform: isFront && cardStage > 0 ? "rotateX(180deg)" : "rotateX(0deg)",
                    transition: reduced ? "none" : `transform 0.85s ${STACK_EASE}`,
                  }}
                >
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[25px]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      draggable={false}
                      className="h-full w-full select-none object-cover"
                      style={{
                        objectPosition: member.imgPos,
                        filter: !isFront && hovering ? "blur(3px) saturate(0.92)" : "none",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11191c]/85 via-[#11191c]/10 to-transparent" />
                    {!isFront && hovering && <div className="absolute inset-0 bg-[#11191c]/35" />}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="font-['Outfit:SemiBold',sans-serif] text-2xl font-semibold leading-tight text-[#e6f2dd]">
                        {member.name}
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 rounded-[25px] backdrop-blur-xl"
                    style={{
                      backgroundColor: dark ? "#263238" : "#e6f2dd",
                      backfaceVisibility: "hidden",
                      transform: "rotateX(180deg)",
                    }}
                  >
                    <div className="relative h-full overflow-hidden rounded-[25px] px-7 py-8 sm:px-8 sm:py-9">
                      <motion.p
                        className={`absolute font-['Inter:Black',sans-serif] font-black leading-[1.28] ${dark ? "text-[#e6f2dd]" : "text-[#253236]"}`}
                        initial={false}
                        animate={
                          cardStage === 1
                            ? {
                                left: "50%",
                                top: "50%",
                                x: "-50%",
                                y: "-50%",
                                fontSize: "clamp(2.6rem, 9vw, 4.8rem)",
                              }
                            : {
                                left: "clamp(1.75rem, 5vw, 2rem)",
                                top: "clamp(2rem, 5.5vw, 2.25rem)",
                                x: "0%",
                                y: "0%",
                                fontSize: "clamp(1.5rem, 4.4vw, 2rem)",
                              }
                        }
                        transition={{ duration: 0.72, ease: easeOutExpo }}
                      >
                        {member.greeting}
                      </motion.p>
                      <motion.p
                        className={`max-w-full font-['Inter:Black',sans-serif] font-black text-[clamp(1.5rem,4.4vw,2rem)] leading-[1.28] tracking-[0.01em] ${dark ? "text-[#e6f2dd]/88" : "text-[#253236]/88"}`}
                        initial={false}
                        animate={{
                          opacity: cardStage === 2 ? 1 : 0,
                          y: cardStage === 2 ? 0 : 14,
                          filter: cardStage === 2 ? "blur(0px)" : "blur(8px)",
                        }}
                        transition={{ duration: 0.58, delay: cardStage === 2 ? 0.28 : 0, ease: easeOutExpo }}
                      >
                        <span className="inline-block opacity-0">{member.greeting}&nbsp;</span>
                        I am {member.bio}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <motion.button
            type="button"
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full border transition-colors"
            style={{ color: accent, borderColor: `${accent}73` }}
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Previous team member"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            type="button"
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full border transition-colors"
            style={{ color: accent, borderColor: `${accent}73` }}
            whileHover={{ scale: 1.08, x: 2 }}
            whileTap={{ scale: 0.94 }}
            aria-label="Next team member"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, x: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.48, ease: easeOutExpo }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 font-['Manrope:Medium',sans-serif] text-sm font-medium uppercase tracking-[0.32em]" style={{ color: accent }}>
            Featured member
          </p>
          <h3 className={`font-['Outfit:SemiBold',sans-serif] text-4xl font-semibold leading-tight md:text-6xl ${dark ? "text-[#e6f2dd]" : "text-[#253236]"}`}>
            {active.name}
          </h3>
          <p className={`mt-4 font-['Manrope:Bold',sans-serif] text-lg font-bold md:text-2xl ${dark ? "text-[#D9D9D9]" : "text-[#4f5a4b]"}`}>
            {active.role}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <AnimatedLinkButton href={active.portfolio} label="Portfolio" variant="portfolio" dark={dark} />
            <AnimatedLinkButton href={active.github} label="GitHub" variant="github" dark={dark} />
          </div>
          <div className="mt-8 flex justify-center gap-2 lg:justify-start">
            {team.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => {
                  setCardStage(0);
                  setCurrent(index);
                }}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: index === current ? "28px" : "8px",
                  background: index === current
                    ? accent
                    : dark ? "rgba(230,242,221,0.28)" : "rgba(47,55,45,0.22)",
                }}
                aria-label={`Show ${member.name}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default function AboutPage() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navFloating, setNavFloating] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const d = isDark;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setNavFloating(latest > 0.05);
  });

  // ── theme tokens ──
  const pageBg     = d ? "bg-[#273338]"                : "bg-[#e6f2dd]";
  const navLink    = d ? "text-[#e6f2dd]"              : "text-[rgba(111,127,60,0.9)]";
  const drawerText = d ? "text-[#D9D9D9]"              : "text-[#253236]";
  const badgeBg    = d ? "bg-[#2e3936]"                : "bg-[#526862]";
  const cardBg     = d ? "bg-[#e6f2dd]"                : "bg-[rgba(111,127,60,0.11)]";
  const cardBorder = d ? ""                             : "border border-[rgba(111,127,60,0.2)]";
  const aboutText  = d ? "text-[#D9D9D9]"              : "text-[#4f5a4b]";
  const headingCol = d ? "#2F372D"                     : "#253236";
  const brushFill  = d ? "#b7dd67"                     : "rgba(125,148,68,0.78)";
  const contactBg  = d ? "bg-[#c6e7bc]"                : "bg-[rgba(111,127,60,0.9)]";
  const mobMenuBg  = d ? "bg-[#2e3936]"                : "bg-[#4a5e59]";
  const footerBg   = d ? "bg-[rgba(183,221,103,0.82)]" : "bg-[#3e4f4a]";
  const footerText = d ? "text-[#273338]"              : "text-[rgba(183,221,103,0.85)]";
  const badgeGlow = d
    ? ["rgba(34,211,238,0.95)", "rgba(103,232,249,0.92)"]
    : ["rgba(39,51,56,0.9)", "rgba(63,79,74,0.82)"];
  const socialArr  = d
    ? [imgGmailDark,  imgInstagramDark,  imgLinkedinDark]
    : [imgGmailLight, imgInstagramLight, imgLinkedinLight];
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
    <motion.div
      className={`min-h-screen ${pageBg} transition-colors duration-300 overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <AnimatedButtonStyles />
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1"
        style={{
          width: progressScale,
          backgroundColor: d ? "#b7dd67" : "#273338",
          boxShadow: d ? "0 0 18px rgba(183,221,103,0.65)" : "0 0 18px rgba(39,51,56,0.34)",
        }}
      />

      {/* ─── NAV ─── */}
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
        <motion.img
          src={d ? imgIconPlaceholder : imgLogoRecolored}
          alt="SocialStack"
          className="relative z-10 h-10 w-auto object-contain transition-transform duration-200 sm:h-11 md:h-12"
          whileHover={{ rotate: -3, scale: 1.08, filter: "drop-shadow(0 0 12px rgba(183,221,103,0.48))" }}
          whileTap={{ scale: 0.96 }}
        />

        {/* Desktop links */}
        <div className={`relative z-10 hidden lg:flex gap-2 font-['Manrope:SemiBold',sans-serif] font-semibold text-lg ${navLink} transition-colors duration-300`}>
          {["Services", "About us", "Projects", "FAQs"].map((l, index) => (
            <motion.a
              key={l}
              href="#"
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
              {l}
            </motion.a>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={() => setIsDark(!d)}
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
            <Sun  size={13} className="absolute left-[8px] text-[#b7dd67]" />
            <Moon size={13} className={`absolute right-[8px] ${d ? "text-[#e6f2dd]" : "text-[#273338]"}`} />
            <span
              className="absolute w-6 h-6 rounded-full bg-[#c8e77b] shadow-md transition-transform duration-300 left-1"
              style={{ transform: d ? "translateX(32px)" : "translateX(0)" }}
            />
          </motion.button>

          {/* Contact — desktop */}
          <motion.button
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
          </motion.button>

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
          {["Services", "About us", "Projects", "FAQs"].map((l, index) => (
            <motion.a
              key={l}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`py-3 border-b ${d ? "border-white/10" : "border-[#253236]/15"} hover:opacity-70 hover:pl-2 transition-all duration-200`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {l}
            </motion.a>
          ))}
          <button className={`mt-2 ${contactBg} text-[#273338] font-['Manrope:Bold',sans-serif] font-bold text-[15px] px-5 py-2.5 rounded-full self-start hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-200`}>
            Contact
          </button>
        </motion.div>
        )}
      </AnimatePresence>

      <div className="h-[88px] md:h-[96px]" aria-hidden="true" />

      {/* ─── ABOUT SECTION ─── */}
      <motion.section
        id="about"
        className="relative px-5 pt-10 pb-16 text-center sm:px-6 md:px-20 md:pt-12"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
      >
        <motion.div
          className="absolute right-[-8rem] top-12 h-72 w-72 rounded-full border border-[#b7dd67]/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        />

        {/* Badge — top left */}
        <motion.div className="mb-10 text-left" variants={fadeUp}>
          <motion.div
            className="relative inline-flex overflow-hidden rounded-full p-[2px] cursor-default"
            whileHover={{ scale: 1.05, x: 5 }}
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
            <span className={`relative z-10 inline-flex ${badgeBg} rounded-full px-8 py-3 border border-[rgba(196,240,107,0.15)] transition-all duration-300`}>
              <span className="text-[#c8e77b] font-['Manrope:Medium',sans-serif] font-medium text-xl tracking-[2px]">About Us</span>
            </span>
          </motion.div>
        </motion.div>

        {/* "Our Story" — centered with real Figma brush */}
        <div className="flex justify-center mb-14">
          <BrushHeading textColor={headingCol} brushFill={brushFill}>
            Our Story
          </BrushHeading>
        </div>

        {/* Body text — centered */}
        <div className="mx-auto max-w-[20.75rem] space-y-5 text-center sm:max-w-2xl md:max-w-3xl">
          <MobileStoryText
            className={`mx-auto font-['Manrope:Bold',sans-serif] font-bold text-base leading-7 md:text-xl md:leading-8 ${aboutText} transition-colors duration-300`}
          >
            The world is online, and your business needs to be too.
          </MobileStoryText>
          <RevealText
            desktopOnly
            className={`mx-auto font-['Manrope:Bold',sans-serif] font-bold text-base leading-7 md:text-xl md:leading-8 ${aboutText} transition-colors duration-300`}
          >
            The world is online, and your business needs to be too.
          </RevealText>
          <MobileStoryText
            className={`mx-auto font-['Manrope:Bold',sans-serif] font-bold text-sm leading-[1.85] md:text-lg md:leading-8 ${aboutText} transition-colors duration-300`}
          >
            As a group of students doing our bachelors in Software Engineering, we are no strangers to the tech-related problems everyone faces. Out of a thirst for knowledge, and a burning desire to put ourselves out into the world, we decided to start a personal project: provide our services to the people.
          </MobileStoryText>
          <RevealText
            desktopOnly
            className={`mx-auto font-['Manrope:Bold',sans-serif] font-bold text-sm leading-[1.85] md:text-lg md:leading-8 ${aboutText} transition-colors duration-300`}
          >
            As a group of students doing our bachelors in Software Engineering, we are no strangers to the tech-related problems everyone faces. Out of a thirst for knowledge, and a burning desire to put ourselves out into the world, we decided to start a personal project: provide our services to the people.
          </RevealText>
          <MobileStoryText
            className={`mx-auto font-['Manrope:Bold',sans-serif] font-bold text-sm leading-[1.85] md:text-lg md:leading-7 ${aboutText} transition-colors duration-300`}
          >
            Here at Social Stack, we provide solutions for all your tech needs.
          </MobileStoryText>
          <RevealText
            desktopOnly
            className={`mx-auto font-['Manrope:Bold',sans-serif] font-bold text-sm leading-[1.85] md:text-lg md:leading-7 ${aboutText} transition-colors duration-300`}
          >
            Here at Social Stack, we provide solutions for all your tech needs.
          </RevealText>
        </div>
      </motion.section>

      {/* ─── TEAM SECTION ─── */}
      <motion.section
        id="team"
        className="px-6 md:px-20 py-12"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >

        {/* "The Team" — centered with real Figma brush */}
        <div className="flex justify-center mb-12">
          <BrushHeading textColor={headingCol} brushFill={brushFill}>
            The Team
          </BrushHeading>
        </div>

        <TeamFlipStack cardBg={cardBg} cardBorder={cardBorder} dark={d} />
      </motion.section>

      {/* ─── FOOTER ─── */}
      <motion.footer
        className={`${footerBg} px-6 md:px-20 py-14 mt-8 transition-colors duration-300`}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger}
      >
        <motion.div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between" variants={stagger}>

          <motion.div className="flex-1 max-w-2xl" variants={fadeUp}>
            <div className="flex items-center gap-3 mb-5">
              <img src={imgLogoRecolored} alt="SocialStack" className="h-16 w-auto object-contain" />
              <span className={`font-['Caveat_Brush:Regular',sans-serif] not-italic text-4xl ${footerText}`}>
                SocialStack
              </span>
            </div>
            <p className={`font-['Outfit:Light',sans-serif] font-light text-lg md:text-2xl ${footerText} mb-6 leading-relaxed max-w-xl`}>
              We provide ease in all your tech needs. Contact us today for a quote or reach out to
              learn more about our services.
            </p>
            <div className="flex gap-4 mb-5">
              {socialArr.map((icon, i) => (
                <FooterSocialButton
                  key={i}
                  src={icon}
                  alt={["Gmail", "Instagram", "LinkedIn"][i]}
                  href={["mailto:ss.socialstack@gmail.com", "#", "#"][i]}
                  dark={d}
                  index={i}
                />
              ))}
            </div>
            <p className={`font-['Outfit:Medium',sans-serif] font-medium text-lg md:text-2xl ${footerText}`}>
              ss.socialstack@gmail.com
            </p>
          </motion.div>

          <motion.div className="flex flex-col justify-start pt-0 md:pt-2" variants={stagger}>
            {["About Us", "Our Services", "Our Projects", "FAQs", "Contact Us"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className={`group relative w-fit overflow-hidden font-['Outfit:Light',sans-serif] font-light text-xl md:text-2xl ${footerText} leading-[50px] transition-all duration-200 hover:opacity-80`}
                variants={fadeUp}
                whileHover={{ x: 8 }}
              >
                <span className="relative z-10">{link}</span>
                <span
                  className={`absolute bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                    d ? "bg-[#273338]" : "bg-[rgba(183,221,103,0.85)]"
                  }`}
                />
                <span
                  className={`absolute bottom-2 left-0 h-[2px] w-7 -translate-x-10 rounded-full opacity-0 blur-[1px] transition-all duration-700 ease-out group-hover:translate-x-[180px] group-hover:opacity-100 ${
                    d ? "bg-[#273338]" : "bg-[rgba(183,221,103,0.85)]"
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className={`border-t ${d ? "border-[#273338]/20" : "border-[rgba(183,221,103,0.25)]"} mt-10 pt-5 flex flex-col sm:flex-row justify-between gap-2`}>
          <p className={`font-['Outfit:ExtraLight',sans-serif] font-extralight text-xl ${footerText}`}>
            © 2026 SocialStack
          </p>
          <p className={`font-['Outfit:ExtraLight',sans-serif] font-extralight text-xl ${footerText}`}>
            All rights reserved
          </p>
        </div>
      </motion.footer>
    </motion.div>
  );
}
