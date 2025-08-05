"use client"
import Tag from "@/components/Tag"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
const faqs = [
   {
      question: "How is Layers different from other design tools?",
      answer:
         "Layers is a design tool that focuses on collaboration and real-time feedback. It allows you to work together in real-time, making it easier to create and iterate on designs.",
   },
   {
      question: "What are the benefits of using Layers?",
      answer:
         "Layers is a design tool that focuses on collaboration and real-time feedback. It allows you to work together in real-time, making it easier to create and iterate on designs.",
   },
   {
      question: "How do I get started with Layers?",
      answer:
         "Layers is a design tool that focuses on collaboration and real-time feedback. It allows you to work together in real-time, making it easier to create and iterate on designs.",
   },
   {
      question: "Is Layers free to use?",
      answer:
         "Layers is a design tool that focuses on collaboration and real-time feedback. It allows you to work together in real-time, making it easier to create and iterate on designs.",
   },
   {
      question: "Can I use Layers on my mobile device?",
      answer:
         "Layers is a design tool that focuses on collaboration and real-time feedback. It allows you to work together in real-time, making it easier to create and iterate on designs.",
   },
]
export default function Faqs() {
   const [selectedIndex, setSelectedIndex] = useState(0)
   return (
      <section className="py-24 px-4">
         <div className="container mx-auto max-w-xl">
            <Tag>FAQs</Tag>
            <h2 className="text-6xl lg:text-7xl font-medium mt-6 text-center">
               Questions? We&apos;ve got <span className="text-lime-400">answers</span>{" "}
            </h2>
            <div className="flex flex-col mt-12 gap-6">
               {faqs.map((faq, index) => (
                  <div
                     key={faq.question}
                     className=" bg-neutral-900 p-6 rounded-2xl border border-white/10 cursor-pointer transition duration-500 ease-in-out"
                     onClick={() => setSelectedIndex(index)}>
                     <div className="flex justify-between items-center">
                        <h3 className="font-medium">{faq.question}</h3>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className={cn(
                              "feather feather-plus text-lime-400 transition duration-500 ease-in-out",
                              index === selectedIndex && "rotate-45"
                           )}>
                           <line
                              x1="12"
                              y1="5"
                              x2="12"
                              y2="19"></line>
                           <line
                              x1="5"
                              y1="12"
                              x2="19"
                              y2="12"></line>
                        </svg>
                     </div>
                     <AnimatePresence>
                        {index === selectedIndex && (
                           <motion.div
                              initial={{ height: 0, marginTop: 0 }}
                              animate={{ height: "auto", marginTop: 24 }}
                              exit={{ height: 0, marginTop: 0 }}
                              className={cn("overflow-hidden")}>
                              <p className=" text-white/50 text-justify">{faq.answer}</p>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
