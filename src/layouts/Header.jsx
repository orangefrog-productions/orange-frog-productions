import { useState } from "react";
import MainNav from "../components/Navigation/MainNav";
import Hamburger from "../components/NavigationGsap/Hamburger";
import NavButton from "../components/NavigationGsap/NavButton";
import "./header.scss";

const Header = () => {
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
    <header>
      <div className="wrapper">
        <div className="inner-header">
          <div className="logo">
            <a href="/">Orange Frog Productions.</a>
          </div>
          <NavButton
            handleMenu={handleMenu}
            disabled={disabled}
            state={state}
          />
        </div>
      </div>

      <Hamburger state={state} />
    </header>
  );
};

export default Header;
