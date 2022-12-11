import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { toast } from "react-hot-toast";


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.reset();

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
          toast.success("Email has sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact-id">
      <h2 className="pt-10 text-xl text-white contact-title">Contact with me</h2>
      <div className="hr contact-title"><hr /></div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input
            name="user_name"
            type="text"
            placeholder="Name"
            className="input input-bordered bg-color"
          />
          <br />
          <input
            name="user_email"
            type="text"
            placeholder="Email"
            className="input input-bordered bg-color"
          />
          <br />
          <textarea
            className="textarea textarea-bordered bg-color"
            placeholder="Message"
          ></textarea>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
  );
};

export default ContactForm;
