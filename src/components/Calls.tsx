type CallType = "incoming" | "outgoing" | "missed";
type CallMode = "voice" | "video";

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
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=10",
    time: "Today, 10:15 AM",
    type: "incoming",
    mode: "voice",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "https://i.pravatar.cc/150?img=20",
    time: "Yesterday, 9:40 PM",
    type: "outgoing",
    mode: "video",
  },
  {
    id: 3,
    name: "Charlie Daniels",
    avatar: "https://i.pravatar.cc/150?img=30",
    time: "Today, 7:55 AM",
    type: "missed",
    mode: "voice",
  },
];

function Calls() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Recent Calls</h1>
      
      <ul className="space-y-4">
        {dummyCalls.map((call) => (
          <li
            key={call.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={call.avatar}
                alt={call.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{call.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{call.time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {call.type === "incoming" && (
                <span className="text-green-500 text-xs">Incoming</span>
              )}
              {call.type === "outgoing" && (
                <span className="text-blue-500 text-xs">Outgoing</span>
              )}
              {call.type === "missed" && (
                <span className="text-red-500 text-xs">Missed</span>
              )}
              <span className="ml-2 text-gray-400">
                {call.mode === "voice" ? "📞" : "🎥"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calls;
