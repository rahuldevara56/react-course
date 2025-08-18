import dayjs from 'dayjs';
import { useState } from 'react'
import{Chatbot}  from 'supersimpledev'
import LoadingSpinnerImage from '../assets/loading-spinner.gif'
import './ChatInput.css'


export function ChatInput({chatMessages, setChatMessages}){
      const [inputText, setInputText] = useState('');
      const [isLoading, setIsLoading] = useState(false);

      function saveInputtext(event) {
        setInputText(event.target.value);
      }

      async function sendMessage() {

        if(isLoading || inputText ===''){
          return;
        }

        setIsLoading(true);

         setInputText('')

        const newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }
        ]

        setChatMessages([
        ...newChatMessages,{
           message:<img src={LoadingSpinnerImage} className="loading-img" />,
            sender: 'robot',
            id: crypto.randomUUID()
         
        }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
          }
        ]);
        setIsLoading(false);
      }

      function sendMeassageEnter(event) {
        if (event.key === 'Enter') {
          sendMessage()
        } else if (event.key === 'Escape') {
          setInputText('')
        }
      }

      function clearMessages(){
        setChatMessages([])
      }

     




      return (
        <div className = "chat-input-container">
          <input
            placeholder="Send a message to chatbot"
            size="30"
            onChange={saveInputtext}
            value={inputText}
            onKeyDown={sendMeassageEnter}
            className="chat-input"
          />
          <button 
          onClick={sendMessage} 
          className="send-button">send</button>
           <button 
            onClick={clearMessages}
          className="clear-button">clear</button>
        </div>
      );
    }