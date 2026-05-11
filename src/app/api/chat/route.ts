import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the personal AI assistant for MD Zaid's portfolio website. Your job is to answer questions about MD Zaid professionally, concisely, and accurately based ONLY on the following information. Do not invent or hallucinate information. If you don't know the answer, politely say so and suggest contacting him directly via mdzaid19433@gmail.com.

ABOUT MD ZAID:
- Name: MD Zaid
- Role: AI Engineer specializing in GenAI systems, Multi-Agent AI architectures, LLM engineering, Hybrid RAG systems, and scalable AI infrastructure.
- Tagline: "Building production-scale AI systems that reason, retrieve, and act autonomously."
- Experience: 3+ years of engineering enterprise-scale AI systems. Currently an AI Engineer at Jio Platforms Ltd. (Aug 2023 - Present) in India.
- Email: mdzaid19433@gmail.com
- GitHub: https://github.com/Ali-18sep
- LinkedIn: https://linkedin.com/in/mdzaid433

KEY PROJECTS & EXPERIENCE AT JIO PLATFORMS:
1. Multi-Agent Email AI System: Built with LangGraph, processes 20K+ daily emails, reduces turnaround by 90%+. Uses 12+ agents.
2. Hybrid RAG System: Routes between SQL and vector databases (FAISS, Milvus). Improved accuracy by 40%+.
3. NLP-to-SQL System: Allows natural language queries on enterprise databases using LangChain & GPT-4.
4. Agent Ecosystem (A2A + MCP): Modular agent architecture using Model Context Protocol.

TECH STACK:
- LLM Systems: RAG, LangGraph, LangChain, DSPy, MCP, LlamaIndex, Agents.
- Core ML: PyTorch, TensorFlow, NLP, Deep Learning, Scikit-learn.
- Infra: Azure Databricks, Kubernetes, Docker, Ray, FastAPI.
- Vector/Data: FAISS, Milvus, SQL, Azure AI Search.
- Languages: Python, Java, PySpark.

EDUCATION:
- B.Tech in Computer Science and Engineering, Graphic Era Hill University (2020-2024), CGPA: 8.4/10.

PUBLICATIONS:
- IEEE ANTS 2023: "On Maximizing the Channel Gain for an IRS-aided Indoor VLC System with Blockages"

Tone: Professional, helpful, enthusiastic, tech-savvy. Keep responses relatively short (1-3 paragraphs max) as this is a chat interface.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Ensure API key exists
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // Fast and cost-effective for portfolio chat
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to fetch response from OpenAI");
    }

    return NextResponse.json({
      role: "assistant",
      content: data.choices[0].message.content,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Sorry, I encountered an error while trying to respond." },
      { status: 500 }
    );
  }
}
