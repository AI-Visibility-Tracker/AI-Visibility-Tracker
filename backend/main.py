from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Any, Dict, List

from prompts import PROMPTS
from ai_client import query_ai
from analyzer import analyze_response
from metrics import calculate_citation_share

app = FastAPI(title="AI Visibility Tracker MVP")

# ✅ CORS — SIMPLE & CORRECT
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ai-visibility-tracker-9a0a.onrender.com"
    ],
    allow_credentials=False,   # 🔥 THIS IS THE FIX
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
def analyze_brand(payload: Dict[str, Any]) -> Dict[str, Any]:
    brand = payload.get("brand") or ""
    competitors: List[str] = payload.get("competitors", [])

    results: List[Any] = []

    for prompt in PROMPTS:
        response = query_ai(prompt) or ""
        analysis = analyze_response(response, brand, competitors)

        results.append({
            "prompt": prompt,
            "response": response,
            "brand_mentioned": analysis["brand_mentioned"],
            "position": analysis["position"],
            "competitors": analysis["competitors"]
        })

    citation_share = calculate_citation_share(results)

    return {
        "brand": brand,
        "total_prompts": len(PROMPTS),
        "citation_share": citation_share,
        "results": results
    }

@app.get("/")
def root():
    return {"message": "AI Visibility Tracker Backend is running"}
