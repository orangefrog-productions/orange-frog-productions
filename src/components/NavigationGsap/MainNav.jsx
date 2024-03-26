import { useState } from "react";

import Hamburger from "./Hamburger";
import NavButton from "./NavButton";
import "./mainNav.scss";

const MainNav = ({ mainMenu, contactInfo, frogLogo }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <>
      <NavButton handleMenu={handleMenu} disabled={disabled} state={state} />
      <Hamburger
        state={state}
        mainMenu={mainMenu}
        contactInfo={contactInfo}
        frogLogo={frogLogo}
      />
    </>
  );
};

export default MainNav;
