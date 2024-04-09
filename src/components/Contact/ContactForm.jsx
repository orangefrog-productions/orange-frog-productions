import { useState } from "react";

import Input from "./form/Input";
import Textarea from "./form/Textarea";
import "./contactForm.scss";

import submitToServer from "./utils/submitToServer";
import { handleOnChange, handleOnSubmit } from "./utils/formFunctions";

import FormError from "./models/FormError";
import FormSuccess from "./models/FormSuccess";
import FormSubmitting from "./models/FormSubmitting";

const ContactForm = ({ data }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    youremail: "",
    phonenumber: "",
    eventtype: "",
    eventname: "",
    eventlocation: "",
    numberattendess: "",
    dateevent: "",
    hear: "",
    description: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
    captachError: false,
  });

  const clearFormFields = () => {
    setFormData(() => {
      return {
        firstname: "",
        lastname: "",
        youremail: "",
        phonenumber: "",
        eventtype: "",
        eventname: "",
        eventlocation: "",
        numberattendess: "",
        dateevent: "",
        hear: "",
        description: "",
      };
    });
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
        <form
          id="contact-form"
          className="contact-us-form"
          onSubmit={(event) =>
            handleOnSubmit(
              event,
              setFormStatus,
              formData,
              submitToServer,
              517,
              clearFormFields,
              formStatus,
            )
          }
        >
          <div className="contact-us-form-input-wrapper">
            <Input
              handler={(event) => handleOnChange(setFormData, formData, event)}
              value={formData.firstname}
              label="First Name"
              id="firstname"
              type="text"
              required={true}
            />
            <Input
              label="Last Name"
              id="lastname"
              type="text"
              value={formData.lastname}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Your Email"
              id="youremail"
              type="email"
              value={formData.youremail}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
            <Input
              label="Phone Number"
              id="phonenumber"
              type="text"
              value={formData.phonenumber}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Type of Event"
              id="eventtype"
              type="text"
              value={formData.eventtype}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
            <Input
              label="Name of Event"
              id="eventname"
              type="text"
              value={formData.eventname}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Location of Event"
              id="eventlocation"
              type="text"
              value={formData.eventlocation}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
            <Input
              label="Number of Attendees"
              id="numberattendess"
              type="text"
              value={formData.numberattendess}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Input
              label="Date of Event"
              id="dateevent"
              type="text"
              value={formData.dateevent}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
            <Input
              label="How did you hear about us?"
              id="hear"
              type="text"
              value={formData.hear}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              required={true}
            />
          </div>

          <div className="contact-us-form-input-wrapper">
            <Textarea
              value={formData.questionsComments}
              handler={(event) => handleOnChange(setFormData, formData, event)}
              errors={formStatus.errors}
              size="full"
              position="last"
              title="Description of event and ideas"
              type="text"
              nameId="description"
              required={true}
              rows="5"
            />
          </div>

          <div className="button-wrapper">
            <button type="submit">Contact Us</button>
            <p className="message"></p>
          </div>
        </form>
      </div>

      {formStatus.submitting && <FormSubmitting />}
      {formStatus.success && (
        <FormSuccess
          setFormStatus={setFormStatus}
          formStatus={formStatus}
          clearFormFields={clearFormFields}
        />
      )}
      {formStatus.errorWarnDisplay && (
        <FormError setFormStatus={setFormStatus} formStatus={formStatus} />
      )}
      <div
        className="contact-us-background-image"
        style={{ backgroundImage: `url(${data.backgroundImage.sourceUrl})` }}
      />
      <div className="contact-us-background-overlay" />
    </div>
  );
};

export default ContactForm;
