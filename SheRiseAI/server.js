import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req,res)=>{
  res.send("SheRise AI Backend Running");
});

app.post("/chat", async (req,res)=>{
  try{

    const { message } = req.body;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You help women entrepreneurs with business ideas."},
        { role: "user", content: message }
      ]
    });

    res.json({
      reply: response.choices[0].message.content
    });

  }catch(error){
    console.log(error);
    res.json({reply:"Server error"});
  }
});

app.listen(PORT, ()=>{
  console.log("Server running on http://localhost:5000");
});