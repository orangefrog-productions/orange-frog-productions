import loadingImg from "../assets/loading.gif";
import "./formSubmitting.scss";

const FormSubmitting = () => {
  return (
    <div className="form-submitting-model">
      <div className="innerLoading">
        <div className="innerLoading__spinner">
          <img src={loadingImg.src} alt="Form is sending" />
        </div>
        <p>Validating and sending your contact form. Please standby.</p>
      </div>
    </div>
  );
};

export default FormSubmitting;
