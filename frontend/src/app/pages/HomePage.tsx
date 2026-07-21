// ─────────────────────────────────────────────────────────────────────────────
// HomePage - Modified to remove hero icons, unify theme spacing, and add animations
// ─────────────────────────────────────────────────────────────────────────────

import { cloneElement, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { usePersistentTheme } from "../usePersistentTheme";

import heroSvgPaths from "../../imports/home-hero-section/paths";
import heroImgLogo from "../../imports/home-shared/logo-photo.png";
import heroImgGlobe from "../../imports/home-hero-section/hero-globe-dark.png";
import whatWeDoSvgPaths from "../../imports/home-what-we-do-section/paths";
import whatWeDoImgFrame28 from "../../imports/home-what-we-do-section/project-web-dev.png";
import whatWeDoImgFrame29 from "../../imports/home-what-we-do-section/project-ads-branding.png";
import whatWeDoImgFrame30 from "../../imports/home-what-we-do-section/project-ui-ux.png";
import whatWeDoImgFrame31 from "../../imports/home-what-we-do-section/project-smm.png";
import whySvgPaths from "../../imports/home-why-social-stack-section/paths";
import howSvgPaths from "../../imports/home-how-social-stack-section/paths";
import ctaSvgPaths from "../../imports/home-cta-section/paths";
import lHeroSvgPaths from "../../imports/home-light-hero-section/paths";
import lHeroImgFrame25 from "../../imports/home-light-hero-section/hero-photo.png";
import lHeroImgGlobe from "../../imports/home-light-hero-section/hero-globe-light.png";
import lHeroImgFrame28 from "../../imports/home-light-hero-section/project-web-dev.png";
import lHeroImgFrame29 from "../../imports/home-light-hero-section/project-ads-branding.png";
import lHeroImgFrame30 from "../../imports/home-light-hero-section/project-ui-ux.png";
import lHeroImgFrame31 from "../../imports/home-light-hero-section/project-smm.png";

function HomeSliceButton({
  children,
  isLight,
  className = "",
  href,
}: {
  children: string;
  isLight: boolean;
  className?: string;
  href?: string;
}) {
  const style = {
    "--c1": isLight ? "#e6f2dd" : "#253236",
    "--c2": isLight ? "rgba(111,127,60,0.9)" : "rgba(183,221,103,0.8)",
  } as CSSProperties;
  const classNames = `home-slice inline-flex items-center justify-center font-['Inter',sans-serif] tracking-[0.6px] whitespace-nowrap no-underline ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classNames}
        style={style}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classNames}
      style={style}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text">{children}</span>
    </motion.button>
  );
}

// ─── Hero (dark theme) ─────────────────────────────────────────────────────
function Hero_WhatWeDo() {
  return (
    <motion.div className="relative inline-flex overflow-hidden rounded-full p-[2px] cursor-default" whileHover={{ scale: 1.05, x: 5 }}>
      <span
        className="absolute inset-[-80%] rounded-full opacity-90 animate-[spin360_3.8s_linear_infinite]"
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 64deg, rgba(34,211,238,0.95) 82deg, transparent 104deg, transparent 360deg)" }}
      />
      <span
        className="absolute inset-[-80%] rounded-full opacity-75 animate-[spin360_4.6s_linear_infinite]"
        style={{ background: "conic-gradient(from 180deg, transparent 0deg, transparent 64deg, rgba(103,232,249,0.92) 82deg, transparent 104deg, transparent 360deg)" }}
      />
      <span className="relative z-10 inline-flex items-center bg-[#2e3936] rounded-full px-6 py-2.5 lg:px-8 lg:py-3 border border-[rgba(196,240,107,0.15)]">
        <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#c8e77b] text-base lg:text-xl tracking-[1.8px] lg:tracking-[2px] whitespace-nowrap">
          WELCOME TO SOCIAL STACK
        </p>
      </span>
    </motion.div>
  );
}

function Hero_Frame() {
  return (
    <div className="h-[298px] overflow-clip relative shrink-0 w-full">
      <div className="absolute flex h-[185.616px] items-center justify-center left-[-3.16px] top-[13.19px] w-[349.325px]">
        <div className="-rotate-3 flex-none">
          <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r font-['Patrick_Hand:Regular',sans-serif] from-white h-[168px] leading-[0] not-italic relative text-[95px] text-[transparent] to-[#8cc9b4] to-[82.031%] tracking-[-3.8px] w-[341px] whitespace-pre-wrap">
            <p className="leading-[88px] mb-0">Ideas into</p>
            <p className="leading-[88px] mb-0">​</p>
            <p className="leading-[88px]">​</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[132.438px] items-center justify-center left-[146.15px] top-[100px] w-[644.308px]">
        <div className="-rotate-3 flex-none">
          <p className="[word-break:break-word] font-['Caveat_Brush:Regular',sans-serif] h-[99.079px] leading-[88px] not-italic relative text-[90px] text-[rgba(183,221,103,0.8)] text-center tracking-[-3.6px] w-[640px]">DIGITAL</p>
        </div>
      </div>
      <div className="absolute flex h-[104.804px] items-center justify-center left-[210px] top-[180px] w-[276px]">
        <div className="-rotate-3 flex-none">
          <p className="[word-break:break-word] font-['Caveat_Brush:Regular',sans-serif] h-[90.712px] leading-[88px] not-italic relative text-[90px] text-[rgba(183,221,103,0.8)] tracking-[-3.6px] w-[271.625px]">REALITY</p>
        </div>
      </div>
      <div className="absolute h-[20.029px] left-[52px] top-[199px] w-[141.633px]">
        <div className="absolute inset-[-4.99%_-0.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.633 22.0289">
            <defs>
              <linearGradient id="digitalDoodleFill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8cc9b4" />
                <stop offset="50%" stopColor="#b7dd67" />
                <stop offset="100%" stopColor="#e6f2dd" />
              </linearGradient>
            </defs>
            <path
              d={heroSvgPaths.p3cf8e00}
              id="Vector 1"
              stroke="url(#digitalDoodleFill)"
              strokeLinecap="round"
              strokeWidth="2"
              pathLength="1"
              strokeDasharray="1"
              className="animate-[doodleFill_2.6s_ease-in-out_infinite]"
            />
          </svg>
        </div>
      </div>
      <div className="absolute h-[42.491px] left-[336.97px] top-[80.08px] w-[25.159px] origin-center animate-[doodlePulse_2s_ease-out_infinite]">
        <div className="absolute inset-[-2.35%_-3.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1594 44.4912">
            <path d={heroSvgPaths.p2484b380} id="Vector 46" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[34.104px] left-[351.51px] top-[89.59px] w-[91.691px] origin-center animate-[doodlePulse_2s_ease-out_infinite]">
        <div className="absolute inset-[-2.93%_-1.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.6912 36.105">
            <path d={heroSvgPaths.p13dde6c0} id="Vector 47" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[14.536px] left-[360.46px] top-[135.99px] w-[67.091px] origin-center animate-[doodlePulse_2s_ease-out_infinite]">
        <div className="absolute inset-[-6.88%_-1.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.091 16.5366">
            <path d={heroSvgPaths.p2785b2a0} id="Vector 48" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hero_Button() {
  return (
    <HomeSliceButton isLight={false} href="/contact">Start a project</HomeSliceButton>
  );
}

function Hero_Button1() {
  return (
    <HomeSliceButton isLight={false} href="/services">View our services</HomeSliceButton>
  );
}

function Hero_Buttons() {
  return (
    <div className="content-stretch flex gap-[25px] h-[61px] items-start overflow-clip px-[10px] relative shrink-0 w-[456px]" data-name="Buttons">
      <Hero_Button />
      <Hero_Button1 />
    </div>
  );
}

// ─── Hero globe visual (shared across both themes and all breakpoints) ────
// Four animation layers, each on its own DOM node so they never fight over
// the same element's `transform`:
//   1. outer <div>        — pure-CSS `floatSlow` bob, loops forever
//   2. motion.div #2       — scroll-linked drift/tilt (useScroll + useTransform)
//   3. motion.div #3       — cursor-follow drift: nudges toward the pointer
//                            wherever it is inside the box, springs back to
//                            center on mouse leave
//   4. motion.img          — one-time scale-0 → scale-1 "pop in"
//
// The pop-in uses a plain `initial` → `animate` pair (not `whileInView`) so it
// fires the instant this component mounts — on first page load *and* every
// time it remounts on theme toggle (that remount happens because the page
// content sits under a `key={theme}` in `AnimatePresence`). `whileInView`
// depends on an IntersectionObserver callback that isn't guaranteed to have
// resolved yet on first paint for content that's already on-screen, which is
// why the old version only reliably animated on the *second* mount (theme
// toggle) and not the first (page load).
function HeroGlobeVisual({ isLight, sizeClassName = "w-[460px] h-[460px]", wrapperClassName = "", floatDelay = 0 }) {
  const src = isLight ? lHeroImgGlobe : heroImgGlobe;

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
  const scrollY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  // Cursor-follow: raw motion values updated on pointer move, smoothed
  // through a spring so the globe glides toward the cursor instead of
  // snapping to it.
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { stiffness: 120, damping: 14, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const MAX_SHIFT = 22; // px of drift at the very edge of the box

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 → 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    cursorX.set(relX * 2 * MAX_SHIFT);
    cursorY.set(relY * 2 * MAX_SHIFT);
  };
  const handlePointerLeave = () => {
    cursorX.set(0);
    cursorY.set(0);
  };

  return (
    <div
      className={`relative animate-[floatSlow_6s_ease-in-out_infinite] ${sizeClassName} ${wrapperClassName}`}
      style={{ animationDelay: `${floatDelay}s` }}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      <motion.div ref={scrollRef} style={{ y: scrollY, rotate: scrollRotate }} className="relative size-full">
        {/* soft glow behind the globe so it doesn't feel like a flat sticker */}
        <div
          aria-hidden
          className="absolute inset-[10%] rounded-full blur-3xl -z-10"
          style={{
            background: isLight
              ? "radial-gradient(circle, rgba(111,127,60,0.28), transparent 70%)"
              : "radial-gradient(circle, rgba(183,221,103,0.22), transparent 70%)",
          }}
        />
        <motion.div style={{ x: springX, y: springY }} className="relative size-full">
          <motion.img
            src={src}
            alt="Illustration of a connected global network"
            draggable={false}
            className="relative size-full object-contain select-none drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Dedicated mobile Hero — the desktop Hero above is a fixed 1280px Figma
// canvas that gets uniformly scaled down via ScaleFrame; on phone widths that
// shrinks everything (badge, headline, paragraph, buttons) by roughly 70%,
// which is why it read as tiny. This version is built with real responsive
// Tailwind sizing instead, shared by both themes via `isLight`.
function HeroMobile({ isLight }) {
  return (
    <div className="flex flex-col items-start gap-5 px-4 pt-3 pb-8">
      {isLight ? <LHero_WhatWeDo /> : <Hero_WhatWeDo />}

      <div className="-rotate-2 leading-[0.95]">
        <p
          className={`bg-clip-text bg-gradient-to-r text-transparent font-['Patrick_Hand:Regular',sans-serif] text-4xl sm:text-5xl tracking-[-1.5px] ${
            isLight ? "from-[#2f372d] to-[#6e7f3f]" : "from-white to-[#8cc9b4]"
          }`}
        >
          Ideas into
        </p>
        <p
          className={`font-['Caveat_Brush:Regular',sans-serif] text-5xl sm:text-6xl tracking-[-1.5px] ${
            isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[rgba(183,221,103,0.8)]"
          }`}
        >
          DIGITAL
        </p>
        <p
          className={`font-['Caveat_Brush:Regular',sans-serif] text-5xl sm:text-6xl tracking-[-1.5px] ${
            isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[rgba(183,221,103,0.8)]"
          }`}
        >
          REALITY
        </p>
      </div>

      <p
        className={`font-['Manrope:ExtraBold',sans-serif] font-extrabold text-base sm:text-lg leading-relaxed ${
          isLight ? "text-[#556052]" : "text-[#c7d1cc]"
        }`}
      >
        We design websites, build apps, craft brands, and create digital experiences that help businesses grow with confidence.
      </p>

      <div className="flex flex-wrap gap-3 w-full">
        <HomeSliceButton isLight={isLight} href="/contact">
          Start a project
        </HomeSliceButton>
        <HomeSliceButton isLight={isLight} href="/services">
          View our services
        </HomeSliceButton>
      </div>

      <HeroGlobeVisual
        isLight={isLight}
        sizeClassName="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
        wrapperClassName="mx-auto mt-1"
      />
    </div>
  );
}

function Hero_HeroHeader() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[10px] relative shrink-0 w-[560px]" data-name="hero header">
      <Hero_ServiceHeader />
    </div>
  );
}

function Hero_ServiceHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-[669px] items-start overflow-clip p-[10px] relative shrink-0 w-[560px]" data-name="service header">
      <Hero_WhatWeDo />
      <Hero_Frame />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[132px] leading-[32px] min-w-full relative shrink-0 text-[#c7d1cc] text-[22px] w-[min-content]">We design websites, build apps, craft brands, and create digital experiences that help businesses grow with confidence.</p>
      <Hero_Buttons />
    </div>
  );
}

// Unified Hero alignment
function HeroOnly() {
  return (
    <div className="content-stretch flex gap-[64px] h-full items-start overflow-clip px-[80px] relative shrink-0 w-[1280px]" data-name="hero">
      <Hero_HeroHeader />
      <HeroGlobeVisual isLight={false} wrapperClassName="self-start mt-[70px] shrink-0" />
    </div>
  );
}

// ─── What We Do (dark theme) ───────────────────────────────────────────────
function WhatWeDo_Brush() {
  return (
    <div className="h-[152px] overflow-clip relative shrink-0 w-[962px]" data-name="Brush">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 824 108">
        <path d={whatWeDoSvgPaths.p3ff0aa00} fill="var(--fill-0, #B7DD67)" fillOpacity="0.9" id="Vector" />
      </svg>
      <p className="[word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] inset-[16.45%_11.15%_-14.6%_3.22%] leading-[88px] not-italic text-[#273338] text-[90px] text-center tracking-[-3.6px]">What social stack does</p>
    </div>
  );
}

function WhatWeDo_Frame1() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame28} />
    </div>
  );
}


function WhatWeDo_Frame2() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame29} />
    </div>
  );
}


function WhatWeDo_Frame3() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame30} />
    </div>
  );
}


function WhatWeDo_Frame4() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame31} />
    </div>
  );
}




// ─── Why Social Stack (dark theme) ─────────────────────────────────────────
function Why_Brush() {
  return (
    <div className="h-[142px] overflow-clip relative shrink-0 w-[834px]" data-name="Brush">
      <div className="absolute inset-[0_-1.2%_0_-2.88%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 781 108">
          <path d={whySvgPaths.p2e67a700} fill="var(--fill-0, #B7DD67)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] inset-[11.97%_12.23%_-9.86%_0] leading-[88px] not-italic text-[#273338] text-[90px] text-center tracking-[-3.6px]">Why choose social stack</p>
    </div>
  );
}
function Why_Stickynote() {
  return (
    <div className="absolute flex items-center justify-center left-[13px] size-[51.231px] top-[14px]">
      <div className="-rotate-4 flex-none">
        <div className="bg-[rgba(183,221,103,0.8)] overflow-clip relative rounded-[4px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] size-[48px]" data-name="stickynote">
          <p className="[word-break:break-word] absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-[20.02px] text-[20px] text-black top-[14.81px] whitespace-nowrap">1.</p>
        </div>
      </div>
    </div>
  );
}

function Why_Frame2() {
  return (
    <div className="absolute h-[65px] left-0 overflow-clip top-[7px] w-[70px]">
      <Why_Stickynote />
    </div>
  );
}

function Why_Frame3() {
  return (
    <div className="absolute h-[116px] left-[70px] overflow-clip top-[14px] w-[280px]">
      <p className="[word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[94px] leading-[40px] left-[18px] text-[#f4f4ef] text-[30px] top-px tracking-[-1.2px] w-[262px]">Everything under one roof</p>
    </div>
  );
}

function Why_Frame1() {
  return (
    <div className="h-[109px] overflow-clip relative shrink-0 w-[337px]">
      <Why_Frame2 />
      <Why_Frame3 />
    </div>
  );
}


function Why_Stickynote1() {
  return (
    <div className="absolute flex items-center justify-center left-[13.39px] size-[50.446px] top-[14.39px]">
      <div className="flex-none rotate-3">
        <div className="bg-[rgba(183,221,103,0.8)] overflow-clip relative rounded-[4px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] size-[48px]" data-name="stickynote">
          <p className="[word-break:break-word] absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-[20.02px] text-[20px] text-black top-[14.81px] whitespace-nowrap">2.</p>
        </div>
      </div>
    </div>
  );
}

function Why_Frame5() {
  return (
    <div className="absolute h-[65px] left-0 overflow-clip top-[7px] w-[70px]">
      <Why_Stickynote1 />
    </div>
  );
}

function Why_Frame6() {
  return (
    <div className="absolute h-[116px] left-[70px] overflow-clip top-[14px] w-[280px]">
      <p className="[word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[94px] leading-[40px] left-[18px] text-[#f4f4ef] text-[30px] top-px tracking-[-1.2px] w-[262px]">Fast communication</p>
    </div>
  );
}

function Why_Frame4() {
  return (
    <div className="h-[109px] overflow-clip relative shrink-0 w-[337px]">
      <Why_Frame5 />
      <Why_Frame6 />
    </div>
  );
}


function Why_Stickynote2() {
  return (
    <div className="absolute flex items-center justify-center left-[12.24px] size-[52.754px] top-[13.24px]">
      <div className="-rotate-6 flex-none">
        <div className="bg-[rgba(183,221,103,0.8)] overflow-clip relative rounded-[4px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] size-[48px]" data-name="stickynote">
          <p className="[word-break:break-word] absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-[20.02px] text-[20px] text-black top-[14.81px] whitespace-nowrap">3.</p>
        </div>
      </div>
    </div>
  );
}

function Why_Frame8() {
  return (
    <div className="absolute h-[65px] left-0 overflow-clip top-[7px] w-[70px]">
      <Why_Stickynote2 />
    </div>
  );
}

function Why_Frame9() {
  return (
    <div className="absolute h-[73px] left-[70px] overflow-clip top-[14px] w-[280px]">
      <p className="[word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[72px] leading-[40px] left-[18px] text-[#f4f4ef] text-[30px] top-[17px] tracking-[-1.2px] w-[262px]">Built for growth</p>
    </div>
  );
}

function Why_Frame7() {
  return (
    <div className="h-[87px] overflow-clip relative shrink-0 w-[337px]">
      <Why_Frame8 />
      <Why_Frame9 />
    </div>
  );
}




// ─── How Social Stack (dark theme) ─────────────────────────────────────────
function How_Brush() {
  return (
    <div className="h-[142px] overflow-clip relative shrink-0 w-[834px]" data-name="Brush">
      <div className="absolute inset-[0_3.36%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 781 108">
          <path d={howSvgPaths.p2e67a700} fill="var(--fill-0, #B7DD67)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] inset-[12.68%_9.59%_13.38%_4.68%] leading-[88px] not-italic text-[#273338] text-[90px] text-center tracking-[-3.6px]">How social stack works</p>
    </div>
  );
}

function How_IconEmojiCategoryEmojiObjectsBlack24Dp({ className = "" }) {
  return (
    <div className={className || "absolute h-[56px] left-[18px] overflow-clip top-[13px] w-[46px]"} data-name="Icon / emoji-category / emoji_objects_black_24dp">
      <div className="absolute inset-[12.5%_20.83%_8.33%_20.82%]" data-name="fill">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8396 44.3333">
          <path d={howSvgPaths.p362031c0} fill="var(--fill-0, #B7DD67)" fillOpacity="0.8" id="fill" />
        </svg>
      </div>
    </div>
  );
}

function How_Frame2() {
  return (
    <div className="absolute border-2 border-[rgba(183,221,103,0.8)] border-solid left-[11px] overflow-clip rounded-[9999999px] size-[85px] top-[104px]">
      <How_IconEmojiCategoryEmojiObjectsBlack24Dp />
    </div>
  );
}

function How_Frame3() {
  return (
    <div className="absolute border-2 border-[#b7dd67] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65px] not-italic text-[#b7dd67] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 1</p>
    </div>
  );
}

function How_Step() {
  return (
    <div className="absolute h-[221px] left-[10px] overflow-clip top-[24px] w-[300px]" data-name="step 1">
      <How_Frame2 />
      <How_Frame3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[164.5px] not-italic text-[20px] text-center text-white top-[107px] tracking-[-0.8px] w-[109px]">Tell us your idea.</p>
      <div className="absolute h-[5.181px] left-[200px] top-[183px] w-[100px]" data-name="connector-arrow">
        <div className="absolute inset-[-78.49%_0_-41.4%_-0.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.174 11.3927">
            <path d={howSvgPaths.p359a4000} fill="var(--stroke-0, #B7DD67)" fillOpacity="0.8" id="Arrow 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function How_Frame4() {
  return (
    <div className="absolute border-2 border-[#b7dd67] border-solid left-[16px] overflow-clip rounded-[9999px] size-[85px] top-[104px]">
      <div className="absolute left-[2px] size-[78px] top-[-2px]" data-name="tabler/pencil-pause">
        <div className="absolute inset-[19.46%_19.46%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-3.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.8174 52.8174">
              <path d={howSvgPaths.p266d080} id="Vector" stroke="var(--stroke-0, #B7DD67)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Vector">
          <div className="absolute inset-[-11.54%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M1.5 1.5L14.5 14.5" id="Vector" stroke="var(--stroke-0, #B7DD67)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_29.17%_8.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-6.15%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18.25">
              <path d="M1 1V17.25" id="Vector" stroke="var(--stroke-0, #B7DD67)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_8.33%_87.5%]" data-name="Vector">
          <div className="absolute inset-[-6.15%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18.25">
              <path d="M1 1V17.25" id="Vector" stroke="var(--stroke-0, #B7DD67)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function How_Frame5() {
  return (
    <div className="absolute border-2 border-[#b7dd67] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65px] not-italic text-[#b7dd67] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 2</p>
    </div>
  );
}

function How_Step1() {
  return (
    <div className="absolute h-[221px] left-[330px] overflow-clip top-[24px] w-[300px]" data-name="step 2">
      <How_Frame4 />
      <How_Frame5 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[164.5px] not-italic text-[20px] text-center text-white top-[107px] tracking-[-0.8px] w-[109px]">We plan your stack</p>
    </div>
  );
}

function How_Frame6() {
  return (
    <div className="absolute border border-[rgba(183,221,103,0.8)] border-solid left-[16px] overflow-clip rounded-[99999px] size-[85px] top-[94px]">
      <div className="absolute h-[50px] left-[11px] overflow-clip rounded-[5px] top-[17px] w-[62px]" data-name="Outline / Network, IT, Programming / Code Square">
        <div className="absolute inset-[5.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5417 44.7917">
            <g id="Vector">
              <path d={howSvgPaths.p1d674e00} fill="var(--fill-0, #B7DD67)" />
              <path d={howSvgPaths.p37ae180} fill="var(--fill-0, #B7DD67)" />
              <path d={howSvgPaths.p27471600} fill="var(--fill-0, #B7DD67)" />
              <path clipRule="evenodd" d={howSvgPaths.p7ea6800} fill="var(--fill-0, #B7DD67)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function How_Frame7() {
  return (
    <div className="absolute border-2 border-[#b7dd67] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65.5px] not-italic text-[#b7dd67] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 3</p>
    </div>
  );
}

function How_Step2() {
  return (
    <div className="absolute h-[221px] left-[660px] overflow-clip top-[24px] w-[300px]" data-name="step 3">
      <How_Frame6 />
      <How_Frame7 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[164.5px] not-italic text-[20px] text-center text-white top-[107px] tracking-[-0.8px] w-[109px]">We build it for you</p>
    </div>
  );
}

function How_RocketTakeoff({ className = "" }) {
  return (
    <div className={className || "absolute left-[9px] overflow-clip size-[55px] top-[17px]"} data-name="rocket-takeoff">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g id="Vector">
          <path d={howSvgPaths.p1423e400} fill="var(--fill-0, #B7DD67)" />
          <path d={howSvgPaths.p25ebb400} fill="var(--fill-0, #B7DD67)" />
          <path d={howSvgPaths.p184a4dc0} fill="var(--fill-0, #B7DD67)" />
        </g>
      </svg>
    </div>
  );
}

function How_Frame8() {
  return (
    <div className="absolute border border-[rgba(183,221,103,0.8)] border-solid left-[16px] overflow-clip rounded-[99999px] size-[85px] top-[94px]">
      <How_RocketTakeoff />
    </div>
  );
}

function How_Frame9() {
  return (
    <div className="absolute border-2 border-[#b7dd67] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65.5px] not-italic text-[#b7dd67] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 4</p>
    </div>
  );
}

function How_Step3() {
  return (
    <div className="absolute h-[221px] left-[990px] overflow-clip top-[24px] w-[300px]" data-name="step 4">
      <How_Frame8 />
      <How_Frame9 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[185.5px] not-italic text-[20px] text-center text-white top-[107px] tracking-[-0.8px] w-[151px]">Launch and grow together</p>
    </div>
  );
}

function How_Frame1() {
  return (
    <div className="h-[350px] overflow-clip relative shrink-0 w-full" data-name="steps-canvas">
      <How_Step />
      <How_Step1 />
      <How_Step2 />
      <How_Step3 />
      <div className="absolute h-[10.728px] left-[549px] top-[138.7px] w-[100px]" data-name="connector-arrow">
        <div className="absolute inset-[-9.32%_0_-14.53%_-0.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.292 13.287">
            <path d={howSvgPaths.p1de58920} fill="var(--stroke-0, #B7DD67)" fillOpacity="0.8" id="Arrow 3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[5.766px] left-[879px] top-[212px] w-[100px]" data-name="connector-arrow">
        <div className="absolute inset-[-59.96%_0_-35.49%_-0.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.167 11.2699">
            <path d={howSvgPaths.p3d75600} fill="var(--stroke-0, #B7DD67)" fillOpacity="0.8" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function How_Frame() {
  return (
    <div className="content-stretch flex flex-col h-[350px] items-start relative shrink-0 w-full">
      <How_Frame1 />
    </div>
  );
}

// ─── CTA — "Ready to build" (dark theme) ───────────────────────────────────
function Cta_Brush() {
  return (
    <div className="absolute flex h-[119.486px] items-center justify-center left-[162.77px] top-[101.51px] w-[369.917px]">
      <div className="-rotate-7 flex-none">
        <div className="h-[75.764px] overflow-clip relative w-[363.392px]" data-name="Brush">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363.392 75.7645">
            <path d={ctaSvgPaths.p3e6522f0} fill="var(--fill-0, #B7DD67)" fillOpacity="0.8" id="Vector" />
          </svg>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] leading-[88px] left-[172.18px] not-italic text-[#222d31] text-[70px] text-center top-[-8.56px] tracking-[-2.8px] whitespace-nowrap">Your stack?</p>
        </div>
      </div>
    </div>
  );
}

function Cta_Button() {
  return (
    <HomeSliceButton isLight={false} href="/contact" className="absolute left-[759px] top-[155px]">
      Start your project
    </HomeSliceButton>
  );
}

function Cta_Frame1() {
  return (
    <div className="absolute bg-[#253236] border border-[#4c5a53] border-solid h-[236px] left-[52px] overflow-clip rounded-[18px] top-[41px] w-[1141px]">
      <div className="absolute flex h-[187px] items-center justify-center left-[602.98px] top-[23.99px] w-[2.022px]">
        <div className="flex-none rotate-[89.38deg]">
          <div className="h-0 relative w-[187.011px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187.011 1">
                <path d="M0 0.5H187.011" id="Line 7" stroke="var(--stroke-0, #4C5A53)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[127.927px] items-center justify-center left-[242.62px] top-[24px] w-[341.242px]">
        <div className="-rotate-7 flex-none">
          <p className="[word-break:break-word] font-['Caveat_Brush:Regular',sans-serif] leading-[88px] not-italic relative text-[#e6f2dd] text-[70px] text-center tracking-[-2.8px] whitespace-pre">{`Ready to  build`}</p>
        </div>
      </div>
      <Cta_Brush />
      <div className="absolute h-[9.371px] left-[436.67px] top-[45.15px] w-[56.224px]">
        <div className="absolute inset-[-10.67%_-1.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.2246 11.371">
            <path d={ctaSvgPaths.pc2aca00} id="Vector 50" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[37.249px] left-[437.08px] top-[6.04px] w-[30.945px]">
        <div className="absolute inset-[-2.68%_-3.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9451 39.2487">
            <path d={ctaSvgPaths.p365a1600} id="Vector 51" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[8.102px] left-[79.7px] top-[132.1px] w-[101.92px]">
        <div className="absolute inset-[-12.34%_-0.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.92 10.1024">
            <path d={ctaSvgPaths.pfce4240} id="Vector 52" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[65px] leading-[32px] left-[885.5px] text-[#f4f4ef] text-[20px] text-center top-[55px] tracking-[-0.8px] w-[447px]">{`Whether you're starting from scratch or ready to level up, we're here to help bring your ideas to life.`}</p>
      <Cta_Button />
      <div className="absolute h-[26.708px] left-[994.52px] top-[193.54px] w-[36.246px]">
        <div className="absolute inset-[-3.74%_-2.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.2464 28.7079">
            <path d={ctaSvgPaths.p16a07900} id="Vector 53" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[19.554px] left-[984.74px] top-[184.48px] w-[12.157px]">
        <div className="absolute inset-[-5.12%_-8.23%_-5.11%_-10.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4928 21.5543">
            <path d={ctaSvgPaths.pa3c8f40} id="Vector 54" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cta_Frame() {
  return (
    <div className="relative size-full">
      <Cta_Frame1 />
      <div className="absolute h-[54.142px] left-[475.09px] top-[36.13px] w-[11.453px]">
        <div className="absolute inset-[-1.85%_-8.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4531 56.142">
            <path d={ctaSvgPaths.p22b59700} id="Vector 49" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Light theme page (self-contained: its own nav, hero, sections, footer) ─
function LHero_WhatWeDo() {
  return (
    <motion.div className="relative inline-flex overflow-hidden rounded-full p-[2px] cursor-default" whileHover={{ scale: 1.05, x: 5 }}>
      <span
        className="absolute inset-[-80%] rounded-full opacity-90 animate-[spin360_3.8s_linear_infinite]"
        style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 64deg, rgba(39,51,56,0.9) 82deg, transparent 104deg, transparent 360deg)" }}
      />
      <span
        className="absolute inset-[-80%] rounded-full opacity-75 animate-[spin360_4.6s_linear_infinite]"
        style={{ background: "conic-gradient(from 180deg, transparent 0deg, transparent 64deg, rgba(63,79,74,0.82) 82deg, transparent 104deg, transparent 360deg)" }}
      />
      <span className="relative z-10 inline-flex items-center bg-[#526862] rounded-full px-6 py-2.5 lg:px-8 lg:py-3 border border-[rgba(196,240,107,0.15)]">
        <p className="font-['Manrope:Medium',sans-serif] font-medium text-[#c8e77b] text-base lg:text-xl tracking-[1.8px] lg:tracking-[2px] whitespace-nowrap">
          WELCOME TO SOCIAL STACK
        </p>
      </span>
    </motion.div>
  );
}

function LHero_Frame() {
  return (
    <div className="h-[298px] overflow-clip relative shrink-0 w-full">
      <div className="absolute flex h-[185.616px] items-center justify-center left-[-3.16px] top-[13.19px] w-[349.325px]">
        <div className="-rotate-3 flex-none">
          <div className="[word-break:break-word] bg-clip-text bg-gradient-to-r font-['Patrick_Hand:Regular',sans-serif] from-[#2f372d] h-[168px] leading-[0] not-italic relative text-[95px] text-[transparent] to-[#6e7f3f] to-[82.031%] tracking-[-3.8px] w-[341px] whitespace-pre-wrap">
            <p className="leading-[88px] mb-0">Ideas into</p>
            <p className="leading-[88px] mb-0">​</p>
            <p className="leading-[88px]">​</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[132.438px] items-center justify-center left-[146.15px] top-[100px] w-[644.308px]">
        <div className="-rotate-3 flex-none">
          <p className="[word-break:break-word] font-['Caveat_Brush:Regular',sans-serif] h-[99.079px] leading-[88px] not-italic relative text-[90px] text-[rgba(111,127,60,0.9)] text-center tracking-[-3.6px] w-[640px]">DIGITAL</p>
        </div>
      </div>
      <div className="absolute flex h-[104.804px] items-center justify-center left-[210px] top-[180px] w-[276px]">
        <div className="-rotate-3 flex-none">
          <p className="[word-break:break-word] font-['Caveat_Brush:Regular',sans-serif] h-[90.712px] leading-[88px] not-italic relative text-[90px] text-[rgba(111,127,60,0.9)] tracking-[-3.6px] w-[271.625px]">REALITY</p>
        </div>
      </div>
      <div className="absolute h-[20.029px] left-[52px] top-[199px] w-[141.633px]">
        <div className="absolute inset-[-4.99%_-0.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143.633 22.0289">
            <defs>
              <linearGradient id="digitalDoodleFillLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f5a4b" />
                <stop offset="50%" stopColor="#6f7f3c" />
                <stop offset="100%" stopColor="#b7dd67" />
              </linearGradient>
            </defs>
            <path
              d={lHeroSvgPaths.p3cf8e00}
              id="Vector 1"
              stroke="url(#digitalDoodleFillLight)"
              strokeLinecap="round"
              strokeWidth="2"
              pathLength="1"
              strokeDasharray="1"
              className="animate-[doodleFill_2.6s_ease-in-out_infinite]"
            />
          </svg>
        </div>
      </div>
      <div className="absolute h-[42.491px] left-[336.97px] top-[80.08px] w-[25.159px] origin-center animate-[doodlePulse_2s_ease-out_infinite]">
        <div className="absolute inset-[-2.35%_-3.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.1594 44.4912">
            <path d={lHeroSvgPaths.p2484b380} id="Vector 46" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[34.104px] left-[351.51px] top-[89.59px] w-[91.691px] origin-center animate-[doodlePulse_2s_ease-out_infinite]">
        <div className="absolute inset-[-2.93%_-1.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 93.6912 36.105">
            <path d={lHeroSvgPaths.p13dde6c0} id="Vector 47" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[14.536px] left-[360.46px] top-[135.99px] w-[67.091px] origin-center animate-[doodlePulse_2s_ease-out_infinite]">
        <div className="absolute inset-[-6.88%_-1.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.091 16.5366">
            <path d={lHeroSvgPaths.p2785b2a0} id="Vector 48" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LHero_Button() {
  return (
    <HomeSliceButton isLight href="/contact">Start a project</HomeSliceButton>
  );
}

function LHero_Button1() {
  return (
    <HomeSliceButton isLight href="/services">View our services</HomeSliceButton>
  );
}

function LHero_Buttons() {
  return (
    <div className="content-stretch flex gap-[25px] h-[61px] items-start overflow-clip px-[10px] relative shrink-0 w-[456px]" data-name="Buttons">
      <LHero_Button />
      <LHero_Button1 />
    </div>
  );
}

function LHero_ServiceHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-[669px] items-start overflow-clip p-[10px] relative shrink-0 w-[560px]" data-name="service header">
      <LHero_WhatWeDo />
      <LHero_Frame />
      <p className="[word-break:break-word] font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[132px] leading-[32px] min-w-full relative shrink-0 text-[#556052] text-[22px] w-[min-content]">We design websites, build apps, craft brands, and create digital experiences that help businesses grow with confidence.</p>
      <LHero_Buttons />
    </div>
  );
}

function LHero_HeroHeader() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[10px] relative shrink-0 w-[560px]" data-name="hero header">
      <LHero_ServiceHeader />
    </div>
  );
}

function LHero_HeroOnly() {
  return (
    <div className="content-stretch flex gap-[64px] h-full items-start overflow-clip px-[80px] relative shrink-0 w-[1280px]" data-name="hero">
      <LHero_HeroHeader />
      <HeroGlobeVisual isLight={true} wrapperClassName="self-start mt-[70px] shrink-0" />
    </div>
  );
}

function LHero_Brush() {
  return (
    <div className="h-[152px] overflow-clip relative shrink-0 w-[962px]" data-name="Brush">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 962 152">
        <path d={lHeroSvgPaths.p14f3f300} fill="var(--fill-0, #6F7F3C)" fillOpacity="0.9" id="Vector" />
      </svg>
      <p className="[word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] inset-[16.45%_11.15%_-14.6%_3.22%] leading-[88px] not-italic text-[#e6f2dd] text-[90px] text-center tracking-[-3.6px]">What Social Stack does</p>
    </div>
  );
}

function LHero_Frame3() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame28} />
    </div>
  );
}


function LHero_Frame4() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame29} />
    </div>
  );
}


function LHero_Frame5() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame30} />
    </div>
  );
}


function LHero_Frame6() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame31} />
    </div>
  );
}




function LHero_Brush1() {
  return (
    <div className="h-[142px] overflow-clip relative shrink-0 w-[834px]" data-name="Brush">
      <div className="absolute inset-[0_-1.2%_0_-2.88%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 868 142">
          <path d={lHeroSvgPaths.p31635200} fill="var(--fill-0, #6F7F3C)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] inset-[11.97%_12.23%_-9.86%_0] leading-[88px] not-italic text-[#e6f2dd] text-[90px] text-center tracking-[-3.6px]">Why choose social stack</p>
    </div>
  );
}

function LHero_Stickynote() {
  return (
    <div className="absolute flex items-center justify-center left-[13px] size-[51.231px] top-[14px]">
      <div className="-rotate-4 flex-none">
        <div className="bg-[rgba(111,127,60,0.9)] overflow-clip relative rounded-[4px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] size-[48px]" data-name="stickynote">
          <p className="[word-break:break-word] absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-[20.02px] text-[#d9d9d9] text-[20px] top-[14.81px] whitespace-nowrap">1.</p>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame9() {
  return (
    <div className="absolute h-[65px] left-0 overflow-clip top-[7px] w-[70px]">
      <LHero_Stickynote />
    </div>
  );
}

function LHero_Frame10() {
  return (
    <div className="absolute h-[116px] left-[70px] overflow-clip top-[14px] w-[280px]">
      <p className="[word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[94px] leading-[40px] left-[18px] text-[#2f372d] text-[30px] top-px tracking-[-1.2px] w-[262px]">Everything under one roof</p>
    </div>
  );
}

function LHero_Frame8() {
  return (
    <div className="h-[109px] overflow-clip relative shrink-0 w-[337px]">
      <LHero_Frame9 />
      <LHero_Frame10 />
    </div>
  );
}


function LHero_Stickynote1() {
  return (
    <div className="absolute flex items-center justify-center left-[13.39px] size-[50.446px] top-[14.39px]">
      <div className="flex-none rotate-3">
        <div className="bg-[rgba(111,127,60,0.9)] overflow-clip relative rounded-[4px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] size-[48px]" data-name="stickynote">
          <p className="[word-break:break-word] absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-[20.02px] text-[#d9d9d9] text-[20px] top-[14.81px] whitespace-nowrap">2.</p>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame12() {
  return (
    <div className="absolute h-[65px] left-0 overflow-clip top-[7px] w-[70px]">
      <LHero_Stickynote1 />
    </div>
  );
}

function LHero_Frame13() {
  return (
    <div className="absolute h-[116px] left-[70px] overflow-clip top-[14px] w-[280px]">
      <p className="[word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[94px] leading-[40px] left-[18px] text-[#2f372d] text-[30px] top-px tracking-[-1.2px] w-[262px]">Fast communication</p>
    </div>
  );
}

function LHero_Frame11() {
  return (
    <div className="h-[109px] overflow-clip relative shrink-0 w-[337px]">
      <LHero_Frame12 />
      <LHero_Frame13 />
    </div>
  );
}


function LHero_Stickynote2() {
  return (
    <div className="absolute flex items-center justify-center left-[12.24px] size-[52.754px] top-[13.24px]">
      <div className="-rotate-6 flex-none">
        <div className="bg-[rgba(111,127,60,0.9)] overflow-clip relative rounded-[4px] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] size-[48px]" data-name="stickynote">
          <p className="[word-break:break-word] absolute font-['Manrope:Medium',sans-serif] font-medium leading-[20px] left-[20.02px] text-[#d9d9d9] text-[20px] top-[14.81px] whitespace-nowrap">3.</p>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame15() {
  return (
    <div className="absolute h-[65px] left-0 overflow-clip top-[7px] w-[70px]">
      <LHero_Stickynote2 />
    </div>
  );
}

function LHero_Frame16() {
  return (
    <div className="absolute h-[73px] left-[70px] overflow-clip top-[14px] w-[280px]">
      <p className="[word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[72px] leading-[40px] left-[18px] text-[#2f372d] text-[30px] top-[17px] tracking-[-1.2px] w-[262px]">Built for growth</p>
    </div>
  );
}

function LHero_Frame14() {
  return (
    <div className="h-[87px] overflow-clip relative shrink-0 w-[337px]">
      <LHero_Frame15 />
      <LHero_Frame16 />
    </div>
  );
}




function LHero_Brush2() {
  return (
    <div className="h-[142px] overflow-clip relative shrink-0 w-[834px]" data-name="Brush">
      <div className="absolute inset-[0_3.36%_0_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 142">
          <path d={lHeroSvgPaths.p2f69de80} fill="var(--fill-0, #6F7F3C)" fillOpacity="0.9" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] inset-[12.68%_9.59%_13.38%_4.68%] leading-[88px] not-italic text-[#e6f2dd] text-[90px] text-center tracking-[-3.6px]">How social stack works</p>
    </div>
  );
}

function LHero_Frame19() {
  return (
    <div className="absolute border-2 border-[rgba(111,127,60,0.9)] border-solid left-[11px] overflow-clip rounded-[9999999px] size-[85px] top-[104px]">
      <div className="absolute h-[56px] left-[18px] overflow-clip top-[13px] w-[46px]" data-name="Icon / emoji-category / emoji_objects_black_24dp">
        <div className="absolute inset-[12.5%_20.83%_8.33%_20.82%]" data-name="fill">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8396 44.3333">
            <path d={lHeroSvgPaths.p362031c0} fill="var(--fill-0, #6F7F3C)" fillOpacity="0.9" id="fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame20() {
  return (
    <div className="absolute border-2 border-[#6f7f3c] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65px] not-italic text-[#6f7f3c] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 1</p>
    </div>
  );
}

function LHero_Step() {
  return (
    <div className="absolute h-[221px] left-[10px] overflow-clip top-[24px] w-[300px]" data-name="step 1">
      <LHero_Frame19 />
      <LHero_Frame20 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold h-[68px] leading-[32px] left-[157.5px] not-italic text-[#2f372d] text-[20px] text-center top-[107px] tracking-[-0.8px] w-[123px]">Tell us your idea.</p>
      <div className="absolute h-[5.181px] left-[200px] top-[183px] w-[100px]" data-name="connector-arrow">
        <div className="absolute inset-[-78.49%_0_-41.4%_-0.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.174 11.3927">
            <path d={lHeroSvgPaths.p359a4000} fill="var(--stroke-0, #6F7F3C)" fillOpacity="0.9" id="Arrow 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame21() {
  return (
    <div className="absolute border-2 border-[#6f7f3c] border-solid left-[16px] overflow-clip rounded-[9999px] size-[85px] top-[104px]">
      <div className="absolute left-[2px] size-[78px] top-[-2px]" data-name="tabler/pencil-pause">
        <div className="absolute inset-[19.46%_19.46%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-3.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.8174 52.8174">
              <path d={lHeroSvgPaths.p266d080} id="Vector" stroke="var(--stroke-0, #6F7F3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]" data-name="Vector">
          <div className="absolute inset-[-11.54%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M1.5 1.5L14.5 14.5" id="Vector" stroke="var(--stroke-0, #6F7F3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_29.17%_8.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-6.15%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18.25">
              <path d="M1 1V17.25" id="Vector" stroke="var(--stroke-0, #6F7F3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_8.33%_87.5%]" data-name="Vector">
          <div className="absolute inset-[-6.15%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18.25">
              <path d="M1 1V17.25" id="Vector" stroke="var(--stroke-0, #6F7F3C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame22() {
  return (
    <div className="absolute border-2 border-[#6f7f3c] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65px] not-italic text-[#6f7f3c] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 2</p>
    </div>
  );
}

function LHero_Step1() {
  return (
    <div className="absolute h-[221px] left-[330px] overflow-clip top-[24px] w-[300px]" data-name="step 2">
      <LHero_Frame21 />
      <LHero_Frame22 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[164.5px] not-italic text-[#2f372d] text-[20px] text-center top-[107px] tracking-[-0.8px] w-[109px]">We plan your stack</p>
    </div>
  );
}

function LHero_Frame23() {
  return (
    <div className="absolute border border-[rgba(111,127,60,0.8)] border-solid left-[16px] overflow-clip rounded-[99999px] size-[85px] top-[94px]">
      <div className="absolute h-[50px] left-[11px] overflow-clip rounded-[5px] top-[17px] w-[62px]" data-name="Outline / Network, IT, Programming / Code Square">
        <div className="absolute inset-[5.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5417 44.7917">
            <g id="Vector">
              <path d={lHeroSvgPaths.p1d674e00} fill="var(--fill-0, #6F7F3C)" />
              <path d={lHeroSvgPaths.p37ae180} fill="var(--fill-0, #6F7F3C)" />
              <path d={lHeroSvgPaths.p27471600} fill="var(--fill-0, #6F7F3C)" />
              <path clipRule="evenodd" d={lHeroSvgPaths.p7ea6800} fill="var(--fill-0, #6F7F3C)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame24() {
  return (
    <div className="absolute border-2 border-[#6f7f3c] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65.5px] not-italic text-[#6f7f3c] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 3</p>
    </div>
  );
}

function LHero_Step2() {
  return (
    <div className="absolute h-[221px] left-[660px] overflow-clip top-[24px] w-[300px]" data-name="step 3">
      <LHero_Frame23 />
      <LHero_Frame24 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[164.5px] not-italic text-[#2f372d] text-[20px] text-center top-[107px] tracking-[-0.8px] w-[109px]">We build it for you</p>
    </div>
  );
}

function LHero_Frame25() {
  return (
    <div className="absolute border border-[rgba(111,127,60,0.9)] border-solid left-[16px] overflow-clip rounded-[99999px] size-[85px] top-[94px]">
      <div className="absolute left-[9px] overflow-clip size-[55px] top-[17px]" data-name="rocket-takeoff">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
          <g id="Vector">
            <path d={lHeroSvgPaths.p1423e400} fill="var(--fill-0, #6F7F3C)" />
            <path d={lHeroSvgPaths.p25ebb400} fill="var(--fill-0, #6F7F3C)" />
            <path d={lHeroSvgPaths.p184a4dc0} fill="var(--fill-0, #6F7F3C)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LHero_Frame26() {
  return (
    <div className="absolute border-2 border-[#6f7f3c] border-solid h-[51px] left-[83px] overflow-clip rounded-[18px] top-[22px] w-[134px]">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32px] left-[65.5px] not-italic text-[#6f7f3c] text-[20px] text-center top-[8px] tracking-[-0.8px] whitespace-nowrap">STEP 4</p>
    </div>
  );
}

function LHero_Step3() {
  return (
    <div className="absolute h-[221px] left-[990px] overflow-clip top-[24px] w-[300px]" data-name="step 4">
      <LHero_Frame25 />
      <LHero_Frame26 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-[185.5px] not-italic text-[#2f372d] text-[20px] text-center top-[107px] tracking-[-0.8px] w-[151px]">Launch and grow together</p>
    </div>
  );
}

function LHero_Frame18() {
  return (
    <div className="h-[350px] overflow-clip relative shrink-0 w-full" data-name="steps-canvas">
      <LHero_Step />
      <LHero_Step1 />
      <LHero_Step2 />
      <LHero_Step3 />
      <div className="absolute h-[10.728px] left-[549px] top-[138.7px] w-[100px]" data-name="connector-arrow">
        <div className="absolute inset-[-9.32%_0_-14.53%_-0.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.292 13.287">
            <path d={lHeroSvgPaths.p1de58920} fill="var(--stroke-0, #6F7F3C)" fillOpacity="0.9" id="Arrow 3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[5.766px] left-[879px] top-[212px] w-[100px]" data-name="connector-arrow">
        <div className="absolute inset-[-59.96%_0_-35.49%_-0.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.167 11.2699">
            <path d={lHeroSvgPaths.p3d75600} fill="var(--stroke-0, #6F7F3C)" fillOpacity="0.9" id="Arrow 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame17() {
  return (
    <div className="content-stretch flex flex-col h-[350px] items-start relative shrink-0 w-full">
      <LHero_Frame18 />
    </div>
  );
}

function LHero_Brush3() {
  return (
    <div className="absolute flex h-[119.486px] items-center justify-center left-[162.77px] top-[101.51px] w-[369.917px]">
      <div className="-rotate-7 flex-none">
        <div className="h-[75.764px] overflow-clip relative w-[363.392px]" data-name="Brush">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363.392 75.7645">
            <path d={lHeroSvgPaths.p3e6522f0} fill="var(--fill-0, #6F7F3C)" fillOpacity="0.9" id="Vector" />
          </svg>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Caveat_Brush:Regular',sans-serif] leading-[88px] left-[172.18px] not-italic text-[#e6f2dd] text-[70px] text-center top-[-8.56px] tracking-[-2.8px] whitespace-nowrap">Your stack?</p>
        </div>
      </div>
    </div>
  );
}

function LHero_Button2() {
  return (
    <HomeSliceButton isLight href="/contact" className="absolute left-[759px] top-[155px]">
      Start your project
    </HomeSliceButton>
  );
}

function LHero_Frame28() {
  return (
    <div className="absolute bg-[rgba(111,127,60,0.15)] border border-[#4f5a4b] border-solid h-[236px] left-[52px] overflow-clip rounded-[18px] top-[41px] w-[1141px]">
      <div className="absolute flex h-[187px] items-center justify-center left-[602.98px] top-[23.99px] w-[2.022px]">
        <div className="flex-none rotate-[89.38deg]">
          <div className="h-0 relative w-[187.011px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187.011 1">
                <path d="M0 0.5H187.011" id="Line 7" stroke="var(--stroke-0, #4F5A4B)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute flex h-[127.927px] items-center justify-center left-[242.62px] top-[24px] w-[341.242px]">
        <div className="-rotate-7 flex-none">
          <p className="[word-break:break-word] font-['Caveat_Brush:Regular',sans-serif] leading-[88px] not-italic relative text-[70px] text-[rgba(111,127,60,0.9)] text-center tracking-[-2.8px] whitespace-pre">{`Ready to  build`}</p>
        </div>
      </div>
      <LHero_Brush3 />
      <div className="absolute h-[9.371px] left-[436.67px] top-[45.15px] w-[56.224px]">
        <div className="absolute inset-[-10.67%_-1.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.2246 11.371">
            <path d={lHeroSvgPaths.pc2aca00} id="Vector 50" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[37.249px] left-[437.08px] top-[6.04px] w-[30.945px]">
        <div className="absolute inset-[-2.68%_-3.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.9451 39.2487">
            <path d={lHeroSvgPaths.p365a1600} id="Vector 51" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[8.102px] left-[79.7px] top-[132.1px] w-[101.92px]">
        <div className="absolute inset-[-12.34%_-0.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103.92 10.1024">
            <path d={lHeroSvgPaths.pfce4240} id="Vector 52" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Manrope:Bold',sans-serif] font-bold h-[65px] leading-[32px] left-[889.5px] text-[#556052] text-[20px] text-center top-[55px] tracking-[-0.8px] w-[455px]">{`Whether you're starting from scratch or ready to level up, we're here to help bring your ideas to life.`}</p>
      <LHero_Button2 />
      <div className="absolute h-[26.708px] left-[994.52px] top-[193.54px] w-[36.246px]">
        <div className="absolute inset-[-3.74%_-2.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.2464 28.7079">
            <path d={lHeroSvgPaths.p16a07900} id="Vector 53" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[19.554px] left-[984.74px] top-[184.48px] w-[12.157px]">
        <div className="absolute inset-[-5.12%_-8.23%_-5.11%_-10.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4928 21.5543">
            <path d={lHeroSvgPaths.pa3c8f40} id="Vector 54" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LHero_Frame27() {
  return (
    <div className="h-[277px] overflow-clip relative shrink-0 w-[1266px]">
      <LHero_Frame28 />
      <div className="absolute h-[54.142px] left-[475.09px] top-[36.13px] w-[11.453px]">
        <div className="absolute inset-[-1.85%_-8.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4531 56.142">
            <path d={lHeroSvgPaths.p22b59700} id="Vector 49" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Page composition ──────────────────────────────────────────────────────────
const doodlePaths = {
  whatWeDo:
    "M1 6.78962C1.76423 6.78962 2.52845 6.78963 19.1618 8.31807C35.7952 9.84651 68.2746 12.9034 114.811 13.5229C161.347 14.1424 220.957 12.2318 253.384 10.8655C289.25 8.7349 295.086 7.18331 299.133 5.26119C300.887 4.10328 302.033 2.57483 303.214 1.00006",
  whySocialStack:
    "M1.00006 19.5266C45.3248 15.7055 89.6496 11.8844 128.15 8.76962C166.651 5.65484 197.984 3.36218 229.108 1.00005",
  howSocialStack:
    "M25.5324 13.657C-36.9676 13.6571 28.5321 13.6572 125.532 3.15688C181.024 -2.85022 278.623 5.88972 388.532 3.15706",
};

// Always centers itself horizontally within its relative parent — this is
// what keeps the little brush-accent squiggle lined up under each heading
// regardless of theme, breakpoint, or however the parent box gets resized.
// IMPORTANT: the self-centering shift lives in the `doodlePulse` keyframes
// (translateX(-50%) baked into every step) rather than in an inline
// `transform` style — a *running* CSS animation on `transform` overrides any
// inline `transform` value for that same property, so setting it inline here
// would get silently clobbered by the pulse animation. `left` is untouched
// by the animation, so the optional `offsetX` nudge is applied there instead.
function BrushDoodle({ d, width, height, top, color = "#F4F4EF", offsetX = 0 }) {
  return (
    <div
      className="absolute pointer-events-none origin-center animate-[doodleCenterPulse_2s_ease-out_infinite]"
      style={{
        left: `calc(50% + ${offsetX}px)`,
        top,
        width,
        height,
      }}
    >
      <svg
        className="block size-full overflow-visible"
        fill="none"
        preserveAspectRatio="none"
        viewBox={`0 0 ${width} ${height}`}
      >
        <path d={d} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

// ─── ScaleFrame ───────────────────────────────────────────────────────────────
function NumberBadge({ n, rotate }) {
  return (
    <div
      className={`shrink-0 size-7 md:size-[48px] rounded-[4px] bg-[rgba(183,221,103,0.8)] shadow-[0px_4px_10px_0px_rgba(183,221,103,0.12)] flex items-center justify-center ${rotate}`}
    >
      <span className="font-['Manrope:Medium',sans-serif] font-medium text-xs md:text-[20px] text-black">{n}.</span>
    </div>
  );
}

function ServiceCard({ icon, title, desc, isLight, active = true, href = "/services" }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`group relative overflow-hidden rounded-[18px] cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] w-full h-full px-3 py-3 md:px-5 md:py-6 flex flex-col items-center text-center gap-1.5 md:gap-3 justify-center transition-shadow duration-300 ${
        isLight ? "bg-[#eef3e2]" : "bg-[#253236]"
      } ${
        active
          ? isLight
            ? "shadow-[0_18px_45px_rgba(63,79,74,0.22)]"
            : "shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_40px_rgba(183,221,103,0.12)]"
          : "shadow-lg"
      }`}
    >
      {/* soft decorative glow behind the icon */}
      <div
        aria-hidden
        className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 size-14 md:size-24 rounded-full pointer-events-none blur-2xl"
        style={{ background: isLight ? "rgba(111,127,60,0.28)" : "rgba(183,221,103,0.18)" }}
      />
      <div className="relative">{icon}</div>
      <h3 className={`relative font-['Manrope:Bold',sans-serif] font-bold text-base md:text-2xl tracking-[-1px] ${isLight ? "text-[#253236]" : "text-[#f4f4ef]"}`}>
        {title}
      </h3>
      {desc && (
        <p className={`relative font-['Manrope:Medium',sans-serif] font-medium text-[11px] md:text-sm ${isLight ? "text-[#3f4a3b]" : "text-[#d9e3d2]"}`}>
          {desc}
        </p>
      )}
      <a href={href} className={`relative font-['Manrope:Bold',sans-serif] font-bold text-xs md:text-lg no-underline group-hover:underline transition-colors duration-300 ${isLight ? "text-[#6f7f3c]" : "text-[#b7dd67]"}`}>
        Learn more...
      </a>
      <div
        aria-hidden
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300 ${
          isLight
            ? active
              ? "border-[rgba(111,127,60,0.55)] group-hover:border-[rgba(111,127,60,0.75)]"
              : "border-[#4f5a4b]/40"
            : active
              ? "border-[rgba(183,221,103,0.45)] group-hover:border-[rgba(183,221,103,0.7)]"
              : "border-[#4c5a53]/40"
        }`}
      />
    </motion.div>
  );
}

