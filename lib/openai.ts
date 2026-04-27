import OpenAI from "openai";

export function createOpenAiClient() {
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}
