# 🎨 AI Visibility Tracker — Backend

🚀 **FastAPI-powered backend** for analyzing brand visibility in AI model recommendations.

## 📌 Overview

This backend handles AI inference, brand mention analysis, and visibility metrics calculation. It processes brand inputs, queries LLMs via structured prompts, and returns comprehensive analytics for the frontend dashboard.

## 🎯 Key Responsibilities

- Generates prompt variations for AI evaluation
- Integrates with Perplexity/OpenAI APIs for real-time responses
- Detects brand mentions and calculates ranking/position
- Computes metrics like citation share and total mentions

## ✨ Features

- **Modular design**: prompts, AI client, analyzer, metrics
- **Real-time LLM evaluation** (no caching/mock data)
- **Structured JSON responses** for frontend consumption
- **Error handling** and loading states support

## 🏗️ Tech Stack

FastAPI (ASGI framework)
Python 3.10+
Pydantic (data validation/models)
LLM clients: Perplexity API / OpenAI-compatible
Dependencies: uvicorn, httpx, python-dotenv

￼
text

## 📂 Project Structure
```
backend/
├── main.py # FastAPI app + routes
├── ai_client.py # LLM API integration
├── analyzer.py # Brand detection logic
├── metrics.py # Visibility calculations
├── prompts.py # Prompt templates
├── models.py # Pydantic schemas
├── requirements.txt # Dependencies
└── .env # API keys
```
￼
text

## 🧪 API Endpoints

### `POST /analyze`

**Analyzes brand visibility across prompts.**

**Request:**
```json
{
  "brand": "WriteSonic"
}
Response:

￼
json
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
```

## 🚀 Setup Instructions
Navigate to backend directory:

```￼
bash
cd backend
Create virtual environment:

￼
bash
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows
Install dependencies:

￼
bash
pip install -r requirements.txt
Create .env file:

￼
text
PERPLEXITY_API_KEY=your_api_key_here
Or OPENAI_API_KEY=your_key
Run server:

￼
bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
Backend available at http://127.0.0.1:8000
```
## 📋 requirements.txt
```￼
text
fastapi==0.104.1
uvicorn[standard]==0.24.0
pydantic==2.5.0
httpx==0.25.2
python-dotenv==1.0.0
```
## 🛠️ Development Notes

- Prompts defined in prompts.py for easy customization
- Analyzer uses regex + heuristics for robust mention detection
- Metrics: Citation share = (mentions / total_prompts) * 100
- Rate limiting recommended for production LLM calls
- CORS enabled for frontend integration

## 🔮 Future Enhancements

- Multi-model support (GPT, Claude, etc.)
- Caching layer (Redis)
- Async batch processing
- Database for historical trends

## 👥 Credits
Developed by Abhay Kumar Singh (Backend)
Part of parallel frontend-backend MVP workflow.

## 📄 License
Educational and demonstration purposes only.
