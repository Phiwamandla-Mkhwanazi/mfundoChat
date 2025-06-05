import Calls from "../components/Calls";

function CallsPage(){
    return(
        <div className='grid grid-cols-[1fr_3fr] min-h-screen '>
            <Calls />
            
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-16 space-y-6 bg-gradient-to-br from-slate-950 via-slate-900 to-zinc-900 text-white transition-colors duration-300 shadow-inner">
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
          d="M3 5a2 2 0 012-2h3l2 5-2 2a16 16 0 006 6l2-2 5 2v3a2 2 0 01-2 2h-1C9 21 3 15 3 7V5z"
        />
      </svg>
    </div>
    <h2 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
      Calls Page
    </h2>
    <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
      View your voice and video call history. Quickly reconnect, review activity, and keep conversations flowing.
    </p>
  </div>
</div>
        
        </div>
    );
}

export default CallsPage;