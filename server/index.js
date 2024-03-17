import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});

app.post("/nindi", async (req, res) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // const chat = model.startChat({
  //   history: req.body.history,
  // });

  const prompt = req.body.message;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log(text);
  res.json(text);
});
