import React, { useState } from "react";
import "./experiences.scss";

const Experiences = (props) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="swb-experiences">
      <div className="swb-experiences-wrapper">
        <div className="swb-experiences-content">
          <div className="swb-experiences-content-main-title">
            <h2 ele="h2" hlstyle="four">
              {props.data.mainTitle}
            </h2>
          </div>
          <div
            className="swb-experiences-content-intro"
            dangerouslySetInnerHTML={{ __html: props.data.introContent }}
          />
          <div className="swb-experiences-content-links">
            <ul>
              {props.data.experienceSectionLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setActiveImage(index);
                    }}
                  >
                    <a href={`/services/experiences#${link.sectionId}`}>
                      {link.linkTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="swb-experiences-image">
          <div className="swb-experiences-image-wrap">
            <img
              src={
                props.data.experienceSectionLinks[activeImage].sectionImage
                  .sourceUrl
              }
              alt={
                props.data.experienceSectionLinks[activeImage].sectionImage
                  .altText
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
