// import Navbar from "../components/Navbar";
// import Link from "next/link";
// // export default function Home() {
// //   return (
// //     <div className="bg-red-500 text-white p-10 text-center">
// //       TailwindCSS is working! ✅
// //     </div>
// //   );
// // }

// export default function Home() {
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <Navbar />

//             {/* Hero Section (Large Full-Screen Header) */}
//             <header className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-green-600 to-blue-500 text-white">
//                 <h1 className="text-6xl font-extrabold drop-shadow-md">BinWise: Smart Waste Classification</h1>
//                 <p className="mt-6 text-xl max-w-2xl leading-relaxed">
//                     No more guessing! Scan an image or type an item name to instantly classify your waste and choose the right bin.
//                 </p>
//                 <Link href="/scanner">
//                     <button className="mt-8 px-8 py-4 bg-white text-green-600 text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
//                         🚀 Start Scanning
//                     </button>
//                 </Link>
//             </header>

//             {/* Section 1: Why Recycling Matters */}
//             <section className="py-20 bg-green-700 text-white text-center">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-4xl font-bold">♻️ Why Recycling Matters</h2>
//                     <p className="mt-4 text-2xl font-light">
//                         "Plastic waste takes up to <strong>500 years</strong> to break down, and 91% of plastic is never recycled."
//                     </p>
//                 </div>
//             </section>

//             {/* Section 2: How It Works (Step-by-Step Visual Format) */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-6xl mx-auto text-center">
//                     <h2 className="text-4xl font-bold text-gray-800">📌 How It Works</h2>
//                     <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">

//                         {/* Step 1 */}
//                         <div className="relative bg-blue-100 p-8 rounded-lg shadow-lg w-80 text-center">
//                             <h3 className="text-xl font-semibold text-blue-700">📸 Scan an Image</h3>
//                             <p className="text-gray-700 mt-2">Use your camera to scan waste and let AI classify it.</p>
//                             <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 md:block hidden">
//                                 ➡️
//                             </div>
//                         </div>

//                         {/* Step 2 */}
//                         <div className="relative bg-green-100 p-8 rounded-lg shadow-lg w-80 text-center">
//                             <h3 className="text-xl font-semibold text-green-700">🔍 Search for an Item</h3>
//                             <p className="text-gray-700 mt-2">Type an item name to find out which bin to use.</p>
//                             <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 md:block hidden">
//                                 ➡️
//                             </div>
//                         </div>

//                         {/* Step 3 */}
//                         <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-80 text-center">
//                             <h3 className="text-xl font-semibold text-gray-700">🗑️ Get an Instant Answer</h3>
//                             <p className="text-gray-700 mt-2">We’ll tell you the best dustbin for your waste.</p>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* Section 3: Start Making a Difference */}
//             <section className="py-20 bg-gradient-to-br from-blue-100 via-green-100 to-gray-100 text-center">
//                 <div className="max-w-5xl mx-auto">
//                     <h2 className="text-4xl font-bold text-gray-800">💡 Start Making a Difference Today</h2>
//                     <p className="mt-4 text-xl text-gray-700">
//                         Join us in making recycling easier and more efficient.
//                     </p>
//                     <Link href="/scanner">
//                         <button className="mt-6 px-8 py-4 bg-green-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
//                             🌍 Start Scanning Now
//                         </button>
//                     </Link>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="py-8 bg-gray-800 text-white text-center">
//                 <p className="text-lg">🌎 BinWise - Making Recycling Easy</p>
//                 <p className="text-sm mt-2 opacity-75">© 2025 BinWise. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// }
