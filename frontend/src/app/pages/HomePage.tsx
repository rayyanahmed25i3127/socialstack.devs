// ─────────────────────────────────────────────────────────────────────────────
// HomePage - Modified to remove hero icons, unify theme spacing, and add animations
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Header } from "./Header";
import { Footer } from "./Footer";

import heroSvgPaths from "../../imports/home-hero-section/paths";
import heroImgLogo from "../../imports/home-shared/logo-photo.png";
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
import lHeroImgFrame28 from "../../imports/home-light-hero-section/project-web-dev.png";
import lHeroImgFrame29 from "../../imports/home-light-hero-section/project-ads-branding.png";
import lHeroImgFrame30 from "../../imports/home-light-hero-section/project-ui-ux.png";
import lHeroImgFrame31 from "../../imports/home-light-hero-section/project-smm.png";

// ─── Hero (dark theme) ─────────────────────────────────────────────────────
function Hero_WhatWeDo() {
  return (
    <div className="bg-[#2e3936] h-[28px] relative rounded-[999px] shrink-0" data-name="what we do">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#c8e77b] text-[20px] tracking-[2px] whitespace-nowrap">WELCOME TO SOCIAL STACK</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(196,240,107,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
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
            <path d={heroSvgPaths.p3cf8e00} id="Vector 1" stroke="var(--stroke-0, #F4F4EF)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[42.491px] left-[336.97px] top-[80.08px] w-[25.159px]">
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
      <div className="absolute h-[14.536px] left-[360.46px] top-[135.99px] w-[67.091px]">
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
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-[rgba(183,221,103,0.8)] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[12px] relative rounded-[18px] shrink-0 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="Button1"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#253236] text-[20px] text-left tracking-[0.6px] whitespace-nowrap">Start a project</p>
    </motion.button>
  );
}

function Hero_Button1() {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-[56px] relative rounded-[18px] shrink-0 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] group"
      data-name="Button1"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold h-[30px] leading-[32px] not-italic relative shrink-0 text-[20px] text-[rgba(183,221,103,0.8)] text-left tracking-[0.6px] w-[192px]">View our services</p>
      </div>
      <div aria-hidden className="absolute border-4 border-[rgba(183,221,103,0.8)] border-solid inset-0 pointer-events-none rounded-[18px] group-hover:bg-[rgba(183,221,103,0.12)] transition-colors duration-300" />
    </motion.button>
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

function Hero_HeroHeader() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[10px] relative shrink-0 w-[560px]" data-name="hero header">
      <Hero_ServiceHeader />
    </div>
  );
}

