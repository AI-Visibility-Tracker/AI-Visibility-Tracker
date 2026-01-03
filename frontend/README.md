🎨 AI Visibility Tracker — Frontend (MVP)

This directory contains the frontend application for the AI Visibility Tracker MVP.
It is responsible for collecting user input, calling the backend API, and presenting AI visibility insights through a clean, interactive dashboard.

📌 Overview

The frontend is a React + Tailwind CSS application that visualizes how often a brand appears in AI-generated recommendations.

It provides:

A modern dashboard UI

Real-time feedback during AI analysis

Clear visibility metrics

Prompt-wise result breakdown

The frontend was developed independently of the backend using a clean API contract and later integrated seamlessly.

✨ Key Features

🔤 Brand input form

⚡ Real-time analysis trigger

📊 AI visibility metrics (citation share, mentions)

📋 Prompt-wise result table

⏳ Loading skeletons for better UX

🎨 Responsive, clean UI with Tailwind CSS

🧰 Tech Stack

React (Vite)

Tailwind CSS

Axios for API communication

Modern component-based architecture

📂 Folder Structure
frontend/
│
├── src/
│   ├── components/
│   │   ├── BrandForm.jsx      # Brand input & analyze action
│   │   ├── Charts.jsx         # Visibility metrics display
│   │   └── ResultsTable.jsx   # Prompt-wise analysis table
│   │
│   ├── App.jsx                # Main dashboard layout
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind CSS entry
│
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json

🚀 Getting Started
1️⃣ Install Dependencies
npm install

2️⃣ Run Development Server
npm run dev


Frontend will run at:

http://localhost:5173

🔗 Backend Integration

The frontend communicates with the backend via:

POST /analyze


Example request:

{
  "brand": "Writesonic"
}


Expected response structure:

{
  "brand": "Writesonic",
  "total_prompts": 11,
  "citation_share": 63.64,
  "results": [...]
}


The frontend dynamically renders:

Citation share

Prompt count

Prompt-wise visibility results

🎯 UX & Performance Design

Since AI analysis can take several seconds:

Loading spinners and skeletons are shown immediately

Buttons are disabled during analysis

UI remains responsive throughout

This improves perceived performance and user experience.

🧠 Development Approach

Built using mock data first

Backend integration added later without UI changes

Clean separation of concerns

Scalable component structure

This mirrors real-world frontend engineering workflows.

🛣️ Future Enhancements

Competitor comparison view

Expandable AI response details

Export report (CSV / PDF)

Dark mode toggle

Deployment to Vercel

👨‍💻 Contribution

The frontend of this MVP was designed and developed by Gorav.

Responsibilities included:

Building the React dashboard architecture

Implementing Tailwind CSS for a clean, responsive UI

Designing user-friendly input and results views

Handling API integration with the backend

Improving perceived performance using loading states and skeletons

Ensuring production-ready structure and Git hygiene

This frontend was developed independently and later integrated with the backend using a clean API contract, reflecting real-world collaborative development practices.

📄 Notes

This frontend depends on the backend service being active

Environment variables and node_modules are intentionally excluded from Git

Frontend built for clarity, performance, and future scalability 🚀