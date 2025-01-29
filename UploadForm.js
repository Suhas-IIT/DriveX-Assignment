import { useState } from "react";

export default function UploadForm({ setDocumentContent }) {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setDocumentContent(data.content);
    alert("File uploaded successfully!");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
    </div>
  );
}
