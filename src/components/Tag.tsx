import { cn } from "@/lib/utils"
import { Star } from "lucide-react"
import React, { HTMLAttributes } from "react"

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
   const { children, className, ...otherProps } = props
   return (
      <div
         className={cn(
            "font-medium flex justify-center items-center gap-2 mx-auto text-lime-400 text-xs border border-lime-400 rounded-full px-4 py-2 w-fit uppercase ",
            className
         )}
         {...otherProps}>
         <Star
            fill="currentColor"
            size={12}
         />
         <span>{children}</span>
      </div>
   )
}
