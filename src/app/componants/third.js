// "use client";
// // import gonzoToken from "../images/gonzoToken.png"
// export default function Third() {
//     return (
//       <div
//         id="sectionThree"
//         className="grid px-20 py-20 bg-[#249cfc] place-items-center font-custom tracking-widest ">
//         <div className=" mt-6  text-7xl text-center text-white tracking-wide"
//                style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }}
//               >How to Buy!
//         </div>
//         <div className=" grid grid-rows-4 area place-content-center my-10 items-center">
//           {/* Creat wallet */}
//           <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//             <div className="md:flex">
//               <div className="md:shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:h-full md:w-56"
//                   src="https://miro.medium.com/v2/resize:fit:555/1*FjSkfan-Kh3vrgtlW8UP_g.png"
//                 />
//               </div>
//               <div className="p-8">
//                 <div className="uppercase tracking-wider text-3xl text-black font-semibold font-custom2">
//                   Create Wallet
//                 </div>
//                 <a
//                   href="https://metamask.io/download/"
//                   className="block mt-1 text-lg tracking-wider font-extrabold leading-tight  text-red-600 hover:underline"
//                 >
//                   Click To Download with metamask
//                 </a>
//                 <p className="mt-2 font-sans text-black">
//                   With link given above Download metamask or your wallet of choice from the app store or
//                   google play store for free. Desktop users, download the google
//                   chrome extension by going to metamask.io.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Get Some ETH */}
//           <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//             <div className="md:flex">
//               <div className="md:shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:h-full md:w-56 bg-contain"
//                   src="https://img.freepik.com/premium-vector/abstract-business-template-blue-backdrop-cryptocurrency-symbol-business-network-sign-symbol_182604-1110.jpg"
//                 />
//               </div>
//               <div className="p-8">
//                 <div className="uppercase tracking-wider text-3xl text-black font-semibold font-custom2">
//                   Get Some ETH
//                 </div>
//                 <a
//                   href="#"
//                   className="block mt-1 text-lg leading-tight font-medium text-[#919ac9] hover:underline"
//                 >
//                   Have some Eth to pay gas fee
//                 </a>
//                 <p className="mt-2 font-sans text-black">
//                   You must have ETH & some Eth in your wallet to switch to
//                   $Gonzo. If you don’t have any ETH & ETH, you can buy directly
//                   on metamask, transfer from another wallet, or buy on another
//                   exchange and send it to your wallet.
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Go To Buy Page */}
//           <div className="m-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//             <div className="md:flex">
//               <div className="md:shrink-0">
//                 <img
//                   className="h-48 w-full object-cover md:h-full md:w-48"
//                   src="/BuyPage.png"
//                 />
//               </div>
//               <div className="p-8">
//                 <div className="uppercase tracking-wider text-3xl text-black font-semibold font-custom2">
//                   Swtich ETH to Gonzo
//                 </div>
//                 <a
//                   href="/t"
//                   className="block mt-1 text-lg leading-tight font-medium text-[#919ac9] hover:underline"
//                 >
//                   Incredible Buy with ETH in Fixed Rates
//                 </a>
//                 <p className="mt-2 font-sans text-black">
//                   Looking to take your team away on a retreat to enjoy awesome
//                   food and take in some sunshine? We have a list of places to do
//                   just that.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
"use client";
// import gonzoToken from "../images/gonzoToken.png"
export default function Third() {
    return (
      <div
        id="sectionThree"
        className="grid px-20 py-20 bg-[#e64f57] place-items-center font-custom tracking-widest ">
        <div className=" mt-6  text-7xl text-center text-white tracking-wide"
               style={{ fontFamily: "var(--font-popeye), Arial, sans-serif" }}
              >How to Buy!
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-16">
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="https://metamask.io/download/">
                    <img className="w-full h-60 object-cover" src="https://miro.medium.com/v2/resize:fit:555/1*FjSkfan-Kh3vrgtlW8UP_g.png" alt="Project 1" />
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between relative z-10">
                        <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Download metamask</h3>
                        <span className="text-sm font-bold text-black-500 group-hover:text-[#7ab534]">App development</span>
                    </div>
                </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="#">
                    <img className="w-full h-60 object-cover" src="https://img.freepik.com/premium-vector/abstract-business-template-blue-backdrop-cryptocurrency-symbol-business-network-sign-symbol_182604-1110.jpg" alt="Project 1" />
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between relative z-10">
                        <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Awesome Project 2</h3>
                        <span className="text-sm font-bold text-black-500 group-hover:text-[#7ab534]">Branding</span>
                    </div>
                </a>
            </div>
            <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/trade">
                    <img className="w-full h-60 object-cover" src="/BuyPage.png" alt="Project 1" />
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between relative z-10">
                        <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">Buy Popeye with Ether</h3>
                        <span className="text-sm font-bold text-black-500 group-hover:text-[#7ab534]">Prices</span>
                    </div>
                </a>
            </div>
           
        </div>
      </div>
    );
  }
  