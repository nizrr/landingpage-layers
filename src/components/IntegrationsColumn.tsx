import { cn } from "@/lib/utils"
import { IntegrationsType } from "@/sections/Integrations"
import Image from "next/image"

export default function IntegrationsColumn(props: {
   integrations: IntegrationsType
   className?: string
}) {
   const { integrations, className } = props
   return (
      <div className={cn("flex flex-col gap-4 pb-4", className)}>
         {integrations.map((integration, index) => (
            <div
               key={index}
               className="bg-neutral-900 border border-white/10 p-6 rounded-3xl">
               <div className="flex justify-center">
                  <Image
                     src={integration.icon}
                     alt={`${integration.name} icon`}
                     className="size-24"></Image>
               </div>
               <h3 className="text-3xl font-medium text-white mt-6 text-center">
                  {integration.name}
               </h3>
               <p className="text-white/50 mt-2 text-center text-lg">{integration.description}</p>
            </div>
         ))}
      </div>
   )
}
