import CallToAction from "@/sections/CallToAction"
import Faqs from "@/sections/Faqs"
import Features from "@/sections/Features"
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero"
import Integrations from "@/sections/Integrations"
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
         <Faqs />
         <CallToAction />
         <Footer />
      </div>
   )
}
