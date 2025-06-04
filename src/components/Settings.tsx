import { useState } from "react";
import Footer from './Footer';
function Settings() {
  // Example state hooks
  const [username, setUsername] = useState("username");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Settings</h1>

      {/* Profile Section */}
      <div>
           <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Profile</h2>
        <label className="block mb-4">
          <span className="text-gray-600">Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                       text-gray-900 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
        </label>
      </section>

      {/* Notifications Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Notifications</h2>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="text-gray-700">Email Notifications</span>
        </label>
      </section>

      {/* Preferences Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Preferences</h2>
        <label className="flex items-center space-x-3 cursor-pointer mb-4">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="form-checkbox h-5 w-5 text-green-500"
          />
          <span className="text-gray-700">Enable Dark Mode</span>
        </label>

        <label className="block">
          <span className="text-gray-600">Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 
                       text-gray-900 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </label>
      </section>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          onClick={() => alert("Settings saved!")}
        >
          Save Changes
        </button>
      </div>

      </div>
     
      <Footer />
    </div>
  );
}

export default Settings;
