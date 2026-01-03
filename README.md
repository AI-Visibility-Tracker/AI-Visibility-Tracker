🚀 AI Visibility Tracker — MVP

Measure how often AI models recommend your brand.
Think of it as SEO analytics for Large Language Models (LLMs).

📌 Overview

AI Visibility Tracker is a full-stack MVP that analyzes how frequently and prominently a brand appears in AI-generated recommendations across multiple prompts.

As AI assistants become a primary discovery channel, traditional SEO is no longer enough. This tool helps founders, marketers, and product teams understand their visibility inside AI responses — an emerging metric we call AI Visibility.

🎯 Problem Statement

AI models increasingly influence:

Product discovery

SaaS recommendations

Tool comparisons

Buying decisions

However, there is no clear way to measure how visible a brand is inside AI responses.

Key questions this project answers:

Is my brand mentioned by AI models?

How often does it appear across prompts?

How prominently is it ranked?

What is my AI citation share?

💡 Solution

AI Visibility Tracker:

Sends structured prompts to AI models

Analyzes responses for brand mentions

Calculates visibility metrics

Presents insights via a clean dashboard

This MVP provides actionable intelligence for the AI-first web.

✨ Key Features
🔍 Brand Analysis

Input any brand name

Analyze AI recommendations across multiple prompts

📊 AI Visibility Metrics

Total Prompts Analyzed

Brand Mentions

Citation Share (%)

📋 Prompt-wise Breakdown

Which prompts mention the brand

Whether the brand was recommended

Ranking / position inside AI output

⚡ Real-Time AI Evaluation

Live AI inference (no mock data)

Uses real LLM responses

🎨 Polished Dashboard UI

React + Tailwind CSS

Clean, responsive, demo-ready design

Loading skeletons for fast UX

🏗️ Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios (API communication)

Backend

FastAPI

Python

AI inference via LLM APIs (Perplexity / OpenAI-compatible)

Modular architecture (prompts, analyzer, metrics)

🧩 Architecture Overview
Frontend (React)
   │
   │ HTTP (POST /analyze)
   ▼
Backend (FastAPI)
   ├── Prompt Generator
   ├── AI Client
   ├── Brand Mention Analyzer
   ├── Metrics Calculator
   ▼
AI Model Response

📂 Project Structure
ai-visibility-tracker/
│
├── backend/
│   ├── main.py          # FastAPI entry point
│   ├── ai_client.py     # AI model integration
│   ├── analyzer.py      # Brand mention detection
│   ├── metrics.py       # Visibility metrics
│   ├── prompts.py       # Prompt templates
│   ├── requirements.txt
│   └── .env             # API keys
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BrandForm.jsx
│   │   │   ├── Charts.jsx
│   │   │   └── ResultsTable.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── tailwind.config.js
│
└── README.md

🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/your-org/ai-visibility-tracker.git
cd ai-visibility-tracker

2️⃣ Backend Setup
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt


Create .env file:

PERPLEXITY_API_KEY=your_api_key_here


Run backend:

uvicorn main:app --reload


Backend runs at:

http://127.0.0.1:8000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🧪 API Reference
POST /analyze

Request

{
  "brand": "WriteSonic"
}


Response

{
  "brand": "WriteSonic",
  "total_prompts": 11,
  "citation_share": 63.64,
  "results": [
    {
      "prompt": "Best AI writing tools",
      "brand_mentioned": true,
      "position": 10
    }
  ]
}

🎯 Use Cases

SaaS founders tracking AI discovery

Marketing teams optimizing AI mentions

SEO teams preparing for AI-first search

Product visibility benchmarking

AI research & experimentation

🛣️ Future Enhancements

Competitor comparison

AI response expansion modal

Historical trend tracking

Export reports (CSV / PDF)

Multi-model analysis

Deployment to cloud (Vercel + Render)

👥 Team Collaboration - Developed by Gorav Gumber(Frontend) and Abhay Kumar Singh(Backend)

This MVP was built using a parallel development workflow:

Frontend and backend developed independently

Integrated via a clean API contract

Demonstrates real-world engineering practices

📄 License

This project is licensed for educational and demonstration purposes.

⭐ Final Note

AI Visibility Tracker explores a new frontier in analytics — measuring brand presence inside AI models.

As AI assistants become the new search engines, tools like this will define the next generation of visibility metrics.

Built with curiosity, experimentation, and future-first thinking 🚀