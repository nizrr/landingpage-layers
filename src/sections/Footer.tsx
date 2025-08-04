import Image from "next/image"
import React from "react"
import logoImage from "@/assets/images/logo.svg"
import Link from "next/link"

const footerLinks = [
   {
      label: "Contact",
      href: "#",
   },
   {
      label: "Privacy Policy",
      href: "#",
   },
   {
      label: "Terms & Conditions",
      href: "#",
   },
]

export default function Footer() {
   return (
      <section className="py-5 px-4 lg:px-8 ">
         <div className="">
            <div className="flex justify-between flex-wrap items-center gap-4">
               <div className="flex justify-center items-center w-full md:w-fit">
                  <Image
                     src={logoImage}
                     alt="logo"
                     className="h-14 w-auto md:h-auto "></Image>
               </div>
               <div className="flex gap-5 text-nowrap justify-center">
                  {footerLinks.map(link => (
                     <Link
                        key={link.label}
                        href={link.href}
                        className="text-white/50 hover:text-white">
                        {link.label}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
