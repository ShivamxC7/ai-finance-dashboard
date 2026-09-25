const { GoogleGenAI } = require("@google/genai");
const Transaction = require("../models/Transaction");

console.log("Gemini key loaded:", !!process.env.GEMINI_API_KEY);
console.log("Key length:", process.env.GEMINI_API_KEY?.length);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { question } = req.body;

    const transactions = await Transaction.find();

    const prompt = `
You are an AI Finance Coach.
Answer the user's question using their transaction data.
Keep your answer simple, useful and concise.
Never invent financial data.

Transaction data:
${JSON.stringify(transactions)}

User question:
${question}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    res.json({
      answer: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "AI request failed",
    });
  }
};