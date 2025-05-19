import { Button } from "@/components/ui/button"
import React from "react"

export default function Hero() {
   return (
      <section>
         <div className="container">
            <div>$7.5M seed round raised</div>
            <h1>Impactful design, created effortlessly </h1>
            <p>
               Design tools shouldn&apos;t slow you down. Layers powerful features with an intuitive interface that in
               your creative flow
            </p>
            <form action="">
               <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent"
               />
               <Button type="submit">Sign Up</Button>
            </form>
         </div>
      </section>
   )
}
