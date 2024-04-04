import React from "react";
import Input from "./form/Input";
import Textarea from "./form/Textarea";
import "./contactForm.scss";

const ContactForm = ({ data }) => {
  console.log(data);
  const handleSumitForm = () => {
    const contactForm = document.querySelector("form");
    const submitForm = async (e) => {
      e.preventDefault();
      const formdata = new FormData(contactForm);
      formdata.append("_wpcf7_unit_tag", "ddabdd4");
      const { yourname, youremail } = Object.fromEntries(formdata);

      console.log("yourname, youremail", yourname, youremail);

      try {
        const res = await fetch(
          "https://orangefrog.swbdatabases3.com/wp-json/contact-form-7/v1/contact-forms/517/feedback",
          {
            method: "POST",
            body: formdata,
          },
        );

        const response = await res.json();
        console.log("Success: ", response);
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    contactForm.addEventListener("submit", submitForm);
  };

  return (
    <div className="contact-us">
      <div className="contact-us-wrapper">
        <div className="contact-us-intro">
          <p>
            Creating not just shows but bespoke experiences.
            <br /> We’re excited to help turn your dreams into reality!
          </p>
        </div>
        <form id="contact-form" className="contact-us-form">
          <div className="contact-us-form-input-wrapper">
            <Input
              label="First Name"
              id="firstname"
              type="text"
              value=""
              required={true}
            />
            <Input
              label="Last Name"
              id="lastname"
              type="text"
              value=""
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Your Email"
              id="youremail"
              type="email"
              value=""
              required={true}
            />
            <Input
              label="Phone Number"
              id="phonenumber"
              type="text"
              value=""
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Type of Event"
              id="eventtype"
              type="text"
              value=""
              required={true}
            />
            <Input
              label="Name of Event"
              id="eventname"
              type="text"
              value=""
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Location of Event"
              id="eventlocation"
              type="text"
              value=""
              required={true}
            />
            <Input
              label="Number of Attendees"
              id="numberattendess"
              type="text"
              value=""
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Date of Event"
              id="dateevent"
              type="text"
              value=""
              required={true}
            />
            <Input
              label="How did you hear about us?"
              id="hear"
              type="text"
              value=""
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Textarea />
          </div>

          <div className="button-wrapper">
            <button type="submit">Contact Us</button>
            <p className="message"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
