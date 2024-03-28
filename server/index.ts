const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} = require("@google/generative-ai");

dotenv.config();

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});

app.get("/", (req, res) => {
  res.send({ message: "Hello from the server!" });
});

app.post("/aoba", async (req, res) => {
  try {
    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
      },
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
      safetySettings,
    });

    const chat = model.startChat({
      history: req.body.history,
    });

    const msg = req.body.message;

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();

    // console.log(text);
    res.json(text);
  } catch (error) {
    res.json("Please input a proper message 😉");
  }
});
