import React from "react"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"

export default function FeatureCard(props: {
   title: string
   description: string
   children?: React.ReactNode
   className?: string
}) {
   const { title, description, children, className } = props
   return (
      <Card className={cn("bg-neutral-900 border border-white/10 p-4 rounded-3xl", className)}>
         <CardContent className="px-3">
            <div className="aspect-video">{children}</div>
            <div>
               <h3 className="font-medium text-3xl text-white mt-6">{title}</h3>
               <p className="text-white/50 mt-2">{description}</p>
            </div>
         </CardContent>
      </Card>
   )
}
