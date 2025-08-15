import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'

import './App.css'

function App() {
      const welcomeMessage = 'wecome to the chatbot project! Send a message using the textbox below'
      const [chatMessages, setChatMessages] = useState([]);
      //const [chatMessages, setChatMessages] = array;
      //const chatMessages = array[0];
      //const setChatMessage = array[1];
      return (
        <div className ="app-container">

        {
          chatMessages.length === 0 && (
            <p className="welcome-message">{welcomeMessage}</p>
          )
        }

         
          <ChatMessages
            chatMessages={chatMessages}
          />
           <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
        </div>
      );
    } 

export default App