function WhyCard({ badge, title, desc, isLight, active = true }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`group relative overflow-hidden rounded-[18px] cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] w-full h-full px-3 py-3 md:px-5 md:py-5 flex flex-col justify-center gap-1.5 md:gap-3 transition-shadow duration-300 ${
        isLight ? "bg-[#eef3e2]" : "bg-[#253236]"
      } ${
        active
          ? isLight
            ? "shadow-[0_18px_45px_rgba(63,79,74,0.22)]"
            : "shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_40px_rgba(183,221,103,0.12)]"
          : "shadow-lg"
      }`}
    >
      <div
        aria-hidden
        className="absolute -top-4 -right-4 md:-top-6 md:-right-6 size-16 md:size-28 rounded-full pointer-events-none blur-2xl"
        style={{ background: isLight ? "rgba(111,127,60,0.22)" : "rgba(183,221,103,0.14)" }}
      />
      <div className="relative flex items-center gap-2 md:gap-3">
        {badge}
        <h3 className={`font-['Manrope:Bold',sans-serif] font-bold text-sm md:text-2xl tracking-[-1px] ${isLight ? "text-[#253236]" : "text-[#f4f4ef]"}`}>
          {title}
        </h3>
      </div>
      <p className={`relative font-['Inter:Medium',sans-serif] text-[11px] md:text-sm ${isLight ? "text-[#3f4a3b]" : "text-[#d9e3d2]"}`}>
        {desc}
      </p>
      <div
        aria-hidden
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300 ${
          isLight
            ? active
              ? "border-[rgba(111,127,60,0.55)] group-hover:border-[rgba(111,127,60,0.75)]"
              : "border-[#4f5a4b]/40"
            : active
              ? "border-[rgba(183,221,103,0.45)] group-hover:border-[rgba(183,221,103,0.7)]"
              : "border-[#4c5a53]/40"
        }`}
      />
    </motion.div>
  );
}

function CardCarousel({ items, isLight, cardWidth = 320, minHeight = 420 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dims, setDims] = useState({ w: cardWidth, h: minHeight, spread: 0.62, compact: false });
  const wrapRef = useRef(null);
  const total = items.length;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    function updateDims() {
      const avail = el.clientWidth || window.innerWidth;
      if (avail < 860) {
        // Compact (phone/tablet): a single, naturally-tall card — no forced
        // pixel height. Forcing a guessed height here is what was clipping
        // WhyCard's longer descriptions; letting content set its own height
        // makes that impossible.
        setDims({ w: Math.max(220, Math.min(cardWidth, avail * 0.86)), h: "auto", spread: 0.56, compact: true });
      } else {
        setDims({ w: cardWidth, h: minHeight, spread: 0.62, compact: false });
      }
    }
    updateDims();
    const ro = new ResizeObserver(updateDims);
    ro.observe(el);
    window.addEventListener("resize", updateDims);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDims);
    };
  }, [cardWidth, minHeight]);

  const go = useCallback(
    (dir) => setActive((a) => (a + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || total <= 1) return;
    const timer = window.setInterval(() => {
      go(1);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [go, paused, total]);

  const arrowStyle = {
    borderColor: isLight ? "rgba(39,51,56,0.5)" : "rgba(230,242,221,0.52)",
    color: isLight ? "#273338" : "#e6f2dd",
    background: isLight
      ? "linear-gradient(135deg, rgba(230,242,221,0.68), rgba(255,255,255,0.24))"
      : "linear-gradient(135deg, rgba(230,242,221,0.12), rgba(255,255,255,0.04))",
    boxShadow: isLight
      ? "0 14px 30px rgba(63,79,74,0.14), inset 0 1px 0 rgba(255,255,255,0.72)"
      : "0 14px 30px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.14)",
    backdropFilter: "blur(18px) saturate(160%)",
    WebkitBackdropFilter: "blur(18px) saturate(160%)",
  } as CSSProperties;

  const arrowButton = (dir, label, symbol) => (
    <motion.button
      type="button"
      aria-label={label}
      onClick={() => go(dir)}
      className="grid h-11 w-11 place-items-center rounded-full border text-3xl leading-none transition-colors duration-300 touch-manipulation [-webkit-tap-highlight-color:transparent]"
      style={arrowStyle}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <span className="-mt-0.5">{symbol}</span>
    </motion.button>
  );

  return (
    <div
      ref={wrapRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label="Cards — swipe, or use the left and right arrow keys, to navigate"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
      }}
      className="w-full flex flex-col items-center gap-4 md:gap-7 outline-none"
    >
      {dims.compact ? (
        <div className="relative w-full flex justify-center overflow-hidden py-3" style={{ touchAction: "pan-y" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              drag="x"
              dragElastic={0.18}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_e, info) => {
                if (info.offset.x < -45 || info.velocity.x < -350) go(1);
                else if (info.offset.x > 45 || info.velocity.x > 350) go(-1);
              }}
              initial={{ opacity: 0, x: 28, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -28, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: dims.w }}
              className="cursor-grab active:cursor-grabbing"
            >
              {cloneElement(items[active], { active: true })}
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <div
          className="relative w-full max-w-[1280px] mx-auto overflow-hidden rounded-2xl"
          style={{ height: dims.h }}
        >
          {items.map((item, i) => {
            let offset = i - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            // Only ever show the immediate left/right neighbor, regardless of
            // total card count — keeps the group visually symmetric and
            // centered no matter which card (or how many total) is active.
            const visible = abs <= 1;
            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 px-2"
                style={{ zIndex: total - abs, width: dims.w, pointerEvents: visible ? "auto" : "none" }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${offset * dims.w * dims.spread}px)`,
                  y: "-50%",
                  scale: isActive ? 1 : 0.85,
                  opacity: visible ? (isActive ? 1 : 0.32) : 0,
                  filter: isActive ? "blur(0px)" : "blur(3px)",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => !isActive && setActive(i)}
              >
                {cloneElement(item, { active: isActive })}
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Navigation controls */}
      <div className="flex items-center justify-center gap-4">
        {arrowButton(-1, "Previous card", "‹")}
        <div className="flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to card ${i + 1}`}
              aria-current={i === active}
              className="h-2.5 rounded-full transition-all duration-300 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
              style={{
                width: i === active ? 26 : 10,
                background:
                  i === active
                    ? isLight
                      ? "#6f7f3c"
                      : "#b7dd67"
                    : isLight
                      ? "rgba(111,127,60,0.3)"
                      : "rgba(230,242,221,0.3)",
              }}
            />
          ))}
        </div>
        {arrowButton(1, "Next card", "›")}
      </div>
    </div>
  );
}

