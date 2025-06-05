import { useState } from "react";
import Footer from './Footer';

function Settings() {
  const [username, setUsername] = useState("username");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-b from-slate-950 to-zinc-900 text-white ">

      {/* Header */}
      <header className="flex flex-col items-center justify-center text-center space-y-3 p-2 mt-8">
        <div className="bg-green-600/10 p-4 rounded-full shadow-lg ring-2 ring-green-500/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A7.968 7.968 0 0112 16c2.21 0 4.208.896 5.879 2.347M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-md">Settings</h1>
        <p className="text-sm text-zinc-400">Manage your preferences and app configurations</p>
      </header>

      {/* Main */}
      <main className="h-full  flex flex-col gap-3 max-w-xl mx-auto w-full">

        {/* Profile */}
        <section className="bg-zinc-800/30 backdrop-blur p-4 m-2  mt-10 rounded-2xl shadow-md border border-zinc-700">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A7.968 7.968 0 0112 16c2.21 0 4.208.896 5.879 2.347M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Profile
          </h2>
          <label className="block mb-4">
            <span className="text-zinc-400">Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </label>
        </section>

        {/* Notifications */}
        <section className="bg-slate-800/30 backdrop-blur p-4 m-2  rounded-2xl shadow-md border border-zinc-700">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Notifications
          </h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500"
            />
            <span className="text-zinc-300">Enable email notifications</span>
          </label>
        </section>

        {/* Preferences */}
        <section className="bg-zinc-800/30 backdrop-blur p-4 m-2  rounded-2xl shadow-md border border-zinc-700">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12H3.32m15.02 5.66l-.71-.71M5.36 6.34l-.7-.7m12.02 0l.7.7M5.36 17.66l.7.7M12 7a5 5 0 000 10a5 5 0 000-10z" />
            </svg>
            Preferences
          </h2>

          <label className="flex items-center gap-3 cursor-pointer mb-4">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="form-checkbox h-5 w-5 text-green-500 rounded focus:ring-green-500"
            />
            <span className="text-zinc-300">Enable Dark Mode</span>
          </label>

          <label className="block">
            <span className="text-zinc-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zM12 14c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7z" />
              </svg>
              Language
            </span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-2 w-full rounded-md bg-zinc-900 border border-zinc-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="en">English</option>
              <option value="es">isiZulu</option>
              <option value="fr">Afrikaans</option>
              <option value="de">isiTswane</option>
            </select>
          </label>
        </section>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={() => alert("Settings saved!")}
            className="bg-green-600 hover:bg-green-700 transition-all duration-200 text-white px-6 py-2 rounded-lg shadow-md font-semibold"
          >
            Save Changes
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Settings;
