from fastapi import APIRouter, UploadFile, File
from utils import process_excel
from model import ask_question

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    text_data = process_excel(file)
    return {"message": "File processed", "content": text_data}

@router.post("/ask")
async def ask(question: str):
    answer = ask_question(question)
    return {"question": question, "answer": answer}
