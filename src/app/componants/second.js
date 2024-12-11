"use client";
import  React from "react"
export default function Second () {
    return (
      <div id="sectionTwo" className="w-full sm:w-screen bg-[#74bad4] max-w-7xl px-20 py-20 mx-auto sm:px-8  ">
          <blockquote className="relative grid items-center bg-white shadow-xl md:grid-cols-3 rounded-xl">     
              <img className="hidden object-cover w-full h-full rounded-l-xl md:block " style={{clipPath :" polygon(0 0%, 100% 0%, 86% 100%, 0% 100%"}} src="https://i1.sndcdn.com/artworks-000380725332-k4zs7j-t500x500.jpg" />
              <article className="relative p-6 md:p-8 md:col-span-2">
                  <svg className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block" width="256"
                      height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                          stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                  <div className="space-y-8">
                      <h1 className=" text-[#0079ac] bg-clip-text font-popeye text-3xl font-extrabold font-custom tracking-wider sm:text-5xl"
                            style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }}
                      >
                          ABOUT POPEYE
                      </h1>
                        <p className="text-base sm:leading-relaxed md:text-2xl text-black">
                            Popeye is coming off to the world! that how to work for people by they people to the people no one stand the chance on our popeye the people coin. Popeye Token is here at last and headed to the top of the ranks. Presale coming soon with the token that has “0” taxes, the contract is renounced with all the opportunity that you can imagine. The power of Gonzo will be felt and shown through its upcoming success.
                        </p>
                      <footer className="flex items-center space-x-4 md:space-x-0">
                          <img className="w-12 h-12 rounded-full md:hidden" src="https://i1.sndcdn.com/artworks-000380725332-k4zs7j-t500x500.jpg" />
                      </footer>
                  </div>
              </article>
          </blockquote>
      </div>
    )
  }
  