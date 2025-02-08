"use client";
import React from "react";

export default function roadmap() {
  return (
    <div id="roadmap" className="grid bg-[#74bad4] place-items-center font-custom tracking-widest px-6 py-10 sm:px-8 lg:px-20">
      <div className="mt-10 md:text-4xl sm:text-2xl lg:text-7xl text-white"
               style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }} 
        >ROADMAP</div>
         <div className="mt-10 md:text-2xl sm:text-lg lg:text-4xl text-white"
               style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }} 
        >The People’s Journey</div>
         <div className="mt-10 text-base sm:leading-relaxed md:text-2xl text-white"
        >
        Popoyee ($POPO) is not just a meme coin—it’s a movement! Our roadmap is designed to ensure steady growth, strong community engagement, and innovative utilities that keep the Popoyee Army strong and unstoppable.
        </div>
      {/* <div className=" mx-10 mt-10 items-center place-items-center"> */}


        <div className="bg-[#74bad4] items-center  place-items-center p-2">
            {/* <h2 className="text-3xl text-white font-bold mb-12">Chronology</h2> */}
                  <img className="self-center	h-32" src="https://wallpapers.com/images/high/pirate-ship-tattoo-png-05042024-bimtwwj9x59c9chm.png" alt="ship"  />
            <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
                <div className="flex md:contents place-content-center flex-row-reverse">
                    <div
                        className="relative text-sm p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="font-semibold lg:text-md">Phase: 1 The Birth of Popoyee (Completed/In Progress)</h3>
                        <div className="flex gap-4 mt-2"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Concept Development – The People’s Coin is born!</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Website &Launch</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Smart Contract Development & Security Audit 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Social Media Launch (Twitter, Telegram, Discord) 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Initial Meme Contests & Giveaways</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Airdrop Campaign for Early Supporters 
                        </p></div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Coming soon...</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div className="relative text-sm p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="font-semibold lg:text-md">Phase: 2 Popoyee Goes Live! (Q1 2025)</h3>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6 mt-2">Token Launch on Solana (Raydium & Jupiter)</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Liquidity Pool Setup for smooth trading</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">First CEX Listings (MEXC, Gate.io, or KuCoin)
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Popoyee NFT Collection Release
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">First Big Meme Contest (Win $POPO + NFTs)</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Community AMA & Giveaways 
                        </p></div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                    </div>
                </div>

                <div className="flex md:contents flex-row-reverse">
                <div
                        className="relative text-sm p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="font-semibold lg:text-md">Phase 3: Building Utility & Engagement (Q2 2025)
                        </h3>
                        <div className="flex gap-4 mt-2"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">$POPO Staking Launch – Earn rewards for HODLing
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">PopoyeeDAO Activation – Community votes on decisions</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Play-to-Earn Mini-Games featuring Popoyee! 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Exclusive Partnerships & Collabs 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">First Major Crypto Influencer Campaign
                        </p></div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Coming soon...</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div className="relative text-sm p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="font-semibold lg:text-md">Phase 4: Expansion & Mass Adoption (Q3–Q4 2025)
                        </h3>
                        <div className="flex gap-4 mt-2"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">More CEX Listings (Target: Binance, OKX, Bybit)</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Popoyee Merch Store – Wear the meme!
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Charity & Donations Program – Giving back to communities 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Mainstream Marketing & Sponsorships 
                        </p></div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                    </div>
                </div>

                <div className="flex md:contents place-content-center flex-row-reverse">
                <div
                        className="relative text-sm p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                        <h3 className="font-semibold lg:text-md">Phase 5: The Future of Popoyee  (2026 & Beyond)
                        </h3>
                        <div className="flex gap-4 mt-2"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Global Expansion & Real-World Adoption
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Full-Scale Play-to-Earn Game Development</p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">DeFi Integrations – Lending & Yield Farming with $POPO 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Popoyee Marketplace – Buy & Sell with $POPO 
                        </p></div>
                        <div className="flex gap-4"><input type="checkbox" defaultChecked className="checkbox checkbox-info" />
                        <p className="leading-6">Popoyee on Cross-Chain Networks (Ethereum, BSC, Polygon)
                        </p></div>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Coming soon...</span>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                            </div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                </div>

                {/* <div className="flex md:contents">
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                        <div className="flex items-center justify-center w-6 h-full">
                            <div className="w-1 h-full bg-indigo-300"></div>
                        </div>
                        <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
                    </div>
                    <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                        <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
                        <p className="mt-2 leading-6">Description of the second event.</p>
                        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
                    </div>
                </div> */}

            </div>
        </div>
        <div className=" place-items-start">
            <h1 className="text-3xl text-black font-bold" style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }} >Join the Movement!
            </h1>
            <h1 className="mt-2 text-lg">Popoyee is more than a coin—it’s a revolution! Be part of the strongest, funniest, and most unstoppable meme community in crypto.</h1>
            <h1 className="mt-2  text-lg">HODL Strong. Meme Hard. Let’s Moon Together! 
            </h1>
        </div>

      {/* </div> */}
    </div>
  );
}