// Unified Hero alignment
function HeroOnly() {
  return (
    <div className="content-stretch flex gap-[64px] h-full items-start overflow-clip px-[80px] relative shrink-0 w-[1280px]" data-name="hero">
      <Hero_HeroHeader />
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

function WhatWeDo_WebDev() {
  return (
    <motion.div
      className="bg-[#253236] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <WhatWeDo_Frame1 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[30px] text-center tracking-[-1.2px] w-[245px]">
          <p className="leading-[88px]">Web development</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[37px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[15px] tracking-[-0.6px] w-[275px]">
          <p className="leading-[88px]">Fast, scalable websites build for growth</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#b7dd67] text-[18px] text-center tracking-[-0.72px] w-[114px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function WhatWeDo_Frame2() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame29} />
    </div>
  );
}

function WhatWeDo_WebDev1() {
  return (
    <motion.div
      className="bg-[#253236] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <WhatWeDo_Frame2 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[30px] text-center tracking-[-1.2px] w-[245px]">
          <p className="leading-[88px]">Ads and Branding</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[15px] text-center tracking-[-0.6px] w-[275px]">
          <p className="leading-[28px]">Identity that stands out, campaigns that convert</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#b7dd67] text-[18px] text-center tracking-[-0.72px] w-[112px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function WhatWeDo_Frame3() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame30} />
    </div>
  );
}

function WhatWeDo_WebDev2() {
  return (
    <motion.div
      className="bg-[#253236] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <WhatWeDo_Frame3 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[30px] text-center tracking-[-1.2px] w-[245px]">
          <p className="leading-[88px]">UI UX Design</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[37px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[15px] tracking-[-0.6px] w-[275px]">
          <p className="leading-[88px]">Interfaces that are intuitive and beautiful</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#b7dd67] text-[18px] text-center tracking-[-0.72px] w-[116px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function WhatWeDo_Frame4() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={whatWeDoImgFrame31} />
    </div>
  );
}

function WhatWeDo_WebDev3() {
  return (
    <motion.div
      className="bg-[#253236] h-[296px] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <WhatWeDo_Frame4 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] min-w-full relative shrink-0 text-[#f4f4ef] text-[30px] text-center tracking-[-1.2px] w-[min-content]">
          <p className="leading-[28px]">SMM</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] relative shrink-0 text-[#f4f4ef] text-[15px] text-center tracking-[-0.6px] w-[226px]">
          <p className="leading-[28px]">Content that gets people talking about your brand</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#b7dd67] text-[18px] text-center tracking-[-0.72px] w-[111px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function WhatWeDo_Services() {
  return (
    <div className="content-stretch flex flex-wrap gap-[20px] items-start justify-center px-[10px] py-[10px] relative shrink-0 w-full" data-name="Services">
      <WhatWeDo_WebDev />
      <WhatWeDo_WebDev1 />
      <WhatWeDo_WebDev2 />
      <WhatWeDo_WebDev3 />
    </div>
  );
}

function WhatWeDo_Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <WhatWeDo_Services />
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

function Why_OneRoof() {
  return (
    <motion.div
      className="bg-[#253236] relative rounded-[18px] shrink-0 w-[394px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="one roof"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <Why_Frame1 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f4ef] text-[15px] tracking-[-0.6px] w-[337px]">
          <p className="leading-[32px]">One team for design, development, branding, and marketing. No juggling multiple freelancers.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
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

function Why_FastCom() {
  return (
    <motion.div
      className="bg-[#253236] relative rounded-[18px] shrink-0 w-[394px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="fast com"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <Why_Frame4 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f4ef] text-[15px] tracking-[-0.6px] w-[337px]">
          <p className="leading-[32px]">No disappearing acts. Just clear updates and quick replies throughout your project.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
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

function Why_Growth() {
  return (
    <motion.div
      className="bg-[#253236] h-[214px] relative rounded-[18px] shrink-0 w-[394px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="growth"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <Why_Frame7 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[88px] justify-center leading-[0] not-italic relative shrink-0 text-[#f4f4ef] text-[15px] tracking-[-0.6px] w-[337px]">
          <p className="leading-[32px]">We build with tomorrow in mind, so your website can grow as your business does.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4c5a53] group-hover:border-[rgba(183,221,103,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function Why_Quality() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center gap-[24px] px-[10px] py-[10px] relative shrink-0 w-full" data-name="quality">
      <Why_OneRoof />
      <Why_FastCom />
      <Why_Growth />
    </div>
  );
}

function Why_Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Why_Quality />
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
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="absolute bg-[rgba(183,221,103,0.8)] content-stretch flex items-center justify-center left-[759px] overflow-clip px-[10px] py-[12px] rounded-[18px] top-[155px] cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="Button1"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#253236] text-[20px] tracking-[0.6px] whitespace-nowrap">Start your project</p>
    </motion.button>
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
    <div className="bg-[#2e3936] h-[28px] relative rounded-[999px] shrink-0" data-name="what we do">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#c8e77b] text-[20px] tracking-[2px] whitespace-nowrap">WELCOME TO SOCIAL STACK</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(196,240,107,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
    </div>
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
            <path d={lHeroSvgPaths.p3cf8e00} id="Vector 1" stroke="var(--stroke-0, #2F372D)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[42.491px] left-[336.97px] top-[80.08px] w-[25.159px]">
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
      <div className="absolute h-[14.536px] left-[360.46px] top-[135.99px] w-[67.091px]">
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
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="bg-[rgba(111,127,60,0.9)] content-stretch flex items-center justify-center overflow-clip px-[10px] py-[12px] relative rounded-[18px] shrink-0 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="Button1"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#e6f2dd] text-[20px] tracking-[0.6px] whitespace-nowrap">Start a project</p>
    </motion.button>
  );
}

function LHero_Button1() {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="h-[56px] relative rounded-[18px] shrink-0 cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent] group"
      data-name="Button1"
    >
      <div className="content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold h-[30px] leading-[32px] not-italic relative shrink-0 text-[20px] text-[rgba(111,127,60,0.9)] tracking-[0.6px] w-[192px]">View our services</p>
      </div>
      <div aria-hidden className="absolute border-4 border-[rgba(111,127,60,0.9)] border-solid inset-0 pointer-events-none rounded-[18px] group-hover:bg-[rgba(111,127,60,0.12)] transition-colors duration-300" />
    </motion.button>
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

function LHero_WebDev() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame3 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[30px] text-center tracking-[-1.2px] w-[245px]">
          <p className="leading-[88px]">Web development</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[37px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[15px] tracking-[-0.6px] w-[275px]">
          <p className="leading-[88px]">Fast, scalable websites build for growth</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#6f7f3c] text-[18px] text-center tracking-[-0.72px] w-[114px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function LHero_Frame4() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame29} />
    </div>
  );
}

function LHero_WebDev1() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame4 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[30px] text-center tracking-[-1.2px] w-[245px]">
          <p className="leading-[88px]">Ads and Branding</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[15px] text-center tracking-[-0.6px] w-[275px]">
          <p className="leading-[28px]">Identity that stands out, campaigns that convert</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#6f7f3c] text-[18px] text-center tracking-[-0.72px] w-[112px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function LHero_Frame5() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame30} />
    </div>
  );
}

function LHero_WebDev2() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame5 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[30px] text-center tracking-[-1.2px] w-[245px]">
          <p className="leading-[88px]">UI UX Design</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[37px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[15px] tracking-[-0.6px] w-[275px]">
          <p className="leading-[88px]">Interfaces that are intuitive and beautiful</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#6f7f3c] text-[18px] text-center tracking-[-0.72px] w-[116px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function LHero_Frame6() {
  return (
    <div className="h-[143px] relative shrink-0 w-[270px]">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={lHeroImgFrame31} />
    </div>
  );
}

function LHero_WebDev3() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] h-[296px] relative rounded-[18px] shrink-0 w-[300px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="web dev"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame6 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] min-w-full relative shrink-0 text-[#2f372d] text-[30px] text-center tracking-[-1.2px] w-[min-content]">
          <p className="leading-[28px]">SMM</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[55px] justify-center leading-[0] relative shrink-0 text-[#2f372d] text-[15px] text-center tracking-[-0.6px] w-[226px]">
          <p className="leading-[28px]">Content that connects and grows communities</p>
        </div>
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#6f7f3c] text-[18px] text-center tracking-[-0.72px] w-[111px] group-hover:underline transition-colors duration-300">
          <p className="leading-[88px]">Learn more...</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function LHero_Services() {
  return (
    <div className="content-stretch flex flex-wrap gap-[20px] items-start justify-center px-[10px] py-[10px] relative shrink-0 w-full" data-name="Services">
      <LHero_WebDev />
      <LHero_WebDev1 />
      <LHero_WebDev2 />
      <LHero_WebDev3 />
    </div>
  );
}

function LHero_Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <LHero_Services />
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

function LHero_OneRoof() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] relative rounded-[18px] shrink-0 w-[394px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="one roof"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame8 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f372d] text-[15px] tracking-[-0.6px] w-[337px]">
          <p className="leading-[32px]">One team for design, development, branding, and marketing. No juggling multiple freelancers.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
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

function LHero_FastCom() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] relative rounded-[18px] shrink-0 w-[394px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="fast com"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame11 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f372d] text-[15px] tracking-[-0.6px] w-[337px]">
          <p className="leading-[32px]">No disappearing acts. Just clear updates and quick replies throughout your project.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
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

function LHero_Growth() {
  return (
    <motion.div
      className="bg-[rgba(111,127,60,0.15)] h-[214px] relative rounded-[18px] shrink-0 w-[394px] group cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="growth"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[10px] relative rounded-[inherit] size-full">
        <LHero_Frame14 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[88px] justify-center leading-[0] not-italic relative shrink-0 text-[#2f372d] text-[15px] tracking-[-0.6px] w-[337px]">
          <p className="leading-[32px]">We build with tomorrow in mind, so your website can grow as your business does.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#4f5a4b] group-hover:border-[rgba(111,127,60,0.6)] border-solid inset-0 pointer-events-none rounded-[18px] transition-colors duration-300" />
    </motion.div>
  );
}

function LHero_Quality() {
  return (
    <div className="content-stretch flex flex-wrap items-start justify-center gap-[24px] px-[10px] py-[10px] relative shrink-0 w-full" data-name="quality">
      <LHero_OneRoof />
      <LHero_FastCom />
      <LHero_Growth />
    </div>
  );
}

function LHero_Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <LHero_Quality />
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
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="absolute bg-[rgba(111,127,60,0.9)] content-stretch flex items-center justify-center left-[759px] overflow-clip px-[10px] py-[12px] rounded-[18px] top-[155px] cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]"
      data-name="Button1"
    >
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[#e6f2dd] text-[20px] tracking-[0.6px] whitespace-nowrap">Start your project</p>
    </motion.button>
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

function BrushDoodle({ d, width, height, left, top, color = "#F4F4EF" }) {
  return (
    <div
      className="absolute pointer-events-none origin-center animate-[doodlePulse_2s_ease-out_infinite]"
      style={{ left, top, width, height }}
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

// ─── Dark page content ───────────────────────────────────────────────────────
function DarkPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[10px] pb-[80px] pt-[38px] text-[#f4f4ef]">
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

      <ScaleFrame width={1280} height={202} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <WhatWeDo_Brush />
          <BrushDoodle d={doodlePaths.whatWeDo} width={304} height={15} left={488} top={166} />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1278} height={331} mobileWidth={650} mobileHeight={660}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex flex-col items-center overflow-hidden"
        >
          <WhatWeDo_Frame />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <Why_Brush />
          <BrushDoodle d={doodlePaths.whySocialStack} width={228} height={20} left={526} top={152} />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1278} height={240} mobileWidth={850} mobileHeight={480}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex flex-col items-center overflow-hidden"
        >
          <Why_Frame />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <How_Brush />
          <BrushDoodle d={doodlePaths.howSocialStack} width={388} height={15} left={446} top={156} />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1290} height={350} mobileWidth={650} mobileHeight={520}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex flex-col items-center overflow-hidden"
        >
          <How_Frame />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1266} height={277}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full"
        >
          <Cta_Frame />
        </motion.div>
      </ScaleFrame>
    </div>
  );
}

// ─── Light page content ───────────────────────────────────────────────────────
function LightPageContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[10px] pb-[80px] pt-[38px] text-[#2f372d]">
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

      <ScaleFrame width={1280} height={202} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <LHero_Brush />
          <BrushDoodle d={doodlePaths.whatWeDo} width={304} height={15} left={488} top={166} color="#6F7F3C" />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1278} height={331} mobileWidth={650} mobileHeight={660}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex flex-col items-center overflow-hidden"
        >
          <LHero_Frame2 />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <LHero_Brush1 />
          <BrushDoodle d={doodlePaths.whySocialStack} width={228} height={20} left={526} top={152} color="#6F7F3C" />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1278} height={240} mobileWidth={850} mobileHeight={480}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex flex-col items-center overflow-hidden"
        >
          <LHero_Frame7 />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1280} height={192} mobileWidth={1000}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex items-center justify-center overflow-hidden"
        >
          <LHero_Brush2 />
          <BrushDoodle d={doodlePaths.howSocialStack} width={388} height={15} left={446} top={156} color="#6F7F3C" />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1290} height={350} mobileWidth={650} mobileHeight={520}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full flex flex-col items-center overflow-hidden"
        >
          <LHero_Frame17 />
        </motion.div>
      </ScaleFrame>

      <ScaleFrame width={1266} height={277}>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.35 }}
          className="relative size-full"
        >
          <LHero_Frame27 />
        </motion.div>
      </ScaleFrame>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [theme, setTheme] = useState("dark");
  const isLight = theme === "light";

  return (
    <main className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${isLight ? "bg-[#e6f2dd]" : "bg-[#222d31]"}`}>
      <style>{`
        @keyframes doodlePulse { 0% { transform: scale(1.2); } 25% { transform: scale(1); } 100% { transform: scale(1); } }
        @media (max-width: 767px) {
          [data-name="step 3"] { left: 10px !important; top: 265px !important; }
          [data-name="step 4"] { left: 330px !important; top: 265px !important; }
          [data-name="connector-arrow"] { display: none !important; }
          [data-name="steps-canvas"] { height: 520px !important; }
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