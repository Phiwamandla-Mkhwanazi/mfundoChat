import { useState } from 'react';
import Footer from './Footer';
import { SearchIcon } from './Icons';

type CallType = 'incoming' | 'outgoing' | 'missed';
type CallMode = 'voice' | 'video';

interface Call {
  id: number;
  name: string;
  avatar: string;
  time: string;
  type: CallType;
  mode: CallMode;
}

const dummyCalls: Call[] = [
  {
    id: 1,
    name: 'Steve Biko',
    avatar: 'https://cdn.britannica.com/98/186798-050-A75D263D/Steve-Biko.jpg',
    time: 'Today, 10:15 AM',
    type: 'incoming',
    mode: 'voice',
  },
  {
    id: 2,
    name: 'Linus Torvalds',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37IdM73BbIF2Y04TYzT6XwFPg9Che5r0lwA&s',
    time: 'Yesterday, 9:40 PM',
    type: 'outgoing',
    mode: 'video',
  },
  {
    id: 3,
    name: 'Grace Hopper',
    avatar: 'https://i.pravatar.cc/150?img=30',
    time: 'Today, 7:55 AM',
    type: 'missed',
    mode: 'voice',
  },
  {
    id: 4,
    name: 'Ada Lovelace',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg',
    time: 'Today, 12:30 PM',
    type: 'incoming',
    mode: 'video',
  },
  {
    id: 5,
    name: 'Alan Turing',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg',
    time: '2 days ago, 3:20 PM',
    type: 'missed',
    mode: 'voice',
  },
  {
    id: 6,
    name: 'Winnie Mandela',
    avatar: 'https://www.sahistory.org.za/sites/default/files/portrait_of_a_young_winnie.jpg',
    time: 'Yesterday, 11:00 AM',
    type: 'incoming',
    mode: 'voice',
  },
  {
    id: 7,
    name: 'Dennis Ritchie',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/800px-Dennis_Ritchie_2011.jpg',
    time: 'Today, 5:45 PM',
    type: 'outgoing',
    mode: 'voice',
  },
  {
    id: 8,
    name: 'Edward Snowden',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XnnByu3-wbDRoRpjGzjJFBm22V7w3UC-jA&s',
    time: 'Today, 2:10 PM',
    type: 'incoming',
    mode: 'video',
  },
  {
    id: 9,
    name: 'Mark Shuttleworth',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Markshuttleworth-dublin-20101116.jpg',
    time: 'Yesterday, 8:00 PM',
    type: 'missed',
    mode: 'video',
  },
  {
    id: 10,
    name: 'Chris Hani',
    avatar: 'https://blackthen.com/wp-content/uploads/2016/02/Chris-Hani.jpg',
    time: 'Today, 6:20 AM',
    type: 'outgoing',
    mode: 'voice',
  },
];

const getCallTypeLabel = (type: CallType) => {
  const baseStyle = 'text-xs font-semibold rounded-full px-2 py-0.5';
  switch (type) {
    case 'incoming':
      return <span className={`${baseStyle} bg-emerald-200 text-emerald-800`}>Incoming</span>;
    case 'outgoing':
      return <span className={`${baseStyle} bg-sky-200 text-sky-800`}>Outgoing</span>;
    case 'missed':
      return <span className={`${baseStyle} bg-rose-200 text-rose-800`}>Missed</span>;
  }
};

const getCallModeIcon = (mode: CallMode) => {
  const icon = mode === 'voice' ? '📞' : '🎥';
  const label = mode === 'voice' ? 'Voice Call' : 'Video Call';
  return (
    <span className="ml-2 text-xl" aria-label={label} title={label}>
      {icon}
    </span>
  );
};

function Calls() {
  const [query, setQuery] = useState('');

  const filteredCalls = dummyCalls.filter((call) =>
    call.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-slate-900 dark:text-white shadow-lg p-4  transition-colors duration-300">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-3">📞 Recent Calls</h1>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name..."
            className="w-full pl-11 pr-4 py-2 rounded-xl bg-white/70 dark:bg-zinc-800/60 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />
          <span className="absolute left-3 top-2.5 text-emerald-500 dark:text-emerald-300">
            <SearchIcon />
          </span>
        </div>
      </header>

      {/* Call List */}
      <ul className="space-y-5 px-3 overflow-y-auto max-h-[calc(100vh-13rem)] m-1.5">
        {filteredCalls.length === 0 ? (
          <li className="text-zinc-500 dark:text-zinc-400 italic text-center py-10">
            No calls found.
          </li>
        ) : (
          filteredCalls.map((call) => (
            <li
              key={call.id}
              className="flex items-center justify-between   bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] text-slate-900 dark:text-white shadow-lg rounded-xl shadow hover:shadow-lg border border-sky-100 dark:border-slate-600 hover:-translate-y-1 transition-all duration-200 focus-within:ring-2 focus-within:ring-sky-500 group hover:shadow-2xl transition-shadow duration-200 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4 p-2.5">
                <img
                  src={call.avatar}
                  alt={`Avatar of ${call.name}`}
                  className="w-12 h-12 rounded-full border-2 border-emerald-400 shadow-md"
                />
                <div>
                  <p className="text-base font-semibold text-zinc-900 dark:text-white">
                    {call.name}
                  </p>
                  <time className="text-sm text-zinc-500 dark:text-zinc-300">{call.time}</time>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getCallTypeLabel(call.type)}
                {getCallModeIcon(call.mode)}
              </div>
            </li>
          ))
        )}
      </ul>

      {/* Footer */}
      <footer className="border-t border-zinc-700 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md">
        <Footer />
      </footer>
    </section>
  );
}

export default Calls;