function ScaleFrame({ children, width, height, mobileWidth = null, mobileHeight = null, mobileBreakpoint = 768, className = "" }) {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [dims, setDims] = useState({ w: width, h: height });

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    function updateScale() {
      // Measure the real container (not window), so content scales to fit
      // wherever it's actually rendered instead of overflowing the screen.
      const availableWidth = el.parentElement ? el.parentElement.clientWidth : window.innerWidth;
      const isMobile = availableWidth < mobileBreakpoint;
      const w = isMobile && mobileWidth ? mobileWidth : width;
      const h = isMobile && mobileHeight ? mobileHeight : height;
      setDims({ w, h });
      setScale(Math.min(availableWidth, w) / w);
    }
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (el.parentElement) ro.observe(el.parentElement);
    window.addEventListener("resize", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [width, height, mobileWidth, mobileHeight, mobileBreakpoint]);

  return (
    <section
      ref={frameRef}
      className={`relative mx-auto overflow-hidden w-full flex justify-center ${className}`}
      style={{ height: `${dims.h * scale}px` }}
    >
      <div
        className="absolute left-1/2 top-0 origin-top"
        style={{ width: `${dims.w}px`, height: `${dims.h}px`, transform: `translateX(-50%) scale(${scale})` }}
      >
        {children}
      </div>
    </section>
  );
}

