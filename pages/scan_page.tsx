// import { useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// const API_BASE_URL = "https://binwise-backend.onrender.com";
// export default function Scanner() {
//     const [textInput, setTextInput] = useState("");
//     const [image, setImage] = useState<File | null>(null);
//     const [classifications, setClassifications] = useState<{ item: string; category: string }[]>([]);
//     const [loading, setLoading] = useState(false);

//     // Define colors for waste categories
//     const categoryColors: Record<string, string> = {
//         "Recyclable": "bg-blue-500",
//         "Organic": "bg-green-500",
//         "Mixed Waste": "bg-yellow-500",
//         "Hazardous": "bg-red-500",
//         "Landfill": "bg-gray-500",
//         "E-Waste": "bg-orange-500",
//         "Medical Waste": "bg-white text-gray-800 border border-gray-400"
//     };

//     const handleTextSubmit = async () => {
//         if (!textInput) return;
//         setLoading(true);
//         setClassifications([]);

//         try {
//             console.log("🚀 Sending request:", textInput);
//             const response = await axios.post(`${API_BASE_URL}/api/classify`, { itemName: textInput });
//             console.log("✅ Response received:", response.data);

//             setClassifications([{ item: textInput, category: response.data.category }]);
//         } catch (error) {
//             console.error("❌ Error classifying item:", error);
//         }
//         setLoading(false);
//     };

//     const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (!file) return;

//         setImage(file);
//         setLoading(true);
//         setClassifications([]);

//         const formData = new FormData();
//         formData.append("image", file);

//         try {
//             console.log("📸 Uploading image...");
//             const response = await axios.post(`${API_BASE_URL}/api/image/detect`, formData);
//             console.log("✅ Image classified:", response.data);

//             // Extract detected objects and categories from response
//             const detectedObjects = response.data.detectedObjects || [];
//             const classificationsArray = detectedObjects.map((item: string) => ({
//                 item,
//                 category: response.data.classifications[item] || "Unknown"
//             }));

//             setClassifications(classificationsArray);
//         } catch (error) {
//             console.error("❌ Error classifying image:", error);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-6">
//             <Navbar />

//             {/* Main Card */}
//             <div className="bg-white shadow-lg rounded-lg p-12 w-full max-w-2xl text-center mt-16">
//                 <h2 className="text-3xl font-bold text-gray-800">Scan Your Object</h2>
//                 <p className="text-gray-600 mt-2">Use your device's camera to scan the object or input the details manually.</p>

//                 {/* Start Scanning Button */}
//                 <label className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md cursor-pointer transition duration-300 inline-block">
//                     📸 Start Scanning
//                     <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//                 </label>

//                 {/* OR Divider */}
//                 <div className="flex items-center my-6">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="mx-3 text-gray-500">OR</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                 </div>

//                 {/* Manual Input */}
//                 <div className="mt-3 flex items-center justify-center space-x-4">
//                     <input
//                         type="text"
//                         placeholder="Enter object details"
//                         value={textInput}
//                         onChange={(e) => setTextInput(e.target.value)}
//                         className="w-2/3 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
//                     />
//                     <button
//                         onClick={handleTextSubmit}
//                         disabled={loading}
//                         className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-md transition duration-300"
//                     >
//                         {loading ? "Classifying..." : "Submit"}
//                     </button>
//                 </div>

//                 {/* Loading Spinner */}
//                 {loading && (
//                     <div className="mt-6 flex justify-center">
//                         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-500"></div>
//                     </div>
//                 )}

//                 {/* Classification Results */}
//                 {classifications.length > 0 && (
//                     <div className="mt-6 p-6 rounded-lg shadow-md bg-gray-200 text-center text-lg font-semibold">
//                         <h3 className="text-xl text-gray-800">Detected Items:</h3>
//                         <div className="mt-3 space-y-4">
//                             {classifications.map((classification, index) => (
//                                 <div key={index} className={`p-4 rounded-lg shadow-md text-white ${categoryColors[classification.category] || "bg-gray-500"}`}>
//                                     <p className="text-lg">🗑️ <span className="font-bold">{classification.item}</span> → {classification.category}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {/* Footer */}
//             <footer className="w-full text-center text-gray-500 py-4 mt-12 text-sm">
//                 Need help? Visit our support page for more information.
//             </footer>
//         </div>
//     );
// }
