import { useState } from "react";
import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [btnChecked, setBtnChecked] = useState(false);
  return (
    <div>
      <NavButton
        setIsOpen={setIsOpen}
        btnChecked={btnChecked}
        setBtnChecked={setBtnChecked}
      />
      <NavDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setBtnChecked={setBtnChecked}
        origin={origin}
      />
    </div>
  );
};

export default MainNav;