// ─── How Social Stack Works — responsive step cards ────────────────────────
// Reuses the exact icon path data already imported (howSvgPaths / lHeroSvgPaths)
// but positions everything with percentages instead of fixed pixels, so each
// icon scales cleanly at any card size instead of needing separate mobile /
// desktop markup.
function StepIcon({ variant, paths, color }) {
  if (variant === "idea") {
    return (
      <div className="absolute" style={{ left: "21.18%", top: "15.29%", width: "54.12%", height: "65.88%" }}>
        <div className="absolute inset-[12.5%_20.83%_8.33%_20.82%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.8396 44.3333">
            <path d={paths.p362031c0} fill={color} fillOpacity="0.9" />
          </svg>
        </div>
      </div>
    );
  }
  if (variant === "plan") {
    return (
      <div className="absolute" style={{ left: "2.35%", top: "-2.35%", width: "91.76%", height: "91.76%" }}>
        <div className="absolute inset-[19.46%_19.46%_16.67%_16.67%]">
          <div className="absolute inset-[-3.01%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.8174 52.8174">
              <path d={paths.p266d080} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[27.08%_27.08%_56.25%_56.25%]">
          <div className="absolute inset-[-11.54%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d="M1.5 1.5L14.5 14.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_29.17%_8.33%_70.83%]">
          <div className="absolute inset-[-6.15%_-1px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18.25">
              <path d="M1 1V17.25" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_8.33%_87.5%]">
          <div className="absolute inset-[-6.15%_-1px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 18.25">
              <path d="M1 1V17.25" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "build") {
    return (
      <div className="absolute" style={{ left: "12.94%", top: "20%", width: "72.94%", height: "58.82%" }}>
        <div className="absolute inset-[5.21%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.5417 44.7917">
            <path d={paths.p1d674e00} fill={color} />
            <path d={paths.p37ae180} fill={color} />
            <path d={paths.p27471600} fill={color} />
            <path clipRule="evenodd" d={paths.p7ea6800} fill={color} fillRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  }
  // launch
  return (
    <div className="absolute" style={{ left: "10.59%", top: "20%", width: "64.71%", height: "64.71%" }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <path d={paths.p1423e400} fill={color} />
        <path d={paths.p25ebb400} fill={color} />
        <path d={paths.p184a4dc0} fill={color} />
      </svg>
    </div>
  );
}

// Dashed connector with a small chevron + a subtle marching-dash animation to
// hint at motion/progress between steps. Only shown on the 4-across desktop
// row — the stacked mobile/tablet layouts rely on numbering + spacing instead.
function StepConnector({ isLight }) {
  const c = isLight ? "#6f7f3c" : "#b7dd67";
  return (
    <div className="hidden lg:flex items-center justify-center px-1" aria-hidden="true">
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <path d="M1 8H21" stroke={c} strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-[dashFlow_1.1s_linear_infinite]" />
        <path d="M19 2L27 8L19 14" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// The "STEP N" pill fills with color from the bottom up on hover — like
// juice rising in a glass. It reacts to hovering anywhere on the parent
// card (via Tailwind's `group`/`group-hover`, since HowStepCard's outer
// wrapper carries the `group` class), not just the pill itself.
function StepPill({ n, isLight }) {
  const border = isLight ? "border-[#6f7f3c]" : "border-[#b7dd67]";
  const textIdle = isLight ? "text-[#6f7f3c]" : "text-[#b7dd67]";
  const textFilled = isLight ? "group-hover:text-[#eef3e2]" : "group-hover:text-[#253236]";
  const fillBg = isLight ? "bg-[#6f7f3c]" : "bg-[#b7dd67]";

  return (
    <div
      className={`relative inline-flex items-center justify-center h-8 sm:h-10 px-3 sm:px-4 rounded-[18px] overflow-hidden border-2 whitespace-nowrap ${border}`}
    >
      {/* rising "juice" fill — grows 0 → 100% height on hover, with a soft
          highlight riding its own top edge to sell the liquid-surface look */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-0 group-hover:h-full transition-[height] duration-[550ms] ease-[cubic-bezier(0.65,0,0.35,1)] overflow-hidden ${fillBg}`}
        style={{ boxShadow: "0 -2px 4px 0 rgba(255,255,255,0.35) inset" }}
      >
        {/* glossy diagonal shine sweeping back and forth across the liquid;
            clipped to the fill's own bounds since it's nested inside it */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-[shineSweep_1.6s_ease-in-out_0.15s_infinite]"
        />
      </span>

      {/* a few tiny glitter specks that twinkle in, staggered, once the
          liquid has mostly risen — positioned on the pill itself (not the
          fill) so their placement stays stable regardless of fill height */}
      <span
        aria-hidden="true"
        className="absolute opacity-0 rounded-[1px] bg-white/90 group-hover:animate-[sparkleTwinkle_1.5s_ease-in-out_0.3s_infinite]"
        style={{ left: "18%", top: "24%", width: 3, height: 3 }}
      />
      <span
        aria-hidden="true"
        className="absolute opacity-0 rounded-[1px] bg-white/90 group-hover:animate-[sparkleTwinkle_1.5s_ease-in-out_0.65s_infinite]"
        style={{ left: "78%", top: "62%", width: 3, height: 3 }}
      />
      <span
        aria-hidden="true"
        className="absolute opacity-0 rounded-[1px] bg-white/90 group-hover:animate-[sparkleTwinkle_1.5s_ease-in-out_1s_infinite]"
        style={{ left: "48%", top: "70%", width: 2.5, height: 2.5 }}
      />

      <span
        className={`relative z-10 font-['Inter:Regular',sans-serif] text-xs sm:text-base tracking-[-0.4px] transition-colors duration-500 delay-150 ${textIdle} ${textFilled}`}
      >
        STEP {n}
      </span>
    </div>
  );
}

function HowStepCard({ n, variant, title, isLight, paths, index }) {
  const iconColor = isLight ? "#6F7F3C" : "#B7DD67";
  const ringClass = isLight ? "border-2 border-[rgba(111,127,60,0.9)]" : "border-2 border-[rgba(183,221,103,0.8)]";
  const titleClass = isLight
    ? "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#253236]"
    : "font-['Inter:Regular',sans-serif] font-normal text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-[18px] px-4 py-5 sm:px-5 sm:py-6 flex flex-col gap-4 sm:gap-5 transition-shadow duration-300 touch-manipulation [-webkit-tap-highlight-color:transparent] ${
        isLight
          ? "bg-[#eef3e2] shadow-[0_18px_45px_rgba(63,79,74,0.22)]"
          : "bg-[#253236] shadow-[0_18px_45px_rgba(0,0,0,0.45),0_0_40px_rgba(183,221,103,0.12)]"
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`relative shrink-0 rounded-full overflow-hidden size-16 sm:size-20 lg:size-[85px] ${ringClass}`}>
          <StepIcon variant={variant} paths={paths} color={iconColor} />
        </div>
        <StepPill n={n} isLight={isLight} />
      </div>
      <p className={`text-base sm:text-xl tracking-[-0.8px] ${titleClass}`}>{title}</p>
    </motion.div>
  );
}

function HowStepsSection({ isLight }) {
  const paths = isLight ? lHeroSvgPaths : howSvgPaths;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-5 lg:gap-0 lg:items-stretch">
      <HowStepCard n={1} variant="idea" title="Tell us your idea." isLight={isLight} paths={paths} index={0} />
      <StepConnector isLight={isLight} />
      <HowStepCard n={2} variant="plan" title="We plan your stack" isLight={isLight} paths={paths} index={1} />
      <StepConnector isLight={isLight} />
      <HowStepCard n={3} variant="build" title="We build it for you" isLight={isLight} paths={paths} index={2} />
      <StepConnector isLight={isLight} />
      <HowStepCard n={4} variant="launch" title="Launch and grow together" isLight={isLight} paths={paths} index={3} />
    </div>
  );
}

// ─── CTA — "Ready to build" (mobile-aware wrapper) ─────────────────────────
// Desktop/tablet (md+) keeps the original pixel-precise Figma layout exactly
// as-is via ScaleFrame. Mobile gets its own purpose-built layout: still a
// horizontal row (heading | divider | copy+button) like the original intent,
// just sized with real responsive units instead of being uniformly
// scaled down from a 1266px-wide canvas — which is what was crushing it.
function CtaMobile({ isLight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-[18px] border flex items-center gap-3 px-4 py-5 sm:px-6 sm:py-6 ${
        isLight ? "bg-[rgba(111,127,60,0.12)] border-[#4f5a4b]/30" : "bg-[#253236] border-[#4c5a53]"
      }`}
    >
      <div className="flex-[0.9] min-w-0">
        <p
          className={`font-['Caveat_Brush:Regular',sans-serif] leading-[0.95] text-[26px] sm:text-[32px] tracking-[-1.2px] -rotate-3 ${
            isLight ? "text-[rgba(111,127,60,0.9)]" : "text-[#e6f2dd]"
          }`}
        >
          Ready to
        </p>
        <p
          className={`font-['Caveat_Brush:Regular',sans-serif] leading-[0.95] text-[26px] sm:text-[32px] tracking-[-1.2px] -rotate-3 ${
            isLight ? "text-[#253236]" : "text-[#c6e7bc]"
          }`}
        >
          your stack?
        </p>
      </div>

      <div className={`w-px self-stretch shrink-0 ${isLight ? "bg-[#4f5a4b]/30" : "bg-[#4c5a53]"}`} />

      <div className="flex-1 flex flex-col gap-2.5 sm:gap-3.5 min-w-0">
        <p
          className={`font-['Manrope:Bold',sans-serif] font-bold text-[11px] sm:text-[13px] leading-snug tracking-[-0.4px] ${
            isLight ? "text-[#556052]" : "text-[#f4f4ef]"
          }`}
        >
          Whether you're starting from scratch or ready to level up, we're here to help bring your ideas to life.
        </p>
        <HomeSliceButton isLight={isLight} href="/contact" className="self-start scale-90 origin-left">
          Start your project
        </HomeSliceButton>
      </div>
    </motion.div>
  );
}

function CtaSection({ isLight }) {
  return (
    <>
      <div className="hidden md:block">
        <ScaleFrame width={1266} height={277}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="relative size-full"
          >
            {isLight ? <LHero_Frame27 /> : <Cta_Frame />}
          </motion.div>
        </ScaleFrame>
      </div>
      <div className="md:hidden px-4 sm:px-6">
        <CtaMobile isLight={isLight} />
      </div>
    </>
  );
}

// ─── Dark page content ───────────────────────────────────────────────────────
function DarkPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[10px] pb-[80px] pt-4 md:pt-[38px] text-[#f4f4ef]">
      <div className="hidden md:block">
        <ScaleFrame width={1280} height={710}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="relative size-full overflow-hidden"
          >
            <HeroOnly />
          </motion.div>
        </ScaleFrame>
      </div>
      <div className="md:hidden">
        <HeroMobile isLight={false} />
      </div>

      <ScaleFrame width={1280} height={202} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative" style={{ width: 962, height: 190 }}>
            <WhatWeDo_Brush />
            <BrushDoodle d={doodlePaths.whatWeDo} width={304} height={15} top={166} />
          </div>
        </motion.div>
      </ScaleFrame>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <CardCarousel
          isLight={false}
          cardWidth={300}
          minHeight={380}
          items={[
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={whatWeDoImgFrame28} />}
              title="Web development"
              desc="Fast, scalable websites build for growth"
              isLight={false}
              href="/services#web-development"
            />,
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={whatWeDoImgFrame29} />}
              title="Ads and Branding"
              desc="Identity that stands out, campaigns that convert"
              isLight={false}
              href="/services#ads-branding"
            />,
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={whatWeDoImgFrame30} />}
              title="UI UX Design"
              desc="Interfaces that are intuitive and beautiful"
              isLight={false}
              href="/services#ui-ux-design"
            />,
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={whatWeDoImgFrame31} />}
              title="SMM"
              desc="Content that gets people talking about your brand"
              isLight={false}
              href="/services#social-media-management"
            />,
          ]}
        />
      </div>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative" style={{ width: 834, height: 180 }}>
            <Why_Brush />
            <BrushDoodle d={doodlePaths.whySocialStack} width={228} height={20} top={152} />
          </div>
        </motion.div>
      </ScaleFrame>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <CardCarousel
          isLight={false}
          cardWidth={380}
          minHeight={240}
          items={[
            <WhyCard
              badge={<NumberBadge n={1} rotate="-rotate-4" />}
              title="Everything under one roof"
              desc="One team for design, development, branding, and marketing. No juggling multiple freelancers."
              isLight={false}
            />,
            <WhyCard
              badge={<NumberBadge n={2} rotate="rotate-3" />}
              title="Fast communication"
              desc="No disappearing acts. Just clear updates and quick replies throughout your project."
              isLight={false}
            />,
            <WhyCard
              badge={<NumberBadge n={3} rotate="-rotate-6" />}
              title="Built for growth"
              desc="We build with tomorrow in mind, so your website can grow as your business does."
              isLight={false}
            />,
          ]}
        />
      </div>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative" style={{ width: 834, height: 180 }}>
            <How_Brush />
            <BrushDoodle d={doodlePaths.howSocialStack} width={388} height={15} top={156} />
          </div>
        </motion.div>
      </ScaleFrame>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <HowStepsSection isLight={false} />
      </div>

      <div className="mt-2">
        <CtaSection isLight={false} />
      </div>
    </div>
  );
}

