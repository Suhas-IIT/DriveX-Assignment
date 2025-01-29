from fastapi import FastAPI, UploadFile, File, Depends
from fastapi.middleware.cors import CORSMiddleware
from routes import router
import uvicorn

app = FastAPI(title="Document Q&A App")

# CORS (Modify origins if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routes
app.include_router(router)

@app.get("/")
def home():
    return {"message": "Welcome to the Document Q&A API"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
