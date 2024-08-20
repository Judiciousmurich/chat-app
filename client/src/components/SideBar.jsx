import React from 'react';

function Sidebar({ chats, currentChat, setCurrentChat }) {
  return (
    <div className="w-1/3 bg-whatsapp-dark-green h-screen flex flex-col text-white">
      <div className="p-4 border-b border-whatsapp-teal">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full p-2 rounded bg-whatsapp-teal placeholder-white text-white"
        />
      </div>
      <div className="overflow-y-auto flex-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setCurrentChat(chat)}
            className={`p-4 cursor-pointer hover:bg-whatsapp-teal ${
              currentChat.id === chat.id ? 'bg-whatsapp-teal' : ''
            }`}
          >
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-sm text-gray-300">{chat.lastMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
