**🗑️ BinWise Frontend**

Smart Waste Classification App


🌍 About
BinWise is a smart waste classification app that helps users identify the correct dustbin for different types of waste. The frontend is built using Next.js, React, and Tailwind CSS, allowing users to either scan an image or search for an item name to determine the correct waste category.

🔗 Live Demo: [Binwise website](https://binwise-frontend.vercel.app/)

🔗 Backend Repo: [BinWise Backend](https://github.com/rheauppal/binwise-backend/tree/main) 


🎯 Features

✅ Image Recognition – Upload an image, and our object recognition model (YOLOv8) will classify the waste with the help of a LLM.

✅ Text-Based Classification – Manually enter an item name to get instant waste classification using a LLM. 

✅ User-Friendly UI – A clean, intuitive design built with Tailwind CSS.

✅ Database Execution – Reduces repeated API calls by storing object names and their classifications.

✅ LLM Integration – Determines the best disposal method for each object.



🚀 Tech Stack

Frontend: Next.js, React, Tailwind CSS

Backend: Node.js, Express.js (API hosted on Render), Firebase

AI Model: YOLOv8 (for image-based waste detection), GPT 3.5 Turbo


🌐 Deployment

The project is deployed using Vercel.


⚡ API Endpoints

The frontend interacts with the BinWise Backend API hosted on Render.


Method	Endpoint	Description

POST	/api/classify	Classifies an item based on text input

POST	/api/image/detect	Classifies an item based on image upload

