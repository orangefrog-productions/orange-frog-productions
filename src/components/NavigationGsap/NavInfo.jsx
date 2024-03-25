import "./navInfo.scss";

const NavInfo = ({ contactInfo }) => {
  return (
    <div className="info">
      <div className="info-social">
        <h3>Social</h3>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Follow Us on Facebook. Clicking this link will open a new browser window."
              href={contactInfo.socialMediaLinks.facebookLink}
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Follow Us on Instagram. Clicking this link will open a new browser window."
              href={contactInfo.socialMediaLinks.instagramLink}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Follow Us on Linkedin. Clicking this link will open a new browser window."
              href={contactInfo.socialMediaLinks.linkedinLink}
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="info-phone">
        <p>
          Get in touch with us <br />
          <a
            title="Get in touch with us. Clicking this link will call our office."
            href={`tel:+1${contactInfo.callUsPhoneNumber}`}
          >
            {contactInfo.callUsPhoneNumber}
          </a>
        </p>
      </div>
      <div
        className="info-address"
        dangerouslySetInnerHTML={{ __html: contactInfo.streetLocation }}
      />

      <div
        className="info-hours"
        dangerouslySetInnerHTML={{ __html: contactInfo.hoursOfOperation }}
      />
    </div>
  );
};

export default NavInfo;
