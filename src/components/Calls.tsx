import Footer from './Footer';

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
    avatar: 'https://i.pravatar.cc/150?img=10',
    time: 'Today, 10:15 AM',
    type: 'incoming',
    mode: 'voice',
  },
  {
    id: 2,
    name: 'Richard Stallman',
    avatar: 'https://i.pravatar.cc/150?img=20',
    time: 'Yesterday, 9:40 PM',
    type: 'outgoing',
    mode: 'video',
  },
  {
    id: 3,
    name: 'Christopher Hitchens',
    avatar: 'https://i.pravatar.cc/150?img=30',
    time: 'Today, 7:55 AM',
    type: 'missed',
    mode: 'voice',
  },
];

// Return color-coded label for call type
const getCallTypeLabel = (type: CallType) => {
  const baseStyle = "text-xs font-medium rounded-full px-2 py-0.5";
  switch (type) {
    case 'incoming':
      return <span className={`${baseStyle} bg-green-100 text-green-700`}>Incoming</span>;
    case 'outgoing':
      return <span className={`${baseStyle} bg-blue-100 text-blue-700`}>Outgoing</span>;
    case 'missed':
      return <span className={`${baseStyle} bg-red-100 text-red-700`}>Missed</span>;
  }
};

// Return simple emoji or icon with label
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
  return (
    <section className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gradient-to-br from-zinc-100 to-zinc-200  ">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-800 ">Recent Calls</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          A summary of your latest voice and video calls
        </p>
      </header>

      {/* Call List */}
      <ul className="space-y-5 px-3">
        {dummyCalls.map((call) => (
          <li
            key={call.id}
            className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <img
                src={call.avatar}
                alt={`${call.name} avatar`}
                className="w-12 h-12 rounded-full border-2 border-green-500 shadow-md"
              />
              <div>
                <p className="text-base font-semibold text-zinc-800 dark:text-white">{call.name}</p>
                <time className="text-sm text-zinc-500 dark:text-zinc-400">{call.time}</time>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {getCallTypeLabel(call.type)}
              {getCallModeIcon(call.mode)}
            </div>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer className="mt-6">
        <Footer />
      </footer>
    </section>
  );
}

export default Calls;
