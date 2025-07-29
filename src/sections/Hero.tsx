import { Button } from "@/components/ui/button"
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image"
import Pointer from "@/components/Pointer"
import LogoTicker from "./LogoTicker"

export default function Hero() {
   return (
      <section className="py-24 overflow-x-clip relative">
         <div className="absolute lg:-left-32 top-40 hidden lg:block">
            <Image
               src={designExample1Image}
               alt="design example"></Image>
         </div>
         <div className="absolute lg:-right-50 top-10 hidden lg:block">
            <Image
               src={designExample2Image}
               alt="design example"></Image>
         </div>

         <div className="container px-5 mx-auto">
            <div className="absolute left-50 bottom-90 hidden lg:block">
               <Pointer name="Andrea" />
            </div>
            <div className="absolute right-80 top-30 hidden lg:block">
               <Pointer
                  name="Bryan"
                  color="bg-red-500"
               />
            </div>
            <div className="flex justify-center mx-auto">
               <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                  $7.5M seed round raised
               </div>
            </div>
            <h1 className="text-6xl md:text-7xl md:max-w-3xl xl:max-w-5xl xl:text-8xl font-medium text-center mt-6 mx-auto max-w-4xl">
               Impactful design, created effortlessly
            </h1>
            <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
               Design tools shouldn&apos;t slow you down. Layers combines powerful features with an
               intuitive interface that keeps you in your creative flow
            </p>
            <form
               action=""
               className="flex justify-between border border-white/15 rounded-full p-2 px-4 mt-8 gap-4 mx-auto max-w-2xl">
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-4 w-full active:border-0 focus:border-0 focus:outline-none focus:ring-0 text-white/50 placeholder:text-white/50 md:flex-1"
               />
               <Button
                  type="submit"
                  className="whitespace-nowrap"
                  size={"sm"}>
                  Sign Up
               </Button>
            </form>

            <LogoTicker />
         </div>
      </section>
   )
}
