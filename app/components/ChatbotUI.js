"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Sparkles, Mail, GraduationCap } from "lucide-react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function ChatbotUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setError("");
    const userMsg = { id: crypto.randomUUID(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const aiMsg = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.text ?? "(no response)",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setError(String(err.message || err));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="text-center mb-4" style={{ height: '150px' }}>
          <TypeAnimation
            sequence={[
              // Start with your name
              "Hi, I'm Trisha 👋",
              1500, // Wait 1.5 seconds
            ]}
            wrapper="h1"
            speed={40}
            className="font-bold leading-tight break-words text-[clamp(2rem,6vw,3.75rem)]"
            cursor={false} // Hide cursor after typing
          />
          <TypeAnimation
            sequence={[
              1000, // Wait 2 seconds before starting this one
              'A Software Engineer - Specializing in AI & Machine Learning',
            ]}
            wrapper="p"
            speed={60}
            className="mt-3 mb-0 text-gray-500 leading-snug break-words text-[clamp(1rem,3.2vw,1.25rem)]"
          />
        </div>


        <form onSubmit={onSubmit} className="w-full">
          {/* Message area */}
          <div className="max-h-[45vh] overflow-y-auto mb-4 p-3 border rounded-lg flex flex-col gap-2">
            {messages.length ? (
              messages.map((m) => (
                <div
                  key={m.id}
                  className={`whitespace-pre-wrap py-2 px-4 rounded-lg text-6xl] ${m.role === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-200 text-gray-800 self-start"
                    }`}
                >
                  <strong>{m.role === "user" ? "You: " : "AI: "}</strong>
                  {m.content}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 p-8">
                Want to say &quot;Hello!&quot; 😋?
              </div>
            )}
            {!!error && (
              <div className="text-sm text-red-600 text-center">{error}</div>
            )}
          </div>

          {/* Input row */}
          <div className="relative">
            {/* IMPORTANT: no name="message" */}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask me anything..."
              className="w-full rounded-full border border-neutral-200 bg-white/70 py-4 pl-5 pr-12 text-[15px] shadow-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-indigo-100"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full p-2.5 shadow-sm transition bg-blue-500 text-white disabled:opacity-60"
              aria-label="Submit"
            >
              <ArrowRight className="h-5 w-6" />
            </button>
          </div>
        </form>

        {/* Nav */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link href="/projects" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <Boxes className="h-5 w-5" /> Projects
          </Link>
          <Link href="/skills" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <Sparkles className="h-5 w-5" /> Skills
          </Link>
          <Link href="https://thoophoms.com/wp-content/uploads/2025/09/Resume-Thoop-hom-Supannopaj-Software-Developer.pdf" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <GraduationCap className="h-5 w-5" /> Resume
          </Link>
          <Link href="mailto:thoophom.su@gmail.com" className="inline-flex items-center gap-2 bg-gray-100 rounded-3xl border border-neutral-200 px-5 py-4 text-sm font-medium hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5" /> Contact
          </Link>
        </div>
      </div>
    </div>
  );
}