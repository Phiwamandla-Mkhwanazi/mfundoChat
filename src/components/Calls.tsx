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
    name: 'Katherine Johnson',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg',
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
    name: 'Barbara Liskov',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Barbara_Liskov_MIT.jpg/800px-Barbara_Liskov_MIT.jpg',
    time: 'Today, 2:10 PM',
    type: 'incoming',
    mode: 'video',
  },
  {
    id: 9,
    name: 'Ken Thompson',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ken_Thompson_2019.jpg/800px-Ken_Thompson_2019.jpg',
    time: 'Yesterday, 8:00 PM',
    type: 'missed',
    mode: 'video',
  },
  {
    id: 10,
    name: 'Margaret Hamilton',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Margaret_Hamilton_1969.jpg/800px-Margaret_Hamilton_1969.jpg',
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
    <section className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-[#f8fafc] to-[#e0f2f1] dark:from-[#0f172a] dark:to-[#1e293b]">
      {/* Header */}
      <header className="mb-4 px-6 py-4 backdrop-blur-md bg-white/40 dark:bg-zinc-900/40 border-b border-zinc-300 dark:border-zinc-700 shadow-md">
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
      <ul className="space-y-5 px-6 py-4 overflow-y-auto max-h-[calc(100vh-16rem)]">
        {filteredCalls.length === 0 ? (
          <li className="text-zinc-500 dark:text-zinc-400 italic text-center py-10">
            No calls found.
          </li>
        ) : (
          filteredCalls.map((call) => (
            <li
              key={call.id}
              className="flex items-center justify-between p-4 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-4">
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
      <footer className="border-t border-zinc-300 dark:border-zinc-700 px-6 py-4 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md">
        <Footer />
      </footer>
    </section>
  );
}

export default Calls;
