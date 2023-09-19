import React,{useState} from 'react';



function Form(){
    const [paragraph,setParagraph] = useState(false);
    const [contact,setContact] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    });
    function inputHandle(e){
        
        
        const { name, value } = e.target;
      setContact(prevState => ({
      ...prevState,
        [name]: value
     }));
    }
    function sendMessage(e){
        e.preventDefault()
       setParagraph(true)
       const sendName = document.getElementById("nameid").value;
     const message = document.getElementById("messageid").value;
     const email = document.getElementById("emailid").value;
     const subject = document.getElementById("subjectid").value;
   
  // eslint-disable-next-line no-undef
     emailjs.send("service_jxbccko","template_frfy2ug",{
      from_name: sendName,
     subject: subject,
     message: message,
      reply_to: email,
     }).then(function(res){
      alert("Sent! I'll send you back as soon as possible ")
    }).catch(err=>console.error(err))

      setContact({
        name:"",
        email:"",
        subject:"",
        message:""
    });
     }


    return(
        
        <form >
         <input  type="text" placeholder="Name *" autoComplete='off' id="nameid"  onChange={inputHandle} value={contact.name} name='name'/>
         <input  id="emailid" autoComplete='off' type="email" required placeholder="Email *" onChange={inputHandle} value={contact.email} name='email'/>
         <input type="text" placeholder="Subject >" id="subjectid" autoComplete='off' required onChange={inputHandle} value={contact.subject} name='subject'/>
         <textarea id="messageid" placeholder="Message" cols="25" rows="5" required onChange={inputHandle} value={contact.message} name='message'/>
         <p style={{display:!paragraph ? "none":"block"}}>Sent! Thanks for contacting me.</p>
        <button id="btn" onClick={sendMessage}>Send Message</button>
       </form>
      
    )
}
export default Form