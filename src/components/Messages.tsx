import React, {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import { CallIcon, VideoIcon } from "./Icons"; // Your icon components

// Define message type
interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
  timestamp: string; // formatted time string
}

// Initial dummy messages
const initialMessages: Message[] = [
  { id: 1, sender: "me", text: "Hey! How are you?", timestamp: "10:00 AM" },
  { id: 2, sender: "them", text: "I'm good, thanks! What about you?", timestamp: "10:01 AM" },
  { id: 3, sender: "me", text: "Doing well, just working on a project.", timestamp: "10:02 AM" },
];

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message handler
  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newMessage: Message = {
      id: messages.length + 1,
      sender: "me",
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  // Handle Enter key (send on Enter, newline on Shift+Enter)
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Input change handler
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  // Button click handlers (placeholder)
  const handleAttachClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Attach file clicked!");
  };
  const handleRecordClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Record audio clicked!");
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-zinc-400 shadow-lg ">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Mfundo Platform</h2>
          <p className="text-sm text-green-500">Online</p>
        </div>
        <div className="flex space-x-5">
          <button
            className="p-3 rounded-full hover:bg-gray-200 transition"
            aria-label="Voice call"
            title="Voice call"
            type="button"
          >
            <CallIcon/>
          </button>
          <button
            className="p-3 rounded-full hover:bg-gray-200 transition"
            aria-label="Video call"
            title="Video call"
            type="button"
          >
            <VideoIcon />
          </button>
        </div>
      </header>

      {/* Messages area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-100">
        {messages.map(({ id, sender, text, timestamp }) => (
          <div
            key={id}
            className={`flex flex-col max-w-xs md:max-w-md ${
              sender === "me" ? "ml-auto items-end" : "mr-auto items-start"
            }`}
          >
            <div
              className={`px-5 py-3 rounded-xl break-words shadow-md ${
                sender === "me"
                  ? "bg-green-600 text-white rounded-br-none"
                  : "bg-white text-gray-900 rounded-bl-none"
              }`}
            >
              {text}
            </div>
            <span className="text-xs text-gray-400 mt-1 select-none">{timestamp}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input area */}
      <footer className="flex items-center gap-3 p-5 border-t border-green-600 bg-white">
        <textarea
          rows={1}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          aria-label="Message input"
          className="flex-1 resize-none px-5 py-3 border border-green-600 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 transition"
          spellCheck={false}
        />

        <button
          onClick={handleAttachClick}
          type="button"
          aria-label="Attach file"
          title="Attach file"
          className="p-3 rounded-full hover:bg-gray-200 transition"
        >
          📎
        </button>

        <button
          onClick={handleRecordClick}
          type="button"
          aria-label="Record audio"
          title="Record audio"
          className="p-3 rounded-full hover:bg-gray-200 transition"
        >
          🎤
        </button>

        <button
          type="button"
          disabled={!input.trim()}
          onClick={sendMessage}
          aria-label="Send message"
          title="Send message"
          className={`px-6 py-3 rounded-full font-semibold transition ${
            input.trim()
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-green-600 text-white cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default Messages;
