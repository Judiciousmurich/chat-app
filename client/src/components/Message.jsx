import React from 'react';

function Message({ message }) {
  const isSent = message.sender === 'You';
  return (
    <div
      className={`mb-2 flex ${isSent ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isSent ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        <p>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
