import openai
import os
from dotenv import load_dotenv

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

def ask_question(question):
    response = openai.ChatCompletion.create(
        model="gpt-4-turbo",
        messages=[{"role": "system", "content": "You are an AI that answers questions based on document data."},
                  {"role": "user", "content": question}]
    )
    return response["choices"][0]["message"]["content"]
