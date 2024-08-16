import React, { useState } from 'react';
import Sidebar from './components/SideBar';
// import ChatWindow from './components/ChatWindow';

function App() {
  const [chats] = useState([
    { id: 1, name: 'Judicious', lastMessage: 'Hey there!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Good morning!' },
  ]);

  const [currentChat, setCurrentChat] = useState(chats[0]);
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'Judicious' },
    { text: 'Hi, how are you?', sender: 'You' },
  ]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'You' }]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar chats={chats} currentChat={currentChat} setCurrentChat={setCurrentChat} />
      {/* <ChatWindow currentChat={currentChat} messages={messages} sendMessage={sendMessage} /> */}
    </div>
  );
}

export default App;
