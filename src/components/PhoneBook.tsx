const contacts = [
  { id: 1, name: "Alan Turing", phone: "+27 61 432 0101" },
  { id: 2, name: "Steve Biko", phone: "+27 74 987 2234" },
  { id: 3, name: "Grace Hopper", phone: "+27 62 341 7788" },
  { id: 4, name: "Nelson Mandela", phone: "+27 72 001 1918" },
  { id: 5, name: "Barbara Liskov", phone: "+27 63 778 5543" },
  { id: 6, name: "Chris Hani", phone: "+27 82 456 9932" },
  { id: 7, name: "Tim Berners-Lee", phone: "+27 71 642 8877" },
  { id: 8, name: "Miriam Makeba", phone: "+27 74 239 5501" },
  { id: 9, name: "Dennis Ritchie", phone: "+27 78 330 6678" },
  { id: 10, name: "Desmond Tutu", phone: "+27 60 119 5123" },
  { id: 11, name: "Katherine Johnson", phone: "+27 65 907 3344" },
  { id: 12, name: "Albertina Sisulu", phone: "+27 66 782 9911" },
  { id: 13, name: "Ken Thompson", phone: "+27 79 456 9823" },
  { id: 14, name: "Mark Shuttleworth", phone: "+27 83 552 6641" },
  { id: 15, name: "Ada Lovelace", phone: "+27 73 991 5573" },
  { id: 16, name: "Zanele Muholi", phone: "+27 67 800 2345" },
  { id: 17, name: "Janet Basu", phone: "+27 61 884 1092" },
];


function PhoneBook() {
  return (
    <div className="h-full bg-zinc-100  px-2 sm:px-4 py-5">
      <div className="overflow-y-auto max-h-[calc(100vh-20rem)] ">
        <ul className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-zinc-200 hover:shadow-md transition hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-green-600 group"
              tabIndex={0}
            >
              <div className="w-12 h-12 rounded-full bg-green-500 text-white font-semibold flex items-center justify-center text-lg shadow-sm">
                {contact.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 group-hover:text-green-600">
                  {contact.name}
                </span>
                <span className="text-sm text-gray-500">{contact.phone}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhoneBook;
