"use client"
import { cn } from "@/lib/utils"
import { IntegrationsType } from "@/sections/Integrations"
import Image from "next/image"
import { motion, useAnimation } from "motion/react"
import { Fragment, useEffect, useState } from "react"

export default function IntegrationsColumn(props: {
   integrations: IntegrationsType
   className?: string
   reverse?: boolean
}) {
   const controls = useAnimation()
   const { integrations, className, reverse } = props
   const [isHover, setIsHover] = useState(false)
   const [duration, setDuration] = useState(20)

   useEffect(() => {
      if (isHover) {
         setDuration(40)
      } else {
         setDuration(20)
      }
      controls.start({
         y: reverse ? 0 : "-50%",
         transition: {
            duration: duration,
            repeat: Infinity,
            ease: "linear",
         },
      })
   }, [isHover, controls, reverse, duration])

   return (
      <motion.div
         initial={{ y: reverse ? "-50%" : 0 }}
         animate={controls}
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
         className={cn("flex flex-col gap-4 pb-4", className)}>
         {Array.from({ length: 2 }).map((_, index) => (
            <Fragment key={index}>
               {integrations.map((integration, index) => (
                  <div
                     key={index}
                     className="bg-neutral-900 border border-white/10 p-6 rounded-3xl hover:border-lime-400 transition duration-300">
                     <div className="flex justify-center">
                        <Image
                           src={integration.icon}
                           alt={`${integration.name} icon`}
                           className="size-24"></Image>
                     </div>
                     <h3 className="text-3xl font-medium text-white mt-6 text-center">
                        {integration.name}
                     </h3>
                     <p className="text-white/50 mt-2 text-center text-lg">
                        {integration.description}
                     </p>
                  </div>
               ))}
            </Fragment>
         ))}
      </motion.div>
   )
}
