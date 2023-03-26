import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import "./contact.scss";

export default function Contact() {
  // const[message,setMessage]= useState(false)
  // const handleSubmit=(e)=>{

  //   e.preventDefault();
  //   setMessage(true);
  // }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assests/shake.svg" alt="" /></div>
      <div className="right">
      <h3 >Contact Me</h3>
            <h1 >Connect With Me</h1>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks,I'll reply ASAP</span>}
        </form> */}
        <div className="sec1">
         <div className="icons"><LinkedIn/></div>
        < a href='https://bit.ly/2WywatG' target='_blank' rel='noreferrer' className='connect-link'>Connect on Linkedin</a>
        </div>
       <div className="sec2"><div className="icons">
        <GitHub/></div>
         <a href='https://github.com/shanvijaiswal87' target='_blank' rel='noreferrer' className='connect-link'>Projects on Github</a>
       </div>
        <div className="sec3">
          <div className="icons">
          <Email/></div>
          <a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank' rel='noreferrer' className='connect-link'>Connect on Email</a>
        </div>
        </div>
        
        
       
        </div>
  )
}
