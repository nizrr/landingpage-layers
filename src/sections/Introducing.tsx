"use client"
import Tag from "@/components/Tag"
import { motion, useMotionValue, useMotionValueEvent, useScroll } from "motion/react"
import { useRef } from "react"

export default function Introducing() {
   const scrollTarget = useRef<HTMLDivElement>(null)
   const { scrollYProgress } = useScroll({
      target: scrollTarget,
      offset: ["start end", "end end"],
   })
   useMotionValueEvent(scrollYProgress, "change", latest => {
      console.log(latest)
   })
   const text =
      "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves."
   return (
      <section className="py-24 px-5 lg:py-40">
         <div className="container mx-auto max-w-6xl">
            <div className="sticky top-24 ">
               <div className="flex justify-center">
                  <Tag>Introducing Layers</Tag>
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-10 mx-auto">
                  <span>Your creative process deserves better.</span>{" "}
                  <span className="text-white/15">{text}</span>
                  <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
               </h1>
            </div>
            <div
               className="h-[150vh]"
               ref={scrollTarget}></div>
         </div>
      </section>
   )
}
