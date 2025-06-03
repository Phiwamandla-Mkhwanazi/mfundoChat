import { useState } from "react";
import { SearchIcon, User2Icon, MessageCircleIcon } from "./Icons";

function Header() {
  const [searchMode, setSearchMode] = useState<"contacts" | "chats">("contacts");

  return (
    <header className="flex flex-col gap-2 p-2s bg-green-700 text-white">
      {/* Top: Avatar, Welcome Text */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://icon2.cleanpng.com/20180418/sde/avuny4t9g.webp"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white shadow"
          />
          <div>
            <p className="text-sm text-green-200">Welcome back,</p>
            <p className="text-lg font-bold tracking-tight">Username</p>
          </div>
        </div>

        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-chat-icon-download-in-svg-png-gif-file-formats--chatting-talking-groupchat-communication-comments-android-user-interface-pack-icons-3322.png?f=webp"
          alt="Company Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md hidden sm:block"
        />
      </div>

      {/* Search Bar + Toggle */}
      <div className="flex flex-col  items-center gap-3">
        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder={`Search ${searchMode}...`}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-green-600 text-white placeholder-green-200 border border-green-400 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <div className="absolute left-3 top-2.5 text-green-300">
            <SearchIcon />
          </div>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex gap-2 mt-2 sm:mt-0">
          {["contacts", "chats"].map((mode) => (
            <button
              key={mode}
              onClick={() => setSearchMode(mode as "contacts" | "chats")}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                searchMode === mode
                  ? "bg-white text-green-700 shadow"
                  : "bg-green-800 text-green-200 hover:bg-green-600 hover:text-white"
              }`}
              aria-pressed={searchMode === mode}
            >
              {mode === "contacts" ? <User2Icon /> : <MessageCircleIcon />}
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
