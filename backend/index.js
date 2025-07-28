import "dotenv/config";
import express from "express";
import { GoogleGenAI, Modality } from "@google/genai";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/api/v1/images/generate", async (req, res) => {
  // 1. Get the prompt string from the request body
  const { prompt } = req.body; 

  // Make sure a prompt was provided
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  const ai = new GoogleGenAI({});

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      // 2. Use the 'prompt' variable here
      contents: prompt, 
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64ImageData = part.inlineData.data;
        const dataUrl = `data:image/png;base64,${base64ImageData}`;
        // Send the response and exit the function
        return res.json({ imageUrl: dataUrl });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate image." });
  }
});

app.listen("8080", () => {
  console.log("App is Listening to Port 8080");
});
