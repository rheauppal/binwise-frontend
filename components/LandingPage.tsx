// import { useState, useEffect } from "react";
// import Link from "next/link";

// const facts = [
//     "91% of plastic is never recycled.",
//     "A plastic bottle takes 450 years to decompose.",
//     "Every minute, one garbage truck of plastic is dumped into the ocean.",
//     "Recycling one aluminum can saves enough energy to run a TV for three hours.",
// ];

// const LandingPage = () => {
//     const [currentFact, setCurrentFact] = useState("");
//     const [factIndex, setFactIndex] = useState(0);
//     const [charIndex, setCharIndex] = useState(0);

//     // Typewriter effect
//     useEffect(() => {
//         if (charIndex < facts[factIndex].length) {
//             setTimeout(() => {
//                 setCurrentFact((prev) => prev + facts[factIndex][charIndex]);
//                 setCharIndex(charIndex + 1);
//             }, 50);
//         } else {
//             setTimeout(() => {
//                 setCurrentFact("");
//                 setCharIndex(0);
//                 setFactIndex((prev) => (prev + 1) % facts.length);
//             }, 3000);
//         }
//     }, [charIndex]);

//     return (
//         <div
//             className="relative w-screen h-screen min-h-screen bg-cover bg-center flex items-center justify-center"
//             style={{ backgroundImage: "url('/nature1.jpg')" }} // Replace with your image name
//         >
//             {/* Grey Mask Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//             {/* Centered Content */}
//             <div className="relative flex flex-col items-center justify-center text-center px-6">
//                 <h1 className="text-3xl md:text-5xl text-white font-mono mb-6 max-w-3xl">{currentFact}</h1>
//                 <Link href="/scanner">
//                     <button className="bg-white text-blue-800 font-bold text-xl md:text-2xl px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
//                         Start Scanning
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default LandingPage;
