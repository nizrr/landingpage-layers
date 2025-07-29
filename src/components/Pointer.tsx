import React from "react"

export default function Pointer({ name, color }: { name: string; color?: string }) {
   const pointerColor = color || "bg-blue-500"
   return (
      <div className="relative">
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
            className="feather feather-mouse-pointer">
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
            <path d="M13 13l6 6"></path>
         </svg>
         <div className="absolute top-full left-full">
            <div
               className={`border bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-b-md rounded-r-md ${pointerColor}`}>
               {name}
            </div>
         </div>
      </div>
   )
}
