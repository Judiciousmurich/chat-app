import React from 'react';

function Message({ message }) {
  const isSent = message.sender === 'You';
  return (
    <div className={`mb-2 flex ${isSent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isSent
            ? 'bg-[#056162] text-[#E9EDEF]'  // Sent message color
            : 'bg-[#202C33] text-[#E9EDEF]'  // Received message color
        }`}
      >
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
