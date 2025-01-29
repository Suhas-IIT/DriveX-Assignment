import { useState } from "react";

export default function ChatBox({ documentContent }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question) return alert("Enter a question first!");

    const res = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Ask a Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Type your question..."
      />
      <button onClick={handleAsk} className="bg-green-500 text-white px-4 py-2 rounded">Ask</button>
      {answer && <p className="mt-4 p-2 bg-gray-100 rounded">{answer}</p>}
    </div>
  );
}
