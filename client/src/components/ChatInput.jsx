import React, { useState } from 'react';

function ChatInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-[#323739] flex items-center bg-[#1E1E1E]">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
        className="flex-1 p-2 border border-[#323739] rounded bg-[#323739] placeholder-[#8696A0] text-[#E9EDEF]"
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-[#056162] text-white p-2 rounded hover:bg-[#1EBB66]"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
