import CookieConsent from "react-cookie-consent";
import "./cookiePopup.scss";

const CookiePopup = () => {
  return (
    <CookieConsent
      className="cookie-notice"
      location="bottom"
      buttonText="I understand"
      cookieName="pizza-pie"
      style={{ background: "#dd784a" }}
      buttonStyle={{
        background: "#b448d5",
        color: "#fff",
        fontSize: "16px",
      }}
    >
      <div className="cookie-wrap">
        <p>
          This website uses cookies to enhance the user experience.{" "}
          <a href="/cookie-policy">Read our Cookie / Privacy Policy here.</a>
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookiePopup;
