import Features from "@/sections/Features"
import Hero from "@/sections/Hero"
import Integrations from "@/sections/Integrations";
import Introducing from "@/sections/Introducing"
import Navbar from "@/sections/Navbar"

export default function Home() {
   return (
      <div className="">
         <Navbar />
         <Hero />
         <Introducing />
         <Features />
         <Integrations />
      </div>
   )
}
