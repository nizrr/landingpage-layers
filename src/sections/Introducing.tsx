"use client"
import Tag from "@/components/Tag"
import { cn } from "@/lib/utils"
import { useScroll, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"

const text =
   "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves."
const words = text.split(" ")

export default function Introducing() {
   const scrollTarget = useRef<HTMLDivElement>(null)
   const { scrollYProgress } = useScroll({
      target: scrollTarget,
      offset: ["start end", "end end"],
   })
   const [currentWord, setCurrentWord] = useState(0)
   const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

   useEffect(() => {
      wordIndex.on("change", latest => {
         setCurrentWord(Math.floor(latest))
      })
   }, [wordIndex])

   return (
      <section className="py-20 px-5 lg:py-28">
         <div className="container mx-auto max-w-6xl">
            <div className="sticky top-30 lg:top-40 xl:top-70 " style={{ }}>
               <div className="flex justify-center">
                  <Tag>Introducing Layers</Tag>
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-10 mx-auto">
                  <span>Your creative process deserves better.</span>{" "}
                  <span className="">
                     {words.map((word, index) => (
                        <span
                           key={index}
                           className={cn(
                              "transition duration-500 ease-in-out text-white/15",
                              index < currentWord ? "text-white" : "text-white/15"
                           )}>
                           {`${word} `}
                        </span>
                     ))}
                  </span>
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
