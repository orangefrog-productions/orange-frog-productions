import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./hamburger.scss";
// Menu Components. //
import MenuItem from "./MenuItem";
import NavInfo from "./NavInfo";
import FrogLogo from "./FrogLogo";
// Images. //
import homesrc from "./assests/home.jpg";
import servicessrc from "./assests/design-capabilities.jpg";
import portfoliosrc from "./assests/our-work.jpg";
import aboutsrc from "./assests/design-team.jpg";
import testimonialssrc from "./assests/words-from-clients.jpg";
import newssrc from "./assests/news-ideas.jpg";
import careerssrc from "./assests/careers.jpg";
import contactssrc from "./assests/start-a-project.jpg";

// Animations. //
import {
  staggerReveal,
  staggerText,
  fadeInUp,
  fadeSideways,
} from "./animations/animations";

const Hamburger = ({ state, mainMenu, contactInfo, frogLogo }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);

  const pagebgs = [
    { name: "Home", image: homesrc },
    { name: "Design Capabilities", image: servicessrc },
    { name: "Our Work", image: portfoliosrc },
    { name: "Design Team", image: aboutsrc },
    { name: "Words From Our Clients", image: testimonialssrc },
    { name: "News + Ideas", image: newssrc },
    { name: "Careers", image: careerssrc },
    { name: "Start a Project", image: contactssrc },
  ];

  useEffect(() => {
    const links = document.querySelectorAll(".menu-links-item li");
    const info = document.querySelectorAll(".info");
    const frog = document.querySelector(".frog-logo");

    if (state.clicked === false) {
      // close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: "block" },
      });

      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      fadeSideways(frog);
      staggerText(links);
    }
  }, [state]);

  const handlePage = (page) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${page}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });

    gsap.from(cityBackground, {
      duration: 0.4,
      // skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handlePageReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: 2,
      skewX: 6,
      ease: "power3.inOut",
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.2,
      y: -2,
      skewX: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="menu-city-background-default"></div>
        <div className="menu-city-background-graphic"></div>
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                {mainMenu.menuItems.nodes.map((item, index) => {
                  if (item.parentId) {
                    return null;
                  }

                  const bgImg = pagebgs.find((bg) => bg.name === item.label);
                  return (
                    <MenuItem
                      key={index}
                      href={item.uri}
                      title={item.label}
                      handlePage={handlePage}
                      handleHover={handleHover}
                      handleHoverExit={handleHoverExit}
                      handlePageReturn={handlePageReturn}
                      bgImg={bgImg?.image ? bgImg?.image : null}
                      subMenu={item.childItems.nodes}
                    />
                  );
                })}
              </ul>
            </nav>
            <NavInfo contactInfo={contactInfo} />
            <FrogLogo frogLogo={frogLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
