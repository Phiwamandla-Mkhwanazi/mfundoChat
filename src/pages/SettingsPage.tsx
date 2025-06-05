import Settings from "../components/Settings";

function SettingsPage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
            <Settings />
<div className="flex flex-col items-center justify-center  px-6 py-16 space-y-6 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white transition-colors duration-300 shadow-inner ">
  <div className="flex flex-col items-center gap-4 text-center">
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-600/10 ring-2 ring-emerald-500/50 shadow-lg backdrop-blur-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-4a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h2 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
      Settings Page
    </h2>
    <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
      Manage your account preferences, theme, privacy, and other personalized settings here.
    </p>
  </div>
</div>
        </div>
    );
}

export default SettingsPage;