// ─── Light page content ───────────────────────────────────────────────────────
function LightPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[10px] pb-[80px] pt-4 md:pt-[38px] text-[#2f372d]">
      <div className="hidden md:block">
        <ScaleFrame width={1280} height={710}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className="relative size-full overflow-hidden"
          >
            <LHero_HeroOnly />
          </motion.div>
        </ScaleFrame>
      </div>
      <div className="md:hidden">
        <HeroMobile isLight={true} />
      </div>

      <ScaleFrame width={1280} height={202} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative" style={{ width: 962, height: 190 }}>
            <LHero_Brush />
            <BrushDoodle d={doodlePaths.whatWeDo} width={304} height={15} top={166} color="#6F7F3C" />
          </div>
        </motion.div>
      </ScaleFrame>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <CardCarousel
          isLight={true}
          cardWidth={300}
          minHeight={380}
          items={[
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={lHeroImgFrame28} />}
              title="Web development"
              desc="Fast, scalable websites build for growth"
              isLight={true}
              href="/services#web-development"
            />,
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={lHeroImgFrame29} />}
              title="Ads and Branding"
              desc="Identity that stands out, campaigns that convert"
              isLight={true}
              href="/services#ads-branding"
            />,
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={lHeroImgFrame30} />}
              title="UI UX Design"
              desc="Interfaces that are intuitive and beautiful"
              isLight={true}
              href="/services#ui-ux-design"
            />,
            <ServiceCard
              icon={<img alt="" className="h-10 md:h-[100px] w-auto object-contain pointer-events-none" src={lHeroImgFrame31} />}
              title="SMM"
              desc="Content that gets people talking about your brand"
              isLight={true}
              href="/services#social-media-management"
            />,
          ]}
        />
      </div>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative" style={{ width: 834, height: 180 }}>
            <LHero_Brush1 />
            <BrushDoodle d={doodlePaths.whySocialStack} width={228} height={20} top={152} color="#6F7F3C" />
          </div>
        </motion.div>
      </ScaleFrame>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <CardCarousel
          isLight={true}
          cardWidth={380}
          minHeight={240}
          items={[
            <WhyCard
              badge={<NumberBadge n={1} rotate="-rotate-4" />}
              title="Everything under one roof"
              desc="One team for design, development, branding, and marketing. No juggling multiple freelancers."
              isLight={true}
            />,
            <WhyCard
              badge={<NumberBadge n={2} rotate="rotate-3" />}
              title="Fast communication"
              desc="No disappearing acts. Just clear updates and quick replies throughout your project."
              isLight={true}
            />,
            <WhyCard
              badge={<NumberBadge n={3} rotate="-rotate-6" />}
              title="Built for growth"
              desc="We build with tomorrow in mind, so your website can grow as your business does."
              isLight={true}
            />,
          ]}
        />
      </div>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <div className="relative" style={{ width: 834, height: 180 }}>
            <LHero_Brush2 />
            <BrushDoodle d={doodlePaths.howSocialStack} width={388} height={15} top={156} color="#6F7F3C" />
          </div>
        </motion.div>
      </ScaleFrame>

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <HowStepsSection isLight={true} />
      </div>

      <div className="mt-2">
        <CtaSection isLight={true} />
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [theme, setTheme] = usePersistentTheme();
  const isLight = theme === "light";

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${isLight ? "bg-[#e6f2dd]" : "bg-[#222d31]"}`}>
      <style>{`
        @keyframes doodlePulse { 0% { transform: scale(1.2); } 25% { transform: scale(1); } 100% { transform: scale(1); } }
        @keyframes doodleCenterPulse { 0% { transform: translateX(-50%) scale(1.2); } 25% { transform: translateX(-50%) scale(1); } 100% { transform: translateX(-50%) scale(1); } }
        @keyframes doodleFill { 0% { stroke-dashoffset: 1; } 45%, 55% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 1; } }
        @keyframes dashFlow { to { stroke-dashoffset: -16; } }
        @keyframes shineSweep { 0% { transform: translateX(-160%) skewX(-12deg); } 100% { transform: translateX(420%) skewX(-12deg); } }
        @keyframes sparkleTwinkle { 0%, 100% { opacity: 0; transform: scale(0.4) rotate(45deg); } 50% { opacity: 1; transform: scale(1) rotate(45deg); } }
        @keyframes spin360 { to { transform: rotate(360deg); } }
        @keyframes floatSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .home-slice {
          --size-letter: clamp(14px, 1.7vw, 20px);
          padding: 0.5em 1em;
          font-size: var(--size-letter);
          background-color: transparent;
          border: calc(var(--size-letter) / 6) solid var(--c2);
          border-radius: 0.55em;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: 300ms cubic-bezier(0.83, 0, 0.17, 1);
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }
        .home-slice > .text {
          font-weight: 800;
          color: var(--c2);
          position: relative;
          z-index: 1;
          transition: color 700ms cubic-bezier(0.83, 0, 0.17, 1);
        }
        .home-slice::after {
          content: "";
          width: 0;
          height: calc(300% + 1em);
          position: absolute;
          translate: -50% -50%;
          inset: 50%;
          rotate: 30deg;
          background-color: var(--c2);
          transition: 1000ms cubic-bezier(0.83, 0, 0.17, 1);
        }
        .home-slice:hover > .text,
        .home-slice:focus-visible > .text {
          color: var(--c1);
        }
        .home-slice:hover::after,
        .home-slice:focus-visible::after {
          width: calc(120% + 1em);
        }
        .home-slice:active {
          scale: 0.98;
          filter: brightness(0.9);
        }
      `}</style>
      <Header theme={theme} onThemeChange={setTheme} />

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={theme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {isLight ? <LightPageContent /> : <DarkPageContent />}
        </motion.div>
      </AnimatePresence>

      <Footer theme={theme} />
    </main>
  );
}
