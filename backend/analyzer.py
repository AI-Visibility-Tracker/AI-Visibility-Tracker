from typing import List, Dict, Any

def analyze_response(response: str, brand: str, competitors: List[str]) -> Dict[str, Any]:
    response_lower = response.lower()

    brand_lower = brand.lower()
    brand_mentioned = brand_lower in response_lower
    position = response_lower.find(brand_lower) if brand_mentioned else None

    competitor_mentions = {}
    for competitor in competitors:
        competitor_mentions[competitor] = competitor.lower() in response_lower

    return {
        "brand_mentioned": brand_mentioned,
        "position": position,
        "competitors": competitor_mentions
    }
