import { useState, useEffect, useRef } from "react";
import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";
import { gsap } from "gsap";

const MainNav = () => {
  const drawertl = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [btnChecked, setBtnChecked] = useState(false);

  useEffect(() => {
    drawertl.current = gsap.timeline({ paused: true, yoyo: true });
    const drawer = document.querySelector(".nav-drawer");
    const secondaryBg = document.querySelector(
      ".nav-drawer-secondary-background-color"
    );
    const menuLayer = document.querySelector(".menu-layer");

    drawertl.current
      .add("start")
      .fromTo(
        drawer,
        { y: "-100%" },
        { y: "0%", duration: 0.1, ease: "power4.out" }
      )
      .fromTo(
        secondaryBg,
        { y: "-100%" },
        { y: "0%", duration: 0.3, ease: "power4.out" }
      )
      .fromTo(
        menuLayer,
        { y: "-100%" },
        { y: "0%", duration: 0.5, ease: "power4.out" }
      );
  }, []);

  useEffect(() => {
    isOpen ? drawertl.current.play() : drawertl.current.reverse();
  }, [isOpen]);

  return (
    <div>
      <NavButton
        setIsOpen={setIsOpen}
        btnChecked={btnChecked}
        setBtnChecked={setBtnChecked}
      />
      <NavDrawer isOpen={isOpen} origin={origin} />
    </div>
  );
};

export default MainNav;
