import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.GEMINI_API_KEY;

export const gemini = new GoogleGenAI({
  apiKey: apiKey || 'dummy-key-to-prevent-crash',
});
