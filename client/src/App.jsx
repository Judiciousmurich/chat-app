import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  const [chats] = useState([
    { id: 1, name: 'Judy', lastMessage: 'Hey there!' },
    { id: 2, name: 'Martin', lastMessage: 'Hello!' },
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);
  const [messages, setMessages] = useState([
    { text: 'Hey', sender: 'Judicious' },
    { text: 'Hello?', sender: 'You' },
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
