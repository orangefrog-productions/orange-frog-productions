import { useEffect, useRef } from "react";
import "./hamburger.scss";
import gsap from "gsap";

const Hamburger = ({ state }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);
  let line7 = useRef(null);
  let line8 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
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
      staggerText(line1, line2, line3, line4, line5, line6, line7, line8);
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

  const staggerText = (
    node1,
    node2,
    node3,
    node4,
    node5,
    node6,
    node7,
    node8
  ) => {
    gsap.fromTo(
      [node1, node2, node3, node4, node5, node6, node7, node8],
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

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <div className="menu-links-item">
                    <li ref={(el) => (line1 = el)}>
                      <a href="/">Home</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line2 = el)}>
                      <a href="/services">Design Capabilities</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line3 = el)}>
                      <a href="/portfolio">Our Work</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line4 = el)}>
                      <a href="/about">Design Team</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line5 = el)}>
                      <a href="/testimonials">Words from Clients</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line6 = el)}>
                      <a href="/news">News & Ideas</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line7 = el)}>
                      <a href="/careers">Careers</a>
                    </li>
                  </div>
                  <div className="menu-links-item">
                    <li ref={(el) => (line8 = el)}>
                      <a href="/contact">Start a Project</a>
                    </li>
                  </div>
                </ul>
              </nav>

              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh viverra non semper
                  suscipit posuere a pede.
                </p>
              </div>

              <div className="locations">
                Locations:
                <span>Calgary</span>
                <span>Montreal</span>
                <span>Vancouver</span>
                <span>New york</span>
                <span>Los Angeles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
