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
                  <div className="space-y-4">
                      <h1 className=" text-[#0079ac] bg-clip-text font-popeye text-3xl font-extrabold font-custom tracking-wider sm:text-5xl"
                            style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }}
                      >
                          ABOUT POPEYE
                      </h1>
                        <p className="text-base sm:leading-relaxed md:text-lg text-black">
                        Popoyee ($POPO) is more than just a meme coin—it’s a movement fueled by resilience, humor, and unity. Inspired by the legendary Popoyee, a symbol of strength and determination, $POPO is built for the people, by the people.
                        </p>
                        <p className="text-base sm:leading-relaxed md:text-lg text-black">
                        We believe that crypto should be fun, inclusive, and rewarding, not just for whales but for everyone. Whether you're a seasoned trader or a meme enthusiast, Popoyee welcomes you to the strongest, funniest, and most determined community in crypto—where we HODL, laugh, and grow together.

                        </p>
                        <h1 className=" text-[#0079ac] bg-clip-text font-popeye text-xl font-extrabold font-custom tracking-wider sm:text-3xl"
                            style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }}
                      >
                          Why Popoyee?
                      </h1>
                      <div>
                      <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="text-base sm:leading-relaxed md:text-lg text-black">Community-Driven – No central authority, just pure meme power.</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="text-base sm:leading-relaxed md:text-lg text-black">Fun & Engaging – Powered by humor, creativity, and viral memes.
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="text-base sm:leading-relaxed md:text-lg text-black">Strong Utility – Staking, NFTs, and real-world partnerships in the pipeline.
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="text-base sm:leading-relaxed md:text-lg text-black">The People’s Coin – Fair launch, transparent tokenomics, and YOU at the center of everything.
                        </p></div>
                        </div>
                      <footer className="flex items-center space-x-4 md:space-x-0">
                          <img className="w-12 h-12 rounded-full md:hidden" src="https://i1.sndcdn.com/artworks-000380725332-k4zs7j-t500x500.jpg" />
                      </footer>
                  </div>
              </article>
          </blockquote>
      </div>
    )
  }
  