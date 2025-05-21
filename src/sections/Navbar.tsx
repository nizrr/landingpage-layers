import Image from "next/image"
import logoImage from "@/assets/images/logo.svg"
import { Button } from "@/components/ui/button"
const navLinks = [
   {
      label: "Home",
      href: "#",
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
   return (
      <section className="py-4 lg:py-8">
         <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 items-center">
               <div>
                  <Image
                     src={logoImage}
                     alt="logo"
                     className="h-9 w-auto md:h-auto"></Image>
               </div>
               <div className="hidden lg:flex justify-center items-center">
                  <nav className="flex gap-6 font-medium">
                     {navLinks.map(link => (
                        <a
                           key={link.label}
                           href={link.href}
                           className="text-white/80 hover:text-white">
                           {link.label}
                        </a>
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
                     className="feather feather-menu md:hidden">
                     <line
                        x1="3"
                        y1="12"
                        x2="21"
                        y2="12"></line>
                     <line
                        x1="3"
                        y1="6"
                        x2="21"
                        y2="6"></line>
                     <line
                        x1="3"
                        y1="18"
                        x2="21"
                        y2="18"></line>
                  </svg>

                  <Button
                     size={"lg"}
                     variant={"outline"}
                     className="hidden md:block">
                     Log In
                  </Button>
                  <Button
                     size={"lg"}
                     className="hidden md:block">
                     Sign Up
                  </Button>
               </div>
            </div>
         </div>
      </section>
   )
}
