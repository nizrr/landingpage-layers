"use client"
import quantumLogo from "@/assets/images/quantum.svg"
import acmeLogo from "@/assets/images/acme-corp.svg"
import echoValleyLogo from "@/assets/images/echo-valley.svg"
import pulseLogo from "@/assets/images/pulse.svg"
import outsideLogo from "@/assets/images/outside.svg"
import apexLogo from "@/assets/images/apex.svg"
import celestialLogo from "@/assets/images/celestial.svg"
import twiceLogo from "@/assets/images/twice.svg"
import Image from "next/image"
import { motion } from "motion/react"
import { Fragment } from "react"

const logos = [
   {
      src: quantumLogo,
      alt: "Quantum Logo",
   },
   {
      src: acmeLogo,
      alt: "Acme Corp Logo",
   },
   {
      src: echoValleyLogo,
      alt: "Echo Valley Logo",
   },
   {
      src: pulseLogo,
      alt: "Pulse Logo",
   },
   {
      src: outsideLogo,
      alt: "Outside Logo",
   },
   {
      src: apexLogo,
      alt: "Apex Logo",
   },
   {
      src: celestialLogo,
      alt: "Celestial Logo",
   },
   {
      src: twiceLogo,
      alt: "Twice Logo",
   },
]
export default function LogoTicker() {
   return (
      <section className="py-24 overflow-x-clip">
         <div className="container mx-auto max-w-6xl">
            <p className="text-white/50 text-center text-xl">
               Already chosen by these market leaders
            </p>
            <div className="flex overflow-hidden mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
               <motion.div
                  animate={{
                     x: "-50%",
                     transition: { duration: 20, repeat: Infinity, ease: "linear" },
                  }}
                  className="flex flex-none gap-24 pr-24">
                  {Array.from({ length: 2 }).map((_, index) => (
                     <Fragment key={index}>
                        {logos.map((logo, indexLogo) => (
                           <Image
                              key={indexLogo}
                              src={logo.src}
                              alt={logo.alt}
                           />
                        ))}
                     </Fragment>
                  ))}
               </motion.div>
            </div>
         </div>
      </section>
   )
}
