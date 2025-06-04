import { useState } from "react";
import { SearchIcon, User2Icon, MessageCircleIcon } from "./Icons";

function Header() {
  const [searchMode, setSearchMode] = useState<"contacts" | "chats">("contacts");

  return (
    <header className="bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-slate-900 dark:text-white shadow-lg p-4  transition-colors duration-300">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=7"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <div>
            <p className="text-sm text-cyan-800 dark:text-cyan-200">Welcome back,</p>
            <p className="text-lg font-bold tracking-tight">Username</p>
          </div>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/9068/9068753.png"
          alt="App Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-md hidden sm:block"
        />
      </div>

      {/* Search + Toggle */}
      <div className="flex flex-col gap-5">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder={`Search ${searchMode}...`}
            className="w-full py-1 pl-10 pr-4 rounded-xl bg-white/80 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm transition"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-700 dark:text-teal-300">
            <SearchIcon />
          </div>
        </div>

        {/* Toggle */}
        <div className="flex justify-center sm:justify-start gap-3">
          {["contacts", "chats"].map((mode) => {
            const isActive = searchMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setSearchMode(mode as "contacts" | "chats")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-white text-teal-700 dark:bg-slate-100 dark:text-slate-900 shadow"
                      : "bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-600"
                  }`}
              >
                {mode === "contacts" ? <User2Icon /> : <MessageCircleIcon />}
                <span className="capitalize">{mode}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
