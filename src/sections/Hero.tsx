"use client"
import { Button } from "@/components/ui/button"
import designExample1Image from "@/assets/images/design-example-1.png"
import designExample2Image from "@/assets/images/design-example-2.png"
import Image from "next/image"
import Pointer from "@/components/Pointer"
import LogoTicker from "./LogoTicker"
import cursorYourImage from "@/assets/images/cursor-you.svg"
import { motion, useAnimate } from "motion/react"
import { useEffect } from "react"
import { TextAnimate } from "@/components/magicui/text-animate"
import { WordRotate } from "@/components/magicui/word-rotate"

export default function Hero() {
   const [leftDesignScope, leftDesignAnimate] = useAnimate()
   const [leftPointerScope, leftPointerAnimate] = useAnimate()
   const [rightDesignScope, rightDesignAnimate] = useAnimate()
   const [rightPointerScope, rightPointerAnimate] = useAnimate()

   useEffect(() => {
      leftDesignAnimate([
         [leftDesignScope.current, { opacity: 1 }, { duration: 0.6 }],
         [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.6, ease: "easeInOut" }],
      ])
      leftPointerAnimate([
         [leftPointerScope.current, { opacity: 1 }, { duration: 0.6 }],
         [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.6, ease: "easeInOut" }],
         [leftPointerScope.current, { x: 0, y: [0, 20, 10] }, { duration: 0.6, ease: "easeInOut" }],
      ])
      rightDesignAnimate([
         [rightDesignScope.current, { opacity: 1 }, { duration: 0.6, delay: 1.8 }],
         [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.6 }],
      ])
      rightPointerAnimate([
         [rightPointerScope.current, { opacity: 1 }, { duration: 0.6, delay: 1.8 }],
         [rightPointerScope.current, { y: 0, x: 125 }, { duration: 0.6 }],
         [
            rightPointerScope.current,
            { x: 0, y: [0, 20, 10] },
            { duration: 0.6, ease: "easeInOut" },
         ],
      ])
   })

   return (
      <section
         className="py-24 overflow-x-clip relative"
         style={{ cursor: `url(${cursorYourImage.src}), auto` }}>
         <motion.div
            ref={leftDesignScope}
            initial={{ opacity: 0, x: -100, y: 100 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="absolute lg:-left-32 top-40 hidden lg:block">
            <Image
               src={designExample1Image}
               alt="design example"
               draggable={false}></Image>
         </motion.div>
         <motion.div
            ref={leftPointerScope}
            initial={{ opacity: 0, y: 100, x: -200 }}
            className="absolute left-50 bottom-90 hidden lg:block">
            <Pointer name="Andrea" />
         </motion.div>
         <motion.div
            ref={rightDesignScope}
            initial={{ opacity: 0, x: 100, y: 100 }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.8}
            className="absolute lg:-right-50 top-10 hidden lg:block">
            <Image
               src={designExample2Image}
               alt="design example"
               draggable={false}></Image>
         </motion.div>
         <motion.div
            ref={rightPointerScope}
            initial={{ opacity: 0, y: 100, x: 225 }}
            className="absolute right-80 top-30 hidden lg:block">
            <Pointer
               name="Bryan"
               color="bg-red-500"
            />
         </motion.div>

         <div className="container px-5 mx-auto">
            <div className="flex justify-center mx-auto">
               <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                  $7.5M seed round raised
               </div>
            </div>
            <motion.div
               animate={{ opacity: [0, 1] }}
               className="text-6xl md:text-7xl md:max-w-3xl xl:max-w-5xl xl:text-8xl font-medium text-center mt-6 mx-auto max-w-4xl inline-block">
               Impactful design, created
               <WordRotate words={["quickly", "easily", "effortlessly"]}></WordRotate>
            </motion.div>
            <TextAnimate
               animation="slideLeft"
               by="word"
               duration={1.5}
               delay={1}
               className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
               Design tools shouldn&apos;t slow you down. Layers combines powerful features with an
               intuitive interface that keeps you in your creative flow
            </TextAnimate>
            <form
               action=""
               className="flex justify-between border border-white/15 rounded-full p-2 px-4 mt-8 gap-4 mx-auto max-w-2xl">
               <input
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="bg-transparent px-4 w-full active:border-0 focus:border-0 focus:outline-none focus:ring-0 focus:bg-transparent text-white/50 placeholder:text-white/50 md:flex-1"
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
