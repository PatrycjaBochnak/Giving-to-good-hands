import React from "react";
import Footer from '../../molecules/footer'
import ContactForm from "../../molecules/contactForm/contactForm";
import Decoration from "../../atoms/decoration/decoration";

const Contact = () => 
<div className="contact-form">
  <h4 className="contact-form-title">Contact with us</h4>
  <Decoration />
  <ContactForm />
  <Footer />
</div>

export default Contact