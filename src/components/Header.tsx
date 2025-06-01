import { useState } from "react";
import { SearchIcon, User2Icon, MessageCircleIcon } from "./Icons";

function Header() {
  const [searchMode, setSearchMode] = useState<"contacts" | "chats">("contacts");

  return (
    <header className="flex flex-col gap-2 p-1 bg-green-600 text-white shadow-md rounded-b-xl">
      {/* Top: Avatar, Welcome, Logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
          />
          <div>
            <p className="text-sm text-green-100">Welcome back,</p>
            <p className="text-lg font-semibold leading-none">Username</p>
          </div>
        </div>
        <img
          src="https://cdn.vectorstock.com/i/1000v/66/13/default-avatar-profile-icon-social-media-user-vector-49816613.jpg"
          alt="Company Logo"
          className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
        />
      </div>

      {/* Bottom: Search + Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="flex w-full relative">
          <input
            type="text"
            placeholder={`Search ${searchMode}...`}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-green-500 text-white placeholder-green-200 border border-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div className="absolute left-3 top-2.5 text-green-200">
            <SearchIcon />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setSearchMode("contacts")}
            className={`flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition ${
              searchMode === "contacts"
                ? "bg-white text-green-600 shadow-md"
                : "bg-green-700 text-green-200 hover:bg-green-500"
            }`}
          >
            <User2Icon />
            Contacts
          </button>
          <button
            onClick={() => setSearchMode("chats")}
            className={`flex items-center gap-1 px-4 py-2 text-sm rounded-lg transition ${
              searchMode === "chats"
                ? "bg-white text-green-600 shadow-md"
                : "bg-green-700 text-green-200 hover:bg-green-500"
            }`}
          >
            <MessageCircleIcon />
            Chats
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
