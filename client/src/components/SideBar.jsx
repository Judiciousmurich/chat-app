import React from 'react';

function Sidebar({ chats, currentChat, setCurrentChat }) {
  return (
    <div className="w-1/3 bg-[#1E1E1E] h-screen flex flex-col text-[#E9EDEF]">
      <div className="p-4 border-b border-[#323739]">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full p-2 rounded bg-[#323739] placeholder-[#8696A0] text-[#E9EDEF]"
        />
      </div>
      <div className="overflow-y-auto flex-1 w-full p-2 rounded">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setCurrentChat(chat)}
            className={`p-4 cursor-pointer hover:bg-[#2A2F32] ${
              currentChat.id === chat.id ? 'bg-[#2A2F32]' : ''
            }`}
          >
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-sm text-[#8696A0]">{chat.lastMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
