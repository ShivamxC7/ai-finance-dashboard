import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";


function AICoach() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [comingSoonShown, setComingSoonShown] = useState(false);

  const {transactions} = useContext(TransactionContext);

  const chatEndRef = useRef(null);


const sendMessage = (text) => {
  if (!text.trim()) return;

  const userMessage = {
    id: Date.now(),
    sender: "user",
    text,
  };

  const aiMessage = {
  id: Date.now() + 1,
  sender: "ai",
  text: "🚧 This feature will be available soon. Stay tuned for the next update!",
};
  if (!comingSoonShown) {
    setMessages([userMessage, aiMessage]);
    setComingSoonShown(true);
  } else {
    setMessages((prev) => [...prev, userMessage, aiMessage]);
  }

  setQuestion("");
};


const handleSend = () => {
  sendMessage(question);
};

useEffect(() => {
  chatEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);

const categoryTotals = transactions
  .filter((transaction) => transaction.amount < 0)
  .reduce((acc, transaction) => {
    acc[transaction.category] =
      (acc[transaction.category] || 0) +
      Math.abs(transaction.amount);

    return acc;
  }, {});

const highestCategory = Object.entries(categoryTotals).sort(
  (a, b) => b[1] - a[1]
)[0];

const suggestions = [
  highestCategory
    ? `How much did I spend on ${highestCategory[0]}?`
    : "How much did I spend?",

  highestCategory
    ? `Why is ${highestCategory[0]} my biggest expense?`
    : "What's my biggest expense?",

  highestCategory
    ? `How can I reduce my ${highestCategory[0]} spending?`
    : "How can I save more money?",

  "How much have I saved so far?",
];

  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold">
        🤖 AI Finance Coach
      </h1>

      <p className="text-gray-500 mt-2">
        Ask anything about your finances.
      </p>

      <div className="bg-white rounded-xl shadow-md mt-8 h-[600px] flex flex-col">

        {/* Chat Area */}

        <div className="flex-1 overflow-y-auto p-6">

          {messages.length === 0 ? (
            <div className="text-center mt-20">

              <h2 className="text-2xl font-semibold">
                Welcome 👋
              </h2>

              <p className="text-gray-500 mt-3">
                I'm your personal AI Finance Coach.
              </p>

              <div className="mt-10 space-y-3 text-left max-w-lg mx-auto">
{suggestions.map((suggestion, index) => (
  <div
    key={index}
    onClick={() => sendMessage(suggestion)}
    className="bg-gray-100 rounded-lg p-3 cursor-pointer hover:bg-gray-200 transition"
  >
    💡 {suggestion}
  </div>
))}
              </div>

            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  <div className="whitespace-pre-line">
              {message.text}
                  </div>
                </div>
              </div>
            ))
          )}
<div ref={chatEndRef}></div>

        </div>

        {/* Input */}

        <div className="border-t p-4 flex gap-4">

          <input
            type="text"
            placeholder="Ask me anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-3"
            
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />

          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-6 rounded-lg cursor-pointer
            hover:bg-blue-800 transition"
          >
            Send
          </button>

        </div>

      </div>
    </main>
  );
}

export default AICoach;