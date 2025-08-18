import RobotProfileImage from '../assets/robot.png'
//import UserProfileImage from '../assets/user.png'
import UserProfileImage from '../assets/tennis-balls.png'
import './ChatMessage.css'
import dayjs from 'dayjs';

export function ChatMessage({ message, sender ,time }) {
 
  

      // const message = props.message;
      // const sender = props.sender;
      // const{message, sender}= props;

      /*
       if(sender === 'robot'){
           return(
         <div>
           <img src="robot.png" width="40" />
           {message}
        </div>
       );
       }

       */
      return (
        <div className={
          sender==='user' 
          ? "chat-message-user" 
          : "chat-message-robot"
        }>
       
           {sender === 'robot' && (
            <img src={RobotProfileImage} className="robot-img"/>
          )}
          <div className="chat-message-text"> 
            {message} 
               {time && (
               <div className="chat-message-time">
                 {dayjs().format('h:mma')}
               </div>
        )}
            
             </div>
         
          {sender === 'user' && (
           // <img src={UserProfileImage} className="user-img"/>
           <img src={UserProfileImage} className="tennis-img"/>
          )}
        </div>
      );
    };
