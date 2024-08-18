import React from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

function ChatWindow({ currentChat, messages, sendMessage }) {
  return (
    <div className="w-2/3 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-300 flex items-center">
        <h2 className="text-xl font-bold">{currentChat.name}</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatWindow;
