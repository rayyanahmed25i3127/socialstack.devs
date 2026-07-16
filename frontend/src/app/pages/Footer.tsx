import type { CSSProperties, Key } from "react";
import { motion } from "motion/react";

import imgLogoRecolored from "../../imports/DStory/eef17f758a83029ddf8e98fae373f5efc3059691.png";
import imgGmailDark from "../../imports/DStory/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramDark from "../../imports/DStory/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinDark from "../../imports/DStory/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";
import imgGmailLight from "../../imports/LStory/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgInstagramLight from "../../imports/LStory/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLinkedinLight from "../../imports/LStory/5ac66073681efe5925013d8e779ef7ae2781251e.png";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const viewport = { once: true, margin: "-90px" };

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easeOutExpo } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

/* Scoped styles for the social icon buttons (only needed by this component) */
function FooterSocialStyles() {
  return (
    <style>{`
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
          brightness(0) saturate(100%) invert(86%) sepia(76%) saturate(476%)
          hue-rotate(26deg) brightness(103%) contrast(94%)
          drop-shadow(0 0 3px rgba(183,221,103,0.4));
      }
      .ss-social-icon-light {
        filter:
          brightness(0) saturate(100%) invert(18%) sepia(13%) saturate(830%)
          hue-rotate(151deg) brightness(95%) contrast(88%)
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
          brightness(0) saturate(100%) invert(88%) sepia(88%) saturate(520%)
          hue-rotate(22deg) brightness(108%) contrast(95%)
          drop-shadow(0 0 6px rgba(183,221,103,0.72));
      }
      .ss-social-btn:hover .ss-social-icon-light,
      .ss-social-btn:focus-visible .ss-social-icon-light {
        filter:
          brightness(0) saturate(100%) invert(18%) sepia(13%) saturate(830%)
          hue-rotate(151deg) brightness(95%) contrast(88%)
          drop-shadow(0 0 4px rgba(39,51,56,0.42));
      }
    `}</style>
  );
}

/* NOTE: `key` is a reserved React prop and is always stripped before a
   component receives its props — it never actually needs to be declared
   here. Adding it as optional is the standard fix for TS2322 ("Property
   'key' does not exist...") when a prop type is written as an inline
   object literal instead of a named interface. */
function FooterSocialButton({
  src,
  alt,
  href,
  dark,
}: {
  src: string;
  alt: string;
  href: string;
  dark: boolean;
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

export function Footer({ theme }: { theme: "dark" | "light" }) {
  const d = theme === "dark";
  const footerBg = d ? "bg-[rgba(183,221,103,0.82)]" : "bg-[#3e4f4a]";
  const footerText = d ? "text-[#273338]" : "text-[rgba(183,221,103,0.85)]";
  const socialArr = d
    ? [imgGmailDark, imgInstagramDark, imgLinkedinDark]
    : [imgGmailLight, imgInstagramLight, imgLinkedinLight];

  return (
    <>
      <FooterSocialStyles />
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
    </>
  );
}
