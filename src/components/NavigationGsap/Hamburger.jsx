import { useEffect, useRef } from "react";
import "./hamburger.scss";
import gsap from "gsap";

import homesrc from "./assests/bls-1074@3x.jpg";
import servicessrc from "./assests/dsc-7458@3x.jpg";
import portfoliosrc from "./assests/img-7926@3x.jpg";
import aboutsrc from "./assests/wedding-3@3x.jpg";
import testimonialssrc from "./assests/wedding-band-stage@3x.jpg";
import newssrc from "./assests/wedding-chandelier@3x.jpg";
import careerssrc from "./assests/wedding-dance-floor-1@3x.jpg";
import contactssrc from "./assests/wedding-dance-floor-2@3x.jpg";
import MenuItem from "./MenuItem";

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let info = useRef(null);

  const pagebgs = [
    { name: "Home", image: homesrc },
    { name: "Services", image: servicessrc },
    { name: "Portfolio", image: portfoliosrc },
    { name: "About", image: aboutsrc },
    { name: "Testimonials", image: testimonialssrc },
    { name: "News", image: newssrc },
    { name: "Career", image: careerssrc },
    { name: "Contact", image: contactssrc },
  ];

  useEffect(() => {
    const links = document.querySelectorAll(".menu-links-item li");
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
      staggerText(links);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };

  const staggerText = (links) => {
    gsap.fromTo(
      [...links],
      {
        y: 100,
      },
      {
        y: 0,
        delay: 0.2,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
          amount: 0.3,
        },
      }
    );
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const handlePage = (page) => {
    console.log("page", page.src);
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${page.src}) center center`,
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

        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <MenuItem
                  href={`/`}
                  title="Home"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[0].image}
                />

                <MenuItem
                  href={`/services`}
                  title="Design Capabilities"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[1].image}
                />

                <MenuItem
                  href={`/portfolio`}
                  title="Our Work"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[2].image}
                />

                <MenuItem
                  href={`/about`}
                  title="Design Team"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[3].image}
                />

                <MenuItem
                  href={`/testimonials`}
                  title="Words from Clients"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[4].image}
                />

                <MenuItem
                  href={`/news`}
                  title="News & Ideas"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[5].image}
                />

                <MenuItem
                  href={`/careers`}
                  title="Careers"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[6].image}
                />

                <MenuItem
                  href={`/contact`}
                  title="Start a Project"
                  handlePage={handlePage}
                  handleHover={handleHover}
                  handleHoverExit={handleHoverExit}
                  handlePageReturn={handlePageReturn}
                  bgImg={pagebgs[7].image}
                />
              </ul>
            </nav>

            <div ref={(el) => (info = el)} className="info">
              <h3>Our Promise</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh viverra non semper suscipit
                posuere a pede.
              </p>
            </div>

            <div className="locations">
              Locations:
              {pagebgs.map((page, index) => {
                return (
                  <span
                    key={index}
                    onMouseEnter={() => {
                      handlePage(page.image);
                    }}
                    onMouseOut={handlePageReturn}
                  >
                    {page.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
