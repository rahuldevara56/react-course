  import {useState} from 'react'
  import './LoginForm.css'

  
  export function LoginForm(){

        const [isTrue, setIsTrue]=useState(true);

        function hideShow(){
          if(isTrue){
            setIsTrue(false)
          }else{
            setIsTrue(true)
          }
        }
        return(
         <>
         <p>HEllo, welcome to my website</p>
          
           <div>
             <input placeholder="Email" className="input-email"
              />
           </div>
           <div>
             <input placeholder="Password"  className="input-pass"
             type={isTrue ? 'text' : 'password'}/>
              <button onClick={hideShow}>{isTrue ? 'hide' : 'show'}</button>
           </div>
          
           <button className="login-button">Login</button>
           <button  className="signup-button">Sign up</button>
           </>
          );
      };