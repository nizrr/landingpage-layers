import IntegrationsColumn from "@/components/IntegrationsColumn"
import Tag from "@/components/Tag"
import React from "react"
import figmaIcon from "@/assets/images/figma-logo.svg"
import notionIcon from "@/assets/images/notion-logo.svg"
import slackIcon from "@/assets/images/slack-logo.svg"
import relumeIcon from "@/assets/images/relume-logo.svg"
import framerIcon from "@/assets/images/framer-logo.svg"
import githubIcon from "@/assets/images/github-logo.svg"

const integrations = [
   {
      name: "Figma",
      icon: figmaIcon,
      description: "Figma is a collaborative interface design tool.",
   },
   {
      name: "Notion",
      icon: notionIcon,
      description: "Notion is a collaborative interface design tool.",
   },
   {
      name: "Slack",
      icon: slackIcon,
      description: "Slack is a collaborative interface design tool.",
   },
   {
      name: "Relume",
      icon: relumeIcon,
      description: "Relume is a collaborative interface design tool.",
   },
   {
      name: "Framer",
      icon: framerIcon,
      description: "Framer is a collaborative interface design tool.",
   },
   {
      name: "Github",
      icon: githubIcon,
      description: "Github is a collaborative interface design tool.",
   },
]

export type IntegrationsType = typeof integrations
export default function Integrations() {
   return (
      <section className="py-24 overflow-hidden px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">
               <div>
                  <Tag className="justify-start mx-0">Integrations</Tag>
                  <h2 className="text-6xl lg:text-7xl font-medium mt-6">
                     Plays well with <span className="text-lime-400">others</span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/50 mt-6">
                     Layers seamlessly connects with your favorite tools, making it easy to plug
                     into any workflow and collaborate across platforms.
                  </p>
               </div>
               <div>
                  <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                     <IntegrationsColumn integrations={integrations} />
                     <IntegrationsColumn
                        integrations={integrations.slice().reverse()}
                        className="hidden md:flex"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
