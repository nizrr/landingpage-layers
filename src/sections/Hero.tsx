import { Button } from "@/components/ui/button"
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image"
import quantumLogoImage from "@/assets/images/quantum.svg"
import acmeCorpLogoImage from "@/assets/images/acme-corp.svg"
import echoValleyLogoImage from "@/assets/images/echo-valley.svg"
import pulseLogoImage from "@/assets/images/pulse.svg"
import outsideLogoImage from "@/assets/images/outside.svg"

export default function Hero() {
   return (
      <section className="py-24 overflow-x-clip relative">
         <div className="absolute lg:-left-32 top-40 hidden lg:block">
            <Image
               src={designExample1Image}
               alt="design example"></Image>
         </div>
         <div className="absolute lg:-right-64 top-10 hidden lg:block">
            <Image
               src={designExample2Image}
               alt="design example"></Image>
         </div>
         <div className="container px-5 mx-auto">
            <div className="flex justify-center mx-auto">
               <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                  $7.5M seed round raised
               </div>
            </div>
            <h1 className="text-6xl md:text-7xl md:max-w-3xl xl:max-w-5xl xl:text-8xl font-medium text-center mt-6 mx-auto max-w-4xl">
               Impactful design, created effortlessly
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
               Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface
               that keeps you in your creative flow
            </p>
            <form
               action=""
               className="flex justify-between border border-white/15 rounded-full p-2 px-4 mt-8 gap-4 mx-auto max-w-2xl">
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 w-full active:border-0 focus:border-0 focus:outline-none focus:ring-0 text-white/50 placeholder:text-white/50"
               />
               <Button
                  type="submit"
                  className="whitespace-nowrap"
                  size={"sm"}>
                  Sign Up
               </Button>
            </form>
            <p className="text-white/50 text-center mt-40">Already chosen by these market leaders</p>
            <div className="flex justify-center items-center gap-16 mt-8">
               <Image
                  src={quantumLogoImage}
                  alt="logo"
                  className="h-8 w-auto"></Image>
               <Image
                  src={acmeCorpLogoImage}
                  alt="logo"
                  className="h-8 w-auto"></Image>
               <Image
                  src={echoValleyLogoImage}
                  alt="logo"
                  className="h-8 w-auto"></Image>
               <Image
                  src={pulseLogoImage}
                  alt="logo"
                  className="h-8 w-auto"></Image>
               <Image
                  src={outsideLogoImage}
                  alt="logo"
                  className="h-8 w-auto"></Image>
            </div>
         </div>
      </section>
   )
}
