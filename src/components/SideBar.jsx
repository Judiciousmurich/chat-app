import React from 'react';

function Sidebar({ chats, currentChat, setCurrentChat }) {
  return (
    <div className="w-1/3 bg-gray-100 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-300">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full p-2 rounded bg-gray-200"
        />
      </div>
      <div className="overflow-y-auto flex-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setCurrentChat(chat)}
            className={`p-4 cursor-pointer ${
              currentChat.id === chat.id ? 'bg-gray-300' : ''
            }`}
          >
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-sm text-gray-600">{chat.lastMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
