import os
from openai import OpenAI
from dotenv import load_dotenv
from typing import Optional

load_dotenv()

client = OpenAI(
    api_key=os.getenv("PERPLEXITY_API_KEY"),
    base_url="https://api.perplexity.ai"
)

def query_ai(prompt: str) -> Optional[str]:
    response = client.chat.completions.create(
        model="sonar-pro",  # or "sonar-pro", "llama-3.1-sonar-small-128k-online"
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7
    )

    return response.choices[0].message.content