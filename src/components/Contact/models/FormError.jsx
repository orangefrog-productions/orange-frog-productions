import "./formError.scss";
import errorImg from "../assets/error.png";

import { handleErrorModalClose } from "../utils/formFunctions";

const FormError = ({ setFormStatus, formStatus }) => {
  return (
    <div className="form-error-model" feedback={true}>
      <div className="innerLoading">
        <div className="innerLoading__spinner">
          <img src={errorImg.src} alt="Form is sending" />
        </div>
        <p>
          If seems that there is a few errors with submitting your form.
          <br />
          Please try again, or you can email us directly by clicking{" "}
          <a href="mailto:brianna@orangefrogprodutions.ca?subject=Contact Form Error">
            Here
          </a>
        </p>
        <div className="close-button">
          <button
            onClick={() => handleErrorModalClose(setFormStatus, formStatus)}
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
        onClick={() => handleErrorModalClose(setFormStatus, formStatus)}
        onKeyDown={() => handleErrorModalClose(setFormStatus, formStatus)}
      >
        <span className="visuallyhidden">Close Modal</span>
      </div>
    </div>
  );
};

export default FormError;
