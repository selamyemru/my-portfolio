import './Contact.css';
import React, {useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
// import React, {  } from 'react';
// import emailjs from '@emailjs/browser';
// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_xj69a3r', 'template_rewongd', form.current, 'NzxW0xF9Jn6hkvTII')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
// export default Contact;
//

export default function Contact()  {
  const form = useRef(); 
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    // your  email service template id ,servicid,publickey
    const  serviceId='service_xj69a3r';
    const templateId='template_msnqv13';
    const publickey='NzxW0xF9Jn6hkvTII';
    // creact new object that contain dynamic templat eparameter
    const templateparams={
        from_name:name,
        from_email:email,
        to_name:"selam",
        message:message

    }
    // send email using emailjs
    emailjs.send(serviceId,templateId,templateparams,publickey)
      .then((response) =>{
        alert('Email sent Successfully',response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error)=>{
        console.error('Error sending email',error)
      });
    };    return (
        <div className='container'>
        <h2>contact me</h2>
        <p>let's keep in touch</p>
   
    <div className='bod'> 
        <div className='get'>  
        <h3>Get In Touch</h3>
        <p>Send Your Email Here!</p>
        </div>
        <form action='' method='post' className='form'   ref={form}  onSubmit={handleSubmit}>
            <fieldset>
                <legend><b>send me a message</b></legend>
            <lable httpFor="name"  autoFocus={true}>Full Name</lable><br/>
            <input autoFocus={true} type='text' maxLength={15} id='name' placeholder='please enter your full name' ></input><br/><br/>
            <lable httpFor="email">Email</lable><br/>
            <input autoFocus={true} type='email' id='email' placeholder='please enter your email' ></input><br/><br/>
            <lable httpFor='textarea' id='textarea'   >Say something  here</lable><br/>
            <textarea type='textarea' maxLength={200} /><br/><br/>
            <button type='submit'>submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
            {/* value={this.state.comment} onChange={this.comment}
            value={this.state.Email} onChange={this.email}
            onChange={this.handilename} value={this.state.fullname} */}
            </fieldset>
        </form>

</div>
</div>
 
    );
    

  }