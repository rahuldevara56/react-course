import { useState,useEffect } from 'react'
//import { useEffect } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'

import './App.css'

function App() {
      const welcomeMessage = 'wecome to the chatbot project! Send a message using the textbox below'
     const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) ||
      [ { message: 'hello chatbot',
      sender: 'user',
      id: 'id1',
      time: 1736127288920
  },
 {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2',
    time: 1736127291230
  }]);

   useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });

  }, []);

    useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);



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
