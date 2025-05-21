import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react"
import Image from "next/image";
import React from "react"
import avatarAshwinImage from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatarFlorenceImage from "@/assets/images/avatar-florence-shaw.jpg"
import avatarLulaImage from "@/assets/images/avatar-lula-meyers.jpg"
import avatarOwenImage from "@/assets/images/avatar-owen-garcia.jpg"

export default function Features() {
   return (
      <section className="py-24">
         <div className="container mx-auto">
            <p className="font-medium flex justify-center items-center gap-2 mx-auto text-lime-400 text-xs border border-lime-400 rounded-full px-4 py-1 w-fit ">
               <Star
                  fill="currentColor"
                  size={12}
               />
               FEATURES
            </p>
            <h1 className="text-3xl md:text-4xl  xl:text-5xl font-medium text-center mt-6 mx-auto max-w-xl">
               Where power meets <span className="text-lime-400">simplicity</span>
            </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Card className="bg-neutral-800 border-neutral-600 text-white">
               <CardContent>
                  <div className="flex">
                     <Image src={avatarAshwinImage} alt="img" width={50} height={50}/>
                  </div>
               </CardContent>
            </Card>
          </div>
         </div>
      </section>
   )
}
