import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  const [chats] = useState([
    { id: 1, name: 'Judy', lastMessage: 'Hey there!' },
    { id: 2, name: 'Johnson', lastMessage: 'Hello!' },
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);
  const [messages, setMessages] = useState([
    { text: 'Hello', sender: 'Judy' },
    { text: 'Hi, how are you?', sender: 'You' },
  ]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You' }]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar chats={chats} currentChat={currentChat} setCurrentChat={setCurrentChat} />
      <ChatWindow currentChat={currentChat} messages={messages} sendMessage={sendMessage} />
    </div>
  );
}

export default App;
