// ─────────────────────────────────────────────────────────────────────────────
// Shared Footer
// Extracted from FaqPage.tsx so every page uses one footer implementation
// instead of each page carrying its own copy. TEMPORARY — will be replaced
// wholesale once the lead dev delivers the official shared Footer. Pages
// should only ever import { Footer } from "./Footer" and never redefine
// their own footer, so that swap is a one-file change with zero edits to
// any page.
// ─────────────────────────────────────────────────────────────────────────────

import imgLightFooterLogo from "../../imports/LightFaQs/ca7a4b5d9052afe7cb23b96175cc5d547c211686.png";
import imgLightGmail from "../../imports/LightFaQs/6b4ec495fae1c48f0f0ded0d4de376f6d0e25992.png";
import imgLightInstagram from "../../imports/LightFaQs/0a53286268279a29ea6db753d8d408bb499874ac.png";
import imgLightLinkedin from "../../imports/LightFaQs/5ac66073681efe5925013d8e779ef7ae2781251e.png";

import imgGmailPngBlack from "../../imports/DFooter-1/bb41079225c7e7e337a305986d06c16975f4fb87.png";
import imgInstagramPngBlack from "../../imports/DFooter-1/4df4f05f97b46091b25e33867b09dde1cfa65a65.png";
import imgLinkedinIconVectorPngBlack from "../../imports/DFooter-1/f061b0dccdf43cbb885fbbf475aa5115a5fee706.png";
import imgLogoRecolored1 from "../../imports/DFooter-1/eef17f758a83029ddf8e98fae373f5efc3059691.png";

export function Footer({ theme = "dark" }) {
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
