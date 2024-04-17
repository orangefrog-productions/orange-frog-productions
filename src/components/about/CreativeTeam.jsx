import { useState, useEffect } from "react";
import "./creativeTeam.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CreativeTeam = ({ data }) => {
  const [activeBio, setActiveBio] = useState(null);

  useEffect(() => {
    const trigger = document.querySelector(".creative-team");
    const listItems = [
      ...document.querySelectorAll(".creative-team-list-item"),
    ];
    gsap.fromTo(
      listItems,
      { autoAlpha: 0, y: 25 },
      {
        autoAlpha: 1,
        y: 0,
        stagger: {
          each: 0.25,
        },
        scrollTrigger: {
          start: "top 25%",
          markers: true,
          trigger: trigger,
        },
      },
    );
  }, []);

  return (
    <div className="creative-team">
      <div className="creative-team-wrapper">
        <div className="creative-team-title">
          <h2>Creative Team</h2>
        </div>
        <div className="creative-team-list">
          {data.map((team, index) => {
            return (
              <div key={index} className="creative-team-list-item">
                <div className="creative-team-list-item-image">
                  <img
                    src={team.creativeTeam.image.sourceUrl}
                    alt={team.title}
                    width="1000"
                    height="500"
                  />
                </div>
                <div className="creative-team-list-item-details">
                  <h3>{team.title}</h3>
                  <p>{team.creativeTeam.titlePosition}</p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveBio(index);
                    }}
                  >
                    Bio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeBio !== null && (
        <div
          className={`creative-team-modal ${activeBio !== null ? "creative-team-modal-active" : ""}`}
        >
          <div className="creative-team-modal-image">
            <div className="creative-team-modal-image-wrapper">
              <img
                src={data[activeBio].creativeTeam.image.sourceUrl}
                alt={data[activeBio].title}
                width="1000"
                height="500"
              />
            </div>
          </div>
          <div className="creative-team-modal-bio">
            <div className="creative-team-modal-bio-titles">
              <h3>{data[activeBio]?.title}</h3>
              <p>{data[activeBio].creativeTeam.titlePosition}</p>
            </div>
            <div
              className="creative-team-modal-bio-content"
              dangerouslySetInnerHTML={{
                __html: data[activeBio].creativeTeam.bio,
              }}
            />
          </div>
          <div className="creative-team-modal-button">
            <button
              type="button"
              onClick={() => {
                setActiveBio(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activeBio >= 0 && activeBio !== null && (
        <div
          className="creative-team-blur"
          onClick={() => {
            setActiveBio(null);
          }}
        />
      )}
    </div>
  );
};

export default CreativeTeam;
