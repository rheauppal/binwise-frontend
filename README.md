🗑️ BinWise Frontend
Smart Waste Classification App


🌍 About
BinWise is a smart waste classification app that helps users identify the correct dustbin for different types of waste. The frontend is built using Next.js, React, and Tailwind CSS, allowing users to either scan an image or search for an item name to determine the correct waste category.

🔗 Live Demo: [Binwise website](https://binwise-frontend.vercel.app/)

🔗 Backend Repo: [BinWise Backend](https://github.com/rheauppal/binwise-backend/tree/main) 

🎯 Features
✅ Image Recognition – Upload an image, and our AI model (YOLOv8) will classify the waste.
✅ Text-Based Classification – Manually enter an item name to get instant waste classification.
✅ User-Friendly UI – A clean, intuitive design built with Tailwind CSS.
✅ Real-Time API Integration – Communicates with the BinWise backend for classification.

🚀 Tech Stack
Frontend: Next.js, React, Tailwind CSS
Backend: Node.js, Express.js (API hosted on Render)
AI Model: YOLOv8 (for image-based waste detection)

🌐 Deployment
The project is deployed using Vercel.
⚡ API Endpoints
The frontend interacts with the BinWise Backend API hosted on Render.

Method	Endpoint	Description
POST	/api/classify	Classifies an item based on text input
POST	/api/image/detect	Classifies an item based on image upload
