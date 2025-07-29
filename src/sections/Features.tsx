import Image from "next/image"
import React from "react"
import avatarAshwinImage from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatarFlorenceImage from "@/assets/images/avatar-florence-shaw.jpg"
import avatarLulaImage from "@/assets/images/avatar-lula-meyers.jpg"
import Tag from "@/components/Tag"
import FeatureCard from "@/components/FeatureCard"
import Avatar from "@/components/Avatar"
const features = [
   "Asset Library",
   "Code Preview",
   "Flow Mode",
   "Smart Sync",
   "Auto Layout",
   "Fast Search",
   "Smart Guides",
]
export default function Features() {
   return (
      <section className="py-24 px-4">
         <div className="container mx-auto">
            <Tag>Features</Tag>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-6 mx-auto max-w-xl">
               Where power meets <span className="text-lime-400">simplicity</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
               <FeatureCard
                  title="Real-time Collaboration"
                  description="Work together seamlessly with contlict-tree team editing">
                  <div className="flex aspect-video items-center justify-center">
                     <Avatar>
                        <Image
                           src={avatarAshwinImage}
                           alt="Ashwin Santiago"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-indigo-500">
                        <Image
                           src={avatarFlorenceImage}
                           alt="Florence Shaw"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-amber-500">
                        <Image
                           src={avatarLulaImage}
                           alt="Lula Meyers"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-transparent">
                        <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                           {Array.from({ length: 3 }).map((_, index) => (
                              <span
                                 className="size-1.5 rounded-full bg-white inline-flex"
                                 key={index}></span>
                           ))}
                        </div>
                     </Avatar>
                  </div>
               </FeatureCard>
               <FeatureCard
                  title="Interactive Prototyping"
                  description="Engage your clients with prototypes
that react to user actions">
                  <div className="aspect-video flex items-center justify-center">
                     <p className="text-4xl font-extrabold text-white/20 text-center">
                        We&apos;ve achived{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                           incredible
                        </span>{" "}
                        growth this year
                     </p>
                  </div>
               </FeatureCard>

               <FeatureCard
                  title="Keyboard Quick Actions"
                  description="Powerful commands to help you
create desians more quickly"></FeatureCard>
            </div>
            {features.map((feature, index) => (
               <div key={index}>{feature}</div>
            ))}
         </div>
      </section>
   )
}
