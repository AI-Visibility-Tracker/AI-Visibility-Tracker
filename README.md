🚀 AI Visibility Tracker — MVP

Measure how often AI models recommend your brand.
Think of it as SEO analytics for Large Language Models (LLMs).

📌 Overview

AI Visibility Tracker is a full-stack MVP that analyzes how frequently and prominently a brand appears in AI-generated recommendations.

As AI assistants become a primary discovery channel, traditional SEO is no longer enough. This project helps founders and marketers understand their visibility inside AI responses.

🎯 Problem Statement

AI models increasingly influence:

Product discovery

SaaS recommendations

Tool comparisons

Buying decisions

However, there is no standard metric to measure how visible a brand is inside AI outputs.

💡 Solution

AI Visibility Tracker:

Sends structured prompts to AI models

Analyzes responses for brand mentions

Calculates visibility metrics

Displays insights in a clean dashboard

✨ Key Features

🔍 Brand visibility analysis

📊 Citation share calculation

📋 Prompt-wise visibility breakdown

⚡ Real-time AI inference

🎨 Polished dashboard UI

🧰 Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Backend

FastAPI

Python

AI inference via LLM APIs (Perplexity / OpenAI-compatible)

Modular architecture (prompts, analyzer, metrics)

🧠 Architecture Overview
Frontend (React)
   │
   │ HTTP POST /analyze
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
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md

🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/your-org/ai-visibility-tracker.git
cd ai-visibility-tracker

2️⃣ Backend Setup
cd backend
python -m venv .venv


Activate environment:

# Windows
.venv\Scripts\activate

# macOS / Linux
source .venv/bin/activate


Install dependencies:

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

AI research & experimentation

👨‍💻 Contribution

Frontend: Developed by Gorav

Backend: Developed by Abhay KUmar Singh

Frontend responsibilities included UI design, Tailwind styling, API integration, loading states, and overall dashboard UX.
Backend responsibilities is to design and implement the actual logic using Fast API.

🛣️ Future Enhancements

Competitor comparison

Expandable AI responses

Historical trend tracking

Export reports (CSV / PDF)

Cloud deployment (Vercel + Render)

📄 License

This project is intended for educational and demonstration purposes.

⭐ Final Note

AI Visibility Tracker explores a new frontier in analytics — measuring brand presence inside AI models.

As AI assistants replace traditional search, tools like this will define the future of visibility measurement.
