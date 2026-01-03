from typing import TypedDict, List

class Result(TypedDict):
    brand_mentioned: bool

def calculate_citation_share(results: List[Result]) -> float:
    if not results:
        return 0.0

    mentions = sum(1 for r in results if r["brand_mentioned"])
    return round((mentions / len(results)) * 100, 2)
