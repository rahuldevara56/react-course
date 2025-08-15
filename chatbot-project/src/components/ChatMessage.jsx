import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
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
            </div>
         
          {sender === 'user' && (
            <img src={UserProfileImage} className="user-img"/>
          )}
        </div>
      );
    };
