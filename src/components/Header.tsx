import { useState } from "react";
import { SearchIcon, User2Icon, MessageCircleIcon } from "./Icons";

function Header() {
  const [searchMode, setSearchMode] = useState<"contacts" | "chats">("contacts");

  return (
    <header className="flex flex-col gap-4 px-6 py-4 bg-green-700 text-white rounded-b-2xl shadow-lg">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Avatar and Welcome */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=3"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <div>
            <p className="text-sm text-green-200">Welcome back,</p>
            <p className="text-lg font-semibold leading-tight tracking-tight">Username</p>
          </div>
        </div>

        {/* Logo */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/9068/9068753.png"
          alt="App Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md hidden sm:block"
        />
      </div>

      {/* Search Section */}
      <div className="flex flex-col gap-3">
        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder={`Search ${searchMode}...`}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-green-600 text-white placeholder-green-200 border border-green-500 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <span className="absolute left-3 top-3 text-green-300">
            <SearchIcon />
          </span>
        </div>

        {/* Mode Toggle */}
        <div className="flex gap-3 justify-center sm:justify-start">
          {["contacts", "chats"].map((mode) => {
            const isActive = searchMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setSearchMode(mode as "contacts" | "chats")}
                aria-pressed={isActive}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 
                  ${isActive 
                    ? "bg-white text-green-700 shadow-md" 
                    : "bg-green-800 text-green-200 hover:bg-green-600 hover:text-white"}`}
              >
                {mode === "contacts" ? <User2Icon /> : <MessageCircleIcon />}
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
