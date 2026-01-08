import os
from typing import Optional
from openai import OpenAI


client = OpenAI(
    api_key=os.getenv("XAI_API_KEY"),
    base_url="https://api.x.ai/v1"
)

def query_ai(prompt: str) -> Optional[str]:
    try:
        response = client.chat.completions.create(
            model="grok-2",  # or "grok-2-mini"
            messages=[
                {"role": "user", "content": prompt}
            ],
            temperature=0.7
        )

        return response.choices[0].message.content

    except Exception as e:
        print("Grok API error:", e)
        return None
