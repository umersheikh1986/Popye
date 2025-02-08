"use client";
import React from "react";

function Forth() {
  return (
    <div id="Tokenomics" className="grid p-20 bg-[#95a381] text-center place-items-center font-custom tracking-widest">
      <div className="lg:text-7xl tracking-wide font-popeye text-white sm:text-base"
                  style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }} 
      >TOKENOMICS</div>
      <div className=" grid grid-rows-1 area place-content-center my-10 items-center">
        {/* Creat wallet */}
        <div className="m-4  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div className="md:flex">
            <div className="p-8 md:flex-1">
              <p className="uppercase tracking-wider text-center text-4xl text-black font-semibold font-custom2"
                  style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }} 
              >
                Token Supply
              </p>
              <p className="block mt-1 text-2xl leading-tight text-center font-extrabold text-[#7ab534] "
                
              >
                2,000,000,000
              </p>
              <div className="text-start">
                <p className="block mt-1 text-xl leading-tight font-extrabold text-black">Basic Token Details:
                </p>
             <div className="flex text-black gap-2">
              <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
              <p><span className="font-bold">Token Name:</span> Popeye The People Coin</p>
             </div>
             <div className="flex text-black gap-2">
              <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
              <p><span className="font-bold">Symbol:</span> $POPEYE</p>
             </div>
             <div className="flex text-black gap-2">
              <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
              <p><span className="font-bold">Blockchain:</span> Solana (Fast & cheap) OR Ethereum</p>
             </div>
             <p className="text-black">(For higher visibility)</p>
             <div className="flex text-black gap-2">
              <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
              <p><span className="font-bold">Total Supply:</span> 1,000,000,000 $POPEYE</p>
             </div>
             <div className="flex text-black gap-2">
              <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
              <p><span className="font-bold">Smart Contract:</span> Mintable on Solana (Rust), Ethereum (Solidity), or BSC (BEP-20)</p>
             </div>
             </div>
             <p className="uppercase mt-4 tracking-wider text-center text-4xl text-black font-semibold font-custom2"
                  style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }} 
              >
                Token Distribution
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4 font-extrabold">
                  <div className="bg-[#7ab534] rounded-lg p-8">
                  <a>Public Sale</a>
                      <p>40%</p>
                      <p className="text-sm">Open for investors</p>
                  </div>
                  <div className="bg-[#7ab534] rounded-lg p-8">
                      <a>Staking Rewards</a>
                      <p>20%</p>
                      <p className="text-sm">Passive income for holders</p>
                  </div>
                  <div className="bg-[#7ab534] rounded-lg p-8">
                      <a>Community Fund</a>
                      <p>15%</p>
                      <p className="text-sm">Giveaways, airdrops, and promotions</p>
                  </div>
                  <div className="bg-[#7ab534] rounded-lg p-8">
                      <a>Development</a>
                      <p>10%</p>
                      <p className="text-sm">Team and growth</p>
                  </div>
                  <div className="bg-[#7ab534] rounded-lg p-8">
                      <a>Liquidity Pool</a>
                      <p>10%</p>
                      <p className="text-sm">Ensures smooth trading</p>
                  </div>
                  <div className="bg-[#7ab534] rounded-lg p-8">
                      <a>Charity Fund</a>
                      <p>5%</p>
                      <p className="text-sm">Donated to causes promoting financial education</p>
                  </div>
              </div>
              <p className="mt-10 p-4 text-center font-sans border-4 text bg-[#7ab534] text-white rounded-tr-[40px] rounded-bl-[40px] text-black">
                No Taxes 
              </p>
            </div>
            <div className="md:flex-1 md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-full"
                src="https://live.staticflickr.com/7341/12246068953_e19365178b_b.jpg"
              />
            </div>
          </div>
        </div>

        {/* Get Some USDT */}
      </div>
    </div>
  );
}

export default Forth;
