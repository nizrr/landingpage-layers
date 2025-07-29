import React from "react"
import { Card, CardContent } from "./ui/card"

export default function FeatureCard(props: {
   title: string
   description: string
   children?: React.ReactNode
}) {
   const { title, description, children } = props
   return (
      <Card className="bg-neutral-900 border border-white/10 p-6 rounded-3xl">
         <CardContent>
            <div className="aspect-video">{children}</div>
            <div>
               <h3 className="font-medium text-3xl text-white mt-6">{title}</h3>
               <p className="text-white/50 mt-2">{description}</p>
            </div>
         </CardContent>
      </Card>
   )
}
