import Tag from "@/components/Tag"
import { Star } from "lucide-react"
import React from "react"

export default function Introducing() {
   const text =
      "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves."
   return (
      <section className="py-24 px-5 lg:py-40">
         <div className="container mx-auto max-w-6xl">
            <div className="flex justify-center">
               <Tag>Introducing Layers</Tag>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-10 mx-auto">
               <span>Your creative process deserves better.</span>{" "}
               <span className="text-white/15">{text}</span>
               <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
            </h1>
         </div>
      </section>
   )
}
