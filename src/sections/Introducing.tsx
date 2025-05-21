import { Star } from "lucide-react"
import React from "react"

export default function Introducing() {
   return (
      <section className="py-24">
         <div className="container mx-auto">
            <p className="font-medium flex justify-center items-center gap-2 mx-auto text-lime-400 text-xs border border-lime-400 rounded-full px-4 py-1 w-fit ">
               <Star
                  fill="currentColor"
                  size={12}
               />
               INTRODUCING LAYERS
            </p>
            <h1 className="text-5xl md:text-4xl md:max-w-3xl xl:max-w-5xl xl:text-7xl font-medium text-center mt-6 mx-auto max-w-4xl">
               Your creative process deserves better. You&apos;re racing to create exceptional work,
               but traditional design tools slow you down with unnecessary complexity and steep
               learning curves. <br />{" "}
               <span className="text-lime-400">That&apos;s why we built Layers.</span>
            </h1>
         </div>
      </section>
   )
}
