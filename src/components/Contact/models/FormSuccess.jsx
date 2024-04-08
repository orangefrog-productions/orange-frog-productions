import "./formSuccess.scss";
import successImg from "../assets/success.gif";

import { handleSuccessModalClose } from "../utils/formFunctions";

const FormSuccess = ({ setFormStatus, formStatus, clearFormFields }) => {
  return (
    <div className="contact-form-success" feedback={true}>
      <div className="innerLoading">
        <div className="innerLoading__spinner">
          <img src={successImg.src} alt="Form is sending" />
        </div>
        <p>Your form has been successfully sent. We will be in touch soon!</p>
        <div className="close-button">
          <button
            onClick={() =>
              handleSuccessModalClose(
                setFormStatus,
                formStatus,
                clearFormFields,
              )
            }
            type="button"
          >
            &#x2715;
          </button>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        className="background-modal"
        onClick={() =>
          handleSuccessModalClose(setFormStatus, formStatus, clearFormFields)
        }
        onKeyDown={() =>
          handleSuccessModalClose(setFormStatus, formStatus, clearFormFields)
        }
      >
        <span className="visuallyhidden">Close Modal</span>
      </div>
    </div>
  );
};

export default FormSuccess;
