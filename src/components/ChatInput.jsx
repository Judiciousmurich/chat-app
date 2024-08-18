import React, { useState } from 'react';

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="p-4 border-t border-gray-300 flex items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        className="flex-1 p-2 border rounded"
      />
      <button onClick={handleSend} className="ml-2 bg-green-500 text-white p-2 rounded">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
