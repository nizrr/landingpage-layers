import Image from "next/image"
import React from "react"
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg"
import Tag from "@/components/Tag"
import FeatureCard from "@/components/FeatureCard"
import Avatar from "@/components/Avatar"
import Key from "@/components/Key"

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
         <div className="container mx-auto max-w-6xl">
            <Tag>Features</Tag>
            <h1 className="text-7xl font-medium text-center mt-6 mx-auto max-w-2xl">
               Where power meets <span className="text-lime-400">simplicity</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 mt-12 justify-center">
               <FeatureCard
                  title="Real-time Collaboration"
                  description="Work together seamlessly with contlict-tree team editing"
                  className="md:col-span-2 lg:col-span-1 group">
                  <div className="flex aspect-video items-center justify-center">
                     <Avatar className="z-40">
                        <Image
                           src={avatar1}
                           alt="Ashwin Santiago"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-indigo-500 z-30">
                        <Image
                           src={avatar2}
                           alt="Florence Shaw"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-amber-500 z-20">
                        <Image
                           src={avatar3}
                           alt="Lula Meyers"
                           className="rounded-full"
                        />
                     </Avatar>
                     <Avatar className="-ml-6 border-transparent z-10 group-hover:border-lime-400 transition duration-500">
                        <div className="size-full bg-neutral-700  rounded-full inline-flex items-center justify-center gap-1 relative">
                           <Image
                              src={avatar4}
                              alt=""
                              className="rounded-full absolute size-full opacity-0 group-hover:opacity-100  transition duration-500"></Image>
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
that react to user actions"
                  className="md:col-span-2 lg:col-span-1 group">
                  <div className="aspect-video flex items-center justify-center">
                     <p className="text-4xl font-extrabold text-white/20  transition duration-500 text-center group-hover:text-white/10">
                        We&apos;ve achived{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block relative">
                           <span>incredible</span>
                           <video
                              src="/assets/gif-incredible.mp4"
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition duration-500"></video>
                        </span>{" "}
                        growth this year
                     </p>
                  </div>
               </FeatureCard>

               <FeatureCard
                  title="Keyboard Quick Actions"
                  description="Powerful commands to help you
create desians more quickly"
                  className="md:col-span-2 md:col-start-2 lg:col-span-1 lg-col-start-auto group">
                  <div className="aspect-video flex items-center justify-center gap-4">
                     <Key className="w-28 outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500">
                        shift
                     </Key>
                     <Key className="outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-150">
                        alt
                     </Key>
                     <Key className="outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 delay-300">
                        C
                     </Key>
                  </div>
               </FeatureCard>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
               {features.map((feature, index) => (
                  <div
                     key={index}
                     className="bg-neutral-950 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group">
                     <span className="bg-lime-400 inline-flex items-center justify-center size-5 rounded-full  text-neutral-950 text-xl group-hover:rotate-45 transition duration-500">
                        &#10038;
                     </span>
                     <span className="font-medium md:text-lg">{feature}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
