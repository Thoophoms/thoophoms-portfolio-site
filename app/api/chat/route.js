// app/api/chat/route.js
import { NextResponse } from "next/server";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

export const runtime = "nodejs"; // or 'edge' if you prefer

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  const { messages = [] } = await req.json();

  // Turn the chat history into a simple prompt
  const prompt = messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  const { text } = await generateText({
    model: groq("llama-3.1-8b-instant"),
    prompt,
  });

  return NextResponse.json({ text });
}