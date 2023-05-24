import React, { useContext } from "react";
import InputContactForm from "../../atoms/inputContactForm/inputContactForm";
import TextInAreaInput from '../../atoms/textInAreaInput/textInAreaInput'
import MainPageDatabaseProvider from "../../context/mainPageDatabaseContext/mainPageDatabaseContext";

const ContactForm = () => {
  const {
    setUserName,
    setUserEmail,
    setMessage,
    userEmail,
    userName,
    message,
    sentDataContactUs,
    inputError,
  } = useContext(MainPageDatabaseProvider);
  return (
    <form id="contact" className="contact-form">
      <div className="contact-form-row">
        <InputContactForm
          handleInput={setUserName}
          value={userName}
          type="text"
          labelText="Your Name"
          placeholderText="John"
        />
        <InputContactForm
          handleInput={setUserEmail}
          value={userEmail}
          type="email"
          labelText="Your email"
          placeholderText="abc@xyz.pl"
        />
      </div>
      <TextInAreaInput
        value={message}
        handleInput={setMessage}
        labelText="Type your message"
        placeholderText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <button
        onClick={(e) => sentDataContactUs(e)}
        className="contact-form-button"
      >
        Send
      </button>
      {inputError && <p className="input-error">{inputError}</p>}
    </form>
  );
};

export default ContactForm;
