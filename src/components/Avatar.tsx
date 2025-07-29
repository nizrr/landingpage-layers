import { cn } from "@/lib/utils"
import React, { HTMLAttributes } from "react"

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
   const { children, className, ...otherProps } = props
   return (
      <div
         className={cn(
            "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
            className
         )}
         {...otherProps}>
         {children}
      </div>
   )
}
