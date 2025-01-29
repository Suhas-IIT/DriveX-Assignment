import UploadForm from "../components/UploadForm";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

export default function Home() {
  const [documentContent, setDocumentContent] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Document Q&A App</h1>
      <UploadForm setDocumentContent={setDocumentContent} />
      <ChatBox documentContent={documentContent} />
    </div>
  );
}
