import React from "react"
import quantumLogo from "@/assets/images/quantum.svg"
import acmeLogo from "@/assets/images/acme-corp.svg"
import echoValleyLogo from "@/assets/images/echo-valley.svg"
import pulseLogo from "@/assets/images/pulse.svg"
import outsideLogo from "@/assets/images/outside.svg"
import apexLogo from "@/assets/images/apex.svg"
import celestialLogo from "@/assets/images/celestial.svg"
import twiceLogo from "@/assets/images/twice.svg"
import Image from "next/image"

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
         <div className="container">
            <p className="text-white/50 text-center text-xl">
               Already chosen by these market leaders
            </p>
            <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
               <div className="flex gap-24 pr-24">
                  {logos.map((logo, index) => (
                     <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
