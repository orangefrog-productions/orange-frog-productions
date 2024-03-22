import { useState, useEffect, useRef } from "react";
import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";
import { gsap } from "gsap";

const MainNav = () => {
  const drawertl = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [btnChecked, setBtnChecked] = useState(false);

  useEffect(() => {
    drawertl.current = gsap.timeline({ paused: true });
    const drawer = document.querySelector(".nav-drawer");

    drawertl.current.fromTo(
      drawer,
      { autoAlpha: 0, y: "-100%" },
      { autoAlpha: 1, y: "0%" }
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
