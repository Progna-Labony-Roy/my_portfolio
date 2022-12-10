import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'
import { toast } from 'react-hot-toast';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_h8blw8w",
          "template_mka0hfl",
          form.current,
          "AtXX8i6MtucT3D9P1"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            toast.success("Email has sent successfully")
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
     <div className='contact-form'>
         <div className="container">
            <form className='form' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <br />
          <input type="text" name="user_name" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" name="user_email" />
          <br />
          <label>Message</label>
          <br />
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>     
     </div>
    );
  };
  
  export default ContactForm;
  
  