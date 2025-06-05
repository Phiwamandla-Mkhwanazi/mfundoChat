import React, {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
  type MouseEvent,
} from "react";
import { CallIcon, VideoIcon } from "./Icons";

interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  { id: 1, sender: "me", text: "Hey! How are you?", timestamp: "10:00 AM" },
  { id: 2, sender: "them", text: "I'm good, thanks! What about you?", timestamp: "10:01 AM" },
  { id: 3, sender: "me", text: "Doing well, just working on a project.", timestamp: "10:02 AM" },
];

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleAttachClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Attach file clicked!");
  };

  const handleRecordClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert("Record audio clicked!");
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white transition-colors duration-300 shadow-inner">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-sky-200 dark:border-slate-700 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-slate-900 dark:text-white shadow-lg p-4  transition-colors duration-300">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Mfundo Platform</h2>
          <p className="text-xs text-sky-500 dark:text-sky-400">Online</p>
        </div>
        <div className="flex space-x-4">
          <button
            className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-slate-700 transition"
            aria-label="Voice call"
            title="Voice call"
            type="button"
          >
            <CallIcon  />
          </button>
          <button
            className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-slate-700 transition"
            aria-label="Video call"
            title="Video call"
            type="button"
          >
            <VideoIcon  />
          </button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50 dark:bg-slate-900">
        {messages.map(({ id, sender, text, timestamp }) => (
          <div
            key={id}
            className={`flex flex-col max-w-xs md:max-w-md ${
              sender === "me" ? "ml-auto items-end" : "mr-auto items-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl shadow ${
                sender === "me"
                  ? "bg-slate-500 text-white rounded-br-none"
                  : "bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none"
              }`}
            >
              {text}
            </div>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 select-none">
              {timestamp}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="flex items-center gap-3 p-4 border-t border-sky-200 dark:border-slate-700 bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-slate-900 dark:text-white shadow-lg p-4  transition-colors duration-300">
        <textarea
          rows={1}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          aria-label="Message input"
          className="flex-1 resize-none px-4 py-2 border border-sky-300 dark:border-slate-600 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-600 transition"
          spellCheck={false}
        />

        <button
          onClick={handleAttachClick}
          type="button"
          aria-label="Attach file"
          className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-slate-700 transition"
        >
          📎
        </button>

        <button
          onClick={handleRecordClick}
          type="button"
          aria-label="Record audio"
          className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-slate-700 transition"
        >
          🎤
        </button>

        <button
          type="button"
          disabled={!input.trim()}
          onClick={sendMessage}
          className={`px-4 py-2 rounded-full font-semibold text-white transition ${
            input.trim()
              ? "bg-sky-600 hover:bg-sky-700"
              : "bg-slate-500 cursor-not-allowed"
          }`}
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default Messages;
