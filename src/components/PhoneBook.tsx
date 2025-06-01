const contacts = [
  { id: 1, name: "Alice Johnson", phone: "+1 202 555 0123" },
  { id: 2, name: "Bob Smith", phone: "+1 202 555 0456" },
  { id: 3, name: "Catherine Lee", phone: "+1 202 555 0789" },
  { id: 4, name: "Daniel Kim", phone: "+1 202 555 0987" },
  { id: 5, name: "Eleanor Rigby", phone: "+1 202 555 0345" },
  { id: 6, name: "Faisal Ahmed", phone: "+1 202 555 0678" },
  { id: 7, name: "Grace Hopper", phone: "+1 202 555 0012" },
  { id: 8, name: "Hannah Hart", phone: "+1 202 555 0890" },
  { id: 9, name: "Ian McKellen", phone: "+1 202 555 0234" },
  { id: 10, name: "Jane Doe", phone: "+1 202 555 0451" },
  { id: 11, name: "Kyle Reese", phone: "+1 202 555 0780" },
  { id: 12, name: "Laura Palmer", phone: "+1 202 555 0111" },
  { id: 13, name: "Mike Ross", phone: "+1 202 555 0999" },
  { id: 14, name: "Nina Simone", phone: "+1 202 555 0444" },
  { id: 15, name: "Oscar Wilde", phone: "+1 202 555 0555" },
  { id: 16, name: "Priya Desai", phone: "+1 202 555 0666" },
  { id: 17, name: "Quincy Adams", phone: "+1 202 555 0777" },
];

function PhoneBook() {
  return (
    <div className="bg-white h-full">
      <div className="overflow-y-auto max-h-[calc(100vh-11rem)]">
        <ul className="flex flex-col gap-3">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-green-500 text-white font-bold flex items-center justify-center">
                {contact.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-900">{contact.name}</span>
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
