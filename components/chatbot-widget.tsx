"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, ChevronDown } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const greetingMessage: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Welcome to Chronos Voyages. I'm your temporal concierge. How may I assist you with planning your journey through time?",
}

const quickReplies = [
  "Tell me about Ancient Rome",
  "What are your prices?",
  "How does time travel work?",
]

const botResponses: Record<string, string> = {
  rome: "Our Ancient Rome expedition takes you to 27 BC at the height of the Roman Empire. You'll attend lavish banquets, explore the Forum, and witness the Colosseum in its prime. The 7-day journey starts at $248,000 per traveler.",
  price:
    "Our journeys range from $185,000 for the Roaring Twenties experience to $320,000 for our Neo Tokyo 2150 voyage. Each package includes temporal transit, luxury period accommodations, a personal historian guide, and bespoke era-appropriate attire.",
  "time travel":
    "Our proprietary Chronos Engine creates a stable temporal corridor that allows precise travel to any point in recorded history or modeled future. The journey itself feels instantaneous, though you may experience a gentle shimmer as timelines recalibrate.",
  default:
    "Thank you for your interest. Our temporal concierge team would be delighted to discuss that in detail. Shall I connect you with a specialist, or is there something else I can help with?",
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase()
  if (lower.includes("rome") || lower.includes("ancient")) return botResponses.rome
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much"))
    return botResponses.price
  if (lower.includes("time travel") || lower.includes("how does") || lower.includes("work"))
    return botResponses["time travel"]
  return botResponses.default
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([greetingMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = (text?: string) => {
    const message = text || input.trim()
    if (!message) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getBotResponse(message),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center border border-primary bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-105 ${
          isOpen ? "rotate-0" : ""
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden border border-border bg-card shadow-2xl max-sm:bottom-0 max-sm:left-0 max-sm:right-0 max-sm:top-0 max-sm:h-full max-sm:w-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-4">
            <div>
              <h3 className="font-serif text-base text-foreground">
                Temporal Concierge
              </h3>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-primary">
                Online now
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground transition-colors hover:text-foreground sm:hidden"
              aria-label="Close chat"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-secondary/50 text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 border border-border bg-secondary/50 px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary delay-150" style={{ animationDelay: "0.15s" }} />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary delay-300" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 border-t border-border/50 px-4 py-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleSend(reply)}
                  className="border border-border bg-transparent px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your journey..."
                className="flex-1 bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition-opacity disabled:opacity-30"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
