"use client"
import Image from "next/image"
import logoImage from "@/assets/images/logo.svg"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
const navLinks = [
   {
      label: "Home",
      href: "#",
   },
   {
      label: "Introducing",
      href: "#introducing",
   },
   {
      label: "Features",
      href: "#features",
   },
   {
      label: "Integrations",
      href: "#integrations",
   },
   {
      label: "FAQs",
      href: "#faqs",
   },
]
export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <>
         <section className="py-4 lg:py-8 px-5 fixed w-full top-0 z-50">
            <div className="container max-w-5xl mx-auto">
               <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }}
                  className="border border-white/15 rounded-3xl md:rounded-full backdrop-blur-sm bg-neutral-950/70">
                  <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 items-center">
                     <div>
                        <Image
                           src={logoImage}
                           alt="logo"
                           className="h-9 w-auto md:h-auto"></Image>
                     </div>
                     <div className="hidden lg:flex justify-center items-center">
                        <nav className="flex gap-6 font-medium">
                           {navLinks.map((link, index) => (
                              <motion.div
                                 key={index}
                                 initial={{ opacity: 0 }}
                                 animate={{
                                    opacity: 1,
                                    transition: {
                                       delay: index * 0.4,
                                       duration: 0.7,
                                       ease: "easeInOut",
                                    },
                                 }}>
                                 <Link
                                    href={link.href}
                                    className="text-white/80 hover:text-white">
                                    {link.label}
                                 </Link>
                              </motion.div>
                           ))}
                        </nav>
                     </div>
                     <div className="flex justify-end gap-4">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="feather feather-menu md:hidden"
                           onClick={() => setIsOpen(!isOpen)}>
                           <line
                              x1="3"
                              y1="6"
                              x2="21"
                              y2="6"
                              className={cn(
                                 "origin-left transition",
                                 isOpen && "rotate-45 -translate-y-1"
                              )}></line>
                           <line
                              x1="3"
                              y1="12"
                              x2="21"
                              y2="12"
                              className={cn("transition", isOpen && "opacity-0")}></line>
                           <line
                              x1="3"
                              y1="18"
                              x2="21"
                              y2="18"
                              className={cn(
                                 "origin-left transition",
                                 isOpen && "-rotate-45 translate-y-1"
                              )}></line>
                        </svg>

                        <ShimmerButton className="hidden md:block">Log In</ShimmerButton>
                        <Button
                           size={"lg"}
                           className="hidden md:block">
                           Sign Up
                        </Button>
                     </div>
                  </div>
                  <AnimatePresence>
                     {isOpen && (
                        <motion.div
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: "auto" }}
                           exit={{ opacity: 0, height: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden">
                           <div className="flex flex-col items-center transition md:hidden gap-4 py-2">
                              {navLinks.map(link => (
                                 <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/50 hover:text-white">
                                    {link.label}
                                 </Link>
                              ))}
                              <Button
                                 size={"lg"}
                                 variant={"outline"}
                                 className="">
                                 Log In
                              </Button>
                              <Button
                                 size={"lg"}
                                 className="">
                                 Sign Up
                              </Button>
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
            </div>
         </section>
         <div className="pb-[52px] md:pb-[64px]"></div>
      </>
   )
}
