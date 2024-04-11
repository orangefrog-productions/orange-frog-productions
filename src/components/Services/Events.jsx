import React, { useState } from "react";
import "./events.scss";

const Events = (props) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="swb-events">
      <div className="swb-events-wrapper">
        <div className="swb-events-content">
          <div className="swb-events-content-main-title">
            <h2>{props.data.mainTitle}</h2>
          </div>
          <div
            className="swb-events-content-intro"
            dangerouslySetInnerHTML={{ __html: props.data.introContent }}
          />
          <div className="swb-events-content-links">
            <ul>
              {props.data.eventSectionLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setActiveImage(index);
                    }}
                  >
                    <a href={`/services/events#${link.sectionId}`}>
                      {link.linkTitle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="swb-events-image">
          <div className={`swb-events-image-wrap`}>
            <img
              src={
                props.data.eventSectionLinks[activeImage].sectionImage.sourceUrl
              }
              alt={
                props.data.eventSectionLinks[activeImage].sectionImage.altText
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
